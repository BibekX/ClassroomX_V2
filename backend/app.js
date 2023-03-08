//Require modules
//NPM modules
require("dotenv").config();
const fs = require("fs");
const express = require("express");
const cors = require("cors");
const knexFile = require("./knexfile").development;
const knex = require("knex")(knexFile);
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const fileUpload = require("express-fileupload");

//Local modules
const jwtAuth = require("./auth/strategy/jwt_strategy")(knex);
const PageRouter = require("./Router/PageRouter");
const AuthRouter = require("./Router/AuthRouter");

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
app.use("/", new PageRouter(express, jwtAuth.authenticate, knex, fs).router());
app.use("/auth", new AuthRouter(express, knex, bcrypt, jwt, fs).router());

app.listen(port, () => console.log(`Listening to port ${port}`));
