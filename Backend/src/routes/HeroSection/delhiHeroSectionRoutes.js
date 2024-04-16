import express from "express";
import { createHeroSection, getHeroSection, updateHeroSection } from "../../controllers/HeroSection/delhiHeroSectionController.js";


const router = express.Router();

router.route("/").post(createHeroSection);
router.route("/").get(getHeroSection);
router.route("/:id").put(updateHeroSection);

export default router;