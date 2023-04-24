import express from "express";
const router = express.Router();

import {
  createBook,
  deleteJob,
  getAllJobs,
  updateJob,
  showStatus,
} from "../controller/bookController.js";

router.route("/").post(createBook).get(getAllJobs);
// * place before :id
router.route("/stats").get(showStatus);
router.route("/:id").delete(deleteJob).patch(updateJob);
export default router;
