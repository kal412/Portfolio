require("../models/database");
const Landing = require("../models/Landing");

exports.homepage = async (req, res) => {
  try {
    res.render("index", { title: "Lorem" });
  } catch (error) {
    res.status(500).send({ message: error.message || "Error occured" });
  }
};

async function insertDynamicLandingData() {
  try {
    await Landing.insertMany([
      {
        name: "kal",
        image: "kal.jpg",
        title: "kal",
      },
    ]);
  } catch (error) {
    console.log(error);
  }
}

insertDynamicLandingData();
