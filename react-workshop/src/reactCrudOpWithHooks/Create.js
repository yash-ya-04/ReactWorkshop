import React, { useState } from "react";
import axios from "axios";

export default function Create() {
  const [id, setId] = useState(0);
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [designation, setDesignation] = useState("");
  const [createdAt, setCreatedAt] = useState("");
  const postData = () => {
    axios.post('https://localhost:5001/api/Employee', {
      id,
      name,
      age,
      designation,
      createdAt,
    });
    console.log(name);
    console.log(id);
    console.log(age);
    console.log(designation);
    console.log(createdAt);
  };
  return (
    <fieldset>
      <label>Id</label>
      <input
        type="number"
        placeholder="Id"
        onChange={(e) => setId(e.target.value)}
      />
      <label>Name</label>
      <input
        type="text"
        placeholder="Name"
        onChange={(e) => setName(e.target.value)}
      />
      <label>Age</label>
      <input
        type="number"
        placeholder="Age"
        onChange={(e) => setAge(e.target.value)}
      />
      <label>Designation</label>
      <input
        type="text"
        placeholder="Designation"
        onChange={(e) => setDesignation(e.target.value)}
      />
      <label>Joined On</label>
      <input
        type="date"
        placeholder="Joined On"
        onChange={(e) => setCreatedAt(e.target.value)}
      />
      <input value="Add" onClick={postData} type="submit"></input>
    </fieldset>
  );
}
