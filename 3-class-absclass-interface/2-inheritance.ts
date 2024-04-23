// Inheritance: Kalıtım. miras alınacak sınıf extends ile çağırılır.
class Person1 {
  id: number;
  firstName: string;
  lastName: string;

  constructor(id: number, firstName: string, lastName: string) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

// burada Employee child, Person1 parent'tır.
// parenttakileri kullanmak için fieldları constructor'a vermeliyiz
// super() ile parentın contructor'ını tetikleriz
class Employee extends Person1 {
  constructor(id: number, firstName: string, lastName: string) {
    super(id, firstName, lastName);
  }
}
let employee = new Employee(29, "Can", "Boz");
console.log(employee.getFullName());

// let kisibilgim1 = new Person1(43, "Osman", "Yıldız");
// console.log(kisibilgim1.id);
