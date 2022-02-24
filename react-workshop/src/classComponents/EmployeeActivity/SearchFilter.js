import React, {Component} from "react";
import DisplayEmployee from "../../components/EmployeeActivity/DisplayEmployeeList";
import employeeList from "../../data/EmployeeList";
import "./SearchFilter.css"

export default class SearchFilter extends Component {
    constructor() {
        super();
        this.state = {
            name: "",
            employeeToDisplay: employeeList
        };
    }
    search=(event)=>{
        const keyword = event.target.value;
        if (keyword !== '') {
          const results = employeeList.filter((employee) => {
            return employee.name.toLowerCase().startsWith(keyword.toLowerCase());
          });
          this.setState({
              name: keyword,
              employeeToDisplay: results
          })
        } else {
            this.setState({
                name: keyword,
                employeeToDisplay: employeeList
            })
        }
        this.setState({
            name: keyword,
        })
      };
    render() {
        return (
            <div className="container">
              <input
                type="search"
                value={this.state.name}
                onChange={this.search}
                className="input"
                placeholder="Filter"
              />
              <DisplayEmployee employeeList={this.state.employeeToDisplay}/>
            </div>
          );
    }
}