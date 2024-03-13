import React, { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MyContext } from "../context/GlobalContext";
import { t } from "i18next";

const Home = () => {
  const { isDarkTheme, productList } = useContext(MyContext);

  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Enzy | Home";
  }, []);

  return (
    <div
      className={`container-fluid text-${
        isDarkTheme ? "light" : "dark"
      }  overflow-hidden`}
      style={{
        backgroundColor: `${isDarkTheme ? "black" : "white"}`,
      }}
    >
      <div className="row border-bottom">
        <div
          id="carouselExampleFade"
          className="carousel slide carousel-fade"
          data-bs-interval="5000"
          data-bs-ride="true"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="https://wallpaperswide.com/download/nike_basketball_sneakers-wallpaper-1600x900.jpg"
                className="d-block w-100"
                alt=""
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://media.architecturaldigest.com/photos/56f1b12edc71add34a9643d5/16:9/w_2560%2Cc_limit/nike-debuts-first-ever-self-lacing-shoe-01.jpg"
                className="d-block w-100"
                alt=""
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://wallpapercave.com/wp/wp12457413.jpg"
                className="d-block w-100"
                alt=""
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <div data-aos="fade-right" data-aos-duration="700" className="row">
        <div className="col-12 col-lg-6 border m-0 p-0">
          <img
            src="https://dunker.qodeinteractive.com/wp-content/uploads/2022/12/h9-img-02.jpg"
            alt=""
            className="img-fluid"
          />
        </div>
        <div className="col-12 justify-content-around  d-flex flex-column col-lg-6 m-0 p-5 p-lg-0 p-xl-5">
          <div className="container d-flex flex-column">
            <p
              className={`h6 text-${
                isDarkTheme ? "white-50" : "muted"
              } text-uppercase fw-bold`}
            >
              {t("home.0")}
            </p>
            <p
              className={`h3 text-${
                isDarkTheme ? "white" : "dark"
              } fw-bold text-uppercase`}
            >
              {t("home.1")}
            </p>
            <p
              className={`h6 text-${
                isDarkTheme ? "white-50" : "muted"
              } fw-bold `}
            >
              {t("home.2")}
            </p>
            <div className="d-flex flex-column flex-md-row">
              {productList.slice(0, 3).map((element) => (
                <div
                  key={element.id}
                  className="mt-1 me-4 mt-lg-1 me-lg-4 mt-xxl-4 me-xxl-4"
                >
                  <Link to={`/shop/${element.id}`}>
                    <img
                      src={`${element.image}`}
                      alt=""
                      className="img-fluid"
                    />
                  </Link>
                  <p
                    className={`text-${
                      isDarkTheme ? "white-50" : "muted"
                    } text-uppercase fw-bold my-1 h6`}
                  >
                    {element.brand}
                  </p>
                  <Link
                    className={`link-hover-orange text-decoration-none text-${
                      isDarkTheme === true ? "white" : "dark"
                    } text-uppercase fw-bold my-1 h5`}
                    to={`/shop/${element.id}`}
                  >
                    {element.title}
                  </Link>
                  <p
                    className={`text-${
                      isDarkTheme === true ? "white-50" : "muted"
                    } fw-bold my-1 h6`}
                  >
                    {element.category}
                  </p>
                  <p
                    className={`text-${
                      isDarkTheme === true ? "white" : "dark"
                    } fw-bold my-1 h6`}
                  >
                    {`$${element.price}`}
                  </p>
                </div>
              ))}
            </div>
            <div className="d-flex ">
              <button
                style={{
                  width: "200px",
                  height: "60px",
                }}
                className={`${
                  isDarkTheme === true ? "dark-button" : "light-button"
                } fw-bold rounded-0 my-3`}
                onClick={() => navigate("/shop")}
              >
                {t("home.3")}
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        data-aos="fade-left"
        data-aos-duration="700"
        className="row d-flex flex-column-reverse flex-lg-row"
      >
        <div className="col-12 justify-content-around d-flex flex-column col-lg-6 m-0 p-5 p-lg-0 p-xl-5">
          <div className="container d-flex flex-column">
            <p
              className={`h6 text-${
                isDarkTheme === true ? "white-50" : "muted"
              } text-uppercase fw-bold`}
            >
              {t("home.4")}
            </p>
            <p
              className={`h3 text-${
                isDarkTheme === true ? "white" : "dark"
              } text-uppercase fw-bold`}
            >
              {t("home.5")}
            </p>
            <p
              className={`h6 text-${
                isDarkTheme === true ? "white-50" : "muted"
              } fw-bold`}
            >
              {t("home.6")}
            </p>

            <div className="d-flex ">
              <button
                style={{
                  width: "200px",
                  height: "60px",
                }}
                className={`${
                  isDarkTheme === true ? "dark-button" : "light-button"
                } fw-bold rounded-0 my-5`}
                onClick={() => navigate("/shop")}
              >
                {t("home.3")}
              </button>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-6 border m-0 p-0">
          <img
            src="https://dunker.qodeinteractive.com/wp-content/uploads/2023/01/home-7-img-61.jpg"
            alt=""
            className="img-fluid"
          />
        </div>
      </div>
      <div className="row border-top border-bottom">
        <div
          style={{ whiteSpace: "nowrap" }}
          className={`infinite-text-container container-fluid py-5 overflow-hidden `}
        >
          <div className={`infinite-text d-inline-block`}>
            <span className="fs-1 fw-bolder px-5">{t("slide.0")}</span>
            <span className="fs-1 fw-bolder px-5">{t("slide.1")}</span>
            <span className="fs-1 fw-bolder px-5">{t("slide.2")}</span>
          </div>
          <div className={`infinite-text d-inline-block`}>
            <span className="fs-1 fw-bolder px-5">{t("slide.0")}</span>
            <span className="fs-1 fw-bolder px-5">{t("slide.1")}</span>
            <span className="fs-1 fw-bolder px-5">{t("slide.2")}</span>
          </div>
        </div>
      </div>
      <div
        data-aos="fade-up"
        data-aos-duration="700"
        className="row d-flex flex-column flex-lg-row"
      >
        <div className="col-12 col-lg-6 border m-0 p-0">
          <img
            src="https://dunker.qodeinteractive.com/wp-content/uploads/2022/12/h9-img-01.jpg"
            alt=""
            className="img-fluid"
          />
        </div>
        <div
          style={{
            backgroundColor: `${isDarkTheme === true ? "black" : "white"}`,
          }}
          className="col-12 justify-content-around d-flex flex-column col-lg-6 m-0 p-5 p-lg-0 p-xl-5"
        >
          <div className="container d-flex flex-column">
            <p
              className={`h6 text-${
                isDarkTheme === true ? "white-50" : "muted"
              } `}
              style={{ textTransform: "uppercase", fontWeight: "600" }}
            >
              {t("home.0")}
            </p>
            <p
              className={`h3 text-${isDarkTheme === true ? "white" : "dark"} `}
              style={{ textTransform: "uppercase", fontWeight: "600" }}
            >
              {t("home.1")}
            </p>
            <p
              className={`h6  text-${
                isDarkTheme === true ? "white-50" : "muted"
              } `}
              style={{ fontWeight: "600" }}
            >
              {t("home.2")}
            </p>

            <div
              className="d-flex text-muted"
              style={{
                fontSize: "100px",
                fontFamily: "Gochi Hand, cursive",
              }}
            >
              Kickz
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
