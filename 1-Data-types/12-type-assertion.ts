// kodumuzu yazarken type belirtme zorunluluğu olsun istiyorsak type assertion kullanıırız.

let code1: any = 123;

let empCode = <number>code1; // type'ı otomatik değil elle verdiğimizde
console.log("empCode=" + typeof empCode);

interface Employee {
  name: string;
  code: number;
}

let employeeX = <Employee>{};
// interface'deki fieldları objeyi tanımlayıp kullanabiliriz.
// yani otomatik atamak yerine verdiğimiz type geçerli olur.
console.log(typeof employeeX);

employeeX.name = "Can";
console.log(employeeX);
