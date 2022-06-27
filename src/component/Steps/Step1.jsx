import React from "react";
import { Form, Col, Row, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";


function Step1({ currentStep, setFormStep }) {

  
  const formData = JSON.parse(localStorage.getItem("form-data"));

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isDirty, isValid },
  } = useForm({
    defaultValues: {
      title: formData && formData.title ? formData.title : "",
      subheading: formData && formData.subheading ? formData.subheading : "",
      category: formData && formData.category ? formData.category : "",
      description: formData && formData.description ? formData.description : "",
    },
    mode: "onChange",
  });

  const onSubmit = (data) => {
    console.log(data);
    const step1Data = {
      title: data.title,
      subheading: data.subheading,
      categories: [data.categories],
      description: data.description,
    };
    console.log(data);
    localStorage.setItem("form-data", JSON.stringify(step1Data));
    setFormStep(currentStep + 1);
  };

  console.log(isDirty, isSubmitting, isValid, errors);

  console.log(currentStep);

  return (
    <>
    <div>
      <h3>Basic Details</h3>
      <Form onSubmit={handleSubmit(onSubmit)} method="POST">
        <Row>
          <Col>
            <Form.Group className="mb-3" controlId="title">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                name="title"
                {...register("title", { required: true })}
                placeholder="Resource main title"
              />
              <Form.Text>{errors.title ? "Title is required" : ""}</Form.Text>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3" controlId="subheading">
              <Form.Label>Subheading</Form.Label>
              <Form.Control
                type="text"
                name="subheading"
                {...register("subheading", { required: true })}
                placeholder="Resource subheading"
              />
              <Form.Text>
                {errors.subheading ? "Subheading is required" : ""}
              </Form.Text>
            </Form.Group>
          </Col>
        </Row>

        <Form.Group className="mb-3" controlId="category">
          <Form.Label>category</Form.Label>
          <Form.Select
            aria-label="Default select example"
            placeholder="Select category"
            {...register("categories", { required: true })}
            
          >
            <option>Open this select menu</option>
            <option value="community">Community</option>
            <option value="libraries">Libraries</option>
            <option value="network">Network</option>
            <option value="nodeSoftware">Node Software</option>
            <option value="protocols">Protocols</option>
            <option value="services">Services</option>
            <option value="tools">Tools</option>

            
          </Form.Select>
          <Form.Text>{errors.category ? "Category is required" : ""}</Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            name="description"
            {...register("description", { required: true })}
            rows={3}
            placeholder="Describe the resource for better understanding of user"
          />
          <Form.Text>
            {errors.description ? "Description is required" : ""}
          </Form.Text>
        </Form.Group>

        <Button variant="primary" type="submit" disabled={!isDirty || !isValid}>
          {isSubmitting ? "Saving..." : "Proceed"} 
        </Button>
      </Form>
    </div>
    </>
  );
  }

export default Step1;
