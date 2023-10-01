import "./App.css";
import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
  createHashRouter,
} from "react-router-dom";
import Home from "./Components/Home/Home";
import Products from "./Components/Products/Products";
import Cart from "./Components/Cart/Cart";
import Brands from "./Components/Brands/Brands";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import Categories from "./Components/Categories/Categories";
import Layout from "./Components/Layout/Layout";
import NotFound from "./Components/NotFound/NotFound";
import DisplayCategory from "./Components/DisplayCategory/DisplayCategory";
import DisplayProduct from "./Components/DisplayProduct/DisplayProduct";
import UserContextProvider from "./Context/UserContaxt";
import WishList from "./Components/WishList/WishList";
let routes = createHashRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: "/", element: <Navigate to={"/Home"} /> },
      { path: "/Home", element: <Home /> },
      { path: "/Products", element: <Products /> },
      { path: "/Cart", element: <Cart /> },
      { path: "/Categories", element: <Categories /> },
      { path: "/Brands", element: <Brands /> },
      { path: "/Login", element: <Login /> },
      { path: "/Register", element: <Register /> },
      { path: "/DisplayProduct/:id", element: <DisplayProduct /> },
      { path: "/Wishlist", element: <WishList /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

function App() {
  return (
    <UserContextProvider>
      <RouterProvider router={routes}></RouterProvider>;
    </UserContextProvider>
  );
}

export default App;
