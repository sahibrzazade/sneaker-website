import React, { useContext, useEffect } from "react";
import { MyContext } from "../context/GlobalContext";
import darkBackground from "../assets/images/black_background.jpg";
import lightBackground from "../assets/images/background.png";
import { FaArrowLeft } from "react-icons/fa";
import RegisterInputs from "../components/RegisterInputs";

import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { t } from "i18next";

const Register = () => {
  const {
    isDarkTheme,
    changeRegisterState,
    registerUser,
    registeredUsers,
    setRegisteredUsers,
  } = useContext(MyContext);

  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Enzy | Register";
  }, []);

  const handleSubmit = (e) => {
    if (registerUser.registerUsername === "") {
      alert("Username must be filled out");
    } else if (registerUser.registerEmail === "") {
      alert("Email must be filled out");
    } else if (registerUser.registerPassword === "") {
      alert("Password must be filled out");
    } else if (!registerUser.registerUsername.match(/^[a-zA-Z0-9]+$/)) {
      alert("Username cannot be contain symbols");
    } else if (
      !registerUser.registerEmail.match(
        /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
      )
    ) {
      alert("Please enter correct email");
    } else if (
      !(
        registerUser.registerPassword.length >= 8 &&
        registerUser.registerPassword.length < 20
      )
    ) {
      alert("Your password does not meet requirements");
    } else if (
      registeredUsers
        .map((user) => user.registerEmail)
        .includes(registerUser.registerEmail) === true
    ) {
      alert("This Email Exists");
    } else {
      toast.success(t("register.7"));
      setRegisteredUsers((prevUser) => [...prevUser, registerUser]);
      navigate("/login");
      // localStorage.setItem("registeredUsers", JSON.stringify(registeredUsers));
    }
    e.preventDefault();
  };

  return (
    <div
      className={`container-fluid text-${isDarkTheme ? "light" : "dark"}`}
      style={{
        backgroundPosition: "center",
        backgroundImage: `url(${
          isDarkTheme === true ? darkBackground : lightBackground
        })`,
      }}
    >
      <div className="container">
        <div className="row py-5">
          <div className="col-3 d-none d-lg-block"></div>
          <div className="col-12 col-lg-6">
            <form
              autoComplete="off"
              onSubmit={handleSubmit}
              className={`login-register-form border border-${
                isDarkTheme === true ? "light" : "dark"
              }`}
            >
              <p className="fs-1 fw-bolder text-center pt-5 pb-2">
                {t("register.0")}
              </p>
              <div className="d-flex flex-column pt-0 p-5">
                <RegisterInputs />
                {/* <label htmlFor="registerUsername" className=" mt-4">
                  {t("register.1")}
                </label>
                <input
                  onChange={changeRegisterState}
                  type="text"
                  name="registerUsername"
                  id="registerUsername"
                  placeholder={t("register.8")}
                  style={{ height: "30px" }}
                  className={`login-register-input ps-4 py-4 border-0 border-bottom border-${
                    isDarkTheme === true ? "light" : "dark"
                  } text-${isDarkTheme === true ? "light" : "dark"} `}
                />
                <span className="errorMessage d-none">
                  Username sould be 3-16 characters and shouldn't include any
                  special characher!
                </span>

                <label htmlFor="registerEmail" className=" mt-4">
                  {t("register.2")}
                </label>
                <input
                  onChange={changeRegisterState}
                  type="text"
                  name="registerEmail"
                  id="registerEmail"
                  placeholder={t("register.9")}
                  style={{ height: "30px" }}
                  className={`login-register-input ps-4 py-4 border-0 border-bottom border-${
                    isDarkTheme === true ? "light" : "dark"
                  } text-${isDarkTheme === true ? "light" : "dark"} `}
                />
                <span className="errorMessage">
                  It should be a valid email adress!
                </span>

                <label htmlFor="registerPassword" className=" mt-4">
                  {t("register.3")}
                </label>
                <input
                  onChange={changeRegisterState}
                  type="password"
                  name="registerPassword"
                  id="registerPassword"
                  placeholder={t("register.10")}
                  style={{
                    height: "40px",
                  }}
                  className={`login-register-input ps-4 py-4 border-0 border-bottom border-${
                    isDarkTheme === true ? "light" : "dark"
                  } text-${isDarkTheme === true ? "light" : "dark"} `}
                />
                <span className="errorMessage">
                  Password should be 8-20 characters and include at less 1
                  letter, 1 number and 1 special character
                </span> */}
                <p className="fs-6 my-3">
                  <FaArrowLeft style={{ fontSize: "20px" }} /> {t("register.4")}{" "}
                  <Link
                    className="text-decoration-none text-warning"
                    to="/login"
                  >
                    {t("register.5")}
                  </Link>
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
                    {t("register.6")}
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div className="col-3 d-none d-lg-block"></div>
        </div>
      </div>
    </div>
  );
};

export default Register;
