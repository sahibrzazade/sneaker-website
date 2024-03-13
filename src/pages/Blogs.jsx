import React, { useContext, useEffect } from "react";
import { MyContext } from "../context/GlobalContext";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { t } from "i18next";
import i18n from "../i18n/i18next";

const Blogs = () => {
  const { isDarkTheme } = useContext(MyContext);

  const navigate = useNavigate();

  const blogs = useSelector((store) => store.AppReducer);

  useEffect(() => {
    document.title = "Enzy | Blogs";
  }, []);
  return (
    <div
      className="container-fluid"
      style={{
        backgroundColor: isDarkTheme ? "black" : "white",
        color: isDarkTheme ? "white" : "black",
      }}
    >
      <div className="container">
        <div className="row p-0">
          <p className="fs-1 fw-bolder text-center">Blog</p>
        </div>
        {blogs?.map((item) => (
          <div key={item.id} className="row m-0 mx-md-5 py-3">
            <Link to={`/blogs/${item.id}`}>
              <img src={item.image} className="img-fluid blogImages" alt="" />
            </Link>
            <p style={{ fontSize: "12px" }} className="my-2">
              {item.date}
            </p>
            <Link
              style={{ color: "orange" }}
              className="fs-3 fw-bolder text-decoration-none"
              to={`/blogs/${item.id}`}
            >
              {i18n.language === "az" ? item.titleAz : item.titleEn}
            </Link>
            <p className="fs-6">
              {i18n.language === "az" ? item.descriptionAz : item.descriptionEn}
            </p>
            <div>
              <button
                style={{
                  width: "200px",
                  height: "60px",
                }}
                onClick={() => navigate(`/blogs/${item.id}`)}
                className={`${
                  isDarkTheme ? "dark-button" : "light-button"
                } fw-bolder`}
              >
                {t("blogs.0")}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
