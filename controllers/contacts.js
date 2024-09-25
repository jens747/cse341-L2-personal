const mongodb = require("../connections");

const getAllRecords = async (req, res, next) => {
  console.log("All records.");
}

const getRecordById = async (req, res, next) => {
  console.log("Single record.");
}

module.exports = { getAllRecords, getRecordById };