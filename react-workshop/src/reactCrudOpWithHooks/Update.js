import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Update.css"

export default function Update(props) {
  const [id, setId] = useState(0);
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [designation, setDesignation] = useState("");
  const [createdAt, setCreatedAt] = useState("");

  useEffect(() => {
    setId(localStorage.getItem("id"));
    setName(localStorage.getItem("name"));
    setAge(localStorage.getItem("age"));
    setDesignation(localStorage.getItem("designation"));
    setCreatedAt(localStorage.getItem("createdAt"));
  }, []);

  const updateData = () => {
    axios.put("https://localhost:5001/api/Employee/" + { id }, {
      name,
      age,
      designation,
      createdAt,
    }).then(() => {
      props.history.push('/read');
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
      <input id="button" value="Add" onClick={updateData} type="submit"></input>
    </fieldset>
  );
}
