const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");

const filmsRoutes = require("./routes/Film");
const userRoutes = require("./routes/User");

const app = express();
app.use(express.json());
app.use(bodyParser.json());
app.use(methodOverride()); //methodOverride() middleware per me mujt mi perdor metodat GET,POST etj.
app.use(cors());

app.use("/films", filmsRoutes);
app.use("/users", userRoutes);

app.get("/", (req, res) => {
  res.send("Welcome to API.");
});

app.use("/images", express.static("images"));

const PORT = process.env.PORT || 5000;

mongoose.connect("mongodb://127.0.0.1:27017/film");

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
