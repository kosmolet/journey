import Button from "../Button";
import "./style.css";

const Banner = () => {
  return (
    <div className="banner">
      <h1>FIND ADVENTURE</h1>
      <p>
        What are you waiting for? Book a journey to any planet in our planetary
        system!
      </p>
      <div className="banner__btns">
        <Button
          btnStyle="btn__outline"
          btnSize="btn__large"
          path="/destinations"
        >
          GET STARTED
        </Button>
        <Button
          btnStyle="btn__primary"
          btnSize="btn__large"
          path="/destinations"
        >
          WATCH TRAILER
        </Button>
      </div>
    </div>
  );
};

export default Banner;
