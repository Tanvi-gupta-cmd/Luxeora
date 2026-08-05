import { motion, AnimatePresence } from "framer-motion";
import { FiX, FiHeart, FiShoppingBag } from "react-icons/fi";
import "./QuickViewModal.css";

export default function QuickViewModal({
  open,
  onClose,
  product,
}) {
  if (!product) return null;

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="modal-card"
            initial={{ y: 80, opacity: 0, scale: .95 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 80, opacity: 0 }}
            transition={{ duration: .35 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button className="close" onClick={onClose}>
              <FiX />
            </button>

            <div className="modal-left">
              <img
                src={product.image}
                alt={product.name}
              />
            </div>

            <div className="modal-right">

              <span className="badge">
                Premium Collection
              </span>

              <h2>{product.name}</h2>

              <p className="price">
                ₹{product.price}
              </p>

              <p className="desc">
                Handcrafted luxury jewellery with
                premium finishing and timeless design.
              </p>

              <div className="modal-buttons">

                <button className="gold-btn">
                  <FiShoppingBag />
                  Add To Cart
                </button>

                <button className="wish-btn">
                  <FiHeart />
                </button>

              </div>

            </div>

          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}