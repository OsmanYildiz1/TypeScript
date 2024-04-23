// ts'de fonksiyonların döndüreceği değerin tipini gösteririz.
//eğer fonksiyonun tipini vermzsek otomatik olarak atar.
function add(a, b) {
    return a + b;
}
var toplam = add(10, 20);
console.log(typeof toplam);
//geriye değer döndürmeyeceksek void veririz yada hiç vermeyebiliriz.
function bastir() {
    console.log("Osman Yıldız");
    return 35;
}
var degisken = bastir();
console.log(degisken); // returnu bastırabilmek için degiskende tuttuk.
// ad soyad arasına bosluk ekleyen string fonksiyon örneği
// function birlestir(ad: string, soyad: string): string {
//   return ad + " " + soyad;
// }
// let as = birlestir("Zeynep", "Yldz");
// console.log(as);
// default parametreli fonksiyon.
// eğer fonksiyona değer atarsak default parametreyi ezer.
function birlestir(ad, soyad) {
    if (soyad === void 0) { soyad = "Yıldırım"; }
    return ad + " " + soyad;
}
var as = birlestir("Zeynep");
console.log(as);
