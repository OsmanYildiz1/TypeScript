// ts'de fonksiyonların döndüreceği değerin tipini gösteririz.
//eğer fonksiyonun tipini vermzsek otomatik olarak atar.
function add(a: number, b: number): number {
  return a + b;
}

let toplam = add(10, 20);
console.log(typeof toplam);

//geriye değer döndürmeyeceksek void veririz yada hiç vermeyebiliriz.
function bastir() {
  console.log("Osman Yıldız");
  return 35;
}

let degisken = bastir();
console.log(degisken); // returnu bastırabilmek için degiskende tuttuk.

// ad soyad arasına bosluk ekleyen string fonksiyon örneği
// function birlestir(ad: string, soyad: string): string {
//   return ad + " " + soyad;
// }

// let as = birlestir("Zeynep", "Yldz");
// console.log(as);

// default parametreli fonksiyon.
// eğer fonksiyona değer atarsak default parametreyi ezer.
function birlestir(ad: string, soyad: string = "Yıldırım"): string {
  return ad + " " + soyad;
}

let as = birlestir("Zeynep");
console.log(as);
