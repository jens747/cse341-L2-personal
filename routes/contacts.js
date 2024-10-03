// Import the express module
const express = require("express");
// Create a new router object
const routes = express.Router();

/* Import the contacts controller module, a controller 
   handles logic for specific routes, like fetching 
   data from a db or sending responses to the client */
const routeContacts = require("../controllers/contacts");

/* Set up a GET request, w/a route to the app root, 
   localhost:8080/contacts, the getAllRecords method 
   handles the logic for responding to this request. */
routes.get("/", routeContacts.getAllRecords);

/* Another get request that requires :id parameters 
   as part of the request. */
routes.get("/:id", routeContacts.getRecordById);

routes.post("/add", routeContacts.postRecord);

routes.put("/put/:id", routeContacts.putRecord);

routes.delete("/delete/:id", routeContacts.deleteRecord);

// Export the routes object to be used by the app elsewhere
module.exports = routes;