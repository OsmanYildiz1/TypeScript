// extend ile bir interface'i tekrar tekrar kullanabiliriz.
// interface IPerson {
//   name: string;
//   gender: string;
// }
// interfaceleri classlarda kullanmak için interfacedeki propertyleri classlarda
//tanımlamamız gerekir.
var Employees = /** @class */ (function () {
    function Employees(empNumber, name, gender) {
        this.empNumber = empNumber;
        this.name = name;
        this.gender = gender;
    }
    return Employees;
}());
var employees = new Employees(5, "osman", "male");
console.log(employees);
