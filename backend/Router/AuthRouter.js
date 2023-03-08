require("dotenv").config();
const path = require("path");
class AuthRouter {
  constructor(express, knex, bcrypt, jwt, fs) {
    this.express = express;
    this.knex = knex;
    this.bcrypt = bcrypt;
    this.jwt = jwt;
    this.fs = fs;
  }

  router() {
    const router = this.express.Router();
    router.post("/signup", this.signup.bind(this));
    router.post("/setprofile", this.setProfile.bind(this));
    router.post("/setavatar/:name", this.setAvatar.bind(this));
    router.post("/login", this.login.bind(this));
    return router;
  }

  async signup(req, res) {
    const { email, password, userType } = req.body;
    const tableName = userType === "institution" ? "institution" : "users";
    const user = await this.knex(tableName).where({ email }).first();
    if (!user) {
      const hashed = await this.bcrypt.hash(password, 10);
      let id = await this.knex(tableName)
        .insert(
          userType === "institution"
            ? { email, password: hashed }
            : { email, password: hashed, user_type: userType }
        )
        .returning("id");
      const dayInMilli = 86400000;
      const payload = {
        id: id[0].id,
        email,
        userType,
        exp: new Date().getTime() + dayInMilli,
      };
      const token = this.jwt.sign(payload, process.env.JWT_SECRET);
      res.json({ token });
    } else {
      res.sendStatus(401);
    }
  }

  async login(req, res) {
    const { email, password, userType } = req.body;
    const tableName = userType === "institution" ? "institution" : "users";
    const user = await this.knex(tableName).where({ email }).first();
    if (user) {
      const match = await this.bcrypt.compare(password, user.password);
      const dayInMilli = 86400000;
      if (match) {
        const payload = {
          id: user.id,
          exp: new Date().getTime() + dayInMilli,
        };
        const token = this.jwt.sign(payload, process.env.JWT_SECRET);
        res.json({ token });
      }
    } else {
      res.sendStatus(401);
    }
  }

  async setProfile(req, res) {
    await this.knex("user_profile").insert(req.body);
    res.sendStatus(200);
  }

  async setAvatar(req, res) {
    this.fs.writeFileSync(
      path.join(__dirname + "/../image/user/profile/" + req.params.name),
      req.files.file.data
    );
    res.sendStatus(200);
  }
}

module.exports = AuthRouter;
