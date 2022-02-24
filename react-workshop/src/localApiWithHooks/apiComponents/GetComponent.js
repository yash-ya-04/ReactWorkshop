import React, { useState } from "react";
import axios from "axios";
import DisplayEmployeeListComponent from "../displayComponents/DisplayEmployeeListComponent";

const url = "https://localhost:5001/api/Employee";
export default function GetComponent() {
  const [employeeList, setEmployeeList] = useState(null);
  React.useEffect(() => {
    axios.get(url).then((response) => {
      setEmployeeList(response.data);
    });
  }, []);
  if(!employeeList) return <h1>No Data Available</h1>
  return (
    <DisplayEmployeeListComponent list={employeeList}/>
  );
}
