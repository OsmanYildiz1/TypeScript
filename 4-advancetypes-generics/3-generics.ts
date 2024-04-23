// dönüş tipi verdiğimiz değere göre otomatik ayarlansın istiyorsak generic kullanırız.

// dizede indexe göre rastgele sayı seçen fonksiyon
function getRandomNumber(items: number[]): number {
  let randomIndex = Math.floor(Math.random() * items.length);
  return items[randomIndex];
}

let numbers = [1, 54, 65, 7, 8];

console.log(getRandomNumber(numbers));

// aynı örneğin string versiyonu index önemli olduğu için bir şey farketmiyor
function getRandomString(items: string[]): string {
  let randomIndex = Math.floor(Math.random() * items.length);
  return items[randomIndex];
}

let adlarim = ["Can", "Tuba", "Merve"];

console.log(getRandomString(adlarim));

// any kullanarak fonksiyonları ayrı ayrı yazmamaya olanak sağlar
//ancak önerilen bir kullanım değildir çünkü type safe değildir. Bu yüzden generic kullanırız.
// function getRandomElement(items: any[]): any {
//   let randomIndex = Math.floor(Math.random() * items.length);
//   return items[randomIndex];
// }

// T, tipi ifade eder yani biz hangi veri tipini kullanırsak ona dönüşecektir.
function getRandomElement<T>(items: T[]): T {
  let randomIndex = Math.floor(Math.random() * items.length);
  return items[randomIndex];
}

// burada type'ı belirtmesekte otomatik algılar fakat bu şekilde de verebiliriz.
console.log(getRandomElement<number>(numbers));
console.log(getRandomElement<string>(adlarim));

let degiskenlerim = [true, false, true];
console.log(getRandomElement<boolean>(degiskenlerim));
