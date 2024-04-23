// Abstract Class'tan kendi başına new instance oluşturamayiz.
// Extends ederek kullanabiliriz.
// abstract classta absract metod kullanınca kalıtım aldıgımız yerde de kullanmalıyız.
// abstract class içinde normal metotta kullanabiliriz.
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Department = /** @class */ (function () {
    function Department(name) {
        this.name = name;
    }
    Department.prototype.printName = function () {
        console.log("Department name: " + this.name);
    };
    return Department;
}());
var AccountingDepartment = /** @class */ (function (_super) {
    __extends(AccountingDepartment, _super);
    function AccountingDepartment() {
        return _super.call(this, "Accounting and Auditing") || this;
    }
    AccountingDepartment.prototype.printMeeting = function () {
        console.log("The Accounting Department meets each Monday at 10am");
    };
    AccountingDepartment.prototype.generateReport = function () {
        console.log("Generating accounting reports...");
    };
    AccountingDepartment.prototype.yaz12 = function () {
        console.log("Selamlar");
    };
    return AccountingDepartment;
}(Department));
// abstract classtan instance alamayız fakat abstract type'a referans edebiliriz.
// Fakat referans ile kullanırsak abstract class'ta olmayan metotları kullanamayız.
var department;
department = new AccountingDepartment();
department.printName();
department.printMeeting();
department.generateReport();
//department.yaz12(); abstract classta olmadıgı için çalışmaz.
