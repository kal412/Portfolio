require("../models/database");
const Landing = require("../models/Landing");
const About = require("../models/About");
const Service = require("../models/Services");

exports.homepage = async (req, res) => {
  try {
    const landingData = await Landing.find({ name: "Kalyan Devkota" });
    // const aboutData = await About.find({ title: "about" });
    console.log(landingData[0]);
    // console.log(aboutData[0]);
    About.find({}, (err, foundItems) => {
      if (err) {
        console.log(err);
      } else {
        aboutData = foundItems[0];
        console.log(aboutData);
        res.render("index", {
          landingData: landingData[0],
          aboutData: aboutData,
        });
      }
    });
  } catch (err) {
    res.status(500).send({ message: error.message || "Error Occured" });
  }
};
