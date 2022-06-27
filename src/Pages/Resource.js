import React from "react";
import { Container } from "react-bootstrap";
import FormComponent from "../component/FormComponent";
import FormSidebar from "../component/Sidebar/FormSidebar";

function Resource() {
  const [currentFormStep, setCurrentFormStep] = React.useState(0);
  return (
    <Container
      fluid
      style={{
        display: "flex",
        background: "#fff",
        justifyContent: "center",
        height: "100%",
      }}
    >
      <FormSidebar currentStep={currentFormStep} />
      <FormComponent
        currentStep={currentFormStep}
        setFormStep={setCurrentFormStep}
      />
    </Container>
  );
}

export default Resource;
