import React from "react";

const stepDescription = [
  "Enter all the basic information about the resource",
  "Add image related information for the resouce",
  "Check all the details carefully before proceeding",
];

function FormSidebar({ currentStep }) {
  const currentStepText = `Step ${currentStep + 1}`;
  return (
    <div style={{ display: "flex", flex: 1, flexDirection: 'column' }}>
      <h4>{currentStepText}</h4>
      <p>{stepDescription[currentStep]}</p>
      <div style={{ display: "flex" }}>
        <div
          style={{
            width: "1.5em",
            height: "1.5em",
            borderRadius: "0.75em",
            marginRight: "1.25rem",
            display: "flex",
            alignItems: 'center',
            justifyContent: 'center',
            border: '1px solid #7958d7',
            background: currentStep > 0 ? "#7958d7" : "#fff",
          }}
        >
          {currentStep > 0 ? "✓" : "1"}
        </div>
        <p>Basic Details</p>
      </div>
      <div style={{ display: "flex" }}>
        <div
          style={{
            width: "1.5em",
            height: "1.5em",
            borderRadius: "0.75em",
            marginRight: "1.25rem",
            display: "flex",
            alignItems: 'center',
            justifyContent: 'center',
            border: '1px solid #7958d7',
            background: currentStep > 1 ? "#7958d7" : "#fff",
          }}
        >
          {currentStep > 1 ? "✓" : "2"}
        </div>
        <p>Image and other information</p>
        
      </div>
      <div style={{ display: "flex" }}>
        <div
          style={{
            width: "1.5em",
            height: "1.5em",
            borderRadius: "0.75em",
            marginRight: "1.25rem",
            display: "flex",
            alignItems: 'center',
            justifyContent: 'center',
            border: '1px solid #7958d7',
            background: currentStep > 2 ? "#7958d7" : "#fff",
          }}
        >
          {currentStep > 2 ? "✓" : "3"}
        </div>
        <p>Preview and publish</p>
      </div>
      <div style={{ display: "flex" }}>
        <div
          style={{
            width: "1.5em",
            height: "1.5em",
            borderRadius: "0.75em",
            marginRight: "1.25rem",
            display: "flex",
            alignItems: 'center',
            justifyContent: 'center',
            border: '1px solid #7958d7',
            background: currentStep > 3 ? "#7958d7" : "#fff",
          }}
        >
          {currentStep > 3 ? "✓" : "4"}
        </div>
        <p>Finished</p>
      </div>
    </div>
  );
}

export default FormSidebar;
