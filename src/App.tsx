import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Menu from "./components/menu/Menu";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products";
import Users from "./pages/Users/Users";
import "./styles/global.scss"


function App() {
  const Layout = () => {
    return (
      <div className="main">
        <Navbar />

        <div className="container">
          <div className="menu-container">
            <Menu />
          </div>

          <div className="content-container">
            <Outlet />
          </div>
        </div>

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
        },
        {
          path: "/products",
          element: <Products />,
        },
        {
          path: "/users",
          element: <Users />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
