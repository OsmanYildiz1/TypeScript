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
// Inheritance: Kalıtım. miras alınacak sınıf extends ile çağırılır.
var Person1 = /** @class */ (function () {
    function Person1(id, firstName, lastName) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Person1.prototype.getFullName = function () {
        return "".concat(this.firstName, " ").concat(this.lastName);
    };
    return Person1;
}());
// burada Employee child, Person1 parent'tır.
// parenttakileri kullanmak için fieldları constructor'a vermeliyiz
// super() ile parentın contructor'ını tetikleriz
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(id, firstName, lastName) {
        return _super.call(this, id, firstName, lastName) || this;
    }
    return Employee;
}(Person1));
var employee = new Employee(29, "Can", "Boz");
console.log(employee.getFullName());
// let kisibilgim1 = new Person1(43, "Osman", "Yıldız");
// console.log(kisibilgim1.id);
