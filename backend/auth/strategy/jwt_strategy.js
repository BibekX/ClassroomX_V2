require("dotenv").config();
const passport = require("passport");
const passportJWT = require("passport-jwt");

module.exports = (knex) => {
  const ExtractJWT = passportJWT.ExtractJwt;
  const strategy = new passportJWT.Strategy(
    {
      secretOrKey: process.env.JWT_SECRET,
      jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
    },
    async (payload, done) => {
      const currentDate = new Date().getTime();
      if (payload.exp > currentDate) {
        const user = await knex("users").where({ id: payload.id });
        if (user) return done(null, user);
        return done(null, false);
      } else {
        done(null, false);
      }
    }
  );
  passport.use(strategy);

  return {
    initialize: () => passport.initialize(),
    authenticate: () => passport.authenticate("jwt", { session: false }),
  };
};
