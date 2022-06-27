import { Button } from "react-bootstrap";
import React, { useState } from "react";
import Lottie from "lottie-react";
import animationData from "../Pages/data.json";

function FinishedPage() {
  const [state, setState] = useState(false);
  return (
    <div>
      <Button
        onClick={() => {
          setState(!state);
        }}
      >
        {state ? "Go to home" : "Finished"}
      </Button>
      <div>
        {state && (
          <Lottie animationData={animationData} height={400} width={400} />
        )}
      </div>
    </div>
  );
}

export default FinishedPage;
