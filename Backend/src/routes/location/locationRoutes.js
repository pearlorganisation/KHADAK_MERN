import express from "express";
import {
  addCity,
  addLocality,
  deleteCity,
  deleteLocality,
  getCity,
} from "../../controllers/location/locationController.js";

const router = express.Router();

router.route("/City").post(addCity);
router.route("/locality").post(addLocality);
router.route("/City").get(getCity);
router.route("/locality/:id").post(deleteLocality);
router.route("/City/:id").post(deleteCity);
export default router;
