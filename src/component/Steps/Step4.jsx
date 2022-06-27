import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import "../../styles/Rcard.css";
import animationData from "../../Pages/data.json";
import Lottie from "lottie-react";

function Step3({ currentStep, setFormStep }) {
  const formData = JSON.parse(localStorage.getItem("form1-data"));

  const [state, setState] = useState(false);
  const onBackClick = () => {
    setFormStep(currentStep - 1);
  };

  console.log(currentStep);
  console.log(formData);

  return (
    <div>
      <h4>Finished</h4>
      <div>
        <Lottie
          style={{ width: "60%", marginLeft: "5em" }}
          animationData={animationData}
          height={400}
          width={400}
        />
      </div>
      <NavLink to="/" className="backbutton">
        <button className="buttons1" type="button">
          Go to home
        </button>
      </NavLink>
    </div>
  );
}

export default Step3;
