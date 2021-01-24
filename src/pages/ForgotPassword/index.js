import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const forgotPasswordHandler = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    try {
      const { data } = await axios.post("/auth/forgotpassword", { email });

      setSuccess(data.data);
    } catch (err) {
      setError(err.response.data.error);
    }
  };

  return (
    <div className="forgotpassword-page-wr">
      <form onSubmit={forgotPasswordHandler} className="forgotpassword-form">
        <h3 className="forgotpassword-form-title">Forgot Password</h3>

        <div className="input-label-group">
          <label htmlFor="email">
            Email
            <input
              type="email"
              required
              id="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
        </div>
        <div className="forgotpassword-form-login-link">
          Return to <Link to="/login">Login</Link> page
        </div>
        <button type="submit" className="btn">
          Send Email
        </button>
        {error && <span className="error-message">{error}</span>}
        {success && <span className="success-message">{success}</span>}
        <p className="forgotpassword-form-subtext">
          We will send an confirmation with further instructions to this email
          address in case if we have an account associated with entered email
        </p>
      </form>
    </div>
  );
};

export default ForgotPassword;
