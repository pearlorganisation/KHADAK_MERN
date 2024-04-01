import heroSectionModel from "../../models/HeroSection/heroSectionModel.js";
import { contactMail } from "../../utils/Mail/ContactUs/contactMail.js";

// saving herosection data in database
export const createHeroSection = async (req, res) => {
  const { title, description } = req.body;
  const heroSection = new heroSectionModel(req.body);
  await heroSection
    .save()
    .then((hero) => {
      console.log("hero section created successfully");
      res.status(200).send(hero);
    })
    .catch((error) => console.log(error));

  return res.status(200);
};

// getting the data from the database
export const getHeroSection = async (req, res) => {
  try {
    const data = await heroSectionModel.find();
    res.status(200).json({
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      error: "Internal Server Error",
    });
  }
};

// updating the data of database

export const updateHeroSection = async (req, res) => {
  console.log(req.body);
  try {
    const { title, description } = req.body;
    const updatedHeroSection = await heroSectionModel.findByIdAndUpdate(
      req?.params?.id,
      { title: title, description: description },
      { new: true }
    );
    res.status(200).json({
      message: "data updated successfully",
      data: updatedHeroSection,
    });
  } catch (error) {
    res.status(500).json({
      error: "Internal Server Error",
    });
  }
};
