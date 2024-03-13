import "./assets/scss/style.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { useTranslation } from "react-i18next";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import AppRouter from "./Router/AppRouter";

function App() {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    AOS.init();
  }, []);

  return <AppRouter />;
}
export default App;
