import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import "./index.css";

import { CartProvider } from "./context/cartContext";
import { AuthProvider } from "./context/AuthContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { WishlistProvider } from "./context/WishlistContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <WishlistProvider>
      <CartProvider>
        <App />
        <ToastContainer
         position="top-right"
         autoClose={2000}
          />
      </CartProvider>
      </WishlistProvider>
    </AuthProvider>
  </React.StrictMode>
);