// Normalde bir classın içindekileri kullanmak için bir instance oluşturmamız gerekir.
// Fakat tanımları statik ile yaparsak direkt classIsmi.degisken seklinde ulaşabiliriz.
var Circle = /** @class */ (function () {
    function Circle() {
        this.pi = 3;
        this.pi++;
        //her instance oluşturulduğunda burası calısacak yani static pi 1 artacak
        Circle.pi++;
    }
    // static fonksiyon olusturma
    Circle.hesapla = function (yaricap) {
        return this.pi * yaricap * yaricap;
    };
    Circle.pi = 3.14;
    return Circle;
}());
var objem = new Circle();
var objem2 = new Circle();
console.log(objem.pi);
console.log(Circle.pi);
console.log(Circle.hesapla(5));
console.log(objem.pi); // normal pi değeri aynı kaldı static arttı
