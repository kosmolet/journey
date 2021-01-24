/* eslint-disable consistent-return */
import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";

const Register = () => {
  const history = useHistory();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (localStorage.getItem("authToken")) {
      history.push("/");
    }
  }, [history]);

  const registrationHandler = async (e) => {
    e.preventDefault();
    setError("");
    if (password !== confirmpassword) {
      setPassword("");
      setConfirmPassword("");
      return setError("Passwords do not match");
    }

    try {
      await axios.post("/auth/register", {
        username,
        email,
        password,
      });

      history.push("/login");
    } catch (err) {
      setError(err.response.data.error);
    }
  };

  return (
    <div className="register-page-wr">
      <form onSubmit={registrationHandler} className="register-form">
        <h3 className="register-form-title">Sign Up</h3>

        <div className="input-label-group">
          <label htmlFor="name">
            Username
            <input
              type="text"
              required
              id="name"
              placeholder="Enter username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>
        </div>
        <div className="input-label-group">
          <label htmlFor="email">
            Email
            <input
              type="email"
              required
              id="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
        </div>
        <div className="input-label-group">
          <label htmlFor="password">
            Password
            <input
              type="password"
              required
              id="password"
              autoComplete="true"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
        </div>
        <div className="input-label-group">
          <label htmlFor="confirmpassword">
            Confirm Password
            <input
              type="password"
              required
              id="confirmpassword"
              autoComplete="true"
              placeholder="Confirm password"
              value={confirmpassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </label>
        </div>
        {error && <span className="error-message">{error}</span>}
        <button type="submit" className="btn">
          Create Account
        </button>

        <span className="register-form-subtext">
          Already have an account? <Link to="/login">Login</Link>
        </span>
      </form>
    </div>
  );
};

export default Register;
