import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Update() {
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
        value={id}
        placeholder="Id"
        onChange={(e) => setId(e.target.value)}
        readOnly
      />
      <label>Name</label>
      <input
        type="text"
        value={name}
        placeholder="Name"
        onChange={(e) => setName(e.target.value)}
      />
      <label>Age</label>
      <input
        type="number"
        value={age}
        placeholder="Age"
        onChange={(e) => setAge(e.target.value)}
      />
      <label>Designation</label>
      <input
        type="text"
        value={designation}
        placeholder="Designation"
        onChange={(e) => setDesignation(e.target.value)}
      />
      <label>Joined On</label>
      <input
        type="date"
        value={createdAt}
        placeholder="Joined On"
        onChange={(e) => setCreatedAt(e.target.value)}
      />
      <input value="Add" onClick={updateData} type="submit"></input>
    </fieldset>
  );
}
