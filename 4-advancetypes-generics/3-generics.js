// dönüş tipi verdiğimiz değere göre otomatik ayarlansın istiyorsak generic kullanırız.
// dizede indexe göre rastgele sayı seçen fonksiyon
function getRandomNumber(items) {
    var randomIndex = Math.floor(Math.random() * items.length);
    return items[randomIndex];
}
var numbers = [1, 54, 65, 7, 8];
console.log(getRandomNumber(numbers));
// aynı örneğin string versiyonu index önemli olduğu için bir şey farketmiyor
function getRandomString(items) {
    var randomIndex = Math.floor(Math.random() * items.length);
    return items[randomIndex];
}
var adlarim = ["Can", "Tuba", "Merve"];
console.log(getRandomString(adlarim));
// any kullanarak fonksiyonları ayrı ayrı yazmamaya olanak sağlar
//ancak önerilen bir kullanım değildir çünkü type safe değildir. Bu yüzden generic kullanırız.
// function getRandomElement(items: any[]): any {
//   let randomIndex = Math.floor(Math.random() * items.length);
//   return items[randomIndex];
// }
// T, tipi ifade eder yani biz hangi veri tipini kullanırsak ona dönüşecektir.
function getRandomElement(items) {
    var randomIndex = Math.floor(Math.random() * items.length);
    return items[randomIndex];
}
// burada type'ı belirtmesekte otomatik algılar fakat bu şekilde de verebiliriz.
console.log(getRandomElement(numbers));
console.log(getRandomElement(adlarim));
var degiskenlerim = [true, false, true];
console.log(getRandomElement(degiskenlerim));
