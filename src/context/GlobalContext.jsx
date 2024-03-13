import axios from "axios";
import { createContext, useCallback, useEffect, useState } from "react";
import Loading from "../components/Loading";
import { useCart } from "react-use-cart";
export const MyContext = createContext();

export const ContextProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [productList, setProductList] = useState([]);
  const [discount, setDiscount] = useState(0);
  const [commentInput, setCommentInput] = useState("");
  const [checkoutList, setCheckoutList] = useState(
    localStorage.getItem("checkoutList")
      ? JSON.parse(localStorage.getItem("checkoutList"))
      : {}
  );
  const [registerUser, setRegisterUser] = useState({
    registerUsername: "",
    registerEmail: "",
    registerPassword: "",
    isLoggedIn: false,
    isAdmin: false,
  });
  const [registeredUsers, setRegisteredUsers] = useState(
    localStorage.getItem("registeredUsers")
      ? JSON.parse(localStorage.getItem("registeredUsers"))
      : [
          {
            registerUsername: "Sahib",
            registerEmail: "sahibrzazade03@gmail.com",
            registerPassword: "12345678@s",
            isLoggedIn: false,
            isAdmin: true,
          },
        ]
  );

  const [loggedAccount, setLoggedAccount] = useState(
    localStorage.getItem("loggedAccount")
      ? JSON.parse(localStorage.getItem("loggedAccount"))
      : {
          registerUsername: "",
          registerEmail: "",
          registerPassword: "",
          isAdmin: false,
          isLoggedIn: false,
        }
  );

  // Set Logged Account

  useEffect(() => {
    localStorage.setItem("loggedAccount", JSON.stringify(loggedAccount));
  }, [loggedAccount]);

  // Set local storage

  useEffect(() => {
    localStorage.setItem("registeredUsers", JSON.stringify(registeredUsers));
    localStorage.setItem("checkoutList", JSON.stringify(checkoutList));
    localStorage.setItem("loggedAccount", JSON.stringify(loggedAccount));
  }, []);

  // Registered Users set
  useEffect(() => {
    localStorage.setItem("registeredUsers", JSON.stringify(registeredUsers));
  }, [registeredUsers]);

  // Register input State

  const changeRegisterState = (event) => {
    setRegisterUser({
      ...registerUser,
      [event.target.name]: event.target.value,
      isAdmin: false,
    });
  };

  // Dark-Light mode State

  const [isDarkTheme, setIsDarkTheme] = useState(
    JSON.parse(localStorage.getItem("isDarkTheme"))
  );

  const mainUrl =
    "https://rebuqegfjzfhjqejvkrd.supabase.co/rest/v1/Product_List";

  const apiKey =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJlYnVxZWdmanpmaGpxZWp2a3JkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDAxMTc3NDUsImV4cCI6MjAxNTY5Mzc0NX0.ljcmcx3QuNj6nhRv-i14GbbKSKvQ3aATSKmhljPbaUk";

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const res = await axios.get(mainUrl, {
          headers: {
            apikey: apiKey,
            Authorization: "Bearer" + " " + apiKey,
          },
        });
        setProductList(
          res.data.sort(function (a, b) {
            return a.id - b.id;
          })
        );
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    getData();
  }, []);

  return (
    <MyContext.Provider
      value={{
        isDarkTheme,
        setIsDarkTheme,
        productList,
        setProductList,
        loading,
        setLoading,
        registerUser,
        setRegisterUser,
        changeRegisterState,
        discount,
        setDiscount,
        checkoutList,
        setCheckoutList,
        commentInput,
        setCommentInput,
        registeredUsers,
        setRegisteredUsers,
        loggedAccount,
        setLoggedAccount,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};
