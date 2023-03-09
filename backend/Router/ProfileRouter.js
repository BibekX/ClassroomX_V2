const path = require("path");
const fs = require("fs");

class PageRouter {
  constructor(express, authenticate, knex) {
    this.express = express;
    this.authenticate = authenticate;
    this.knex = knex;
  }

  router() {
    const router = this.express.Router();
    //Get
    router.get("/avatar/:id", this.getAvatar.bind(this));
    router.get("/institution/avatar/:id", this.getInstitutionAvatar.bind(this));
    router.get("/profileinfo/:id", this.getProfileInfo.bind(this));

    //Post
    router.post("/setprofile", this.authenticate(), this.setProfile.bind(this));
    router.post(
      "/setavatar/:name",
      this.authenticate(),
      this.setAvatar.bind(this)
    );
    router.post(
      "/institution/setprofile",
      this.authenticate(),
      this.setInstitutionProfile.bind(this)
    );
    router.post(
      "/institution/setbanner/:name",
      this.authenticate(),
      this.setBanner.bind(this)
    );

    //Put
    router.put(
      "/profile/:id",
      this.authenticate(),
      this.updateProfile.bind(this)
    );
    router.put(
      "/institution/profile/:id",
      this.authenticate(),
      this.updateInstitutionProfile.bind(this)
    );

    //Delete
    router.delete(
      "/avatar/:id",
      this.authenticate(),
      this.deleteAvatar.bind(this)
    );
    router.delete(
      "/institution/avatar/:id",
      this.authenticate(),
      this.deleteBanner.bind(this)
    );

    return router;
  }

  //   Methods
  async getAvatar(req, res) {
    let query = await this.knex("user_profile")
      .select("img_name")
      .where({ user_id: req.params.id })
      .first();
    const directory = path.join(__dirname + "/../image/user/profile/");
    if (query && fs.existsSync(directory + query.img_name)) {
      res.sendFile(directory + query.img_name);
    } else {
      res.sendFile(directory + "default.png");
    }
  }

  async getInstitutionAvatar(req, res) {
    let query = await this.knex("institution_profile")
      .select("img_name")
      .where({ institution_id: req.params.id })
      .first();
    const directory = path.join(__dirname + "/../image/institution/profile/");
    if (query && fs.existsSync(directory + query.img_name)) {
      res.sendFile(directory + query.img_name);
    } else {
      res.sendFile(directory + "banner.jpg");
    }
  }

  async getProfileInfo(req, res) {
    let query = await this.knex("user_profile")
      .select("fname", "lname", "bio")
      .where({
        user_id: req.params.id,
      })
      .first();
    res.json(query);
  }

  async setProfile(req, res) {
    await this.knex("user_profile").insert(req.body);
    res.sendStatus(200);
  }

  async setAvatar(req, res) {
    fs.writeFileSync(
      path.join(__dirname + "/../image/user/profile/" + req.params.name),
      req.files.file.data
    );
    res.sendStatus(200);
  }

  async setInstitutionProfile(req, res) {
    await this.knex("institution_profile").insert(req.body);
    res.sendStatus(200);
  }

  async setBanner(req, res) {
    fs.writeFileSync(
      path.join(__dirname + "/../image/institution/profile/" + req.params.name),
      req.files.file.data
    );
    res.sendStatus(200);
  }

  async updateProfile(req, res) {
    await this.knex("user_profile")
      .update(req.body)
      .where({ user_id: req.params.id });
    res.sendStatus(200);
  }

  async updateInstitutionProfile(req, res) {
    await this.knex("institution_profile")
      .update(req.body)
      .where({ user_id: req.params.id });
    res.sendStatus(200);
  }

  async deleteAvatar(req, res) {
    console.log("user", req.params.id);
    let query = await this.knex("user_profile")
      .select("img_name")
      .where({ user_id: req.params.id })
      .first();

    fs.unlinkSync(
      path.join(__dirname + "/../image/user/profile/" + query.img_name)
    );
    res.sendStatus(200);
  }

  async deleteBanner(req, res) {
    let query = await this.knex("institution_profile")
      .select("img_name")
      .where({ user_id: req.params.id })
      .first();

    fs.unlinkSync(
      path.join(__dirname + "/../image/institution/profile/" + query.img_name)
    );
    res.sendStatus(200);
  }
}

module.exports = PageRouter;
