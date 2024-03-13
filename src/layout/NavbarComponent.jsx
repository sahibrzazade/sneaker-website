import React, { useContext, useEffect, useState } from "react";

//================ React i18next ============================

import i18n from "../i18n/i18next";
import { useTranslation } from "react-i18next";
import { t } from "i18next";
import { Link, useNavigate } from "react-router-dom";

//================= React Icons =============================

import { FaHeart } from "react-icons/fa";
import { RiHeart3Line } from "react-icons/ri";
import { FaRegUser } from "react-icons/fa";
import { FaShoppingBasket } from "react-icons/fa";

import { DarkModeSwitch } from "react-toggle-dark-mode";
import { Select } from "antd";
import { MyContext } from "../context/GlobalContext";
import { useCart, totalItems } from "react-use-cart";
import { useWishlist } from "react-use-wishlist";
import { toast } from "react-toastify";

const NavbarComponent = () => {
  const {
    isDarkTheme,
    setIsDarkTheme,
    registeredUsers,
    setregisteredUsers,
    loggedAccount,
    setLoggedAccount,
  } = useContext(MyContext);
  const { totalItems } = useCart();
  const { items } = useWishlist();
  const navigate = useNavigate();

  const handleChangeLang = (lang) => {
    i18n.changeLanguage(lang);
  };

  const handleChangeTheme = (checked) => {
    setIsDarkTheme(checked);
    localStorage.setItem("isDarkTheme", checked);
  };

  useEffect(() => {
    JSON.parse(localStorage.getItem("loggedAccount"));
  }, [JSON.parse(localStorage.getItem("loggedAccount"))]);

  const localStorageUsers = JSON.parse(localStorage.getItem("registeredUsers"));
  return (
    <>
      <nav
        style={{ backgroundColor: isDarkTheme === true ? "black" : "white" }}
        className="navbar navbar-expand-lg sticky-top border-bottom "
      >
        <div className="container-md">
          <Link to="/" className="navbar-brand ms-0 ms-lg-5">
            <img
              src={
                isDarkTheme === true
                  ? "https://demothemesky-be87.kxcdn.com/enzy-sneaker/wp-content/uploads/2020/04/logo-light.png"
                  : "https://demothemesky-be87.kxcdn.com/enzy-sneaker/wp-content/uploads/2020/04/logo.png"
              }
              alt=""
              width="100"
              height="36"
            />
          </Link>
          <button
            style={{
              backgroundColor: isDarkTheme === true ? "black" : "white",
            }}
            className="navbar-toggle border d-lg-none d-block p-2 rounded"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="hamburger">
              <div
                style={{
                  backgroundColor: isDarkTheme === true ? "white" : "black",
                }}
                className="bar"
              ></div>
              <div
                style={{
                  backgroundColor: isDarkTheme === true ? "white" : "black",
                }}
                className="bar"
              ></div>
              <div
                style={{
                  backgroundColor: isDarkTheme === true ? "white" : "black",
                }}
                className="bar"
              ></div>
            </span>
          </button>
          <div className="collapse navbar-collapse " id="navbarText">
            <ul className="navbar-nav ps-0 ps-xl-5 mx-md-auto d-flex align-items-center mb-2 mb-lg-0">
              <li className="nav-item position-relative mx-2 py-2">
                <Link
                  style={{ textTransform: "uppercase", fontSize: "14px" }}
                  to="/"
                  className={`nav-link  fw-bold p-0 ${
                    isDarkTheme === true ? "text-light" : "text-black"
                  }`}
                >
                  <div
                    style={{
                      backgroundColor: `${
                        isDarkTheme === true ? "white" : "black"
                      }`,
                    }}
                    className="navbar-links-underline"
                  ></div>
                  {t("nav.0")}
                </Link>
              </li>
              <li className="nav-item position-relative mx-2 py-2">
                <Link
                  style={{ textTransform: "uppercase", fontSize: "14px" }}
                  to="/shop"
                  className={`nav-link fw-bold p-0 ${
                    isDarkTheme === true ? "text-light" : "text-black"
                  }`}
                >
                  {t("nav.1")}
                </Link>
                <div
                  style={{
                    backgroundColor: `${
                      isDarkTheme === true ? "white" : "black"
                    }`,
                  }}
                  className="navbar-links-underline"
                ></div>
              </li>
              <li className="nav-item position-relative mx-2 py-2">
                <Link
                  style={{ textTransform: "uppercase", fontSize: "14px" }}
                  to="/blogs"
                  className={` nav-link  fw-bold p-0 ${
                    isDarkTheme === true ? "text-light" : "text-black"
                  }`}
                >
                  {t("nav.2")}
                </Link>
                <div
                  style={{
                    backgroundColor: `${
                      isDarkTheme === true ? "white" : "black"
                    }`,
                  }}
                  className="navbar-links-underline"
                ></div>
              </li>
              <li
                id="nav-item4"
                className="nav-item d-none d-lg-block position-relative mx-2 py-2"
              >
                <span
                  style={{ textTransform: "uppercase", fontSize: "14px" }}
                  className={` nav-link  fw-bold p-0 ${
                    isDarkTheme === true ? "text-light" : "text-black"
                  }`}
                >
                  {t("nav.3")}
                </span>
                <div
                  style={{
                    backgroundColor: `${
                      isDarkTheme === true ? "white" : "black"
                    }`,
                  }}
                  className="navbar-links-underline"
                ></div>
                <div
                  className={`more-container d-none d-lg-flex flex-column justify-content-around  bg-${
                    isDarkTheme === true ? "black border" : "white border"
                  }`}
                >
                  <ul className="text-white list-unstyled d-flex align-items-start flex-column ms-5">
                    <li>
                      <Link
                        style={{ textTransform: "uppercase", fontSize: "14px" }}
                        className={`blog-links position-relative text-decoration-none my-1 fw-bold ${
                          isDarkTheme === true ? "text-light" : "text-black"
                        }`}
                        to="/about-us"
                      >
                        <div
                          style={{
                            backgroundColor: `${
                              isDarkTheme === true ? "white" : "black"
                            }`,
                          }}
                          className="blog-links-underline"
                        ></div>
                        {t("nav.4")}
                      </Link>
                    </li>
                    <li>
                      <Link
                        style={{ textTransform: "uppercase", fontSize: "14px" }}
                        className={`blog-links position-relative text-decoration-none my-1 fw-bold ${
                          isDarkTheme === true ? "text-light" : "text-black"
                        }`}
                        to="/contact-us"
                      >
                        <div
                          style={{
                            backgroundColor: `${
                              isDarkTheme === true ? "white" : "black"
                            }`,
                          }}
                          className="blog-links-underline"
                        ></div>
                        {t("nav.5")}
                      </Link>
                    </li>

                    <li>
                      <Link
                        style={{ textTransform: "uppercase", fontSize: "14px" }}
                        className={`blog-links position-relative text-decoration-none my-1 fw-bold ${
                          isDarkTheme === true ? "text-light" : "text-black"
                        }`}
                        to="/faq-page"
                      >
                        <div
                          style={{
                            backgroundColor: `${
                              isDarkTheme === true ? "white" : "black"
                            }`,
                          }}
                          className="blog-links-underline"
                        ></div>
                        {t("nav.6")}
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="nav-item d-block d-lg-none position-relative mx-2 py-2">
                <Link
                  style={{ textTransform: "uppercase", fontSize: "14px" }}
                  to="/about-us"
                  className={`nav-link fw-bold p-0 ${
                    isDarkTheme === true ? "text-light" : "text-black"
                  }`}
                >
                  {t("nav.4")}
                </Link>
                <div
                  style={{
                    backgroundColor: `${
                      isDarkTheme === true ? "white" : "black"
                    }`,
                  }}
                  className="navbar-links-underline"
                ></div>
              </li>
              <li className="nav-item d-block d-lg-none position-relative mx-2 py-2">
                <Link
                  style={{ textTransform: "uppercase", fontSize: "14px" }}
                  to="/contact-us"
                  className={`nav-link fw-bold p-0 ${
                    isDarkTheme === true ? "text-light" : "text-black"
                  }`}
                >
                  {t("nav.5")}
                </Link>
                <div
                  style={{
                    backgroundColor: `${
                      isDarkTheme === true ? "white" : "black"
                    }`,
                  }}
                  className="navbar-links-underline"
                ></div>
              </li>
              <li className="nav-item d-block d-lg-none position-relative mx-2 py-2">
                <Link
                  style={{ textTransform: "uppercase", fontSize: "14px" }}
                  to="/faq-page"
                  className={`nav-link fw-bold p-0 ${
                    isDarkTheme === true ? "text-light" : "text-black"
                  }`}
                >
                  {t("nav.6")}
                </Link>
                <div
                  style={{
                    backgroundColor: `${
                      isDarkTheme === true ? "white" : "black"
                    }`,
                  }}
                  className="navbar-links-underline"
                ></div>
              </li>
            </ul>
            <div className="d-flex align-items-center justify-content-center mb-2">
              <Select
                defaultValue={i18n.language}
                style={{ width: 70, marginRight: "10px" }}
                onChange={handleChangeLang}
                options={[
                  { value: "en", label: "En" },
                  { value: "az", label: "Az" },
                ]}
              />
              <DarkModeSwitch
                style={{ marginRight: "3px", marginLeft: "3px" }}
                checked={isDarkTheme}
                onChange={handleChangeTheme}
                size={30}
              />
              <div
                className="profileLink position-relative"
                style={{ cursor: "pointer" }}
              >
                <Link
                  to={`${loggedAccount?.isLoggedIn === true ? "" : "/login"}`}
                >
                  <FaRegUser
                    style={{
                      height: "24px",
                      width: "24px",
                      marginLeft: "8px",
                      marginRight: "8px",
                    }}
                    className={`${
                      isDarkTheme === true ? "text-white" : "text-black"
                    }`}
                  />
                </Link>
                <div
                  style={{ top: "48px", left: "-120px", width: "260px" }}
                  className={`more-container d-none d-lg-flex flex-column justify-content-around  bg-${
                    isDarkTheme === true ? "black border" : "white border"
                  }`}
                >
                  {loggedAccount?.isLoggedIn == true ? (
                    <ul
                      className={`text-${
                        isDarkTheme ? "light" : "dark"
                      } list-unstyled d-flex align-items-start flex-column mx-4`}
                    >
                      <p>
                        {t("nav.7") + " "}
                        {loggedAccount?.registerUsername}!
                      </p>
                      <div>
                        <button
                          className={`${
                            isDarkTheme ? "dark-button" : "light-button"
                          } px-3 py-1 mx-1`}
                          onClick={() => {
                            const newRegisteredUsers = localStorageUsers.map(
                              (x) => {
                                if (
                                  x.registerEmail !==
                                  loggedAccount.registerEmail
                                ) {
                                  return x;
                                } else {
                                  console.log(x);
                                  localStorage.setItem(
                                    "loggedAccount",
                                    JSON.stringify(x)
                                  );
                                  return { ...x, isLoggedIn: false };
                                }
                              }
                            );
                            localStorage.setItem(
                              "registeredUsers",
                              JSON.stringify(newRegisteredUsers)
                            );
                            navigate("/login");

                            setLoggedAccount({
                              registerUsername: "",
                              registerEmail: "",
                              registerPassword: "",
                              isAdmin: false,
                              isLoggedIn: false,
                            });
                          }}
                        >
                          {t("nav.8")}
                        </button>

                        {loggedAccount?.isAdmin === true ? (
                          <button
                            onClick={() => navigate("/admin")}
                            className={`${
                              isDarkTheme ? "dark-button" : "light-button"
                            } px-3 py-1 mx-1`}
                          >
                            Admin
                          </button>
                        ) : (
                          ""
                        )}
                      </div>
                    </ul>
                  ) : (
                    <div className="mx-4">
                      <p
                        className={`fs-6 text-${
                          isDarkTheme === true ? "light" : "dark"
                        }`}
                      >
                        {t("nav.9")}
                      </p>
                      <button
                        className={`${
                          isDarkTheme === true ? "dark-button" : "light-button"
                        } px-3 py-1`}
                        onClick={() => navigate("/login")}
                      >
                        {t("nav.10")}
                      </button>
                    </div>
                  )}
                </div>
              </div>

              <div className="position-relative">
                <Link className="text-black" to="/wishlist">
                  <FaHeart
                    style={{
                      marginLeft: "8px",
                      marginRight: "8px",
                      height: "24px",
                      width: "24px",
                    }}
                    className={`${
                      isDarkTheme === true ? "text-white" : "text-black"
                    } `}
                  />
                </Link>
                <div
                  style={{
                    height: "18px",
                    width: "18px",
                    backgroundColor: "red",
                  }}
                  className="d-flex align-items-center justify-content-center position-absolute end-0 top-0 text-light rounded-circle"
                >
                  {items.length}
                </div>
              </div>

              <div className="position-relative">
                <Link to="/cart">
                  <FaShoppingBasket
                    style={{
                      marginTop: "2px",
                      height: "28px",
                      width: " 28px",
                      marginLeft: "8px",
                      marginRight: "8px",
                    }}
                    className={`${
                      isDarkTheme === true ? "text-white" : "text-black"
                    }`}
                  />
                </Link>
                <div
                  style={{
                    height: "18px",
                    width: "18px",
                    backgroundColor: "red",
                  }}
                  className="d-flex align-items-center justify-content-center position-absolute end-0 top-0 text-light rounded-circle"
                >
                  {totalItems}
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
export default NavbarComponent;
