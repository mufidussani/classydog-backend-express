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

exports.createHistoryDog = async (req, res) => {
  const { dog_name, dog_image } = req.body;

  try {
    const historyDog = new HistoryDog({ dog_name, dog_image });
    await historyDog.save();
    res.status(200).json({ message: "Dog history created successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
