// OPTIONAL PARAMETERS.
//parametre olursa islemi yapar yoksa yapmaz.
// degisken isminin yanına '?' koyarsak optional olur
// function carpim(a: number, b: number, c?: number) {
//   console.log(typeof c); // c değeri girilmiş mi denemek için.
//   if (typeof c !== "undefined") {
//     // eğer değer atamadıysak c undefined olacaktır. undefined değilse 3ünüde çarp
//     return a * b * c;
//   }
//   // undefined ise a*b
//   return a * b;
// }
// let carp = carpim(5, 10, 1);
// console.log(carp);
// ARROW FUNCTIONS.
// function carpim(a: number, b: number): number {
//   return a * b;
// } bu örneği arrow function ile yazalım
var carpim = function (a, b) {
    return a * b;
};
var degiskens = carpim(4, 5);
console.log(degiskens);
// tek satır kod yazacaksak süslü parantez acmadan aynı satıra yazabiliriz. return yazmaya gerek olmaz.
var bastir1 = function () { return console.log("ismail kartal"); };
bastir1();
