import { motion } from "framer-motion";
import "./Hero.css";
import Scene from "../../three/Scene";

export default function Hero() {
  return (
    <section id="hero" className="hero">

      {/* Left Side */}
      <motion.div
        className="hero-content"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <p className="tagline">
          PREMIUM COLLECTION
        </p>

        <h1>
          Elegance Beyond
          <br />
          Ordinary
        </h1>

        <p className="description">
          Discover timeless luxury crafted with perfection.
        </p>

        <button>
          Explore Collection
        </button>
      </motion.div>

      {/* Right Side */}
      <motion.div
        className="hero-model"
        initial={{ opacity: 0, x: 80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2 }}
      >
        <Scene />
      </motion.div>

    </section>
  );
}