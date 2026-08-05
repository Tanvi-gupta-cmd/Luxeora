import { motion } from "framer-motion";
import { FiHeart, FiShoppingBag } from "react-icons/fi";
import { FaStar } from "react-icons/fa";
import "./FeaturedProducts.css";
import { useCart } from "../../context/CartContext";
import { useWishlist } from "../../context/WishlistContext";
import { toast } from "react-toastify";
import API from "../../api/api";
import { FaHeart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function ProductCard({ product,  onQuickView, }) {
  const { addToCart } = useCart();
  const { fetchWishlist, isWishlisted,  getWishlistItem, } = useWishlist();
  const navigate = useNavigate();

  const handleWishlist = async () => {
  const token = localStorage.getItem("token");

  if (!token) {
    toast.error("Please login first");
    return;
  }

  try {
    if (isWishlisted(product._id)) {
      const item = getWishlistItem(product._id);

      await API.delete(`/wishlist/${item._id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      toast.success("Removed from Wishlist 💔");

    } else {

      await API.post(
        "/wishlist",
        {
          productId: product._id,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      toast.success("Added to Wishlist ❤️");
    }

    await fetchWishlist();

  } catch (error) {
    toast.error(error.response?.data?.message || "Something went wrong");
  }
};

  


  return (
    <motion.div
      className="product-card"
      whileHover={{ y: -12 }}
      transition={{ duration: .35 }}
    >
      <span className="badge">{product.badge}</span>

      <button
  className="wishlist"
  onClick={handleWishlist}
>
  {isWishlisted(product._id) ? <FaHeart /> : <FiHeart />}
</button>

      <div
  className="product-image"
  onClick={() => navigate(`/product/${product._id}`)}
  style={{ cursor: "pointer" }}
>
  <img src={product.image} alt={product.name} />
</div>

      <div className="product-content">

        <h3
  style={{ cursor: "pointer" }}
  onClick={() => navigate(`/product/${product._id}`)}
>
  {product.name}
</h3>

        <div className="rating">
          {[...Array(product.rating)].map((_, i) => (
            <FaStar key={i}/>
          ))}
        </div>

        <div className="price">

          <span className="new-price">
            ₹{product.price.toLocaleString()}
          </span>

          <span className="old-price">
            ₹{product.oldPrice.toLocaleString()}
          </span>

        </div>

        <button
  className="cart-btn"
  onClick={() => {
    console.log("BUTTON CLICK:", product.name, product._id);
    addToCart(product);
  }}
>
  <FiShoppingBag />
  Add To Cart
</button>

        <button
  className="quick-btn"
  onClick={() => onQuickView(product)}
>
  Quick View
</button>

      </div>

    </motion.div>
  )
}
