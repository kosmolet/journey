import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const Destinations = () => {
  return (
    <>
      <div className="planet__frame">
        <iframe
          title="venus"
          frameBorder="0"
          src="https://eyes.nasa.gov/apps/orrery/#/venus"
        />
      </div>
    </>
  );
};

export default Destinations;
