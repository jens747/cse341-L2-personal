const express = require("express");
const routes = express.Router();

// const db = require("../db/connect");
// const { getAllRecords, getRecordById } = require("../controllers/contacts");

// handle route requests sent to API
const routeContacts = require("../controllers/contacts");

routes.get("/", routeContacts.getAllRecords);

routes.get("/:id", routeContacts.getRecordById);

module.exports = routes;