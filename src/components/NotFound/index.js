import "./style.css";
import Button from "../Button";

const NotFound = () => {
  return (
    <div className="not__found">
      <h1>404 - Not Found!</h1>
      <Button btnStyle="btn__outline__cosm" btnSize="btn__large" path="/">
        HOME
      </Button>
    </div>
  );
};

export default NotFound;
