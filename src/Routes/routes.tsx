import React from 'react';
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
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
  PasswordReset,
  Profile,
  PasswordUpdate,
} from '../pages';
import { RequireAuth } from '../components';
import { Register } from '../pages/Register';
import NeedPRI from '../features/authentication/components/NeedPRI';
import { ProfileUpdate } from '../pages/profile/profileUpdate';
import Settings from '../components/dashboards/Settings';
import TokenInputModalRender from '../features/authentication/twoFA/tokenInputModal';
import { AdminDashboardLayout } from '../layouts/AdminDashboardLayout';
import { Users } from '../pages/Admin/Users';
import { Buyers } from '../pages/Admin/Buyers';
import { Sellers } from '../pages/Admin/Sellers';
import { Disabled } from '../pages/Admin/Disabled';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="product/:id" element={<ProductDetails />} />

      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="profile/:userId" element={<Profile />} />
      <Route path="profile/edit/:userId" element={<ProfileUpdate />} />

      <Route path="forbidden" element={<Forbidden />} />
      <Route path="password-reset" element={<PasswordReset />} />
      <Route path="update-password" element={<PasswordUpdate />} />

      <Route
        path="dashboard"
        element={<RequireAuth allowedRoles={['Seller']} />}
      >
        <Route path="seller" element={<SellerDashboardLayout />}>
          <Route index element={<SellerCentral />} />
          <Route path="product">
            <Route index element={<SellerProducts />} />
            <Route path="create" element={<CreateProduct />} />
            <Route path="update/:id" element={<UpdateProduct />} />
            <Route path=":id" element={<ProductDetails />} />
          </Route>
          <Route path="settings">
            <Route index element={<Settings />} />
            <Route
              path="2fa/success-route"
              element={<TokenInputModalRender />}
            />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Route>
      <Route
        path="dashboard"
        element={<RequireAuth allowedRoles={['Admin']} />}
      >
        <Route path="admin" element={<AdminDashboardLayout />}>
          <Route path="users">
            <Route path="all" element={<Users />} />
            <Route path="buyer" element={<Buyers />} />
            <Route path="seller" element={<Sellers />} />
            <Route path="disabled" element={<Disabled />} />
          </Route>
        </Route>
      </Route>
      <Route path="need-pri" element={<NeedPRI />} />

      <Route path="*" element={<NotFound />} />
    </Route>,
  ),
);
