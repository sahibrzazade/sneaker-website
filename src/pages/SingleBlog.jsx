import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { MyContext } from "../context/GlobalContext";
import { useSelector } from "react-redux";
import { t } from "i18next";
import i18n from "../i18n/i18next";

const SingleBlog = () => {
  const { isDarkTheme } = useContext(MyContext);
  const { id } = useParams();
  const blog = useSelector((state) => state.AppReducer);
  const [singleBlog, setSingleBlog] = useState({});
  const [otherBlogs, setOtherBlogs] = useState([]);

  otherBlogs.length = 3;

  useEffect(() => {
    document.title = `Enzy | ${singleBlog?.title}`;
  }, [singleBlog]);

  useEffect(() => {
    let filterBlog = blog.filter((item) => item.id != id);
    setOtherBlogs(filterBlog);
  }, [id]);

  useEffect(() => {
    let filterBlog = blog.find((item) => item.id == id);
    setSingleBlog(filterBlog);
  }, [id]);

  return (
    <div
      className="container-fluid"
      style={{
        backgroundColor: isDarkTheme ? "black" : "white",
        color: isDarkTheme ? "white" : "black",
      }}
    >
      <div className="container">
        <div className="row m-0 mx-md-5 py-3">
          <img src={singleBlog.image} className="img-fluid" alt="" />
          <p style={{ fontSize: "12px" }} className="my-2">
            {singleBlog.date}
          </p>
          <p style={{ color: "orange" }} className="fs-3 fw-bolder">
            {i18n.language === "az" ? singleBlog.titleAz : singleBlog.titleEn}
          </p>
          <p className="fs-6">
            {i18n.language === "az"
              ? singleBlog.descriptionAz
              : singleBlog.descriptionEn}
          </p>
        </div>
        <div className="row m-0 mx-md-5 py-3">
          <p className="fs-1 text-center">{t("singleBlog.0")}</p>
          {otherBlogs.map((item) => (
            <div className="col-12 col-md-6 col-lg-4" key={item.id}>
              <Link to={`/blogs/${item.id}`}>
                <img
                  src={item.image}
                  style={{ cursor: "pointer" }}
                  className="img-fluid blogImages"
                  alt=""
                />
              </Link>
              <p style={{ fontSize: "12px" }} className="my-2">
                {item.date}
              </p>
              <Link
                style={{ color: "orange" }}
                className="text-decoration-none fw-bolder"
                to={`/blogs/${item.id}`}
              >
                {i18n.language === "az" ? item.titleAz : item.titleEn}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;
