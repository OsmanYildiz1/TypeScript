//NUMBERS
var first = 123; // number
var second = 0x37cf; // hexadecimal
var third = 255; // octal
var fourth = 57; // binary
// number değerleri farklı sayı sistemlerinde tanımlayabiliriz.
//Fakat sonuç yine tam sayı oalcaktır.
console.log(first); // 123
console.log(second); //14287
console.log(third); // 255
console.log(fourth); //57
//STRİNG
var employeefirstName = "Osman Yıldız";
console.log(employeefirstName);
//TEMPLATE STRİNG
var employeeName = "John Smith";
var employeeDept = "Finance";
//es5
var employeeDesc1 = employeeName + " works in the " + employeeDept + " department";
console.log(employeeDesc1);
// es6
var employeeDesc2 = "".concat(employeeName, " works in the ").concat(employeeDept, " department");
console.log(employeeDesc2);
//BOOLEAN
var isPresent = true;
console.log(isPresent);
