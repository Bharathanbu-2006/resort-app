const express = require("express");
const router = express.Router();

// sample in-memory data
let resorts = [
  { id: 1, name: "Beach Paradise", location: "Goa", price: 100 },
  { id: 2, name: "Snow Resort", location: "Manali", price: 200 },
];

router.get("/", (req, res) => {
  res.json(resorts);
});

router.post("/", (req, res) => {
  const newResort = req.body;
  newResort.id = resorts.length + 1;
  resorts.push(newResort);
  res.json(newResort);
});

router.delete("/:id", (req, res) => {
  resorts = resorts.filter(r => r.id !== parseInt(req.params.id));
  res.json({ message: "Deleted" });
});

module.exports = router;
