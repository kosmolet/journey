import { createContext, useState, useEffect } from "react";
import baseURL from "../axios";

export const authContext = createContext({});

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({ data: null });
  const [error, setError] = useState("");

  const setAuthData = (user) => {
    setAuth({ data: user });
  };

  useEffect(() => {
    const fetchPrivateDate = async () => {
      setError("");
      const token = localStorage.getItem("authToken");
      if (token) {
        const config = {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("authToken")}`,
          },
        };

        try {
          const { data } = await baseURL.get("/user", config);
          setAuth({
            data: {
              id: data.user._id,
              username: data.user.username,
              email: data.user.email,
            },
          });
        } catch (err) {
          localStorage.removeItem("authToken");
          setError(
            "You are not authorized or your session is expired, please login again"
          );
        }
      }
    };

    fetchPrivateDate();
  }, []);

  return (
    <authContext.Provider value={{ auth, error, setAuthData }}>
      {children}
    </authContext.Provider>
  );
};

export default AuthProvider;
