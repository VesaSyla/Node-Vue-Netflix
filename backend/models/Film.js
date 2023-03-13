const mongoose = require("mongoose");

const filmSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  starring: { type: String, required: true },
  creators: { type: String, required: true },
  createdAt: { type: Date, default: new Date() },
});

const filmModel = mongoose.model("Film", filmSchema);

module.exports = filmModel;
