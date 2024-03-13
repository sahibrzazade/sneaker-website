import React, { useContext } from "react";
import { IoHeartOutline, IoHeartSharp } from "react-icons/io5";

import { MyContext } from "../context/GlobalContext";
import { useWishlist } from "react-use-wishlist";
import { toast } from "react-toastify";
import { t } from "i18next";

const WishlistButton = ({ p, singleProduct }) => {
  const { isDarkTheme } = useContext(MyContext);

  const { inWishlist, addWishlistItem, removeWishlistItem } = useWishlist();

  const toggleWishlist = (myProduct) => {
    if (inWishlist(myProduct.id)) {
      removeWishlistItem(myProduct.id);
      toast.error(`${myProduct.title} ${t("toast.6")}`);
    } else {
      addWishlistItem(myProduct);
      toast.success(`${myProduct.title}  ${t("toast.5")}`);
    }
  };

  return (
    <button
      style={{ width: "100%", height: "100%" }}
      className={`${
        isDarkTheme === true ? "dark-button" : "light-button"
      } col border border-dark-subtle rounded-0 text-uppercase`}
      onClick={() => toggleWishlist(p || singleProduct)}
    >
      {inWishlist(p?.id || singleProduct?.id) ? (
        <IoHeartSharp style={{ height: "30px", width: "30px" }} />
      ) : (
        <IoHeartOutline style={{ height: "30px", width: "30px" }} />
      )}
    </button>
  );
};

export default WishlistButton;
