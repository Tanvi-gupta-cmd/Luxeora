import { motion, AnimatePresence } from "framer-motion";
import { FiX, FiPlus, FiMinus, FiTrash2 } from "react-icons/fi";
import { useCart } from "../../context/CartContext";
import "./CartDrawer.css";

export default function CartDrawer({ open, onClose }) {

  const {
    cart,
    total,
    increaseQty,
    decreaseQty,
    removeFromCart
  } = useCart();

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            className="cart-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          <motion.div
            className="cart-drawer"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.35 }}
          >
            <div className="cart-header">
              <h2>My Cart</h2>

              <button onClick={onClose}>
                <FiX />
              </button>
            </div>

            {cart.length === 0 ? (
              <p className="empty-cart">
                Your cart is empty.
              </p>
            ) : (
              <>
                {cart.map(item => (
                  <div
                    className="cart-item"
                    key={item.id}
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                    />

                    <div className="cart-info">

                      <h4>{item.name}</h4>

                      <p>
                        ₹{item.price.toLocaleString()}
                      </p>

                      <div className="qty">

                        <button
                          onClick={() => decreaseQty(item.id)}
                        >
                          <FiMinus />
                        </button>

                        <span>{item.qty}</span>

                        <button
                          onClick={() => increaseQty(item.id)}
                        >
                          <FiPlus />
                        </button>

                      </div>

                    </div>

                    <button
                      className="delete-btn"
                      onClick={() => removeFromCart(item.id)}
                    >
                      <FiTrash2 />
                    </button>

                  </div>
                ))}

                <div className="cart-footer">
                  <h3>
                    Total ₹{total.toLocaleString()}
                  </h3>

                  <button className="checkout-btn">
                    Checkout
                  </button>
                </div>
              </>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}