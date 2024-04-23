// kodumuzu yazarken type belirtme zorunluluğu olsun istiyorsak type assertion kullanıırız.
var code1 = 123;
var empCode = code1; // type'ı otomatik değil elle verdiğimizde
console.log("empCode=" + typeof empCode);
var employeeX = {};
// interface'deki fieldları objeyi tanımlayıp kullanabiliriz.
// yani otomatik atamak yerine verdiğimiz type geçerli olur.
console.log(typeof employeeX);
employeeX.name = "Can";
console.log(employeeX);
