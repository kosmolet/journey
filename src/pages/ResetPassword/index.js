/* eslint-disable consistent-return */
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import baseURL from "../../axios";

const ResetPassword = () => {
  const { resetToken } = useParams();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const resetPasswordHandler = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    if (password !== confirmPassword) {
      setPassword("");
      setConfirmPassword("");
      return setError("Passwords do not match");
    }

    try {
      const { data } = await baseURL.put(`/auth/resetpassword/${resetToken}`, {
        password,
      });

      setSuccess(data.data);
    } catch (err) {
      setError(err.response.data.error);
    }
  };

  return (
    <div className="resetpassword-page-wr">
      <form onSubmit={resetPasswordHandler} className="resetpassword-form">
        <h3 className="resetpassword-form-title">Reset Password</h3>

        <div className="input-label-group">
          <label htmlFor="password">
            New Password
            <input
              type="password"
              required
              id="password"
              placeholder="Enter new password"
              autoComplete="true"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
        </div>
        <div className="input-label-group">
          <label htmlFor="confirmpassword">
            Confirm New Password
            <input
              type="password"
              required
              id="confirmpassword"
              placeholder="Confirm new password"
              autoComplete="true"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </label>
        </div>
        {error && <span className="error-message">{error} </span>}

        <button type="submit" className="btn ">
          Reset Password
        </button>
        {success && (
          <span className="success-message">
            {success} <Link to="/login">Login</Link>
          </span>
        )}
      </form>
    </div>
  );
};

export default ResetPassword;
