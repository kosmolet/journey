import { useContext } from "react";
import { authContext } from "../../store/AuthContext";
import Button from "../../components/Button";
import "./style.css";

const UserSummary = () => {
  const { error, auth } = useContext(authContext);

  return (
    <>
      {error ? (
        <div className="user__summary">
          <span className="error-message">{error}</span>
        </div>
      ) : (
        <div className="user__summary">
          <h1 className="user__summary__title">
            {" "}
            {`Hello, ${auth.data.username}`}{" "}
          </h1>

          <div className="user__data">
            <h2>Your data </h2>
            <p>{`Id: ${auth.data.id}`}</p>
            <p>{`Username: ${auth.data.username}`}</p>
            <p>{`Email: ${auth.data.email}`}</p>
          </div>
          <Button
            btnStyle="btn__primary"
            btnSize="btn__large"
            path="/destinations"
          >
            Our Destinations
          </Button>
        </div>
      )}
    </>
  );
};

export default UserSummary;
