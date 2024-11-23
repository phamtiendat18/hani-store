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
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/products",
    element: <Products />,
  },
  {
    path: "/hot-trend",
    element: <Hot />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </StrictMode>
);
