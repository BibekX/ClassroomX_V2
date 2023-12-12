//Require modules
//NPM modules
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const knexFile = require("../knexfile").development;
const knex = require("knex")(knexFile);
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const fileUpload = require("express-fileupload");

//Local modules
const jwtAuth = require("../auth/strategy/jwt_strategy")(knex);
const AuthRouter = require("../Router/AuthRouter");
const PageRouter = require("../Router/PageRouter");
const ProfileRouter = require("../Router/ProfileRouter");

//Port Number
const port = 8000;

//Setup middleware
const app = express();
app.use(cors({ origin: `${process.env.FRONTEND_SERVER}` }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(fileUpload());
jwtAuth.initialize();

//Set up Router
app.use("/auth", new AuthRouter(express, knex, bcrypt, jwt).router());
app.use("/", new ProfileRouter(express, jwtAuth.authenticate, knex).router());
app.use("/", new PageRouter(express, jwtAuth.authenticate, knex).router());

app.listen(port, () => console.log(`Listening to port ${port}`));
