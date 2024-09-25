const displayMichael = (req, res) => {
  res.send("Michael Scott");
}

const displayDwight = (req, res) => {
  res.send("Dwight Schrute");
}

module.exports = { 
  displayMichael, 
  displayDwight
};