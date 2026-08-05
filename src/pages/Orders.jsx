import { useEffect, useState } from "react";
import API from "../api/api";

export default function Orders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    const token = localStorage.getItem("token");

    try {
      const { data } = await API.get("/orders", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setOrders(data.orders);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="featured">
      <h2 style={{ textAlign: "center", margin: "40px 0" }}>
        My Orders
      </h2>

      {orders.length === 0 ? (
        <h3 style={{ textAlign: "center" }}>
          No Orders Yet 📦
        </h3>
      ) : (
        orders.map((order) => (
          <div
            key={order._id}
            className="product-card"
            style={{
              maxWidth: "900px",
              margin: "30px auto",
            }}
          >
            <h3>Order ID: {order._id}</h3>

            {order.items.map((item) => (
              <div
                key={item._id}
                style={{
                  display: "flex",
                  gap: "20px",
                  marginTop: "20px",
                  alignItems: "center",
                }}
              >
                <img
                  src={item.product.image}
                  alt={item.product.name}
                  width="120"
                />

                <div>
                  <h4>{item.product.name}</h4>
                  <p>Price : ₹{item.product.price.toLocaleString()}</p>
                  <p>Quantity : {item.quantity}</p>
                </div>
              </div>
            ))}

            <hr style={{ margin: "20px 0" }} />

            <h3>Total : ₹{order.totalAmount.toLocaleString()}</h3>
            <h4>Status : {order.status}</h4>
          </div>
        ))
      )}
    </section>
  );
}