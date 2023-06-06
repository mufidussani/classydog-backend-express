const BreedDog = require("../model/dogModel");
const HistoryDog = require("../model/historyModel");

exports.getAllDogs = (req, res) => {
  BreedDog.find({})
    .then((dogs) => {
      res.json(dogs);
    })
    .catch((error) => {
      console.error("Kesalahan saat mengambil data:", error);
      res.status(500).send("Kesalahan server");
    });
};

exports.createHistoryDog = (req, res) => {
  const { dog_name, dog_image } = req.body;

  const historyDog = new HistoryDog({ dog_name, dog_image });
  historyDog.save((err, result) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: "Internal Server Error" });
    } else {
      res.status(200).json({ message: "Dog history created successfully" });
    }
  });
};
