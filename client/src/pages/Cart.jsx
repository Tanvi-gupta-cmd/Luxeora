import { useCart } from "../context/CartContext";

export default function Cart() {
  const data = useCart();
console.log(data);
  const { cart, total, removeFromCart, increaseQuantity,
  decreaseQuantity,  placeOrder } = useCart();

  return (
    <section className="featured">
      <h2 style={{ textAlign: "center", margin: "40px 0" }}>
        My Cart
      </h2>

      {cart.length === 0 ? (
        <h3 style={{ textAlign: "center" }}>
          Your Cart is Empty 🛒
        </h3>
      ) : (
        <>
          <div className="products-grid">
            {cart.map((item) => (
              <div className="product-card" key={item._id}>
                <div className="product-image">
                  
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                  />
                </div>

                <div className="product-content">
                  <h3>{item.product.name}</h3>

                  <h4>₹{item.product.price.toLocaleString()}</h4>

                  <div
  style={{
    display: "flex",
    alignItems: "center",
    gap: "15px",
    margin: "15px 0",
  }}
>
  <button
    onClick={() => decreaseQuantity(item._id)}
    style={{
      width: "35px",
      height: "35px",
      borderRadius: "50%",
      border: "none",
      cursor: "pointer",
      fontSize: "18px",
    }}
  >
    −
  </button>

  <span
    style={{
      fontSize: "18px",
      fontWeight: "bold",
    }}
  >
    {item.quantity}
  </span>

  <button
    onClick={() => increaseQuantity(item._id)}
    style={{
      width: "35px",
      height: "35px",
      borderRadius: "50%",
      border: "none",
      cursor: "pointer",
      fontSize: "18px",
    }}
  >
    +
  </button>
</div>
                  <h4>
      Total: ₹{(item.product.price * item.quantity).toLocaleString()}
    </h4>

                   <button
  onClick={() => removeFromCart(item._id)}
  style={{
    marginTop: "15px",
    padding: "10px 20px",
    background: "#d32f2f",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
  }}
>
  Remove
</button>
                </div>
              </div>
            ))}
          </div>

          <h2 style={{ textAlign: "center", marginTop: "50px" }}>
            Total : ₹{(total || 0).toLocaleString()}
          </h2>

          <div
  style={{
    display: "flex",
    justifyContent: "center",
    marginTop: "30px",
  }}
>
  <button
    onClick={placeOrder}
    style={{
      padding: "15px 40px",
      background: "#111",
      color: "#fff",
      border: "none",
      borderRadius: "10px",
      cursor: "pointer",
      fontSize: "18px",
      fontWeight: "bold",
    }}
  >
    Place Order
  </button>
</div>
        </>
      )}
    </section>
  );
}