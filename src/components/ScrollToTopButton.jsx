import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    });
  }, []);

  return (
    <button
      style={{
        position: "fixed",
        right: "20px",
        bottom: "30px",
        height: "50px",
        width: "50px",
        backgroundColor: "orange",
        display: visible ? "block" : "none",
      }}
      onClick={() => {
        window.scrollTo(0, 0);
      }}
      className=" border-0 rounded-circle  fs-5"
    >
      <FaArrowUp />
    </button>
  );
};

export default ScrollToTopButton;
