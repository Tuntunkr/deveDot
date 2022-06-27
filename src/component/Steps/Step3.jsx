import React from "react";
import { Col, Row, Button } from "react-bootstrap";
import firestoreDB from "../../api/firebaseDB";
import Rcard from "../../Pages/Rcard";
import "../../styles/Rcard.css";

function Step3({ currentStep, setFormStep }) {
  const formData = JSON.parse(localStorage.getItem("form-data"));

  const onBackClick = () => {
    setFormStep(currentStep - 1);
  };

  const onNextClick = (e) => {
    e.preventDefault()
    // formData.tags = formData.tags.split(',')

    firestoreDB.collection('projects').add(formData)
    setFormStep(currentStep + 1)
  }

  console.log(currentStep);
  console.log(formData);

  return (
    <div>
      <h4>Preview & Publish</h4>
      <Rcard data={formData} />
      <Row style={{ justifyContent: "space-between" }}>
        <Col>
          <Button variant="secondary" onClick={onBackClick}>
            Back
          </Button>
        </Col>
        <Col>
          <Button
            to="finishedpage"
            onClick={onNextClick}
          >
            Finished
          </Button>
        </Col>
      </Row>
    </div>
  );
}

export default Step3;
