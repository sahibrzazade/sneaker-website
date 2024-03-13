import React, { useContext, useEffect, useState } from "react";
import { MyContext } from "../context/GlobalContext";
import darkBackground from "../assets/images/black_background.jpg";
import lightBackground from "../assets/images/background.png";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { t } from "i18next";

const Login = () => {
  const { isDarkTheme } = useContext(MyContext);

  const navigate = useNavigate();

  const [loginUser, setLoginUser] = useState([]);

  const [isVisible, setIsVisible] = useState(false);

  const changeLoginState = (event) => {
    setLoginUser({
      ...loginUser,
      [event.target.name]: event.target.value,
    });
  };

  useEffect(() => {
    document.title = "Enzy | Login";
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const localStorageUsers = JSON.parse(
      localStorage.getItem("registeredUsers")
    );

    const filterUser = localStorageUsers.find(
      (user) => user.registerEmail === loginUser.loginEmail
    );

    if (loginUser.loginEmail == "") {
      alert("Email must be filled out");
    } else if (loginUser.loginPassword == "") {
      alert("Password must be filled out");
    } else {
      if (
        loginUser?.loginEmail == filterUser?.registerEmail &&
        loginUser?.loginPassword == filterUser?.registerPassword
      ) {
        const newRegisteredUsers = localStorageUsers.map((x) => {
          if (x.registerEmail !== loginUser.loginEmail) {
            return x;
          } else {
            console.log(x);
            localStorage.setItem(
              "loggedAccount",
              JSON.stringify({ ...x, isLoggedIn: true })
            );
            return { ...x, isLoggedIn: true };
          }
        });
        localStorage.setItem(
          "registeredUsers",
          JSON.stringify(newRegisteredUsers)
        );
        // toast.success(t("login.7") + filterUser?.registerUsername);
        window.location.reload();
        navigate("/");
      } else {
        alert("Your Account Information Does Not Match");
      }
    }
  };

  return (
    <div
      className={`container-fluid text-${isDarkTheme ? "light" : "dark"}`}
      style={{
        backgroundPosition: "center",
        backgroundImage: `url(${
          isDarkTheme === true
            ? darkBackground
            : "https://images.unsplash.com/photo-1440166830278-3eb28bc7f9bc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        })`,
        height: "100vh",
      }}
    >
      <div className="container">
        <div className="row py-5">
          <div className="col d-none d-lg-block"></div>
          <div className="col">
            <form
              autoComplete="off"
              onSubmit={handleSubmit}
              className={`login-register-form border border-${
                isDarkTheme === true ? "light" : "dark"
              }`}
            >
              <p className="fs-1 fw-bolder text-center pt-5 pb-2">
                {t("login.0")}
              </p>
              <div className="d-flex flex-column pt-0 p-5">
                <label htmlFor="loginEmail" className=" mt-4">
                  {t("login.1")}
                </label>
                <input
                  onChange={changeLoginState}
                  type="text"
                  name="loginEmail"
                  id="loginEmail"
                  placeholder={t("login.8")}
                  style={{ height: "30px" }}
                  className={`login-register-input ps-4 py-4 border-0 border-bottom border-${
                    isDarkTheme === true ? "light" : "dark"
                  } text-${isDarkTheme === true ? "light" : "dark"} `}
                />
                <label htmlFor="loginPassword" className=" mt-4">
                  {t("login.2")}
                </label>
                <input
                  onChange={changeLoginState}
                  type={isVisible ? "text" : "password"}
                  name="loginPassword"
                  id="loginPassword"
                  placeholder={t("login.9")}
                  style={{
                    height: "40px",
                  }}
                  className={`login-register-input ps-4 py-4 border-0 border-bottom border-${
                    isDarkTheme === true ? "light" : "dark"
                  } text-${isDarkTheme === true ? "light" : "dark"} `}
                />
                <div className="mt-2 d-flex align-items-center ">
                  <input
                    type="checkbox"
                    name=""
                    id="showPassword"
                    onClick={() => setIsVisible(!isVisible)}
                  />
                  <label className="ms-1" htmlFor="showPassword">
                    {t("login.10")}
                  </label>
                </div>
                <p className="fs-6 my-3">
                  {t("login.3")}{" "}
                  <Link
                    className="text-decoration-none text-warning"
                    to="/register"
                  >
                    {t("login.4")}
                  </Link>{" "}
                  {t("login.5")}
                </p>
                <div className="d-flex align-items-center justify-content-center">
                  <button
                    className={`${
                      isDarkTheme === true ? "dark-button" : "light-button"
                    }  rounded mt-4 fw-bold`}
                    style={{
                      width: "160px",
                      height: "40px",
                    }}
                  >
                    {t("login.6")}
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div className="col d-none d-lg-block"></div>
        </div>
      </div>
    </div>
  );
};

export default Login;
