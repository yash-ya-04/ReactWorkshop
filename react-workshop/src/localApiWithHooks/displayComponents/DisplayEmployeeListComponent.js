export default function DisplayEmployeeListComponent(props) {
  var list = props.list;
  return (
    <>
      <table className="table-bordered">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Age</th>
            <th scope="col">Designation</th>
            <th scope="col">Created At</th>
          </tr>
        </thead>
        <tbody>
          {list.map(function (employee) {
            return (
              <tr key={employee.id}>
                <th scope="row">{employee.id}</th>
                <td>{employee.name}</td>
                <td>{employee.age}</td>
                <td>{employee.designation}</td>
                <td>{Date(employee.createdAt).trimStart()}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
