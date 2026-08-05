import { createContext, useContext, useEffect, useState } from "react";
import API from "../api/api";

const WishlistContext = createContext();

export function WishlistProvider({ children }) {
  const [wishlist, setWishlist] = useState([]);

  const token = localStorage.getItem("token");

  const fetchWishlist = async () => {
    if (!token) return;

    try {
      const { data } = await API.get("/wishlist", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setWishlist(data.wishlist);

    } catch (error) {
      console.log(error);
    }
  };

  const isWishlisted = (productId) => {
  return wishlist.some(
    (item) => item.product._id === productId
  );
};

const getWishlistItem = (productId) => {
  return wishlist.find(
    (item) => item.product._id === productId
  );
};

  useEffect(() => {
    fetchWishlist();
  }, []);

  return (
    <WishlistContext.Provider
      value={{
        wishlist,
        setWishlist,
        fetchWishlist,
         isWishlisted,
          getWishlistItem,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
}

export const useWishlist = () => useContext(WishlistContext);