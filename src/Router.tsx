import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import ProductPage from './pages/product/ProductPage';
import CartPage from './pages/cart/CartPage';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/main" />} />
        <Route path="/main" element={<ProductPage />} />
        <Route path="/reservations" element={<CartPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
