import React, { useState } from "react";
import axios from "axios";
import "./Create.css";

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
  };
  return (
    <fieldset>
      <legend>Add Details</legend>
      <label>Id</label>
      <input
        type="number"
        placeholder="Id"
        onChange={(e) => setId(e.target.value)}
      /><br/><br/>
      <label>Name</label>
      <input
        type="text"
        placeholder="Name"
        onChange={(e) => setName(e.target.value)}
      /><br/><br/>
      <label>Age</label>
      <input
        type="number"
        placeholder="Age"
        onChange={(e) => setAge(e.target.value)}
      /><br/><br/>
      <label>Designation</label>
      <input
        type="text"
        placeholder="Designation"
        onChange={(e) => setDesignation(e.target.value)}
      /><br/><br/>
      <label>Joined On</label>
      <input
        type="date"
        placeholder="Joined On"
        onChange={(e) => setCreatedAt(e.target.value)}
      /><br/><br/>
      <input value="Add" onClick={postData} type="submit"></input>
    </fieldset>
  );
}
