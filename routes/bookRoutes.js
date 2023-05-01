import express from "express";
const router = express.Router();

import {
  createBook,
  deleteJob,
  getAllBooks,
  updateJob,
  showStatus,
} from "../controller/bookController.js";

router.route("/").post(createBook).get(getAllBooks);
// * place before :id
router.route("/stats").get(showStatus);
router.route("/:id").delete(deleteJob).patch(updateJob);
export default router;
