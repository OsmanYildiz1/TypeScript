// js'den farklı olarak data type belirtmek gerekir.
var age = 25;
var firstname = "Osman";
var lastname = "Osman";
var isupDated = true;
console.log(firstname);
//fonksiyon tanımlarkende parametrelere tip vermek gerekir.
// herhangi bir tip olarak any'de tanımlanabilir.
function display(id: any, name: string) {
  console.log("ID = " + id + ", Name =" + name);
}
