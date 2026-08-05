import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import "./Navbar.css";
import { useCart } from "../../context/CartContext";
import { Link } from "react-router-dom";
import {
  FiSearch,
  FiShoppingBag,
  FiHeart,
  FiMenu,
  FiX,
} from "react-icons/fi";
import { useAuth } from "../../context/AuthContext";
import { FiUser, FiLogOut } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { useWishlist } from "../../context/WishlistContext";
import { FiPackage } from "react-icons/fi";

export default function Navbar() {

  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("hero");
  const [menuOpen, setMenuOpen] = useState(false);
  const { cart } = useCart();
  const { user, logout } = useAuth();
const [profileOpen, setProfileOpen] = useState(false);
const navigate = useNavigate();
const { wishlist } = useWishlist();

  useEffect(() => {

    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);

  }, []);

  useEffect(() => {

  const sections = document.querySelectorAll("section[id]");

  const onScroll = () => {

    let current = "hero";

    sections.forEach((section) => {

      const top = section.offsetTop - 120;
      const height = section.offsetHeight;

      if (window.scrollY >= top &&
          window.scrollY < top + height) {
        current = section.id;
      }

    });

    setActive(current);

  };

  window.addEventListener("scroll", onScroll);

  onScroll();

  return () =>
    window.removeEventListener("scroll", onScroll);

}, []);

  return (

    <motion.nav
      className={`navbar ${scrolled ? "scrolled" : ""}`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: .8 }}
    >

      <div className="logo">
        LUXEORA
      </div>

      <div className="nav-links">

  <a
    href="#hero"
    className={active === "hero" ? "active" : ""}
  >
    Home
  </a>

  <a
    href="#collections"
    className={active === "collections" ? "active" : ""}
  >
    Collections
  </a>

  <a
    href="#featured"
    className={active === "featured" ? "active" : ""}
  >
    Products
  </a>

  <a
    href="#about"
    className={active === "about" ? "active" : ""}
  >
    About
  </a>

</div>

      <div className="nav-actions">

    <FiSearch />
     <Link to="/wishlist" className="wishlist-nav">
  <FiHeart />
  {wishlist.length > 0 && (
    <span className="wishlist-count">
      {wishlist.length}
    </span>
  )}
</Link>

{user ? (

  <div className="profile-wrapper">

    <button
      className="profile-btn"
      onClick={() => setProfileOpen(!profileOpen)}
    >
      <FiUser />
      <span>{user.name}</span>
    </button>

    {profileOpen && (
      <div className="profile-dropdown">

        <Link
  to="/profile"
  onClick={() => setProfileOpen(false)}
>
  Profile
</Link>

         <Link
  to="/orders"
  onClick={() => setProfileOpen(false)}
>
  Orders
</Link>

        <button
       onClick={() => {
        logout();
        setProfileOpen(false);
        navigate("/login");
        }}
          >
        <FiLogOut />
         Logout
        </button>

      </div>
    )}

  </div>

) : (

  <a className="login-btn" href="/login">
    Login
  </a>

)}

   <Link to="/orders" className="nav-link">
  <FiPackage />
</Link>

<Link to="/cart" className="cart-icon">
  <FiShoppingBag />

  <span>
    {cart.reduce((sum, item) => sum + (item.quantity || 0), 0)}
  </span>
</Link>

</div>

<div
  className="menu-btn"
  onClick={() => setMenuOpen(true)}
>
  <FiMenu />

      </div>

      <AnimatePresence>

  {menuOpen && (

    <motion.div
      className="mobile-menu"
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "100%" }}
      transition={{ duration: 0.4 }}
    >

      <div
        className="close-btn"
        onClick={() => setMenuOpen(false)}
      >
        <FiX />
      </div>

      <a href="#hero" onClick={() => setMenuOpen(false)}>Home</a>

      <a href="#collections" onClick={() => setMenuOpen(false)}>
        Collections
      </a>

      <a href="#featured" onClick={() => setMenuOpen(false)}>
        Products
      </a>

      <a href="#about" onClick={() => setMenuOpen(false)}>
        About
      </a>

      <Link
  to="/orders"
  onClick={() => setMenuOpen(false)}
>
  Orders
</Link>

<Link
  to="/wishlist"
  onClick={() => setMenuOpen(false)}
>
  Wishlist
</Link>

<Link
  to="/cart"
  onClick={() => setMenuOpen(false)}
>
  Cart
</Link>

    </motion.div>

  )}

</AnimatePresence>

    </motion.nav>


  );

}