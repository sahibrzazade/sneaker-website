import React, { useContext } from "react";
import { MyContext } from "../context/GlobalContext";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { removeBlogFunction } from "../redux/Action";
import { t } from "i18next";
import { toast } from "react-toastify";
import i18n from "../i18n/i18next";

const Admin = () => {
  const { isDarkTheme } = useContext(MyContext);

  const navigate = useNavigate();
  const blogs = useSelector((store) => store.AppReducer);
  const dispatch = useDispatch();
  const handleRemoveBlog = (blogId) => {
    toast.error(t("admin.8"));
    dispatch(removeBlogFunction(blogId));
  };
  return (
    <div
      className={`container-fluid text-${isDarkTheme ? "light" : "dark"}`}
      style={{ backgroundColor: isDarkTheme ? "black" : "white" }}
    >
      <div className="container">
        <div className="row">
          <p className="fs-1 m-0 py-5 text-center">{t("admin.0")}</p>
        </div>
        <div className="row justify-content-end">
          <button
            onClick={() => navigate("/addblog")}
            style={{ height: "40px", width: "160px" }}
            className={`fw-bolder ${
              isDarkTheme ? "dark-button" : "light-button"
            } mb-4`}
          >
            {t("admin.1")}
          </button>
        </div>
        <div className="row ">
          <table
            className={`mb-5 table ${
              isDarkTheme ? "table-dark" : "table-light"
            }`}
          >
            <thead>
              <tr>
                <th scope="col">Id</th>
                <th className="d-none d-md-table-cell" scope="col">
                  {t("admin.2")}
                </th>
                <th scope="col">{t("admin.3")}</th>
                <th className="d-none d-md-table-cell" scope="col">
                  {t("admin.4")}
                </th>
                <th className="d-none d-md-table-cell" scope="col">
                  {t("admin.5")}
                </th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {blogs.map((item) => {
                return (
                  <>
                    <tr>
                      <td scope="row">
                        {item.id.length > 20
                          ? item.id.substring(0, 20) + "..."
                          : item.id}
                      </td>
                      <td className="d-none d-md-table-cell">
                        <img
                          src={item.image}
                          alt=""
                          style={{ width: "120px" }}
                        />
                      </td>
                      <td>
                        {i18n.language == "az"
                          ? item.titleAz.length > 30
                            ? item.titleAz.substring(0, 30) + "..."
                            : item.titleAz
                          : item.titleEn.length > 30
                          ? item.titleEn.substring(0, 30) + "..."
                          : item.titleEn}
                      </td>
                      <td className="d-none d-md-table-cell">
                        {i18n.language == "az"
                          ? item.descriptionAz.length > 30
                            ? item.descriptionAz.substring(0, 30) + "..."
                            : item.descriptionAz
                          : item.descriptionEn.length > 30
                          ? item.descriptionEn.substring(0, 30) + "..."
                          : item.descriptionEn}
                      </td>
                      <td className="d-none d-md-table-cell">{item.date}</td>
                      <td>
                        <NavLink to={`/editblog/${item.id}`}>
                          <button
                            style={{ height: "40px", width: "100px" }}
                            className="light-button my-1 mx-0 my-xxl-0 mx-xxl-1"
                          >
                            {t("admin.6")}
                          </button>
                        </NavLink>
                        <button
                          style={{ height: "40px", width: "100px" }}
                          className="danger-button my-1 mx-0 my-xxl-0 mx-xxl-1"
                          onClick={() => handleRemoveBlog(item.id)}
                        >
                          {t("admin.7")}
                        </button>
                      </td>
                    </tr>
                  </>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Admin;
