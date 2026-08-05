import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    price: {
      type: Number,
      required: true,
    },

    oldPrice: {
      type: Number,
      default: 0,
    },

    image: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      default: "",
    },

    category: {
      type: String,
      default: "Jewellery",
    },

    badge: {
      type: String,
      default: "NEW",
    },

    rating: {
      type: Number,
      default: 5,
    },

    stock: {
      type: Number,
      default: 10,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Product", productSchema);