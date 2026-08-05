import { motion } from "framer-motion";
import "./BrandStory.css";

import workshop from "../../assets/workshop.jpg";

export default function BrandStory() {
  return (
    <section id="about" className="brand-story">

      <motion.div
        className="story-image"
        initial={{ opacity: 0, x: -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: .8 }}
        viewport={{ once: true }}
      >
        <img src={workshop} alt="Luxury Workshop" />
      </motion.div>

      <motion.div
        className="story-content"
        initial={{ opacity: 0, x: 80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: .8 }}
        viewport={{ once: true }}
      >

        <p className="story-tag">
          OUR HERITAGE
        </p>

        <h2>
          Handcrafted Luxury
          <br />
          Since 1998
        </h2>

        <p className="story-text">
          Every Luxeora masterpiece is handcrafted by skilled artisans,
          blending timeless craftsmanship with modern luxury. Every
          diamond is ethically sourced and every piece is designed to
          become a lifetime treasure.
        </p>

        <div className="story-stats">

          <div>
            <h3>25+</h3>
            <span>Years</span>
          </div>

          <div>
            <h3>10K+</h3>
            <span>Happy Clients</span>
          </div>

          <div>
            <h3>100%</h3>
            <span>Certified</span>
          </div>

        </div>

      </motion.div>

    </section>
  );
}