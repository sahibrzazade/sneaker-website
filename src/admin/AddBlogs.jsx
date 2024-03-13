import React, { useContext, useEffect, useState } from "react";
import { MyContext } from "../context/GlobalContext";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addBlogFunction, removeBlogFunction } from "../redux/Action";
import { v4 as uuidv4 } from "uuid";
import { toast } from "react-toastify";
import { t } from "i18next";

const AddBlogs = () => {
  const { isDarkTheme } = useContext(MyContext);

  const [blog, setBlog] = useState({
    id: uuidv4(),
    date: "",
    titleAz: "",
    titleEn: "",
    descriptionAz: "",
    descriptionEn: "",
    image: "",
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChangeInput = (e) => {
    setBlog({ ...blog, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addBlogFunction(blog));
    toast.success(t("addBlog.7"));
    navigate("/blogs");
  };
  return (
    <div
      style={{ backgroundColor: isDarkTheme ? "black" : "white" }}
      className={`container-fluid text-${isDarkTheme ? "light" : "dark"}`}
    >
      <div className="container">
        <div className="row py-5">
          <p className="fs-1 fw-bolder text-center m-0 py-2">
            {t("addBlog.0")}
          </p>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="blogTitleEn" className="form-label">
                {t("addBlog.1")}
              </label>
              <input
                type="text"
                className="form-control"
                id="blogTitleEn"
                name="titleEn"
                onChange={handleChangeInput}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="blogTitleAz" className="form-label">
                {t("addBlog.2")}
              </label>
              <input
                type="text"
                className="form-control"
                id="blogTitleAz"
                name="titleAz"
                onChange={handleChangeInput}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="blogDescriptionEn" className="form-label">
                {t("addBlog.3")}
              </label>
              <input
                type="text"
                className="form-control"
                id="blogDescriptionEn"
                name="descriptionEn"
                onChange={handleChangeInput}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="blogDescriptionAz" className="form-label">
                {t("addBlog.4")}
              </label>
              <input
                type="text"
                className="form-control"
                id="blogDescriptionAz"
                name="descriptionAz"
                onChange={handleChangeInput}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="blogImage" className="form-label">
                {t("addBlog.5")}
              </label>
              <input
                type="text"
                className="form-control"
                id="blogImage"
                name="image"
                onChange={handleChangeInput}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="blogDate" className="form-label">
                {t("addBlog.6")}
              </label>
              <input
                type="date"
                className="form-control"
                id="blogDate"
                name="date"
                onChange={handleChangeInput}
              />
            </div>
            <button
              type="submit"
              style={{ height: "50px", width: "160px" }}
              className={`rounded ${
                isDarkTheme ? "dark-button" : "light-button"
              }`}
            >
              {t("addBlog.0")}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddBlogs;
