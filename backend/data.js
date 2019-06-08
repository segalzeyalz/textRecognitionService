const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const DataSchema = new Schema(
  { id: Number, message: String },
  { timestamp: true }
);

module.exports = mongoose.model("Data", DataSchema);
