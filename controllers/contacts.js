// const mongodb = require("../connections");
const mongodb = require("../db/connect");
const ObjectId = require("mongodb").ObjectId;

const getAllRecords = async (req, res, next) => {
  try {
    // const result = await mongodb.getDb().db().collection('contacts').find();
  
    // get the MongoDB database instance
    const db = mongodb.getDb();

    // result.toArray().then((lists) => {
    //   res.setHeader('Content-Type', 'application/json');
    //   res.status(200).json(lists);
    // });

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

const getRecordById = async (req, res, next) => {
  const userId = new ObjectId(req.params.id);
  // const result = await mongodb
  //   .getDb()
  //   .db("CSE341-personalDB")
  //   .collection("contacts")
  //   .find({ _id: userId });
  // result.toArray().then((lists) => {
  //   res.setHeader("Content-Type", "application/json");
  //   res.status(200).json(lists[0]);
  // });

  try {
    const db = mongodb.getDb();
    
    const result = await db.collection("Contacts");
    const id = await result.find({ _id: userId });
    const data = await id.toArray();
    // console.log("Data: ", data);
    res.setHeader("Content-Type", "application/json");
    res.status(200).json(data[0]);
  } catch (err) {
    res.status(500).json({err: "An error occurred while fetching data."});
  }
};

module.exports = { getAllRecords, getRecordById };