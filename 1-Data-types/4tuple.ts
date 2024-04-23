let Id: number = 1;
let instructorName: string = "Osman";

// Tuple
// birden fazla tip vererek değişken tutma
let instructor: [number, string] = [1, "Osman"];

var user: [number, string, boolean, number, string];
user = [1, "Steve", true, 20, "admin"];

console.log(instructor, user);

//tuplelar ile arrayda oluşturabilirz.

let employee: [number, string][]; // elemanları number ve string olan tupleları tutan diziler
employee = [
  [1, "Steve"],
  [2, "Bill"],
  [3, "Jeff"],
];

console.log(employee);
