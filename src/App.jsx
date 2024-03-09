/* eslint-disable comma-dangle */
import React from 'react';

import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';
import { useSelector } from 'react-redux';
import Layout from './pages/Layout';
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import Productlist from './pages/Productlist';
import Product, { detailLoader } from './pages/Product';
import Cart from './pages/Cart';
import Register from './pages/Register';
import Login from './pages/Login';
import AdminBoard from './pages/AdminBoard';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="cart" element={<Cart />} />
      <Route path="register" element={<Register />} />
      <Route path="Login" element={<Login />} />
      <Route path="admin" element={<AdminBoard />} />
      <Route path="products" element={<Catalog />}>
        <Route index element={<Productlist />} />
        <Route path=":id" element={<Product />} loader={detailLoader} />
      </Route>
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
