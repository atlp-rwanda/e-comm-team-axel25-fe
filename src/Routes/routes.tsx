import React from 'react';
import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import { SellerDashboardLayout, RootLayout } from '../layouts';
import {
  CreateProduct,
  Forbidden,
  Home,
  Login,
  NotFound,
  ProductDetails,
  SellerCentral,
  SellerProducts,
  UpdateProduct,
} from '../pages';
import { RequireAuth } from '../components';
import { Register } from '../pages/Register';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />

      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />

      <Route path="forbidden" element={<Forbidden />} />

      <Route path="dashboard" element={<RequireAuth allowedRoles={['Seller']} />}>
        <Route path="seller" element={<SellerDashboardLayout />}>
          <Route index element={<SellerCentral />} />
          <Route path="product">
            <Route index element={<SellerProducts />} />
            <Route path="create" element={<CreateProduct />} />
            <Route path="update/:id" element={<UpdateProduct />} />
            <Route path=":id" element={<ProductDetails />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Route>

      <Route path="*" element={<NotFound />} />
    </Route>,
  ),
);
