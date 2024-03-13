import React, { useContext } from "react";
import { MyContext } from "../context/GlobalContext";
import { Link } from "react-router-dom";
import { t } from "i18next";
import {
  FaLocationDot,
  FaPhone,
  FaEnvelope,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaCreditCard,
} from "react-icons/fa6";
import { BsBox2 } from "react-icons/bs";
import { TfiHeadphoneAlt } from "react-icons/tfi";

const Footer = () => {
  const { isDarkTheme } = useContext(MyContext);
  return (
    <div style={{ backgroundColor: "black" }}>
      <div className="container-fluid d-flex align-items-center justify-content-center text-light ">
        <div
          className={`container-fluid row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 py-5 ${
            isDarkTheme === true ? "border-top" : ""
          } `}
        >
          <div className="col">
            <span
              className="text-light"
              style={{
                fontSize: "100px",
                fontFamily: "Gochi Hand, cursive",
              }}
            >
              Kickz
            </span>
          </div>
          <div className="col d-flex align-items-center ">
            <BsBox2 style={{ height: "62px", width: "62px" }} />
            <span className="ps-3 fw-bold fs-6">{t("footer.0")}</span>
          </div>
          <div className="col d-flex align-items-center ">
            <TfiHeadphoneAlt style={{ height: "62px", width: "62px" }} />
            <span className="ps-3 fw-bold fs-6">{t("footer.1")}</span>
          </div>
          <div className="col d-flex align-items-center ">
            <FaCreditCard style={{ height: "62px", width: "62px" }} />
            <span className="ps-3 fw-bold fs-6">{t("footer.2")} </span>
          </div>
        </div>
      </div>
      <div className="container-fluid  d-flex align-items-center  justify-content-center">
        <footer className="container-fluid row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 py-5 border-top">
          <div className="col mb-3">
            <Link to="/">
              <img
                src="https://demothemesky-be87.kxcdn.com/enzy-sneaker/wp-content/uploads/2020/04/logo-light.png"
                alt=""
                width="200"
                height="72"
              />
            </Link>
          </div>

          <div className="col mb-3">
            <ul className="nav flex-column text-light">
              <li className="mb-2">
                <FaLocationDot />
                <span className="ms-2">868 Fake Street, New York</span>
              </li>
              <li className="mb-2">
                <FaPhone />
                <span className="ms-2">(+00) 025-1234-5678</span>
              </li>
              <li className="mb-2">
                <FaEnvelope />
                <span className="ms-2">example.info@gmail.com</span>
              </li>
              <li className="mb-2">
                <FaFacebook className="me-2" />
                <FaInstagram className="mx-2" />
                <FaTwitter className="mx-2" />
                <FaLinkedin className="mx-2" />
              </li>
            </ul>
          </div>

          <div className="col mb-3">
            <h5 className="text-light">{t("footer.3")}</h5>
            <ul className="nav flex-column text-light">
              <li className="mb-2">
                <Link
                  className="link-hover-orange text-decoration-none text-light position-relative"
                  to="/shop"
                >
                  {t("footer.4")}
                </Link>
              </li>
            </ul>
          </div>
          <div className="col mb-3">
            <h5 className="text-light">{t("footer.6")}</h5>
            <ul className="nav flex-column text-light">
              <li className="mb-2">
                <Link
                  className="link-hover-orange text-decoration-none text-light position-relative"
                  to="/about-us"
                >
                  {t("footer.7")}
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  className="link-hover-orange text-decoration-none text-light position-relative"
                  to="/contact-us"
                >
                  {t("footer.8")}
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  className="link-hover-orange text-decoration-none text-light position-relative"
                  to="/blogs"
                >
                  {t("footer.9")}
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  className="link-hover-orange text-decoration-none text-light position-relative"
                  to="/faq-page"
                >
                  {t("footer.10")}
                </Link>
              </li>
            </ul>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
