import React, { useContext, useEffect } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { CartProvider } from "react-use-cart";
import { WishlistProvider } from "react-use-wishlist";
import { ThemeProvider } from "@emotion/react";
import { MyContext } from "../context/GlobalContext";
import { createTheme } from "@mui/material";
import ScrollToTop from "../components/ScrollToTop";
import NavbarComponent from "../layout/NavbarComponent";
import { ToastContainer } from "react-toastify";
import Home from "../pages/Home";
import Faq from "../pages/Faq";
import Login from "../pages/Login";
import Register from "../pages/Register";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Shop from "../pages/Shop";
import SingleProduct from "../pages/SingleProduct";
import Cart from "../pages/Cart";
import Wishlist from "../pages/Wishlist";
import Checkout from "../pages/Checkout";
import Blogs from "../pages/Blogs";
import AddBlogs from "../admin/AddBlogs";
import Footer from "../layout/Footer";
import ScrollToTopButton from "../components/ScrollToTopButton";
import Error from "../pages/Error";
import { useSelector } from "react-redux";
import Admin from "../admin/Admin";
import EditBlog from "../admin/EditBlog";
import SingleBlog from "../pages/SingleBlog";

const AppRouter = () => {
  const { isDarkTheme, loggedAccount } = useContext(MyContext);

  const theme = createTheme({
    palette: {
      mode: isDarkTheme === true ? "dark" : "light",
    },
  });

  const blogs = useSelector((store) => store.AppReducer);
  useEffect(() => {
    localStorage.setItem("Blogs", JSON.stringify(blogs));
  }, [blogs]);

  return (
    <>
      <WishlistProvider>
        <CartProvider>
          <BrowserRouter>
            <ThemeProvider theme={theme}>
              <ScrollToTop />
              <NavbarComponent />
              <ToastContainer
                position="top-right"
                autoClose={1000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                theme="light"
                className="mt-5"
              />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/faq-page" element={<Faq />} />
                <Route
                  path="/login"
                  element={
                    loggedAccount.isLoggedIn ? <Navigate to="/" /> : <Login />
                  }
                />
                <Route
                  path="/register"
                  element={
                    loggedAccount.isLoggedIn ? (
                      <Navigate to="/" />
                    ) : (
                      <Register />
                    )
                  }
                />
                <Route path="/about-us" element={<About />} />
                <Route path="/contact-us" element={<Contact />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/shop/:id" element={<SingleProduct />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/wishlist" element={<Wishlist />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/blogs" element={<Blogs />} />
                <Route path="/blogs/:id" element={<SingleBlog />} />
                <Route
                  path="/admin"
                  element={loggedAccount.isAdmin ? <Admin /> : <Error />}
                />
                <Route
                  path="/addblog"
                  element={loggedAccount.isAdmin ? <AddBlogs /> : <Error />}
                />
                <Route
                  path="/editblog/:id"
                  element={loggedAccount.isAdmin ? <EditBlog /> : <Error />}
                />
                <Route path="*" element={<Error />} />
              </Routes>
              <Footer />
              <ScrollToTopButton />
            </ThemeProvider>
          </BrowserRouter>
        </CartProvider>
      </WishlistProvider>
    </>
  );
};

export default AppRouter;
