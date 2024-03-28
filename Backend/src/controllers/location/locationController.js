import { City, Locality } from "../../models/location/locationModel.js";

// add city api
export const addCity = async (req, res) => {
  const cityName = req.body.cityName;

  // Check if the city already exists
  let city = await City.findOne({ name: cityName });
  if (!city) {
    city = new City({ name: cityName });
    await city.save();
  }

  res.status(201).json(city);
};

export const getCity = async (req, res) => {
  try {
    const data = await City.find();
    if (data) {
      res.status(200).json({
        message: "success",
        data: data,
      });
    } else {
      res.status(404).send("data not found");
    }
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};
// location add api
export const addLocality = async (req, res) => {
  const { cityName, localityName } = req.body;

  // Find the city by name
  let city = await City.findOne({ name: cityName });

  if (!city) {
    return res.status(404).json({ error: "City not found" });
  }

  //   // Create a new locality
  //   const locality = new Locality({ name: localityName, city: cityName });
  //   await locality.save();

  // Add the locality to the city's array of localities
  //   console.log(locality._id);
  if (!city.localities.includes(localityName)) {
    city.localities.push(localityName);
  }

  await city.save();

  res.status(201).json(city);
};
