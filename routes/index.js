// Create a new router object using the express framework
const router = require("express").Router();

// Set up Swagger subroute
router.use('/', require('./swagger'));

/* The use() method mounts middleware or subrouters 
   to handle routes. "/contacts" is the root path 
   where the sub-router is mounted. 
   "require('./contacts')" imports the contacts router 
   module from contacts.js. */
router.use("/contacts", require("./contacts"));

// router.use("/add", require("./contacts"));

// router.use("/delete", require("./contacts"));

// router.use("/put", require("./contacts"));

// Exports router object to be used by the app elsewhere
module.exports = router;