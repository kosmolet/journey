import { useState, useEffect, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import baseURL from "../../axios";
import { authContext } from "../../store/AuthContext";

const Login = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { setAuthData } = useContext(authContext);

  useEffect(() => {
    if (localStorage.getItem("authToken")) {
      history.replace("/account");
    }
  }, [history]);

  const loginHandler = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const { data } = await baseURL.post("/auth/login", { email, password });

      localStorage.setItem("authToken", data.token);

      setAuthData({
        id: data.user._id,
        username: data.user.username,
        email: data.user.email,
      });

      history.replace("/account");
    } catch (err) {
      setError(err.response.data.error);
    }
  };

  return (
    <div className="login-page-wr">
      <form onSubmit={loginHandler} className="login-form">
        <h3 className="login-form-title">Sign In</h3>

        <div className="input-label-group">
          <label htmlFor="email">
            Email
            <input
              id="email"
              type="email"
              required
              placeholder="Email address"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              tabIndex={0}
            />
          </label>
        </div>
        <div className="input-label-group">
          <label htmlFor="password">
            Password
            <input
              type="password"
              required
              autoComplete="true"
              id="password"
              placeholder="Enter password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              tabIndex={0}
            />
          </label>
        </div>
        <p className="login-form-forgotpassword">
          <Link to="/forgotpassword">Forgot Password?</Link>
        </p>
        {error && <span className="error-message">{error}</span>}
        <button type="submit" className="btn">
          Login
        </button>

        <span className="login-form-subtext">
          New user? <Link to="/register">Create an account</Link>
        </span>
      </form>
    </div>
  );
};

export default Login;
