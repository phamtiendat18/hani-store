import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "@fontsource/roboto"; // Mặc định trọng số 400
import "@fontsource/roboto/500.css"; // Import trọng số 500
import "@fontsource/roboto/700.css"; // Import trọng số 700
import Products from "./pages/Products.jsx";
import Hot from "./pages/Hot.jsx";
import SearchResults from "./pages/SearchResults.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import HelpCenter from "./pages/HelpCenter.jsx";
import ProductPage from "./pages/ProductPage.jsx";
import Blog from "./pages/Blog.jsx";
import ProductDetail from "./pages/ProductDetail.jsx";
import Cart from "./pages/Cart.jsx";
import Payment from "./pages/Payment.jsx";
import UserProfile from "./pages/UserProfile.jsx";
import MyOrder from "./pages/MyOrder.jsx";
import Like from "./pages/Like.jsx";
import Notifications from "./pages/Notifications.jsx";
import Login from "./pages/Login.jsx";
import CheckoutPage from "./pages/CheckoutPage.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/products",
    element: <Products page={"products"} namePage={"Sản phẩm"} />,
  },
  {
    path: "/hot-trend",
    element: <Hot page={"hot"} namePage={"Hot trend"} />,
  },
  {
    path: "/search-results",
    element: <SearchResults />,
  },
  {
    path: "/about-us",
    element: <AboutUs />,
  },
  {
    path: "/help",
    element: <HelpCenter />,
  },
  {
    path: "/blog",
    element: <Blog />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path: "/payment",
    element: <CheckoutPage />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/notification",
    element: <Notifications />,
  },
  {
    path: "/product-detail",
    element: <ProductDetail />,
  },
  {
    path: "/me/account",
    element: <UserProfile />,
  },
  {
    path: "/me/orders",
    element: <MyOrder />,
  },
  {
    path: "/me/favorites",
    element: <Like />,
  },
  {
    path: "/products/dress",
    element: (
      <ProductPage page={"products"} namePage={"Đầm/ Váy"} isProd={true} />
    ),
  },
  {
    path: "/products/t-shirt",
    element: <ProductPage page={"products"} namePage={"Áo"} isProd={true} />,
  },
  {
    path: "/products/trouser",
    element: <ProductPage page={"products"} namePage={"Quần"} isProd={true} />,
  },
  {
    path: "/products/shirt",
    element: (
      <ProductPage page={"products"} namePage={"Chân váy"} isProd={true} />
    ),
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </StrictMode>
);
