import { createBrowserRouter, Link } from 'react-router-dom';
import App from '../App';
import CartPage from '../pages/CartPage';
import ProductDetailsPage from '../pages/ProductDetailsPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: 'cart',
    element: <CartPage />,
  },
  {
    path: 'products/:id',
    element: <ProductDetailsPage />,
  },
]);
