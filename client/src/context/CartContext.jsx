import { createContext, useContext, useState, useEffect } from "react";
import API from "../api/api";
import { toast } from "react-toastify";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const fetchCart = async () => {
    const token = localStorage.getItem("token");

    if (!token) return;

    try {
      const { data } = await API.get("/cart", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      console.log("CART RESPONSE:", data);

      setCart(data.cart);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCart();
  }, []);

  const addToCart = async (product) => {
    const token = localStorage.getItem("token");

    if (!token) {
      toast.error("Please login first");
      return;
    }

    try {
      console.log("ADDING PRODUCT:", product);
console.log("PRODUCT ID:", product._id);
      await API.post(
        "/cart",
        {
          productId: product._id,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      await fetchCart();

      toast.success("Added to Cart 🛒");
    } catch (error) {
      toast.error(error.response?.data?.message || "Something went wrong");
    }
  };

  const removeFromCart = async (id) => {
  const token = localStorage.getItem("token");

  try {
    await API.delete(`/cart/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    await fetchCart();
    toast.success("Item removed");
  } catch (error) {
    toast.error(error.response?.data?.message || "Something went wrong");
  }
};

const placeOrder = async () => {
  const token = localStorage.getItem("token");

  if (!token) {
    toast.error("Please login first");
    return;
  }

  try {
    const { data } = await API.post(
      "/orders",
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    toast.success(data.message);

    await fetchCart();
  } catch (error) {
    toast.error(error.response?.data?.message || "Something went wrong");
  }
};

const increaseQuantity = async (id) => {
  const token = localStorage.getItem("token");

  try {
    await API.patch(
      `/cart/increase/${id}`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    await fetchCart();
  } catch (error) {
    toast.error(error.response?.data?.message || "Something went wrong");
  }
};

const decreaseQuantity = async (id) => {
  const token = localStorage.getItem("token");

  try {
    await API.patch(
      `/cart/decrease/${id}`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    await fetchCart();
  } catch (error) {
    toast.error(error.response?.data?.message || "Something went wrong");
  }
};

  const total = cart.reduce((sum, item) => {
  return sum + ((item.product?.price || 0) * (item.quantity || 0));
}, 0);

  console.log("REMOVE FUNCTION =>", removeFromCart);
  return (
    <CartContext.Provider
      value={{
        cart,
        total,
        addToCart,
         removeFromCart,
         increaseQuantity,
  decreaseQuantity,
   placeOrder,
        fetchCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);