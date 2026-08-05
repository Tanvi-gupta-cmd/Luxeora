import { motion } from "framer-motion";
import "./Gallery.css";

import img1 from "../../assets/gallery1.jpg";
import img2 from "../../assets/gallery2.jpg";
import img3 from "../../assets/gallery3.jpg";
import img4 from "../../assets/gallery4.jpg";
import img5 from "../../assets/gallery5.jpg";
import img6 from "../../assets/gallery6.jpg";

const images = [img1, img2, img3, img4, img5, img6];

export default function Gallery() {
  return (
    <section className="gallery">

      <p className="section-tag">
        FOLLOW US
      </p>

      <h2>
        Instagram Moments
      </h2>

      <div className="gallery-grid">

        {images.map((image, index) => (

          <motion.div
            key={index}
            className="gallery-item"
            whileHover={{ scale: 1.04 }}
            transition={{ duration: .35 }}
          >

            <img src={image} alt="" />

          </motion.div>

        ))}

      </div>

    </section>
  );
}