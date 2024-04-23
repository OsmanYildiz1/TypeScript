// Normalde bir classın içindekileri kullanmak için bir instance oluşturmamız gerekir.
// Fakat tanımları statik ile yaparsak direkt classIsmi.degisken seklinde ulaşabiliriz.
class Circle {
  static pi: number = 3.14;
  pi = 3;

  constructor() {
    this.pi++;
    //her instance oluşturulduğunda burası calısacak yani static pi 1 artacak
    Circle.pi++;
  }

  // static fonksiyon olusturma
  static hesapla(yaricap: number) {
    return this.pi * yaricap * yaricap;
  }
}

let objem = new Circle();
let objem2 = new Circle();
console.log(objem.pi);

console.log(Circle.pi);
console.log(Circle.hesapla(5));

console.log(objem.pi); // normal pi değeri aynı kaldı static arttı
