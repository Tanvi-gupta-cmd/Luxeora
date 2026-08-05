import {
  FiInstagram,
  FiFacebook,
  FiTwitter,
  FiLinkedin
} from "react-icons/fi";

import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">

      <div className="footer-top">

        <div className="footer-brand">

          <h2>LUXEORA</h2>

          <p>
            Timeless jewellery crafted with elegance,
            precision and luxury.
          </p>

          <div className="socials">

            <FiInstagram />
            <FiFacebook />
            <FiTwitter />
            <FiLinkedin />

          </div>

        </div>

        <div className="footer-links">

          <div>

            <h4>Shop</h4>

            <a href="#">Rings</a>
            <a href="#">Necklaces</a>
            <a href="#">Bracelets</a>
            <a href="#">Earrings</a>

          </div>

          <div>

            <h4>Company</h4>

            <a href="#">About</a>
            <a href="#">Collections</a>
            <a href="#">Blog</a>
            <a href="#">Contact</a>

          </div>

          <div>

            <h4>Support</h4>

            <a href="#">FAQs</a>
            <a href="#">Shipping</a>
            <a href="#">Returns</a>
            <a href="#">Privacy</a>

          </div>

        </div>

      </div>

      <div className="footer-bottom">

        <p>
          © 2026 Luxeora. All Rights Reserved.
        </p>

      </div>

    </footer>
  );
}