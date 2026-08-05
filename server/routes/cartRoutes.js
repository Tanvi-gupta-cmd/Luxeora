import express from "express";
import protect from "../middleware/authMiddleware.js";

import {
  addToCart,
  getCart,
  removeCartItem,
  increaseQuantity,
  decreaseQuantity,
} from "../controllers/cartController.js";

const router = express.Router();

router.get("/", protect, getCart);

router.post("/", protect, addToCart);

router.delete("/:id", protect, removeCartItem);

// Quantity Routes
router.patch("/increase/:id", protect, increaseQuantity);

router.patch("/decrease/:id", protect, decreaseQuantity);

export default router;