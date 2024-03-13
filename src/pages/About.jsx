import React, { useContext, useEffect } from "react";
import { MyContext } from "../context/GlobalContext";
import { t } from "i18next";

const About = () => {
  const { isDarkTheme } = useContext(MyContext);

  useEffect(() => {
    document.title = "Enzy | About Us";
  }, []);
  return (
    <div
      style={{ backgroundColor: isDarkTheme === true ? "black" : "white" }}
      className="container-fluid overflow-hidden"
    >
      <div className="row align-items-center justify-content-center">
        <img
          src="https://demothemesky-be87.kxcdn.com/enzy-sneaker/wp-content/themes/enzy/images/bg_breadcrumb_v3.jpg"
          alt=""
          className="img-fluid position relative"
        />
        <div className="fs-1 position-absolute text-center fw-bold text-light">
          {t("about.0")}
        </div>
      </div>
      <div
        className={`container-fluid py-5 text-${
          isDarkTheme === true ? "light" : "dark"
        }`}
      >
        <div
          data-aos="fade-right"
          data-aos-duration="700"
          className="row flex-column flex-md-row border-top border-bottom"
        >
          <div className="col d-flex align-items-center justify-content-center">
            <span style={{ fontSize: "200px", color: "orange" }}>?</span>
          </div>
          <div className="col py-4">
            <div className="fs-1 fw-bolder">{t("about.1")}</div>
            <p className="py-5">
              Curabitur varius tortor ac turpis semper eleifend vestibulum at
              justo. Phasellus elit ante, molestie ut pretium eu, imperdiet eu
              magna. Nullam interdum imperdiet elit, ac maximus neque
              pellentesque in. Nulla viverra maximus tempor. Ut sodales nisi
              pretium, auctor ligula ut, sagittis felis. Maecenas at diam nec
              lorem lobortis aliquam.Lorem ipsum dolor sit amet, vulputate
              placerat, etiam pede erat sed proin ultrices
            </p>
          </div>
        </div>
        <div
          data-aos="fade-left"
          data-aos-duration="700"
          className="row flex-md-row flex-column py-5"
        >
          <div className="col">
            <img
              src="https://dunker.qodeinteractive.com/wp-content/uploads/2022/12/About-us-img-02.jpg"
              alt=""
              className="img-fluid"
            />
          </div>
          <div className="col p-3 p-md-4 p-lg-5 d-flex flex-column justify-content-center">
            <p className={`h6 text-${isDarkTheme === true ? "light" : "dark"}`}>
              {t("about.2")}
            </p>
            <p
              className={`h1 fw-bolder text-${
                isDarkTheme === true ? "light" : "dark"
              }`}
            >
              THE ULTIMATE <br /> STREET VIBE
            </p>
            <p className={`h6 text-${isDarkTheme === true ? "light" : "dark"}`}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia
              nobis molestias, doloribus voluptates veritatis voluptatem
              temporibus sed reprehenderit repudiandae dolor amet provident.
              Expedita quis quo, illo sint minima dolore harum!
            </p>
          </div>
        </div>
        <div
          className="row border-top border-bottom"
          style={{
            backgroundColor: "white",
          }}
        >
          <div
            style={{ whiteSpace: "nowrap" }}
            className="infinite-logo-container container-fluid py-2 overflow-hidden "
          >
            <div className="infinite-logo d-inline-block">
              <img
                src="https://dunker.qodeinteractive.com/wp-content/uploads/2023/01/inner-png-15.png"
                alt=""
              />
              <img
                src="https://dunker.qodeinteractive.com/wp-content/uploads/2023/01/inner-png-12.png"
                alt=""
              />
              <img
                src="https://dunker.qodeinteractive.com/wp-content/uploads/2023/01/inner-png-19.png"
                alt=""
              />
              <img
                src="https://dunker.qodeinteractive.com/wp-content/uploads/2023/01/inner-png-11.png"
                alt=""
              />
              <img
                src="https://dunker.qodeinteractive.com/wp-content/uploads/2023/01/inner-png-20.png"
                alt=""
              />
              <img
                src="https://dunker.qodeinteractive.com/wp-content/uploads/2023/01/inner-png-14.png"
                alt=""
              />
            </div>
            <div
              className={`infinite-text d-inline-block text-${
                isDarkTheme === true ? "light" : "dark"
              }`}
            >
              <img
                src="https://dunker.qodeinteractive.com/wp-content/uploads/2023/01/inner-png-15.png"
                alt=""
              />
              <img
                src="https://dunker.qodeinteractive.com/wp-content/uploads/2023/01/inner-png-12.png"
                alt=""
              />
              <img
                src="https://dunker.qodeinteractive.com/wp-content/uploads/2023/01/inner-png-19.png"
                alt=""
              />
              <img
                src="https://dunker.qodeinteractive.com/wp-content/uploads/2023/01/inner-png-11.png"
                alt=""
              />
              <img
                src="https://dunker.qodeinteractive.com/wp-content/uploads/2023/01/inner-png-20.png"
                alt=""
              />
              <img
                src="https://dunker.qodeinteractive.com/wp-content/uploads/2023/01/inner-png-14.png"
                alt=""
              />
            </div>
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="700"
          className="row flex-md-row flex-column-reverse py-5"
        >
          <div className="col p-3 p-md-4 p-lg-5 d-flex flex-column justify-content-center">
            <p className={`h6 text-${isDarkTheme === true ? "light" : "dark"}`}>
              {t("about.2")}
            </p>
            <p
              className={`h1 fw-bolder text-${
                isDarkTheme === true ? "light" : "dark"
              }`}
            >
              STREET VIBE
            </p>
            <p className={`h6 text-${isDarkTheme === true ? "light" : "dark"}`}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia
              nobis molestias, doloribus voluptates veritatis voluptatem
              temporibus sed reprehenderit repudiandae dolor amet provident.
              Expedita quis quo, illo sint minima dolore harum!
            </p>
          </div>
          <div className="col">
            <img
              src="https://dunker.qodeinteractive.com/wp-content/uploads/2022/12/About-us-img-1.jpg"
              alt=""
              className="img-fluid"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
