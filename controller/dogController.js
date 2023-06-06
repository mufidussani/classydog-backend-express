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
  try {
    const { dog_name, dog_image } = req.body;

    const history = new HistoryDog({
      dog_name,
      dog_image,
    });

    await history.save();

    res.status(201).json({ success: true });
  } catch (error) {
    console.error("Error:", error);
    res
      .status(500)
      .json({ success: false, error: "Failed to create dog history" });
  }
};
