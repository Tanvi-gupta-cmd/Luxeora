import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";
import "./Testimonials.css";

import user1 from "../../assets/user1.jpg";
import user2 from "../../assets/user2.jpg";
import user3 from "../../assets/user3.jpg";

const testimonials = [
  {
    id: 1,
    name: "Sophia Carter",
    role: "Verified Buyer",
    image: user1,
    review:
      "The craftsmanship is extraordinary. Luxeora exceeded every expectation. Every detail feels premium.",
  },
  {
    id: 2,
    name: "Emma Wilson",
    role: "Luxury Collector",
    image: user2,
    review:
      "Elegant packaging, exceptional quality, and timeless designs. Absolutely worth every penny.",
  },
  {
    id: 3,
    name: "Olivia Brown",
    role: "Verified Buyer",
    image: user3,
    review:
      "I've purchased from many luxury brands, but Luxeora feels truly special and personal.",
  },
];

export default function Testimonials() {
  return (
    <section className="testimonials">

      <p className="section-tag">
        CLIENT REVIEWS
      </p>

      <h2>
        Loved By Thousands
      </h2>

      <div className="testimonial-grid">

        {testimonials.map((item, index) => (
          <motion.div
            key={item.id}
            className="testimonial-card"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: .6, delay: index * .2 }}
            viewport={{ once: true }}
          >
            <div className="stars">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} />
              ))}
            </div>

            <p className="review">
              "{item.review}"
            </p>

            <div className="client">

              <img
                src={item.image}
                alt={item.name}
              />

              <div>

                <h4>{item.name}</h4>

                <span>{item.role}</span>

              </div>

            </div>

          </motion.div>
        ))}

      </div>

    </section>
  );
}