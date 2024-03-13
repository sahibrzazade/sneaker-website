import React, { useContext, useEffect } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { useCart } from "react-use-cart";
import { MyContext } from "../context/GlobalContext";
import { t } from "i18next";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";
import WishlistButton from "../components/WishlistButton";
import { Rating } from "@mui/material";

const Checkout = () => {
  const localCheckoutList = JSON.parse(localStorage.getItem("checkoutList"));

  const { isDarkTheme, productList } = useContext(MyContext);

  const navigate = useNavigate();

  const { addItem } = useCart();

  useEffect(() => {
    document.title = "Enzy | Checkout";
  }, []);

  const recommendedList = productList
    .slice(Math.floor(Math.random() * 7), 12)
    .filter((item) => item.isAvailable === true);

  recommendedList.length = 4;

  return (
    <div
      style={{ backgroundColor: isDarkTheme === true ? "black" : "white" }}
      className={`contaier-fluid text-${isDarkTheme ? "light" : "dark"}`}
    >
      <div className="container">
        <div className="row pt-5">
          <FaCheckCircle
            style={{ fontSize: "200px" }}
            className="text-success"
          />
          <p className="text-uppercase text-center fs-2 fw-bold my-5">
            {t("checkout.0")}
          </p>
        </div>

        <div className="row my-3">
          <div className="col-12 col-lg-8">
            <table
              className={`m-0 table ${
                isDarkTheme ? "table-dark" : "table-light"
              }`}
            >
              <thead>
                <tr>
                  <th scope="col fs-6">{t("cart.2")}</th>
                  <th scope="col fs-6">{t("cart.3")}</th>
                  <th scope="col fs-6">{t("cart.4")}</th>
                  <th scope="col fs-6">{t("cart.5")}</th>
                </tr>
              </thead>
              <tbody>
                {localCheckoutList.items.map((item) => (
                  <tr key={item.id}>
                    <td className="fs-5 align-middle">
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
                    <td className="align-middle ">${item.price}</td>
                    <td className="align-middle">{item.quantity}</td>
                    <td className="align-middle">
                      ${item.quantity * item.price}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="col-12 col-lg-4 mt-3 mt-lg-0">
            <div className="border m-2 px-1">
              <div className="border-bottom py-2">{t("checkout.1")}</div>
              <div className="">
                <p className="my-4">
                  {t("cart.5")}: ${localCheckoutList.subtotal}
                </p>
                <p style={{ color: "orange" }} className="my-4">
                  {t("cart.8")}: $
                  {localCheckoutList.subtotal < 300
                    ? (localCheckoutList.subtotal *
                        localCheckoutList.discount) /
                      100
                    : localCheckoutList.discount * 3}
                </p>
                <p style={{ color: "green" }} className="mt-4  fs-4 border-top">
                  {t("cart.6")}: $
                  {localCheckoutList.subtotal -
                    (localCheckoutList.subtotal < 300
                      ? (localCheckoutList.subtotal *
                          localCheckoutList.discount) /
                        100
                      : localCheckoutList.discount * 3)}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row align-items-center justify-content-center flex-column py-5">
          <div className="fs-2 text-center fw-bolder text-uppercase">
            {t("checkout.2")}
          </div>
          <div className="row m-0 py-5 align-items-center justify-content-center ">
            {recommendedList?.map((p) => (
              <div
                className="products my-3 col-12 col-md-6 col-lg-4 col-xl-3 products d-flex flex-column"
                key={p?.id}
              >
                <div className="flex-column">
                  <div
                    onClick={() => navigate(`/shop/${p?.id}`)}
                    className="product-img border p-0 me-2 col position-relative"
                  >
                    <img
                      src={p?.image}
                      className="img-fluid"
                      alt=""
                      style={{ width: "100%", height: "300px" }}
                    />
                    <div className="product-hover h-100 w-100 bg-dark position-absolute top-0 invisible d-flex align-items-center justify-content-center"></div>
                    <div
                      id="product-hover-button"
                      className="product-hover h-100 w-100 d-flex align-items-center invisible justify-content-center position-absolute bottom-0 "
                    >
                      <button
                        style={{ width: "170px", height: "40px" }}
                        className={`${
                          isDarkTheme === true ? "dark-button" : "light-button"
                        } border border-dark-subtle rounded-0 text-uppercase `}
                      >
                        {t("shop.1")}
                      </button>
                    </div>
                  </div>
                  <div className="col mt-3 mb-1 d-flex justify-content-between">
                    <div className="products-title fs-6">
                      <Link
                        className={`link-hover-orange text-decoration-none  text-${
                          isDarkTheme === true ? "light" : "dark"
                        }`}
                        to={`/shop/${p?.id}`}
                      >
                        {p?.title}
                      </Link>
                    </div>
                  </div>
                  <div className="col d-flex mb-2">
                    <span className="me-2">{p?.raiting}</span>
                    <Rating
                      name="read-only"
                      defaultValue={p?.raiting}
                      precision={0.1}
                      readOnly
                    />
                    <span>({p?.raitingNumber})</span>
                  </div>
                  <div className="col mb-3">
                    <div className="fs-6 fw-bolder">${p?.price}</div>
                  </div>
                  <div className="col d-flex">
                    {p?.isAvailable === true ? (
                      <>
                        <div
                          className="me-2"
                          style={{ height: "40px", width: "40px" }}
                        >
                          <button
                            onClick={() => {
                              addItem(p);
                              toast.success(`${p?.title} ${t("toast.0")}`);
                            }}
                            style={{ height: "100%", width: "100%" }}
                            className={`${
                              isDarkTheme === true
                                ? "dark-button"
                                : "light-button"
                            } col border border-dark-subtle rounded-0 text-uppercase`}
                          >
                            <IoCartOutline
                              style={{ height: "30px", width: "30px" }}
                            />
                          </button>
                        </div>
                        <div style={{ height: "40px", width: "40px" }}>
                          <WishlistButton p={p} />
                        </div>
                      </>
                    ) : (
                      <>
                        <div style={{ height: "40px" }} className="text-danger">
                          {t("shop.2")}
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
