import Book from "../models/Book.js";
import { StatusCodes } from "http-status-codes";
import { BadRequestError, NotFoundError } from "../errors/index.js";

const createBook = async (req, res) => {
  const { name, type, author, condition, pages } = req.body;

  if (!name || !author) {
    throw new BadRequestError("Please Provide All Values");
  }

  const book = await Book.create(req.body);
  res.status(StatusCodes.CREATED).json({ book });
};
const deleteJob = async (req, res) => {
  res.send("delete Job");
};
const getAllJobs = async (req, res) => {
  res.send("get All Jobs");
};
const updateJob = async (req, res) => {
  res.send("update Job");
};
const showStatus = async (req, res) => {
  res.send("show Status");
};

export { createBook, deleteJob, getAllJobs, updateJob, showStatus };
