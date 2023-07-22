import React from 'react';

// import { Counter } from './features/counter/Counter';
import './App.css';
import Home from './page/home';
import LoginPage from './page/LoginPage';
import SignUpPage from './page/SignUpPage';
import CartPage from './page/cartPage';

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element:<Home></Home>,
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
    element: <CartPage></CartPage>,
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
