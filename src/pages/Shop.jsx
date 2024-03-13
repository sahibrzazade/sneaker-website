import React, { useContext, useEffect, useState } from "react";
import { useCart } from "react-use-cart";
import { MyContext } from "../context/GlobalContext";
import { toast } from "react-toastify";
import { IoCartOutline } from "react-icons/io5";
import { FaFilter } from "react-icons/fa";
import { t } from "i18next";
import { Link, useNavigate } from "react-router-dom";
import { Rating } from "@mui/material";
import Loading from "../components/Loading";
import { Empty, Select, Slider } from "antd";
import WishlistButton from "../components/WishlistButton";

const Shop = () => {
  const { isDarkTheme, productList, loading } = useContext(MyContext);
  const { addItem } = useCart();
  const navigate = useNavigate();
  const [state, setState] = useState(productList);
  const [query, setQuery] = useState("");

  const [price, setPrice] = useState({
    minPrice: 0,
    maxPrice: 500,
  });

  useEffect(() => {
    document.title = "Enzy | Shop";
  }, []);

  useEffect(() => {
    setState(productList);
  }, [productList]);

  const myBrands = [...new Set(productList.map((item) => item.brand))];

  const changeCategory = (myBrand) => {
    if (myBrand === "All") {
      setState(productList);
      return;
    }

    const filteredArray = productList.filter((item) => item.brand === myBrand);
    setState(filteredArray);
  };

  const handleRange = (event) => {
    setPrice({
      ...price,
      minPrice: event[0],
      maxPrice: event[1],
    });
  };
  const handleRangeInput = (e) => {
    setPrice({
      ...price,
      [e.target.name]: e.target.value == "" ? 0 : e.target.value,
    });
  };

  const sortProduct = (value) => {
    if (value === "default") {
      setState(productList);
      return;
    } else if (value === "low") {
      let copyState = [...state];
      let sortedProducts = copyState.sort((a, b) => b.price - a.price);
      setState(sortedProducts);
    } else if (value === "high") {
      let copyState = [...state];
      let sortedProducts = copyState.sort((a, b) => a.price - b.price);
      setState(sortedProducts);
    } else if (value === "a-z") {
      let copyState = [...state];
      let sortedProducts = copyState.sort((a, b) =>
        a.title.localeCompare(b.title)
      );
      setState(sortedProducts);
    } else if (value === "z-a") {
      let copyState = [...state];
      let sortedProducts = copyState.sort((a, b) =>
        b.title.localeCompare(a.title)
      );
      setState(sortedProducts);
    } else if (value === "highRating") {
      let copyState = [...state];
      let sortedProducts = copyState.sort((a, b) => b.raiting - a.raiting);
      setState(sortedProducts);
    } else if (value === "lowRating") {
      let copyState = [...state];
      let sortedProducts = copyState.sort((a, b) => a.raiting - b.raiting);
      setState(sortedProducts);
    }
  };

  if (loading) return <Loading />;

  return (
    <div
      style={{ backgroundColor: isDarkTheme === true ? "black" : "white" }}
      className={`contaier-fluid text-${
        isDarkTheme === true ? "light" : "dark"
      }`}
    >
      <div className="container">
        <div className="py-0 py-lg-5">
          <div className="row align-items-center justify-content-center">
            <img
              src="https://dunker.qodeinteractive.com/wp-content/uploads/2023/01/inner-img-6.jpg"
              alt=""
              className="img-fluid p-0 position relative"
            />
            <div
              style={{ letterSpacing: "3px" }}
              className="fs-1 position-absolute text-center fw-bold text-uppercase text-light"
            >
              {t("shop.0")}
            </div>
          </div>
        </div>

        <div className="container d-flex flex-column flex-md-row justify-content-between pt-0 pt-md-5 pt-lg-0">
          <div className="my-3">
            <Select
              defaultValue={t("shop.4")}
              style={{
                width: 140,
              }}
              onChange={sortProduct}
              options={[
                {
                  value: "default",
                  label: t("shop.4"),
                },
                {
                  value: "a-z",
                  label: "A-Z",
                },
                {
                  value: "z-a",
                  label: "Z-A",
                },
                {
                  value: "high",
                  label: t("shop.5"),
                },
                {
                  value: "low",
                  label: t("shop.6"),
                },
                {
                  value: "lowRating",
                  label: t("shop.7"),
                },
                {
                  value: "highRating",
                  label: t("shop.8"),
                },
              ]}
            />
            <button
              className="ms-3 rounded light-button border"
              style={{ height: "32px", width: "36px" }}
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasExample"
              aria-controls="offcanvasExample"
            >
              <FaFilter />
            </button>
          </div>

          <div>
            <label className="mx-2" htmlFor="search">
              {t("shop.11")}:
            </label>
            <input
              autoComplete="off"
              type="text"
              id="search"
              value={query}
              className={`shop-input ps-1 border-0 border-bottom border-${
                isDarkTheme === true ? "light" : "dark"
              } text-${isDarkTheme === true ? "light" : "dark"}`}
              onChange={(e) => setQuery(e.target.value)}
              style={{ height: "36px" }}
            />
          </div>
          <div
            className="offcanvas offcanvas-start"
            tabIndex={-1}
            id="offcanvasExample"
            data-bs-theme={`${isDarkTheme ? "dark" : "light"}`}
            aria-labelledby="offcanvasExampleLabel"
          >
            <div className="offcanvas-header">
              <h2 className="offcanvas-title" id="offcanvasExampleLabel">
                FILTER
              </h2>
              <button
                type="button"
                className="btn-close"
                style={{ color: "white" }}
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              />
            </div>
            <div className="offcanvas-body">
              <p className="fs-6 fw-bolder text-uppercase">{t("shop.9")}</p>
              <div className="d-flex">
                <input
                  type="radio"
                  id="All"
                  defaultChecked="true"
                  name="brand"
                  onClick={() => changeCategory("All")}
                  className="d-block mx-1"
                />
                <label htmlFor="All">{t("shop.10")}</label>
              </div>
              {myBrands.map((item, index) => (
                <div key={index} className="d-flex">
                  <input
                    type="radio"
                    id={item}
                    name="brand"
                    onClick={() => changeCategory(item)}
                    key={index}
                    className="d-block mx-1"
                  />
                  <label htmlFor={item}>{item}</label>
                </div>
              ))}
              <p className="fs-6 fw-bolder text-uppercase my-4">Filter Price</p>
              <div className="d-flex justify-content-between">
                <span>{price.minPrice}</span>
                <span>{price.maxPrice}</span>
              </div>

              <Slider
                range
                max={500}
                step={50}
                defaultValue={[0, 500]}
                onChange={handleRange}
              />

              <label htmlFor="minInput">{t("shop.12")}</label>
              <input
                style={{
                  height: "36px",
                }}
                className={`shop-input ps-1 border-0 border-bottom ${
                  isDarkTheme
                    ? "border-light text-light bg-dark"
                    : "border-dark text-dark bg-light"
                }`}
                type="text"
                name="minPrice"
                id="minInput"
                onChange={handleRangeInput}
              />
              <label htmlFor="minInput">{t("shop.13")}</label>

              <input
                style={{
                  height: "36px",
                }}
                className={`shop-input ps-1 border-0 border-bottom ${
                  isDarkTheme
                    ? "border-light text-light bg-dark"
                    : "border-dark text-dark bg-light"
                }`}
                type="text"
                name="maxPrice"
                id="maxInput"
                onChange={handleRangeInput}
              />
            </div>
          </div>
        </div>

        <div className="row m-0 py-5 align-items-center justify-content-center ">
          {state
            .filter((a) => a.title.toLowerCase().includes(query.toLowerCase()))
            .filter(
              (item) =>
                item.price >= price.minPrice && item.price <= price.maxPrice
            )
            .map((p) => (
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
                      sx={{
                        border: "#ffffff",
                      }}
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
  );
};

export default Shop;
