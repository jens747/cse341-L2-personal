const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const envar = require('dotenv').config();

// Response for the site home page
app.use("/", require("./routes"));                               

// Open port 3000 to test the app in a browser
app.listen(port, () => {
  console.log("Web Server is listening at port " + (port));
});