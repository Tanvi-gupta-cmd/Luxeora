import "./FeaturedProducts.css";
import ProductCard from "./ProductCard";

import QuickViewModal from "../QuickViewModal/QuickViewModal";
import { useEffect, useState } from "react";
import API from "../../api/api";

export default function FeaturedProducts( { product,
  onQuickView}) {

   const [selectedProduct, setSelectedProduct] = useState(null);
   const [open, setOpen] = useState(false);
   const [products, setProducts] = useState([]);
   const [search, setSearch] = useState("");
const [category, setCategory] = useState("All");
const [sort, setSort] = useState("");
const [price, setPrice] = useState("all");

const handleQuickView = (product) => {
  setSelectedProduct(product);
  setOpen(true);
};

useEffect(() => {
  const fetchProducts = async () => {
    try {
      const { data } = await API.get("/products");
     setProducts(data.products);
    } catch (error) {
      console.log(error);
    }
  };

  fetchProducts();
}, []);

const categories = [
  "All",
  "Ring",
  "Necklace",
  "Bracelet",
  "Earrings",
];

let filteredProducts = [...products];

// Search
filteredProducts = filteredProducts.filter((item) =>
  item.name.toLowerCase().includes(search.toLowerCase())
);

// Category
if (category !== "All") {
  filteredProducts = filteredProducts.filter(
    (item) => item.category === category
  );
}

if (price === "0-20000") {
  filteredProducts = filteredProducts.filter(
    (item) => item.price <= 20000
  );
}

if (price === "20000-40000") {
  filteredProducts = filteredProducts.filter(
    (item) => item.price > 20000 && item.price <= 40000
  );
}

if (price === "40000+") {
  filteredProducts = filteredProducts.filter(
    (item) => item.price > 40000
  );
}

<select
  value={price}
  onChange={(e) => setPrice(e.target.value)}
  style={{
    padding: "12px",
    borderRadius: "10px",
  }}
>
  <option value="all">All Prices</option>
  <option value="0-20000">₹0 - ₹20,000</option>
  <option value="20000-40000">₹20,000 - ₹40,000</option>
  <option value="40000+">Above ₹40,000</option>
</select>

// Sort
if (sort === "low") {
  filteredProducts.sort((a, b) => a.price - b.price);
}

if (sort === "high") {
  filteredProducts.sort((a, b) => b.price - a.price);
}

if (sort === "rating") {
  filteredProducts.sort((a, b) => b.rating - a.rating);
}

return(

<section id="featured" className="featured">

<p className="section-tag">
BEST SELLERS
</p>

<h2>
Featured Products
</h2>

<div
  style={{
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "20px",
    margin: "35px 0",
    flexWrap: "wrap",
  }}
>
  <input
    type="text"
    placeholder="Search products..."
    value={search}
    onChange={(e) => setSearch(e.target.value)}
    style={{
      padding: "12px",
      width: "280px",
      borderRadius: "10px",
      border: "1px solid #ccc",
    }}
  />

  <select
    value={category}
    onChange={(e) => setCategory(e.target.value)}
    style={{
      padding: "12px",
      borderRadius: "10px",
    }}
  >
    {categories.map((cat) => (
      <option key={cat}>{cat}</option>
    ))}
  </select>

  <select
    value={sort}
    onChange={(e) => setSort(e.target.value)}
    style={{
      padding: "12px",
      borderRadius: "10px",
    }}
  >
    <option value="">Sort</option>
    <option value="low">Price Low → High</option>
    <option value="high">Price High → Low</option>
    <option value="rating">Rating</option>
  </select>
</div>

<div className="products-grid">

{
filteredProducts.map(product=>(
<ProductCard
key={product._id}
product={product}
onQuickView={handleQuickView}
/>
))
}

</div>

<QuickViewModal
  open={open}
  onClose={() => setOpen(false)}
  product={selectedProduct}
/>

</section>

)

}