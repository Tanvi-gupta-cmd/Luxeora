import "./Wishlist.css";
import { useWishlist } from "../context/WishlistContext";
import ProductCard from "../components/FeaturedProducts/ProductCard";

export default function Wishlist() {
  const { wishlist } = useWishlist();

  return (
    <section className="featured">
      <h2 className="section-title">My Wishlist</h2>

      {wishlist.length === 0 ? (
        <div className="empty-wishlist">
          <h3>Your Wishlist is Empty ❤️</h3>
          <p>Save your favorite jewelry here.</p>
        </div>
      ) : (
        <div className="products-grid">
          {wishlist.map((item) => (
            <ProductCard
              key={item._id}
              product={item.product}
            />
          ))}
        </div>
      )}
    </section>
  );
}