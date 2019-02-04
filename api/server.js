const express = require("express");
const knex = require("knex");
const knexConfig = require("../knexfile.js");

const configureMiddleware = require("../config/middleware.js");
const configureAuth = require("../auth/authRoute.js");

const apiRouter = require("../api/apiRouter.js");
const server = express();

const db = knex(knexConfig.development);

configureMiddleware(server);
configureAuth(server);
server.use("/", apiRouter);

module.exports = server;
