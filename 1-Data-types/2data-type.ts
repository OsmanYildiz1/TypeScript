//NUMBERS
let first: number = 123; // number
let second: number = 0x37cf; // hexadecimal
let third: number = 0o377; // octal
let fourth: number = 0b111001; // binary

// number değerleri farklı sayı sistemlerinde tanımlayabiliriz.
//Fakat sonuç yine tam sayı oalcaktır.
console.log(first); // 123
console.log(second); //14287
console.log(third); // 255
console.log(fourth); //57

//STRİNG
let employeefirstName: string = "Osman Yıldız";
console.log(employeefirstName);

//TEMPLATE STRİNG
let employeeName: string = "John Smith";
let employeeDept: string = "Finance";
//es5
let employeeDesc1: string =
  employeeName + " works in the " + employeeDept + " department";
console.log(employeeDesc1);
// es6
let employeeDesc2: string = `${employeeName} works in the ${employeeDept} department`;
console.log(employeeDesc2);

//BOOLEAN
let isPresent: boolean = true;
console.log(isPresent);
