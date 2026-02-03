import { Routes, Route, Navigate } from "react-router-dom";
import { useCart } from "./context/useCart";

import { Header } from "./components/Header";
import { AddToCartPopup } from "./components/AddToCartPopup";

import { ProductsPage } from "./pages/ProductsPage";
import { ProductDetailsPage } from "./pages/ProductDetailsPage";
import { CartPage } from "./pages/CartPage";
import { CheckoutPage } from "./pages/CheckoutPage";
import { OrderConfirmationPage } from "./pages/OrderConfirmationPage";

export function RootApp() {
  const { popup } = useCart();

  return (
    <>
      <Header />

      <Routes>
        {/* Gör startsidan till /butik */}
        <Route path="/" element={<Navigate to="/butik" replace />} />

        <Route path="/butik" element={<ProductsPage />} />
        <Route path="/products/:id" element={<ProductDetailsPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/order-confirmation" element={<OrderConfirmationPage />} />
      </Routes>

      {popup && <AddToCartPopup title={popup} />}
    </>
  );
}
