class PageRouter {
  constructor(express, authenticate, knex) {
    this.express = express;
    this.authenticate = authenticate;
  }

  router() {
    const router = this.express.Router();
    router.get(
      "/institution",
      this.authenticate(),
      this.getInstitutions.bind(this)
    );
    router.get(
      "/institution/:id",
      this.authenticate(),
      this.getOneInstitution.bind(this)
    );
    router.get(
      "/institution/:id/course",
      this.authenticate(),
      this.getCourses.bind(this)
    );
    router.get(
      "/institution/course/:id",
      this.authenticate(),
      this.getOneCourse.bind(this)
    );
    return router;
  }

  async getInstitutions(req, res) {
    let institutions = await this.knex("institution_profile").select(
      "id",
      "name",
      "bio",
      "img_name"
    );
    res.json(institutions);
  }

  async getOneInstitution(req, res) {
    let institution = await this.knex("institution_profile")
      .select("id", "name", "bio", "url", "img_name")
      .where({ id: req.params.id });
    res.json(institution);
  }
  async getCourses(req, res) {
    let courses = await this.knex("course")
      .select("id", "name", "bio", "img_name")
      .where({ institution_id: req.params.id });
    res.json(courses);
  }

  async getOneCourse(req, res) {
    let course = await this.knex("course")
      .select("id", "name", "bio", "url", "img_name")
      .where({ id: req.params.id });
    res.json(course);
  }
}
