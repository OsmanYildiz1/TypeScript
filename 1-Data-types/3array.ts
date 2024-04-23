//let firstNames: string[] = ["Osman", "Zeynep", "Merve"]; ilk tanımlama
let firstNames: Array<string> = ["Osman", "Zeynep", "Merve"];
// ikinci yöntem: generic array
console.log(firstNames);

let arr = [1, 3, "Apple", true, false]; // tip belirtmeden de dizi tanımlanabilir.

let ids: Array<number>;
ids = [23, 34, 124];

//multitypes array
let values: (string | number)[] = ["Apple", 2, "Orange", 3, 4];
// elemanları string ya da number olabilir.
let valuees: Array<string | number> = ["Apple", "Orange", "Banana"];
// diğer bir tanımlama şekli

let fruits: Array<string>;
fruits = ["Apple", "Orange", "Banana"];
console.log(fruits[2]);

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
