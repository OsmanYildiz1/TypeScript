// bir fonksiyonu aşırı yükleme

// function add(a: number, b: number): number {
//   return a + b;
// }

// let deg1 = add(4, 5);
// console.log(deg1);

function add(a: string, b: string): string;
function add(a: number, b: number): number;
// burada aynı isimli fonksiyona kullanmak istediğimiz tipte parametreler gönderip
// fonksiyonu any olarak geçersek iki türlüde kullanma şansımız olur. Buna overloading denir.
function add(a: any, b: any): any {
  return a + b;
}

let deg1 = add(1, 8);
console.log(deg1);
