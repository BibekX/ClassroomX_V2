require("dotenv").config();

class AuthRouter {
  constructor(express, knex, bcrypt, jwt) {
    this.express = express;
    this.knex = knex;
    this.bcrypt = bcrypt;
    this.jwt = jwt;
  }

  router() {
    const router = this.express.Router();
    router.post("/auth/signup", this.signup.bind(this));
    router.post("/auth/login", this.login.bind(this));
    return router;
  }

  async signup(req, res) {
    const { email, password, userType } = req.body;
    const user = await this.knex(userType).where({ email }).first();
    if (!user) {
      const hashed = await this.bcrypt.hash(password, 10);
      await this.knex(userType).insert({ email, password: hashed });
      res.sendStatus(200);
    } else {
      res.sendStatus(401);
    }
  }

  async login(req, res) {
    const { email, password, userType } = req.body;
    const user = await this.knex(userType).where({ email }).first();
    if (user) {
      const match = await this.bcrypt.compare(password, user.password);
      const dayInMilli = 86400000;
      if (match) {
        const payload = {
          id: user.id,
          email: user.email,
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
