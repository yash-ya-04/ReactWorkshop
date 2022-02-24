import "../classComponents/SearchFilter.css";

export default function DisplayEmployee(props) {
  return (
    <div className="employee-list">
      {props.employeeList.length > 0 ? (
        props.employeeList.map(function (employee) {
          return (
            <li key={employee.id} className="employee">
              <span className="employee-id">{employee.id}</span>
              <span className="employee-name">{employee.name}</span>
              <span className="employee-age">{employee.age} years old</span>
              <span className="employee-designation">
                {employee.designation}
              </span>
            </li>
          );
        })
      ) : (
        <h1>No results found!</h1>
      )}
    </div>
  );
}
