require("dotenv").config();
const path = require("path");
class AuthRouter {
  constructor(express, knex, bcrypt, jwt) {
    this.express = express;
    this.knex = knex;
    this.bcrypt = bcrypt;
    this.jwt = jwt;
  }

  router() {
    const router = this.express.Router();
    router.post("/signup", this.signup.bind(this));
    router.post("/login", this.login.bind(this));
    return router;
  }

  async signup(req, res) {
    const { email, password, role } = req.body;
    const user = await this.knex("users").where({ email }).first();
    if (!user) {
      const hashed = await this.bcrypt.hash(password, 10);
      let id = await this.knex("users")
        .insert({ email, password: hashed, role })
        .returning("id");
      const dayInMilli = 86400000;
      const payload = {
        id: id[0].id,
        email,
        role,
        exp: new Date().getTime() + dayInMilli,
      };
      const token = this.jwt.sign(payload, process.env.JWT_SECRET);
      res.json({ token });
    } else {
      res.sendStatus(401);
    }
  }

  async login(req, res) {
    const { email, password } = req.body;
    const user = await this.knex("users").where({ email }).first();
    if (user) {
      const match = await this.bcrypt.compare(password, user.password);
      const dayInMilli = 86400000;
      if (match) {
        const payload = {
          id: user.id,
          role: user.role,
          exp: new Date().getTime() + dayInMilli,
        };
        const token = this.jwt.sign(payload, process.env.JWT_SECRET);
        res.json({ token });
      }
    } else {
      res.sendStatus(401);
    }
  }
}

module.exports = AuthRouter;
