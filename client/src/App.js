import React from "react";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  ScrollRestoration,
} from "react-router-dom";

import { productsData } from "./api/Api";
import Product from "./components/Product";
import Cart from "./pages/Cart";
import Login from "./pages/Login";

const Layout = () => {
  return (
    <div>
      <Header />
      <ScrollRestoration />
      {/* ScrollRestoration :- ye hum tab use karte hai jaise hi hum kisi image pe click karte hai aur hume bahar jaane ke liye website icon me click karte hai to uske baad hume seedha top pe le jaaye na ki jo hum footer pe hai to footer pe hi rahe */}
      <Outlet />
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: productsData,
      },
      {
        path: "/product/:id",
        element: <Product />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);

function App() {
  return (
    <div className="font-bodyFont">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;