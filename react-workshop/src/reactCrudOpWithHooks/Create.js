import React, { useState } from "react";
import { Button, Checkbox, Form } from "semantic-ui-react";

export default function Create() {
  const [id, setId] = useState(0);
  const [name, setName] = useState('');
  const [age, setAge] = useState(0);
  const [designation, setDesignation] = useState('');
  const [createdAt, setCreatedAt] = useState('');
  const postData = () => {
    console.log(name);
    console.log(id);
    console.log(age);
    console.log(designation);
    console.log(createdAt);
  };
  return (
    <div>
      <Form className="create-form">
        <Form.Field>
          <label>Id</label>
          <input placeholder="Id" onChange={(e) => setId(e.target.value)} />
        </Form.Field>
        <Form.Field>
          <label>Name</label>
          <input placeholder="Name" onChange={(e) => setName(e.target.value)} />
        </Form.Field>
        <Form.Field>
          <label>Age</label>
          <input placeholder="Age" onChange={(e) => setAge(e.target.value)} />
        </Form.Field>
        <Form.Field>
          <label>Designation</label>
          <input
            placeholder="Designation"
            onChange={(e) => setDesignation(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>Joined On</label>
          <input
            placeholder="Joined On"
            onChange={(e) => setCreatedAt(e.target.value)}
          />
        </Form.Field>
        <Button onClick={postData} type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}
