import { t } from "i18next";

import React, { useContext } from "react";
import { MyContext } from "../context/GlobalContext";

const Loading = () => {
  const { isDarkTheme } = useContext(MyContext);
  return (
    <div>
      <div
        style={{
          height: "100vh",
          backgroundColor: isDarkTheme === true ? "black" : "white",
        }}
        className={`d-flex align-items-center justify-content-center flex-column text-${
          isDarkTheme === true ? "light" : "dark"
        } `}
      >
        <div className="loading"></div>
        <div className="loadingText">
          <h1>{t("loading.0")}</h1>
        </div>
      </div>
    </div>
  );
};

export default Loading;
