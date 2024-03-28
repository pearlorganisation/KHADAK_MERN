import express from "express";
import {
  addCity,
  addLocality,
  getCity,
} from "../../controllers/location/locationController.js";

const router = express.Router();

router.route("/City").post(addCity);
router.route("/locality").post(addLocality);
router.route("/City").get(getCity)

export default router;
