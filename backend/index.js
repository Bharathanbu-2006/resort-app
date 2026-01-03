const express = require("express");
const app = express();
const PORT = 5000;

app.use(express.json());

// Root test route
app.get("/", (req, res) => {
  res.send("Resort API is running 🚀");
});

// Mount the resort routes
const resortRoutes = require("./routes/resortRoutes");

app.use("/resorts", resortRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

