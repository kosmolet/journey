import Button from "../Button";
import "./style.css";

const Banner = () => {
  return (
    <div className="banner">
      <h1>FIND ADVENTURE</h1>
      <p>Book a journey to any planet in our solar system</p>
      <div className="banner__btns">
        <Button
          btnStyle="btn__outline__cosm"
          btnSize="btn__large"
          path="/destinations"
        >
          GET STARTED
        </Button>
      </div>
    </div>
  );
};

export default Banner;
