const express = require("express");
const routes = express.Router();

const db = require("../connections");
// const { getAllRecords, getRecordById } = require("../controllers/contacts");

routes.get("/", db.getAllRecords);

routes.get("/:id", db.getRecordById);

module.exports = routes;