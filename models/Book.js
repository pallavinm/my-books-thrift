import mongoose from "mongoose";

const BookSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      // required: [true, "Please provide company name"],
      maxlength: 50,
    },
    description: {
      type: String,
      // required: [true, "Please provide company name"],
      maxlength: 100,
    },
    language: {
      type: String,
      // required: [true, "Please provide company name"],
      maxlength: 50,
    },
    type: {
      type: String,
      // required: [true, "Please provide company name"],
      maxlength: 50,
    },
    cost: {
      type: String,
      // required: [true, "Please provide company name"],
      maxlength: 50,
    },
    author: {
      type: String,
      // required: [true, "Please provide company name"],
      maxlength: 50,
    },
    condition: {
      type: String,
      // required: [true, "Please provide company name"],
      maxlength: 50,
    },
    pages: {
      type: String,
      // required: [true, "Please provide company name"],
      maxlength: 50,
    },
    offer: {
      type: String,
      // required: [true, "Please provide company name"],
      maxlength: 50,
    },
    delivery_date: {
      type: String,
      // required: [true, "Please provide company name"],
      maxlength: 50,
    },
    rating: {
      type: String,
      // required: [true, "Please provide company name"],
      maxlength: 50,
    },
    // createdBy: {
    //   type: mongoose.Types.ObjectId,
    //   ref: "User",
    //   // required: [true, 'Please provide user'],
    // },
  },
  { timestamps: true }
);

export default mongoose.model("Book", BookSchema);
