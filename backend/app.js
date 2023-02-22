require("dotenv").config();
const express = require("express");
const cors = require("cors");
const knexFile = require("./knexfile").development;
const knex = require("knex")(knexFile);

const PageRouter = require("./Router/PageRouter");

const port = 8000;

const app = express();
app.use(cors({ origin: process.env.FRONTEND_SERVER }));

//Set up Router
app.use("/", new PageRouter(express).router());

app.listen(port, () => console.log(`Listening to port ${port}`));
