const mongoose = require("mongoose");

const breedDogSchema = new mongoose.Schema({
  breed_name: String,
  dog_name: String,
  description: String,
  dog_image: String,
});

const BreedDog = mongoose.model("breed_dog", breedDogSchema);

module.exports = BreedDog;
