import { Rating } from "@mui/material";
import { t } from "i18next";
import React, { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useWishlist } from "react-use-wishlist";
import { MyContext } from "../context/GlobalContext";
import { useCart } from "react-use-cart";
import { IoCartOutline } from "react-icons/io5";
import WishlistButton from "../components/WishlistButton";
import { IoHeartSharp } from "react-icons/io5";

const Wishlist = () => {
  const { items } = useWishlist();
  const { isDarkTheme } = useContext(MyContext);

  useEffect(() => {
    document.title = "Enzy | Wishlist";
  }, []);

  const { addItem } = useCart();

  const navigate = useNavigate();

  if (items.length === 0) {
    return (
      <div
        className="container-fluid"
        style={{ backgroundColor: isDarkTheme === true ? "black" : "white" }}
      >
        <div
          className={`container py-5 text-${
            isDarkTheme === true ? "light" : "dark"
          }`}
        >
          <div className="row">
            <div className="my-5 d-flex align-items-center justify-content-center">
              <p className="fs-1 fw-bolder text-uppercase text-center">
                {t("wishlist.0")}
              </p>
            </div>
            <div className="d-flex justify-content-center">
              <IoHeartSharp style={{ height: "200px", width: "200px" }} />
            </div>
            <div className="d-flex align-items-center justify-content-center">
              <button
                style={{
                  width: "200px",
                  height: "60px",
                  fontWeight: "600",
                }}
                className={`${
                  isDarkTheme === true ? "dark-button" : "light-button"
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
  } else
    return (
      <div
        style={{ backgroundColor: isDarkTheme === true ? "black" : "white" }}
        className={`contaier-fluid text-${
          isDarkTheme === true ? "light" : "dark"
        }`}
      >
        <div className="container">
          <div className="row py-5">
            <div className="fs-1 fw-bolder d-flex text-uppercase justify-content-center">
              Wishlist
            </div>
          </div>
          <div className="row">
            {items.map((p) => (
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
                        className={`text-decoration-none link-hover-orange text-${
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
                        <div
                          className="me-3"
                          style={{ height: "40px", width: "40px" }}
                        >
                          <WishlistButton p={p} />
                        </div>
                        <div
                          style={{ height: "40px" }}
                          className="text-danger d-flex align-items-center"
                        >
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
    );
};

export default Wishlist;
