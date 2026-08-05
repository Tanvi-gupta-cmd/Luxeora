import Cart from "../models/Cart.js";

// Add to Cart
export const addToCart = async (req, res) => {
  try {
    const { productId } = req.body;
    console.log("PRODUCT ID:", productId);
    const existing = await Cart.findOne({
      user: req.user._id,
      product: productId,
    });
    console.log("EXISTING:", existing);

    if (existing) {
      existing.quantity += 1;
      await existing.save();

      return res.status(200).json({
        success: true,
        message: "Cart Updated",
      });
    }

    const item = await Cart.create({
      user: req.user._id,
      product: productId,
      quantity: 1,
    });

    res.status(201).json({
      success: true,
      message: "Added to Cart",
      item,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get Cart
export const getCart = async (req, res) => {
  try {
    const cart = await Cart.find({
      user: req.user._id,
    }).populate("product");

    res.status(200).json({
      success: true,
      cart,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Remove Cart Item
export const removeCartItem = async (req, res) => {
  try {
    await Cart.findByIdAndDelete(req.params.id);

    res.status(200).json({
      success: true,
      message: "Removed from Cart",
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const increaseQuantity = async (req, res) => {
  try {
    const item = await Cart.findById(req.params.id);

    if (!item) {
      return res.status(404).json({
        success: false,
        message: "Cart item not found",
      });
    }

    item.quantity += 1;
    await item.save();

    res.status(200).json({
      success: true,
      message: "Quantity Increased",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const decreaseQuantity = async (req, res) => {
  try {
    const item = await Cart.findById(req.params.id);

    if (!item) {
      return res.status(404).json({
        success: false,
        message: "Cart item not found",
      });
    }

    if (item.quantity > 1) {
      item.quantity -= 1;
      await item.save();
    }

    res.status(200).json({
      success: true,
      message: "Quantity Decreased",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};