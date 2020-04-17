const express = require("express");


const server = express();

const projectRouter = require("./api/project-router.js");

server.use(express.json());

server.use('/api/projects', projectRouter)

module.exports = server;