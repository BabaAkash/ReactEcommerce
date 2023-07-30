import React from 'react';

// import { Counter } from './features/counter/Counter';
import './App.css';
import Home from './page/home';
import LoginPage from './page/LoginPage';
import SignUpPage from './page/SignUpPage';
import CartPage from './page/cartPage';
import Checkout from './page/checkout';
import ProductDetailPage from './page/productDetailPage';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Protected from './features/auth/component/Protected';

const router = createBrowserRouter([
  {
    path: "/",
    element:<Protected>
      <Home></Home>
    </Protected>,
  },
  {
    path: "/login",
    element: <LoginPage></LoginPage>,
  },
  {
    path: "/Signup",
    element: <SignUpPage></SignUpPage>,
  },
  {// only for testing , after then createing page for cart
    path: "/cart",
    element: <Protected>
      <CartPage></CartPage>
    </Protected>,
  },
   {
    path: "/checkout",
    element: <Protected>
      <Checkout></Checkout>
    </Protected>,
  },
  {
    path: "/product-detail/:id",
    element: <Protected>
      <ProductDetailPage></ProductDetailPage>
    </Protected>,
  },
]);

function App() {
  return (
    <div className="App">
   <RouterProvider router={router} />
    </div>
  );
}

export default App;
