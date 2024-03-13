import React, { useContext, useEffect } from "react";
import { MyContext } from "../context/GlobalContext";
import { t } from "i18next";
import { IoEye } from "react-icons/io5";
import {
  FaHistory,
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaPhone,
  FaQuestion,
  FaTwitter,
} from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const Contact = () => {
  const { isDarkTheme } = useContext(MyContext);

  useEffect(() => {
    document.title = "Enzy | Contact Us";
  }, []);

  return (
    <div
      style={{ backgroundColor: isDarkTheme === true ? "black" : "white" }}
      className="container-fluid"
    >
      <div className="row align-items-center justify-content-center">
        <img
          src="https://dunker.qodeinteractive.com/wp-content/uploads/2023/01/inner-img-6.jpg"
          alt=""
          className="img-fluid position relative"
        />
        <div
          style={{ letterSpacing: "3px" }}
          className="fs-1 position-absolute text-center fw-bold text-light"
        >
          {t("contact.0")}
        </div>
      </div>
      <div
        className="container"
        style={{ color: isDarkTheme === true ? "white" : "black" }}
      >
        <div className="row flex-column flex-md-row py-5 my-5 border-top border-bottom">
          <div className="col">
            <IoEye style={{ height: "62px", width: "62px" }} />
            <div className="fs-4 my-3 fw-bold text-uppercase">
              {t("contact.1")}
            </div>
            <div className="fs-6 my-3">
              Integer feugiat, nulla ut cursus sodales, turpis turpis efficit ur
              tortor, vel dictum sapien augue purus nec magna hendrerit
              elementum.
            </div>
          </div>
          <div className="col">
            <FaQuestion style={{ height: "62px", width: "62px" }} />
            <div className="fs-4 my-3 fw-bold text-uppercase">
              {t("contact.2")}
            </div>
            <div className="fs-6 my-3">
              Integer feugiat, nulla ut cursus sodales, turpis turpis efficit ur
              tortor, vel dictum sapien augue purus nec magna hendrerit
              elementum.
            </div>
          </div>
          <div className="col">
            <FaHistory style={{ height: "62px", width: "62px" }} />
            <div className="fs-4 my-3 fw-bold text-uppercase">
              {t("contact.3")}
            </div>
            <div className="fs-6 my-3">
              Integer feugiat, nulla ut cursus sodales, turpis turpis efficit ur
              tortor, vel dictum sapien augue purus nec magna hendrerit
              elementum.
            </div>
          </div>
        </div>

        <div className="row my-5">
          <img
            src="https://images.unsplash.com/photo-1517737276944-c011f949dfc3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="img-fluid"
            alt=""
          />
        </div>
        <div className="row  flex-column flex-md-row">
          <div className="col-12 col-md-5 my-5">
            <div className="fs-1 fw-bolder">{t("contact.4")}</div>
            <div className="fs-6 my-3">
              Lorem ipsum dolor sit amet, cons ectetur adipiscing elitull am
              aliqu am, velit rutrum dictum lobortis, turpis justo auc tor quam,
              a auctor. Vix ut ignota deseru nt partien ad, pros tale falli
              periculis ad, idque deseruisse constituam.
            </div>
            <ul className="nav flex-column">
              <li className="my-2">
                <FaLocationDot />
                <span className="ms-2">868 Fake Street, New York</span>
              </li>
              <li className="my-2">
                <FaPhone />
                <span className="ms-2">(+00) 025-1234-5678</span>
              </li>
              <li className="my-2">
                <FaEnvelope />
                <span className="ms-2">example.info@gmail.com</span>
              </li>
              <li className="my-2 ">
                <FaFacebook className="me-2" />
                <FaInstagram className="mx-2" />
                <FaTwitter className="mx-2" />
                <FaLinkedin className="mx-2" />
              </li>
            </ul>
          </div>
          <div className="col-12 col-md-7 my-5">
            <form>
              <div className="row my-2">
                <div className="col">
                  <label
                    className={`text-${
                      isDarkTheme === true ? "light" : "muted"
                    } fw-bolder`}
                    htmlFor="contact-name"
                  >
                    {t("contact.5")}
                  </label>
                  <input
                    type="text"
                    style={{ height: "30px" }}
                    className={`contact-input ps-1 w-100 border-0 border-bottom border-${
                      isDarkTheme === true ? "light" : "dark"
                    } text-${isDarkTheme === true ? "light" : "dark"}`}
                    name=""
                    id="contact-name"
                  />
                </div>
                <div className="col">
                  <label
                    className={`text-${
                      isDarkTheme === true ? "light" : "muted"
                    } fw-bolder`}
                    htmlFor="contact-email"
                  >
                    {t("contact.6")}
                  </label>
                  <input
                    type="text"
                    style={{ height: "30px" }}
                    className={`contact-input ps-1 w-100 border-0 border-bottom border-${
                      isDarkTheme === true ? "light" : "dark"
                    } text-${isDarkTheme === true ? "light" : "dark"}`}
                    name=""
                    id="contact-email"
                  />
                </div>
              </div>
              <div className="row my-3">
                <div className="col">
                  <label
                    className={`text-${
                      isDarkTheme === true ? "light" : "muted"
                    } fw-bolder`}
                    htmlFor="contact-textarea"
                  >
                    {t("contact.7")}
                  </label>
                  <textarea
                    name=""
                    id="contact-textarea"
                    cols="40"
                    rows="12"
                    className={`contact-input ps-1 w-100 border-0 border-bottom border-${
                      isDarkTheme === true ? "light" : "dark"
                    } text-${isDarkTheme === true ? "light" : "dark"}`}
                  ></textarea>
                </div>
              </div>
              <div className="row my-3">
                <div className="col">
                  <button
                    style={{
                      width: "200px",
                      height: "60px",
                      fontWeight: "600",
                    }}
                    className={`${
                      isDarkTheme === true ? "dark-button" : "light-button"
                    } border rounded-0`}
                  >
                    {t("contact.8")}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
