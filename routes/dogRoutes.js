const express = require("express");
const router = express.Router();
const controller = require("../controller/dogController");

router.get("/dogs", controller.getAllDogs);
router.post("/post-history", controller.createHistoryDog);

module.exports = router;
