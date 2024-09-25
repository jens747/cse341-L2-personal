const routes = require("express").Router();
const names = require("../controllers/index");
const data = require("../connections");

routes.get("/ms", names.displayMichael);

routes.get("/ds", names.displayDwight);

module.exports = routes;