const express = require("express");

const configureMiddleware = require("../config/middleware.js");
const configureAuth = require("../auth/authRoute.js");

const apiRouter = require("../api/apiRouter.js");
const server = express();

configureMiddleware(server);
configureAuth(server);
server.use("/", apiRouter);

module.exports = server;
