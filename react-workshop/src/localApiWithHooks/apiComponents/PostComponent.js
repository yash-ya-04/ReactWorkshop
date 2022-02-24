import axios from "axios";
import React, {useState} from "react";
import DisplayEmployeeListComponent from "../displayComponents/DisplayEmployeeListComponent";

const baseURL = "https://localhost:5001/api/Employee";

export default function App() {
  const [employeeList, setEmployeeList] = useState(null);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setEmployeeList(response.data);
    });
  }, []);

  function createPost() {
    axios.post(baseURL, {
        id: 3,
        name: "Vishu",
        createdAt: "2022-02-21",
        avatar: "",
        age: 21,
        designation: "Product Analyst",
      })
      .then((response) => {
        setEmployeeList(response.data);
      });
  }

  if (!employeeList) return "No post!";

  return (
      <>
        <button onClick={createPost}>Create Post</button>
        <DisplayEmployeeListComponent list={employeeList}/>
      </>
  );
}
