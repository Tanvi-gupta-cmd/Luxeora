import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useState } from "react";
import API from "../api/api";

export default function Checkout() {
  const { state } = useLocation();
  const navigate = useNavigate();

  const product = state?.product;
  const [name, setName] = useState("");
const [phone, setPhone] = useState("");
const [address, setAddress] = useState("");
const [city, setCity] = useState("");
const [pincode, setPincode] = useState("");
const [payment, setPayment] = useState("COD");

  if (!product) {
    return <h2 style={{ textAlign: "center" }}>No Product Found</h2>;
  }

 const placeOrder = async () => {
  if (!name || !phone || !address || !city || !pincode) {
    toast.error("Please fill all details");
    return;
  }

  const token = localStorage.getItem("token");

  try {
    await API.post(
      "/orders",
      {
        fullName: name,
        phone,
        address,
        city,
        pincode,
        paymentMethod: payment,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    toast.success("Order Placed Successfully 🎉");

    navigate("/orders");

  } catch (error) {
    toast.error(
      error.response?.data?.message || "Something went wrong"
    );
  }
};

  return (
    <section
      style={{
        maxWidth: "900px",
        margin: "120px auto",
      }}
    >
      <h1>Checkout</h1>

      <div
  style={{
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "60px",
    alignItems: "start",
    marginTop: "40px",
     maxWidth: "1200px",
    margin: "120px auto",
    padding: "0 20px",
  }}

      >

        <div
  style={{
    display: "grid",
    gap: "15px",
    marginBottom: "40px",
  }}
>
  <input
    type="text"
    placeholder="Full Name"
    value={name}
    onChange={(e) => setName(e.target.value)}
    style={{
  width: "100%",
  padding: "12px",
  borderRadius: "10px",
  border: "1px solid #ddd",
  fontSize: "16px",
  boxSizing: "border-box",
}}
  />

  <input
    type="text"
    placeholder="Phone Number"
    value={phone}
    onChange={(e) => setPhone(e.target.value)}
    style={{
  width: "100%",
  padding: "12px",
  borderRadius: "10px",
  border: "1px solid #ddd",
  fontSize: "16px",
  boxSizing: "border-box",
}}
  />

  <textarea
    placeholder="Delivery Address"
    value={address}
    onChange={(e) => setAddress(e.target.value)}
    style={{
  width: "100%",
  padding: "12px",
  borderRadius: "10px",
  border: "1px solid #ddd",
  fontSize: "16px",
  boxSizing: "border-box",
}}
  />

  <input
    type="text"
    placeholder="City"
    value={city}
    onChange={(e) => setCity(e.target.value)}
    style={{
  width: "100%",
  padding: "12px",
  borderRadius: "10px",
  border: "1px solid #ddd",
  fontSize: "16px",
  boxSizing: "border-box",
}}
  />

  <input
    type="text"
    placeholder="Pincode"
    value={pincode}
    onChange={(e) => setPincode(e.target.value)}
    style={{
  width: "100%",
  padding: "12px",
  borderRadius: "10px",
  border: "1px solid #ddd",
  fontSize: "16px",
  boxSizing: "border-box",
}}
  />

  <select
    value={payment}
    onChange={(e) => setPayment(e.target.value)}
    style={{
  width: "100%",
  padding: "12px",
  borderRadius: "10px",
  border: "1px solid #ddd",
  fontSize: "16px",
  boxSizing: "border-box",
}}
  >
    <option value="COD">Cash On Delivery</option>
    <option value="UPI">UPI</option>
    <option value="CARD">Credit / Debit Card</option>
  </select>
</div>
       <div
  style={{
    background: "#fff",
    padding: "30px",
    borderRadius: "20px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
    textAlign: "center",
  }}
>
  <img
    src={product.image}
    alt={product.name}
    style={{
      width: "260px",
      maxWidth: "320px",
      borderRadius: "20px",
      marginBottom: "20px",
       height: "260px",
    objectFit: "contain",
    display: "block",
    margin: "0 auto 20px",
    }}
  />

  <h2>{product.name}</h2>

  <h3>₹{product.price.toLocaleString()}</h3>

  <hr />

  <p>
    <strong>Shipping:</strong> Free
  </p>

  <p>
    <strong>GST:</strong> Included
  </p>

  <p>
    <strong>Payment:</strong> {payment}
  </p>

  <h2>
    Total: ₹{product.price.toLocaleString()}
  </h2>

  <p>{product.description}</p>

  <button
    onClick={placeOrder}
    style={{
      width: "100%",
      marginTop: "30px",
      padding: "16px",
      background: "#C9A227",
      color: "#fff",
      border: "none",
      borderRadius: "12px",
      fontSize: "18px",
      fontWeight: "600",
      cursor: "pointer",
    }}
  >
    Place Order
  </button>
</div>
</div>
    </section>
  );
}