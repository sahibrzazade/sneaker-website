import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { MyContext } from "../context/GlobalContext";
import { Rating } from "@mui/material";
import { FaShoppingBasket } from "react-icons/fa";
import { v4 as uuidv4 } from "uuid";
import { useCart } from "react-use-cart";
import { toast } from "react-toastify";
import { t } from "i18next";
import axios from "axios";
import Loading from "../components/Loading";
import WishlistButton from "../components/WishlistButton";

const SingleProduct = () => {
  const {
    isDarkTheme,
    loading,
    setLoading,
    commentInput,
    setCommentInput,
    loggedAccount,
  } = useContext(MyContext);

  const navigate = useNavigate();
  const { addItem, updateItemQuantity } = useCart();
  const { id } = useParams();
  const [singleProduct, setSingleProduct] = useState({});

  const handleCommentInput = (e) => {
    setCommentInput(e.target.value);
  };

  useEffect(() => {
    document.title = `Enzy | ${singleProduct?.title}`;
  }, [singleProduct]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (loggedAccount.isLoggedIn === true) {
      const data = {
        comments: [
          ...singleProduct?.comments,
          JSON.stringify({
            title: commentInput,
            id: uuidv4(),
            from: loggedAccount.registerUsername,
          }),
        ],
      };
      axios
        .patch(mainUrl + `?id=eq.${id}`, data, {
          headers: {
            apikey: apiKey,
            Authorization: "Bearer " + apiKey,
            "Content-Type ": "application/json",
          },
        })
        .then(getData);
      toast.success(t("singleProduct.20"));
      setCommentInput("");
    } else if (loggedAccount.isLoggedIn === false) {
      navigate("/login");
    }
  };

  const mainUrl =
    "https://rebuqegfjzfhjqejvkrd.supabase.co/rest/v1/Product_List";

  const apiKey =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJlYnVxZWdmanpmaGpxZWp2a3JkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDAxMTc3NDUsImV4cCI6MjAxNTY5Mzc0NX0.ljcmcx3QuNj6nhRv-i14GbbKSKvQ3aATSKmhljPbaUk";

  const getData = async () => {
    try {
      setLoading(true);
      const res = await axios.get(`${mainUrl}?id=eq.${id}`, {
        headers: {
          apikey: apiKey,
          Authorization: "Bearer " + apiKey,
        },
      });
      setSingleProduct(res.data[0]);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  const handleDeleteComment = (elementId) => {
    const filteredComments = singleProduct.comments.filter(
      (element) => JSON.parse(element).id != elementId
    );
    const data = {
      comments: filteredComments,
    };

    axios
      .patch(mainUrl + `?id=eq.${id}`, data, {
        headers: {
          apikey: apiKey,
          Authorization: "Bearer " + apiKey,
          "Content-Type ": "application/json",
        },
      })
      .then(getData);
    toast.error(t("singleProduct.21"));
  };

  if (loading) return <Loading />;

  return (
    <div
      style={{ backgroundColor: isDarkTheme ? "black" : "white" }}
      className={`contaier-fluid text-${isDarkTheme ? "light" : "dark"}`}
    >
      <div className="container">
        <div className="row flex-column flex-lg-row py-5">
          <div className="col 4">
            <img
              src={singleProduct?.image}
              style={{ borderRadius: "3px" }}
              className="img-fluid"
              alt=""
            />
          </div>
          <div className="col p-4 ">
            <div className="row">
              <div className="col">
                <p className="fs-1 m-0 fw-bolder">{singleProduct?.title}</p>
              </div>
            </div>
            <div className="row">
              <div className="col my-3">
                <p className="fs-4 d-inline">{singleProduct?.brand} | </p>
                <p
                  style={{
                    color:
                      singleProduct?.isAvailable === true ? "#009900" : "red",
                  }}
                  className="fs-4 d-inline fw-bold"
                >
                  {singleProduct?.isAvailable === true
                    ? t("singleProduct.0")
                    : t("singleProduct.1")}
                </p>
                <p className="fs-4 d-inline"> | {singleProduct?.raiting}</p>
                <Rating
                  className="ms-1"
                  name="read-only"
                  defaultValue={singleProduct?.raiting}
                  precision={0.5}
                  readOnly
                />
                <p className="fs-4  d-inline">
                  ({singleProduct?.raitingNumber})
                </p>
              </div>
            </div>
            <div className="row">
              <p className="fs-4 fw-bolder">${singleProduct?.price}</p>
            </div>
            <div className="row">
              <ul className="px-4" style={{ listStyleType: "square" }}>
                <li>{t("singleProduct.2")}</li>
                <li>{t("singleProduct.3")}</li>
                <li>{t("singleProduct.4")}</li>
              </ul>
            </div>
            <div className="row">
              <p className="fs-6">
                <b>{t("singleProduct.5")}</b> : {singleProduct?.category}
              </p>
            </div>

            {singleProduct?.isAvailable === true ? (
              <>
                <div className="d-flex ">
                  <button
                    style={{
                      width: "200px",
                      height: "60px",
                      fontWeight: "600",
                    }}
                    className={`${
                      isDarkTheme === true ? "dark-button" : "light-button"
                    }  rounded-0 me-2 text-uppercase`}
                    onClick={() => {
                      addItem(singleProduct);
                      toast.success(`${singleProduct?.title} ${t("toast.0")}`);
                    }}
                  >
                    {t("singleProduct.8")}
                    <FaShoppingBasket
                      className="ms-2"
                      style={{ height: "18px", width: "18px" }}
                    />
                  </button>
                  <div className="" style={{ width: "60px", height: "60px" }}>
                    <WishlistButton singleProduct={singleProduct} />
                  </div>
                </div>
              </>
            ) : (
              <div className="row">
                <p
                  style={{ color: "red" }}
                  className="fs-6 fw-bolder text-uppercase"
                >
                  {t("singleProduct.6")}
                </p>
                <div className="d-flex">
                  <button
                    style={{
                      width: "200px",
                      height: "60px",
                      fontWeight: "600",
                    }}
                    className={`${
                      isDarkTheme === true ? "dark-button" : "light-button"
                    }  rounded-0 me-2 text-uppercase`}
                    onClick={() => navigate("/shop")}
                  >
                    {t("singleProduct.7")}
                  </button>
                  <div className="" style={{ width: "60px", height: "60px" }}>
                    <WishlistButton singleProduct={singleProduct} />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="row ">
          <div className="row pb-2">
            <ul className="list-unstyled d-flex m-0">
              <li
                style={{ backgroundColor: "orange", color: "black" }}
                className="fs-4 fw-bolder px-3 mx-1"
              >
                {t("singleProduct.9")}
              </li>
            </ul>
          </div>
          <div className="row border-top border-bottom py-4">
            <p className="fs-5 fw-bolder">{t("singleProduct.10")}:</p>
            <p className="fs-6">
              <b>{t("singleProduct.11")}: </b>
              {t("singleProduct.12")}
            </p>
            <p className="fs-6">
              <b>{t("singleProduct.13")}:</b> {singleProduct?.brand}
            </p>
            <p className="fs-6 my-3">{t("singleProduct.14")}</p>
          </div>
          <div className="row ">
            <ul className="list-unstyled d-flex m-0 py-4">
              <li
                style={{ backgroundColor: "orange", color: "black" }}
                className="fs-4 fw-bolder px-3 mx-1"
              >
                {t("singleProduct.15")}
              </li>
            </ul>
          </div>
          <div className="row border-top py-4">
            <div className="row my-3">
              <div className="d-flex flex-column">
                {singleProduct?.comments
                  ? singleProduct?.comments.map((comment) => (
                      <div
                        key={JSON.parse(comment).id}
                        className="d-flex my-2 w-100 justify-content-between"
                      >
                        <div className="d-flex">
                          <img
                            style={{ height: "40px", width: "40px" }}
                            src="https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg"
                            alt=""
                            className="img-fluid rounded-circle"
                          />
                          <div>
                            <span className="fs-6 ms-2 fw-bolder">
                              {JSON.parse(comment).from}
                            </span>
                            <span className="d-block ms-2">
                              {JSON.parse(comment).title}
                            </span>
                          </div>
                        </div>
                        {loggedAccount.isAdmin ? (
                          <div
                            className="fw-bolder"
                            style={{ cursor: "pointer" }}
                            onClick={() =>
                              handleDeleteComment(JSON.parse(comment).id)
                            }
                          >
                            x
                          </div>
                        ) : (
                          ""
                        )}
                      </div>
                    ))
                  : ""}
              </div>
            </div>
          </div>
          <div className="row border-top py-4">
            <form onSubmit={handleSubmit}>
              <textarea
                style={{ height: "100px", resize: "none" }}
                className={`contact-input ps-2 pt-2 my-2 w-100 border border-${
                  isDarkTheme === true ? "light" : "dark"
                } text-${isDarkTheme === true ? "light" : "dark"}`}
                name=""
                cols="40"
                rows="12"
                value={commentInput}
                onChange={handleCommentInput}
                placeholder={t("singleProduct.16")}
              />
              {loggedAccount.isLoggedIn ? (
                <button
                  style={{
                    width: "200px",
                    height: "60px",
                    fontWeight: "600",
                  }}
                  className={`${
                    isDarkTheme === true ? "dark-button" : "light-button"
                  } border rounded-0 my-2`}
                >
                  {t("singleProduct.19")}
                </button>
              ) : (
                <>
                  <p className="fs-6 text-danger">{t("singleProduct.17")}</p>
                  <button
                    style={{ height: "40px", width: "160px" }}
                    className={isDarkTheme ? "dark-button" : "light-button"}
                  >
                    {t("singleProduct.18")}
                  </button>
                </>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
