for (var i = 0; i < 3; i++) {
    console.log("i değeri", i);
}
var arr = [10, 20, 30, 40];
for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
    var item = arr_1[_i];
    console.log(item);
}
for (var item in arr) {
    // in kullanımı dizideki elemanların indexini tutar.
    console.log(item);
}
// string bir değiskenin elemanlarınıda dolaşabiliriz.
var str = "can boz";
for (var _a = 0, str_1 = str; _a < str_1.length; _a++) {
    var item = str_1[_a];
    console.log(item);
}
