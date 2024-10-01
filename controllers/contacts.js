// const mongodb = require("../connections");
const mongodb = require("../db/connect");
const ObjectId = require("mongodb").ObjectId;

const getAllRecords = async (req, res, next) => {
  try {
    // get the MongoDB database instance
    const db = mongodb.getDb();

    // Query db to get all documents in "Contacts"
    const result = await db.collection("Contacts").find();

    // convert MongoDB cursor (result) into array
    const data = await result.toArray();

    // server responds with JSON
    res.setHeader("Content-Type", "application/json");

    // HTTP successful (200) response
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({
      error: "An error occurred while fetching data."
    });
  }
};

/* Asynchronous function gets a record from db based on id. 
   req: client's request containing the id of the record, 
   res: HTTP response sent back with the requested record, 
   next: callback to move to the next middleware in chain */
const getRecordById = async (req, res, next) => {
  /* Converts the id from the requesting URL into a MongoDB 
     ObjectId, I.E.: /contacts/:id */
  const userId = new ObjectId(req.params.id);
  try {
    /* Get reference to the connectd MongoDB database 
       instance so it can be queried */
    const db = mongodb.getDb();
    
    // Access the Contacts collection within the database
    const result = await db.collection("Contacts");
    // Query Contacts for a record with a matching id
    const id = await result.find({ _id: userId });
    /* MongoDB returns a cursor, which is an iterator. 
       This converts the cursor returned by find() into 
       a data array  */
    const data = await id.toArray();
    // console.log("Data: ", data);

    // Indicates that the response will be in JSON
    res.setHeader("Content-Type", "application/json");
    /* Sends successful HTTP status code (200), selects 
       the first document in the array */
    res.status(200).json(data[0]);
  } catch (err) {
    // Sends HTTP 500 (Internal Server Error), if error 
    res.status(500).json({err: "An error occurred while fetching data."});
  }
};

// Exports both functions to be used in other parts of app
module.exports = { getAllRecords, getRecordById };