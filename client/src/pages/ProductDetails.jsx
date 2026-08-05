import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../api/api";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";
import ProductCard from "../components/FeaturedProducts/ProductCard";
import "./ProductDetails.css";
import { useNavigate } from "react-router-dom";

export default function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState(null);

  const { addToCart } = useCart();
  const { isWishlisted, fetchWishlist } = useWishlist();
  const [relatedProducts, setRelatedProducts] = useState([]);

  useEffect(() => {
    fetchProduct();
    fetchWishlist();
  }, [id]);

 const fetchProduct = async () => {
  try {
    const { data } = await API.get(`/products/${id}`);

    setProduct(data.product);

    fetchRelatedProducts(data.product.category);

  } catch (err) {
    console.log(err);
  }
};

  const fetchRelatedProducts = async (category) => {
  try {
    const { data } = await API.get("/products");

    const related = data.products.filter(
      (item) =>
        item.category === category &&
        item._id !== id
    );

    setRelatedProducts(related);
  } catch (err) {
    console.log(err);
  }
};

  if (!product) return <h2 style={{ textAlign: "center" }}>Loading...</h2>;

  return (
  <>
    <section
      style={{
        maxWidth: "1200px",
        margin: "120px auto",
        display: "flex",
        gap: "60px",
        alignItems: "center",
      }}
    >
      <div
  style={{
    overflow: "hidden",
    borderRadius: "20px",
  }}
>
  <img
    src={product.image}
    alt={product.name}
    style={{
      width: "450px",
      transition: "0.4s",
      cursor: "zoom-in",
    }}
    onMouseOver={(e) =>
      (e.target.style.transform = "scale(1.15)")
    }
    onMouseOut={(e) =>
      (e.target.style.transform = "scale(1)")
    }
  />
</div>

      <div>
        <h1>{product.name}</h1>

        <h2>₹{product.price.toLocaleString()}</h2>

        <div
  style={{
    color: "#d4af37",
    fontSize: "22px",
    margin: "15px 0",
  }}
>
⭐⭐⭐⭐⭐
</div>

<p
  style={{
    color: "#888",
    marginBottom: "20px",
  }}
>
{product.badge} Collection
</p>

        <p>{product.description}</p>

        <p>
          <strong>Category:</strong> {product.category}
        </p>

        <p>
          <strong>Stock:</strong> {product.stock}
        </p>

        <div
  style={{
    margin: "30px 0",
    lineHeight: "2",
  }}
>
<p>🚚 Free Express Delivery</p>

<p>🔒 100% Secure Payment</p>

<p>↩️ 7 Days Easy Return</p>

<p>💎 Certified Luxury Jewellery</p>
</div>

        <div
  style={{
    display: "flex",
    gap: "20px",
    marginTop: "30px",
  }}
>
  <button
    onClick={() => addToCart(product)}
    style={{
      padding: "15px 35px",
      cursor: "pointer",
      background: "#C9A227",
      color: "#fff",
      border: "none",
      borderRadius: "10px",
    }}
  >
    Add To Cart
  </button>

  <button
  onClick={() =>
    navigate("/checkout", {
      state: { product },
    })
  }
  style={{
    padding: "15px 35px",
    cursor: "pointer",
    background: "#111",
    color: "#fff",
    border: "none",
    borderRadius: "10px",
  }}
>
  Buy Now
</button>
</div>
      </div>
    </section>

    {relatedProducts.length > 0 && (
      <section
        style={{
          maxWidth: "1200px",
          margin: "80px auto",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            marginBottom: "40px",
          }}
        >
          You May Also Like
        </h2>

        <div className="products-grid">
          {relatedProducts.map((item) => (
            <ProductCard
              key={item._id}
              product={item}
            />
          ))}
        </div>
      </section>
    )}
  </>
);
}