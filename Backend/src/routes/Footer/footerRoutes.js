import express from "express";
import {
  DeleteFooterData,
  createFooter,
  getFooter,
  updateFooter,
} from "../../controllers/Footer/footerController.js";

const router = express.Router();

router.route("/").post(createFooter);
router.route("/").get(getFooter);
router.route("/:id").put(updateFooter);
router.route("/:id").delete(DeleteFooterData);

export default router;
