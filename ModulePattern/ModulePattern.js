var EmployeeModel = (function(){
    function Employee(ename, eage, edesignation, esalary) {
        this.EmployeeName = ename;
        this.EmployeeAge = eage;
        this.EmployeeDesignation = edesignation;
        this.EmployeeSalary = esalary;
    }
    var Employees = [];
    return{
        addEmployee : function(ename, eage, edesignation, esalary) {
                        Employees.push(new Employee(ename, eage, edesignation, esalary));
                      },
        getEmployeeCount : function () {
                            return Employees.length;
                        },
        getEmployees : function() {
                                console.log("-----------------------------------")
                                for (let i = 0; i < Employees.length; i++) {
                                    console.log("Employee Name : " + Employees[i].EmployeeName);
                                    console.log("Employee Age : " + Employees[i].EmployeeAge);
                                    console.log("Employee Designation : " + Employees[i].EmployeeDesignation);
                                    console.log("Employee Salary : " + Employees[i].EmployeeSalary);
                                    console.log("-----------------------------------")
                                }
                        },
        getEmployeeByName : function (name) {
                                console.log("-----------------------------------")
                                for (let i = 0; i < Employees.length; i++) {
                                    if(name === Employees[i].EmployeeName)
                                    {
                                        console.log("Employee Name : " + Employees[i].EmployeeName);
                                        console.log("Employee Age : " + Employees[i].EmployeeAge);
                                        console.log("Employee Designation : " + Employees[i].EmployeeDesignation);
                                        console.log("Employee Salary : " + Employees[i].EmployeeSalary);
                                        console.log("-----------------------------------")   
                                    }
                                }
                            }
    };
}());

EmployeeModel.addEmployee("Yash", 22, "SDE", 90000);
EmployeeModel.addEmployee("Vinay", 21, "SDE1", 95000);
EmployeeModel.addEmployee("Ram", 23, "SDE2", 100000);
console.log("Total Number of Employees are " + EmployeeModel.getEmployeeCount());
EmployeeModel.getEmployeeByName("Yash");