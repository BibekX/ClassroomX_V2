//Require modules
//NPM modules
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const knexFile = require("./knexfile").development;
const knex = require("knex")(knexFile);
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const jwtAuth = require("./auth/strategy/jwt_strategy")(knex);

//Local modules
const PageRouter = require("./Router/PageRouter");
const AuthRouter = require("./Router/AuthRouter");

//Port Number
const port = 8000;

//Setup middleware
const app = express();
app.use(cors({ origin: process.env.FRONTEND_SERVER }));
app.use(express.json());
jwtAuth.initialize();

//Set up Router
app.use("/", new PageRouter(express, jwtAuth.authenticate, knex).router());
app.use("/", new AuthRouter(express, knex, bcrypt, jwt).router());

app.listen(port, () => console.log(`Listening to port ${port}`));
