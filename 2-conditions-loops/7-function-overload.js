// bir fonksiyonu aşırı yükleme
// burada aynı isimli fonksiyona kullanmak istediğimiz tipte parametreler gönderip
// fonksiyonu any olarak geçersek iki türlüde kullanma şansımız olur. Buna overloading denir.
function add(a, b) {
    return a + b;
}
var deg1 = add(1, 8);
console.log(deg1);
