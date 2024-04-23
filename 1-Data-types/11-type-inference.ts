// herhangi bir değişkenin tipini atamadığımız halde tipini görebiliriz.
//Yani tip belirtmesekte typescript bunu algılar.

let sayac = 0;
console.log(typeof sayac);

function increment(counter: number) {
  return counter++;
}

// function increment(counter: number):number { iki fonksiyon aynıdır
//     return counter++;
//   }

let a = "some text";
let b = 123;

// a=b; // hata verir a'nın string, b'nin number olduğunu algıladı

function sum(x: number, y: number) {
  return x + y;
}

// let total: number = sum(10, 15); // fonksiyona değişkene atadığımızda da hata almayız.

// let total: string = sum(10, 15); // stringde ise hata alır.
