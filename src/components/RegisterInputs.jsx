import { t } from "i18next";
import React, { useContext, useState } from "react";
import { MyContext } from "../context/GlobalContext";

const RegisterInputs = () => {
  const { changeRegisterState, isDarkTheme } = useContext(MyContext);

  const [focused, setFocused] = useState(false);

  const handleFocus = (e) => {
    setFocused(true);
  };
  const inputs = [
    {
      id: 1,
      name: "registerUsername",
      type: "text",
      placeholder: t("register.8"),
      label: t("register.1"),
      errorMessage:
        "Username sould be 3-16 characters and shouldn't include any special characher!",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 2,
      name: "registerEmail",
      type: "email",
      placeholder: t("register.9"),
      label: t("register.2"),
      errorMessage: "It should be a valid email address!",
      required: true,
    },
    {
      id: 3,
      name: "registerPassword",
      type: "password",
      placeholder: t("register.10"),
      label: t("register.3"),
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      errorMessage:
        "Password should be 8-20 characters and include at less 1 letter, 1 number and 1 special character",
      required: true,
    },
  ];
  return (
    <>
      {inputs.map((input) => (
        <>
          <label htmlFor={input.name} className=" mt-4">
            {input.label}
          </label>
          <input
            onChange={changeRegisterState}
            type={input.type}
            name={input.name}
            id={input.name}
            placeholder={input.placeholder}
            pattern={input.pattern}
            required
            style={{ height: "30px" }}
            onBlur={handleFocus}
            focused={focused.toString()}
            className={`login-register-input ps-4 py-4 border-0 border-bottom border-${
              isDarkTheme === true ? "light" : "dark"
            } text-${isDarkTheme === true ? "light" : "dark"} `}
          />
          <span id={`errorMessage${input.id}`} className="errorMessage">
            {input.errorMessage}
          </span>
        </>
      ))}
    </>
  );
};

export default RegisterInputs;
