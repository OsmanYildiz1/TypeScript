// Abstract Class'tan kendi başına new instance oluşturamayiz.
// Extends ederek kullanabiliriz.
// abstract classta absract metod kullanınca kalıtım aldıgımız yerde de kullanmalıyız.
// abstract class içinde normal metotta kullanabiliriz.

abstract class Department {
  constructor(public name: string) {}

  printName(): void {
    console.log("Department name: " + this.name);
  }

  abstract printMeeting(): void;
  abstract generateReport(): void;
}

class AccountingDepartment extends Department {
  constructor() {
    super("Accounting and Auditing");
  }

  printMeeting(): void {
    console.log("The Accounting Department meets each Monday at 10am");
  }

  generateReport(): void {
    console.log("Generating accounting reports...");
  }

  yaz12(): void {
    console.log("Selamlar");
  }
}

// abstract classtan instance alamayız fakat abstract type'a referans edebiliriz.
// Fakat referans ile kullanırsak abstract class'ta olmayan metotları kullanamayız.
let department: Department;
department = new AccountingDepartment();
department.printName();
department.printMeeting();
department.generateReport();
//department.yaz12(); abstract classta olmadıgı için çalışmaz.
