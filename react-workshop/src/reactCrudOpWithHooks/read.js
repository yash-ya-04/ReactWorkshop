import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Update() {
  const [APIData, setAPIData] = useState([]);

  useEffect(() => {
    axios
      .get(`https://60fbca4591156a0017b4c8a7.mockapi.io/fakeData`)
      .then((response) => {
        console.log(response.data);
        setAPIData(response.data);
      });
  }, []);

  const setData = (data) => {
    let { id, name, age, designation, createdAt } = data;
    localStorage.setItem("id", id);
    localStorage.setItem("name", name);
    localStorage.setItem("age", age);
    localStorage.setItem("designation", designation);
    localStorage.setItem("createdAt", createdAt);
  };

  const getData = () => {
    axios.get("https://localhost:5001/api/Employee/").then((getData) => {
      setAPIData(getData.data);
    });
  };

  const onDelete = (id) => {
    axios.delete("https://localhost:5001/api/Employee/" + { id }).then(() => {
      getData();
    });
  };
  return (
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Id</th>
          <th scope="col">Name</th>
          <th scope="col">Age</th>
          <th scope="col">Designation</th>
          <th scope="col">Joined On</th>
          <th scope="col"></th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        {APIData.map((data) => {
          return (
            <tr>
              <th scope="row">{data.id}</th>
              <td>{data.name}</td>
              <td>{data.age}</td>
              <td>{data.designation}</td>
              <td>{data.createdAt}</td>
              <td><button onClick={() => onDelete(data.id)}>Delete</button></td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
