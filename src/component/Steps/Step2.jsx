import React from "react";
import { Form, Col, Row, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";

function Step2({ currentStep, setFormStep }) {
  const formData = JSON.parse(localStorage.getItem("form-data"));

  const {
    register,
    handleSubmit,
    formState: { isSubmitting, isDirty, isValid },
  } = useForm({
    defaultValues: {
      imageurl: formData && formData.imageurl ? formData.imageurl : "",
      backgroundcolor:
        formData && formData.backgroundcolor ? formData.backgroundcolor : "",
      tags: formData && formData.tags ? formData.tags : "",
      linktitle: formData && formData.linktitle ? formData.linktitle : "",
      link: formData && formData.link ? formData.link : "",
    },
    mode: "onChange",
  });

  const onSubmit = (data) => {
    console.log(data);
    const step2Data = {
      imageurl: data.imageurl,
      backgroundcolor: data.backgroundcolor,
      tags: data.tags,
      linktitle: data.linktitle,
      link: data.link,
    };
    localStorage.setItem("form-data", JSON.stringify({...formData, ...step2Data}));
    setFormStep(currentStep + 1);
  };

  const onBackClick = () => {
    setFormStep(currentStep - 1);
  };

  console.log(currentStep);

  return (
    <div>
      <h4>Image and other information</h4>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Row>
          <Col>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Image url</Form.Label>
              <Form.Control
                type="text"
                {...register("imageurl", { required: true })}
                placeholder="URL of image/logo"
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3" controlId="color pickers">
              <Form.Label>Background color</Form.Label>
              <Form.Control
                type="color"
                {...register("backgroundcolor", { required: true })}
                placeholder="Background color for logo "
              />
            </Form.Group>
          </Col>
        </Row>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Tags</Form.Label>
          <Form.Control
            type="text"
            {...register("tags", { required: true })}
            placeholder="Add resource related tags "
          />
        </Form.Group>
        <Row>
          <Col>
            <Form.Group className="mb-3">
              <Form.Label>Link title</Form.Label>
              <Form.Control
                type="text"
                {...register("linktitle", { required: true })}
                placeholder="Official website name"
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3">
              <Form.Label>Link</Form.Label>
              <Form.Control
                type="text"
                {...register("link", { required: true })}
                placeholder="Official website link/url"
              />
            </Form.Group>
          </Col>
        </Row>
        <Row style={{ justifyContent: "space-between" }}>
          <Col>
            <Button variant="secondary" onClick={onBackClick}>
              Back
            </Button>
          </Col>
          <Col>
            <Button
              variant="primary"
              type="submit"
              disabled={!isDirty || !isValid || isSubmitting}
            >
              {isSubmitting ? "Saving..." : "Proceed"}
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
}

export default Step2;
