class PageRouter {
  constructor(express) {
    this.express = express;
  }

  router() {
    const router = this.express.Router();
    router.get("/institutions", this.institutions.bind(this));
    return router;
  }

  institutions(req, res) {}
}
