const mongoose = require("mongoose");

const historySchema = new mongoose.Schema({
  dog_name: String,
  dog_image: String,
});

const HistoryDog = mongoose.model("history_dog", historySchema);

module.exports = HistoryDog;
