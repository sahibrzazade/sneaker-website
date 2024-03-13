import React, { useContext, useEffect, useState } from "react";
import { useCart } from "react-use-cart";
import { MyContext } from "../context/GlobalContext";
import { t } from "i18next";
import { Link, json, useNavigate } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";
import { toast } from "react-toastify";

import { couponList } from "../data/couponData";

const Cart = () => {
  const { discount, setDiscount, loggedAccount } = useContext(MyContext);

  const {
    isEmpty,
    items,
    updateItemQuantity,
    removeItem,
    cartTotal,
    emptyCart,
  } = useCart();

  useEffect(() => {
    document.title = "Enzy | Cart";
  }, []);

  const [couponInput, setCouponInput] = useState("");

  const handleCouponBtn = () => {
    if (couponInput === couponList[0]) {
      setDiscount(30);
      toast.success(couponInput + " " + t("toast.2"));
      setCouponInput("");
    } else if (couponInput === couponList[1]) {
      setDiscount(30);
      toast.success(couponInput + " " + t("toast.2"));
      setCouponInput("");
    } else {
      setDiscount(0);
      toast.error(couponInput + " " + t("toast.4"));
      setCouponInput("");
    }
  };

  const handleCheckout = () => {
    emptyCart();
    localStorage.setItem(
      "checkoutList",
      JSON.stringify({ items: items, subtotal: cartTotal, discount: discount })
    );
    setDiscount(0);
    toast.success(t("toast.7"));
    navigate("/checkout");
  };

  const navigate = useNavigate();

  const { isDarkTheme } = useContext(MyContext);

  if (isEmpty)
    return (
      <div
        className="container-fluid"
        style={{ backgroundColor: isDarkTheme ? "black" : "white" }}
      >
        <div
          className={`container py-5 text-${isDarkTheme ? "light" : "dark"}`}
        >
          <div className="row">
            <div className="my-5 d-flex align-items-center justify-content-center">
              <p className="fs-1 fw-bolder text-uppercase text-center">
                {t("cart.0")}
              </p>
            </div>
            <div className="d-flex justify-content-center">
              <IoCartOutline style={{ height: "200px", width: "200px" }} />
            </div>
            <div className="d-flex align-items-center justify-content-center">
              <button
                style={{
                  width: "200px",
                  height: "60px",
                  fontWeight: "600",
                }}
                className={`${
                  isDarkTheme ? "dark-button" : "light-button"
                } border rounded-0 text-uppercase my-5`}
                onClick={() => navigate("/shop")}
              >
                {t("cart.1")}
              </button>
            </div>
          </div>
        </div>
      </div>
    );

  return (
    <>
      <div
        className="container-fluid"
        style={{ backgroundColor: isDarkTheme ? "black" : "white" }}
      >
        <div
          className={`container py-5 text-${isDarkTheme ? "light" : "dark"}`}
        >
          <table
            className={`m-0 table ${
              isDarkTheme ? "table-dark" : "table-light"
            }`}
          >
            <thead>
              <tr>
                <th scope="col fs-6">{t("cart.2")}</th>
                <th className="d-none d-md-block" scope="col fs-6">
                  {t("cart.3")}
                </th>
                <th scope="col fs-6">{t("cart.4")}</th>
                <th scope="col fs-6">{t("cart.5")}</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item) => (
                <tr key={item.id}>
                  <td className="fs-5 align-middle">
                    <button
                      className={`btn btn-${
                        isDarkTheme ? "dark" : "light"
                      } fs-3 d-inline fw-bold me-0 me-md-2`}
                      onClick={() => {
                        removeItem(item.id);
                        toast.error(`${item.title} ${t("toast.1")}`);
                      }}
                    >
                      x
                    </button>
                    <img
                      src={item.image}
                      className=" d-sm-inline mx-1"
                      style={{ maxWidth: "100px", cursor: "pointer" }}
                      alt=""
                      onClick={() => navigate(`/shop/${item?.id}`)}
                    />
                    <div className="mx-0 mx-md-3 fs-6 d-none d-md-inline text-uppercase">
                      <Link
                        className={`link-hover-orange text-decoration-none  text-${
                          isDarkTheme ? "light" : "dark"
                        }`}
                        to={`/shop/${item.id}`}
                      >
                        {item.title}
                      </Link>
                    </div>
                  </td>
                  <td className="align-middle d-none d-md-table-cell">
                    ${item.price}
                  </td>
                  <td className="align-middle">
                    <button
                      className={`btn btn-${
                        isDarkTheme ? "dark" : "light"
                      } mx-1 p-0 p-md-1`}
                      onClick={() =>
                        updateItemQuantity(item.id, item.quantity - 1)
                      }
                    >
                      -
                    </button>
                    {item.quantity}
                    <button
                      className={`btn btn-${
                        isDarkTheme ? "dark" : "light"
                      } mx-1 p-0 p-md-1`}
                      onClick={() =>
                        updateItemQuantity(item.id, item.quantity + 1)
                      }
                    >
                      +
                    </button>
                  </td>
                  <td className="align-middle">
                    ${item.price * item.quantity}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="my-5 row justify-content-around">
            <div className="col d-flex flex-column flex-md-row">
              <input
                style={{
                  height: "50px",
                  display: discount !== 0 ? "none" : "block",
                }}
                className={`contact-input border-0 border-bottom border-dark ps-2 text-${
                  isDarkTheme ? "light" : "dark"
                } bg-${isDarkTheme ? "dark" : "light"}`}
                type="text"
                name=""
                id=""
                value={couponInput}
                onChange={(e) => setCouponInput(e.target.value)}
                disabled={discount !== 0 ? true : false}
              />
              <button
                style={{
                  width: "180px",
                  height: "50px",
                  fontWeight: "600",
                  display: discount !== 0 ? "none" : "inline",
                }}
                className={`${
                  isDarkTheme ? "dark-button" : "light-button"
                } rounded-0 text-uppercase mx-0 mx-md-4 my-3 my-md-0`}
                onClick={() => (couponInput !== "" ? handleCouponBtn() : "")}
              >
                {t("cart.7")}
              </button>
              {discount !== 0 ? (
                <button
                  style={{
                    width: "200px",
                    height: "50px",
                    fontWeight: "600",
                  }}
                  className={`${
                    isDarkTheme ? "dark-button" : "light-button"
                  } rounded-0 mx-1`}
                  onClick={() => setDiscount(0)}
                >
                  Remove Your Coupon
                </button>
              ) : (
                ""
              )}
            </div>

            <div className="col d-flex flex-column align-items-end">
              <p className="text-end fs-6">
                {t("cart.5")}: ${cartTotal}
              </p>
              <p style={{ color: "orange" }} className="fs-6">
                {t("cart.8")}: $
                {cartTotal < 300 ? (cartTotal * discount) / 100 : discount * 3}
              </p>

              <p className="fs-6 fw-bolder ">
                {t("cart.6")} : $
                {cartTotal < 300
                  ? cartTotal - (cartTotal * discount) / 100
                  : cartTotal - discount * 3}
              </p>
              {loggedAccount.isLoggedIn ? (
                <button
                  style={{
                    width: "200px",
                    height: "60px",
                    fontWeight: "600",
                  }}
                  className={`${
                    isDarkTheme ? "dark-button" : "light-button"
                  } rounded-0 mt-3`}
                  onClick={handleCheckout}
                >
                  {t("cart.9")}
                </button>
              ) : (
                <>
                  <p className="fs-6 text-danger">{t("cart.10")}</p>
                  <button
                    style={{
                      width: "200px",
                      height: "60px",
                      fontWeight: "600",
                    }}
                    className={`${
                      isDarkTheme ? "dark-button" : "light-button"
                    } rounded-0 mt-3`}
                    onClick={() => navigate("/login")}
                  >
                    {t("cart.11")}
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Cart;
