//let firstNames: string[] = ["Osman", "Zeynep", "Merve"]; ilk tanımlama
var firstNames = ["Osman", "Zeynep", "Merve"];
// ikinci yöntem: generic array
console.log(firstNames);
var arr = [1, 3, "Apple", true, false]; // tip belirtmeden de dizi tanımlanabilir.
var ids;
ids = [23, 34, 124];
//multitypes array
var values = ["Apple", 2, "Orange", 3, 4];
// elemanları string ya da number olabilir.
var valuees = ["Apple", "Orange", "Banana"];
// diğer bir tanımlama şekli
var fruits;
fruits = ["Apple", "Orange", "Banana"];
console.log(fruits[2]);
for (var i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
