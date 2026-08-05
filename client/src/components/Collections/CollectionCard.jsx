import { motion } from "framer-motion";
import "./Collections.css";

export default function CollectionCard({
  title,
  subtitle,
  image
}) {
  return (
    <motion.div
      className="collection-card"
      whileHover={{
        y: -12,
        scale: 1.03
      }}
      transition={{
        duration: .35
      }}
    >
      <div className="collection-image">

        <img
          src={image}
          alt={title}
        />

      </div>

      <div className="collection-content">

        <h3>{title}</h3>

        <p>{subtitle}</p>

        <button>
          Explore →
        </button>

      </div>

    </motion.div>
  );
}