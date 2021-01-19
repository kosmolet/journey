import Button from "../Button";
import "./style.css";

const HomeSection = ({ direction, title, text, buttonLabel, path, image }) => {
  return (
    <div className={direction}>
      <div
        className="text__side"
        data-aos="fade-up"
        data-aos-duration="400"
        data-aos-delay="100"
        data-aos-anchor-placement="top-center"
      >
        <h2 className="info__title">{title}</h2>
        <p>{text}</p>
        <Button path={path} btnStyle="btn__outline_cosm" btnSize="btn__large">
          {buttonLabel}
        </Button>
      </div>
      <div
        className="image__side"
        data-aos="zoom-out"
        data-aos-duration="400"
        data-aos-delay="50"
        data-aos-anchor-placement="top-center"
      >
        <img className="image" src={image} alt="home" />
      </div>
    </div>
  );
};

export default HomeSection;
