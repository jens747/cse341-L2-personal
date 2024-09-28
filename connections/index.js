
// Mimics ../db/connect.js
const { MongoClient, ServerApiVersion } = require("mongodb");
 // Load environment variables
require("dotenv").config();

// Access the connection URI from the .env file
const uri = process.env.MONGO_URI;

const mongodb = require("../db/connect");

const getData = async (req, res, next) => {
  try {
    const db = mongodb.getDb(); // Get the connected database instance
    const result = await db.collection("Contacts").find(); // Query the correct collection
    const data = await result.toArray(); // Convert the cursor to an array

    if (data.length === 0) {
      res.status(404).json({ message: "No data found" }); // Handle case when no data is found
    } else {
      res.setHeader("Content-Type", "application/json");
      res.status(200).json(data); // Return the entire data array
    }
  } catch (err) {
    res.status(500).json({ error: "An error occurred while fetching data." });
  } finally {
    // Ensures that the client will close when you finish/error
    await db.close();
  }
};

module.exports = { getData };

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });

// async function run() {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     await client.connect();
//     // Send a ping to confirm a successful connection
//     await client.db("admin").command({ ping: 1 });
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }

// run().catch(console.dir);
