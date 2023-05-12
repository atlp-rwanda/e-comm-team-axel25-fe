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
  PasswordReset,
  Register,
  Chat,
  Profile,
  PasswordUpdate,

} from '../pages';
import { RequireAuth } from '../components';
import NeedPRI from '../features/authentication/components/NeedPRI';
import { ProfileUpdate } from '../pages/profile/profileUpdate';
import Settings from '../components/dashboards/Settings';
import TokenInputModalRender from '../features/authentication/twoFA/tokenInputModal';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="product/:id" element={<ProductDetails />} />

      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="profile/:userId" element={<Profile />} />
      <Route path="profile/edit/:userId" element={<ProfileUpdate />} />
      <Route path="chat" element={<Chat />} />
      <Route path="chat/:userId" element={<Chat />} />

      <Route path="forbidden" element={<Forbidden />} />
      <Route path="password-reset" element={<PasswordReset />} />
      <Route path="update-password" element={<PasswordUpdate />} />

      <Route path="dashboard" element={<RequireAuth allowedRoles={['Seller']} />}>
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

      <Route path="need-pri" element={<NeedPRI />} />

      <Route path="need-pri" element={<NeedPRI />} />

      <Route path="*" element={<NotFound />} />
    </Route>,
  ),
);
