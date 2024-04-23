// extend ile bir interface'i tekrar tekrar kullanabiliriz.
// interface IPerson {
//   name: string;
//   gender: string;
// }

// //extends ettiğimiz için IPerson'daki propertylerede ulaşabilir.
// interface IEmployee extends IPerson {
//   empNumber: number;
// }

// interface IWorker extends IPerson {
//   empDepartment: string;
// }

// let employeeX: IEmployee = {
//   empNumber: 1, // interfacelerde tanımlı tüm propları tanımlamak zorundayız.
//   gender: "Male",
//   name: "Can",
// };

// let employeeDepartment: IWorker = {
//   empDepartment: "software dep",
//   gender: "male",
//   name: "Osman",
// };

// console.log(employeeX);
// console.log(employeeDepartment);

//class'a interface ekleme(implements)
interface IPerson {
  name: string;
  gender: string;
}

// interfaceleri classlarda kullanmak için interfacedeki propertyleri classlarda
//tanımlamamız gerekir.
class Employees implements IPerson {
  empNumber: number;
  name: string;
  gender: string;

  constructor(empNumber: number, name: string, gender: string) {
    this.empNumber = empNumber;
    this.name = name;
    this.gender = gender;
  }
}

let employees = new Employees(5, "osman", "male");

console.log(employees);
