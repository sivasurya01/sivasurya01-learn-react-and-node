import React, { useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import axios from "axios";
function Home() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [validated, setValidated] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    // const form = e.currentTarget;
    // if (form.checkValidity() === false) {
    // e.preventDefault();
    // e.stopPropagation();
    try {
      let data = await axios.post("http://localhost:3000/register", form);
      console.log(await data.data, "data");
      return await data.data;
    } catch (error) {
      console.log(error);
    }
    // }

    setValidated(true);
  };
  return (
    <div
      className="d-flex flex-column justify-content-center bg-warning align-items-center align-content-center "
      style={{ height: "100vh" }}
    >
      <Card className="d-flex flex-column justify-content-center align-items-center align-content-center w-50 h-60">
        <h2>Register</h2>
        <Form
          className="p-1"
          // noValidate
          // validated={validated}
          onSubmit={handleSubmit}
        >
          <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              aria-label="Name"
              required
              className="border-2"
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              aria-label="Name"
              required
              className="border-2"
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="Password"
              aria-label="Password"
              required
              className="border-2"
              onChange={(e) => setForm({ ...form, password: e.target.value })}
            />
          </Form.Group>
          <div className="d-flex justify-content-center align-items-center p-1 mt-2">
            <Button type="submit">Submit</Button>
          </div>
        </Form>
      </Card>
    </div>
  );
}

export default Home;
