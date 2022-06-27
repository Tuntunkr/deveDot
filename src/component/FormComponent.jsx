import React from "react";
import Step1 from "./Steps/Step1";
import Step2 from "./Steps/Step2";
import Step3 from "./Steps/Step3";
import Step4 from "./Steps/Step4";

function FormComponent({currentStep, setFormStep}) {
  return (
    <div style={{ display: "flex", flexDirection: "column", flex: 3, padding: "20px" }}>
      {currentStep === 0 ? <Step1 currentStep={currentStep} setFormStep={setFormStep} /> : null}
      {currentStep === 1 ? <Step2 currentStep={currentStep} setFormStep={setFormStep} /> : null}
      {currentStep === 2 ? <Step3 currentStep={currentStep} setFormStep={setFormStep} /> : null}
      {currentStep === 3 ? <Step4 currentStep={currentStep} setFormStep={setFormStep} /> : null}
    </div>
  );
}

export default FormComponent;
