import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cursor from "./components/Cursor/Cursor";

import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import Wishlist from "./pages/Wishlist";
import Cart from "./pages/Cart";
import Orders from "./pages/Orders";
import ProductDetails from "./pages/ProductDetails";
import Checkout from "./pages/Checkout";

function App() {
  return (
    <BrowserRouter>
     <Cursor />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
         <Route path="/wishlist" element={<Wishlist />} />
         <Route path="/cart" element={<Cart />} />
         <Route path="/orders" element={<Orders />} />
         <Route path="/checkout" element={<Checkout />} />
         <Route
  path="/product/:id"
  element={<ProductDetails />}
/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;