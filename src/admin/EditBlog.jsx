import React, { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { editBlogFunction } from "../redux/Action";
import { toast } from "react-toastify";
import { MyContext } from "../context/GlobalContext";
import { t } from "i18next";

const EditBlog = () => {
  const { isDarkTheme } = useContext(MyContext);
  const { id } = useParams();
  const [editedBlog, setEditedBlog] = useState({});
  const blog = useSelector((state) => state.AppReducer);

  useEffect(() => {
    let filterBlog = blog.find((item) => item.id == id);
    setEditedBlog(filterBlog);
  }, []);

  const location = useNavigate();

  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedBlog({ ...editedBlog, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    location("/admin");
    toast.info(t("editBlog.5"));
    dispatch(editBlogFunction(editedBlog));
  };

  return (
    <div
      style={{ backgroundColor: isDarkTheme ? "black" : "white" }}
      className={`container-fluid text-${isDarkTheme ? "light" : "dark"}`}
    >
      <div className="container">
        <p className="fs-1 text-center">{t("editBlog.0")}</p>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="blogTitleEn" className="form-label">
              {t("editBlog.1")}
            </label>
            <input
              type="text"
              className="form-control"
              id="blogTitleEn"
              name="titleEn"
              defaultValue={editedBlog?.titleEn}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="blogTitleAz" className="form-label">
              {t("editBlog.6")}
            </label>
            <input
              type="text"
              className="form-control"
              id="blogTitleAz"
              name="titleAz"
              defaultValue={editedBlog?.titleAz}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="blogDescriptionEn" className="form-label">
              {t("editBlog.2")}
            </label>
            <input
              type="text"
              className="form-control"
              id="blogDescriptionEn"
              name="descriptionEn"
              defaultValue={editedBlog?.descriptionEn}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="blogDescriptionAz" className="form-label">
              {t("editBlog.7")}
            </label>
            <input
              type="text"
              className="form-control"
              id="blogDescriptionAz"
              name="descriptionAz"
              defaultValue={editedBlog?.descriptionAz}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="blogImage" className="form-label">
              {t("editBlog.3")}
            </label>
            <input
              type="text"
              className="form-control"
              id="blogImage"
              name="image"
              defaultValue={editedBlog?.image}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="blogDate" className="form-label">
              {t("editBlog.4")}
            </label>
            <input
              type="date"
              className="form-control"
              id="blogDate"
              name="date"
              defaultValue={editedBlog?.date}
              onChange={handleChange}
            />
          </div>
          <button
            type="submit"
            style={{ height: "50px", width: "160px" }}
            className={`rounded ${
              isDarkTheme ? "dark-button" : "light-button"
            }`}
          >
            {t("editBlog.0")}
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditBlog;
