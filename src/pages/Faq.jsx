import { t } from "i18next";
import React, { useContext, useEffect } from "react";
import { MyContext } from "../context/GlobalContext";

const Faq = () => {
  const { isDarkTheme } = useContext(MyContext);

  useEffect(() => {
    document.title = "Enzy | FAQ";
  }, []);
  return (
    <div
      style={{ backgroundColor: isDarkTheme === true ? "black" : "white" }}
      className={`container-fluid text-${
        isDarkTheme === true ? "light" : "dark"
      }`}
    >
      <div className="container">
        <div className={`h1 fw-bolder py-5 `}>{t("faq.0")}</div>
        <div className="row flex-column-reverse flex-lg-row">
          <div className="col-12 col-lg-7 d-flex align-items-center">
            <div
              className="accordion pb-5 "
              data-bs-theme={isDarkTheme === true ? "dark" : "light"}
              id="accordionPanelsStayOpenExample"
            >
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className={`accordion-button collapsed fw-bold text-uppercase shadow-none text-${
                      isDarkTheme === true ? "light" : "dark"
                    } bg-${isDarkTheme === true ? "dark" : "light"} py-4`}
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseOne"
                    aria-expanded="true"
                    aria-controls="panelsStayOpen-collapseOne"
                  >
                    {t("faq.1")}
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-collapseOne"
                  className="accordion-collapse collapse show"
                >
                  <div className="accordion-body py-4">{t("faq.7")}</div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className={`accordion-button collapsed fw-bold text-uppercase shadow-none text-${
                      isDarkTheme === true ? "light" : "dark"
                    } bg-${isDarkTheme === true ? "dark" : "light"} py-4`}
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseTwo"
                    aria-expanded="false"
                    aria-controls="panelsStayOpen-collapseTwo"
                  >
                    {t("faq.2")}
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-collapseTwo"
                  className="accordion-collapse collapse"
                >
                  <div className="accordion-body py-4 ">{t("faq.8")}</div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className={`accordion-button collapsed fw-bold text-uppercase shadow-none text-${
                      isDarkTheme === true ? "light" : "dark"
                    } bg-${isDarkTheme === true ? "dark" : "light"} py-4`}
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseThree"
                    aria-expanded="false"
                    aria-controls="panelsStayOpen-collapseThree"
                  >
                    {t("faq.3")}
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-collapseThree"
                  className="accordion-collapse collapse"
                >
                  <div className="accordion-body py-4">{t("faq.9")}</div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className={`accordion-button collapsed fw-bold text-uppercase shadow-none text-${
                      isDarkTheme === true ? "light" : "dark"
                    } bg-${isDarkTheme === true ? "dark" : "light"} py-4`}
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseFour"
                    aria-expanded="false"
                    aria-controls="panelsStayOpen-collapseFour"
                  >
                    {t("faq.4")}
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-collapseFour"
                  className="accordion-collapse collapse"
                >
                  <div className="accordion-body py-4">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Quasi voluptas provident ipsam amet sit exercitationem
                    voluptatum perspiciatis numquam sequi necessitatibus
                    obcaecati assumenda porro error beatae laudantium
                    consectetur, esse vero dicta nemo nulla quaerat deleniti
                    dolorum. Quibusdam laboriosam, minima ullam sequi ab ad
                    aliquam?
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className={`accordion-button collapsed fw-bold text-uppercase shadow-none text-${
                      isDarkTheme === true ? "light" : "dark"
                    } bg-${isDarkTheme === true ? "dark" : "light"} py-4`}
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseFive"
                    aria-expanded="false"
                    aria-controls="panelsStayOpen-collapseFive"
                  >
                    {t("faq.5")}
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-collapseFive"
                  className="accordion-collapse collapse"
                >
                  <div className="accordion-body py-4">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Quasi voluptas provident ipsam amet sit exercitationem
                    voluptatum perspiciatis numquam sequi necessitatibus
                    obcaecati assumenda porro error beatae laudantium
                    consectetur, esse vero dicta nemo nulla quaerat deleniti
                    dolorum. Quibusdam laboriosam, minima ullam sequi ab ad
                    aliquam?
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className={`accordion-button collapsed fw-bold text-uppercase shadow-none text-${
                      isDarkTheme === true ? "light" : "dark"
                    } bg-${isDarkTheme === true ? "dark" : "light"} py-4`}
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseSix"
                    aria-expanded="false"
                    aria-controls="panelsStayOpen-collapseSix"
                  >
                    {t("faq.6")}
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-collapseSix"
                  className="accordion-collapse collapse"
                >
                  <div className="accordion-body py-4">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Quasi voluptas provident ipsam amet sit exercitationem
                    voluptatum perspiciatis numquam sequi necessitatibus
                    obcaecati assumenda porro error beatae laudantium
                    consectetur, esse vero dicta nemo nulla quaerat deleniti
                    dolorum. Quibusdam laboriosam, minima ullam sequi ab ad
                    aliquam?
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-lg-5">
            <img
              className="img-fluid"
              src="https://www.pngall.com/wp-content/uploads/12/Illustration-PNG-Photo.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
