import dotenv from "dotenv";
import mongoose from "mongoose";

import connectDB from "./config/db.js";
import Product from "./models/Product.js";
import products from "./data/products.js";

dotenv.config();

const seedProducts = async () => {
  try {
    await connectDB();

    await Product.deleteMany();

    await Product.insertMany(products);

    console.log("✅ Products Seeded Successfully");

    mongoose.connection.close();

  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

seedProducts();