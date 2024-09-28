const express = require("express");

// allow external domains to access server
const cors = require("cors");

// import mogoDB module
const mongodb = require("./db/connect");

// handle route requests sent to API
// const routeContacts = require("./routes/contacts");

// initialize the express app
const app = express();

// tell server to listen on port 3000
const port = process.env.PORT || 3000;
// const envar = require('dotenv').config();

// json request are accessible at req.body
app.use(express.json());

// enable cors
app.use(cors());

// Response for the site home page
app.use("/", require("./routes"));                               


mongodb.initDb((err, mongodb) => {
  if (err) {
    console.log(err);
  } else {
    // Open port 3000 to test the app in a browser
    app.listen(port, () => {
      console.log(`Web Server is listening at port: ${port}`);
    });
  }
});
