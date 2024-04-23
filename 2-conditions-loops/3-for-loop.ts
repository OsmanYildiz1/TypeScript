for (let i = 0; i < 3; i++) {
  console.log("i değeri", i);
}

let arr = [10, 20, 30, 40];

for (let item of arr) {
  console.log(item);
}

for (let item in arr) {
  // in kullanımı dizideki elemanların indexini tutar.
  console.log(item);
}

// string bir değiskenin elemanlarınıda dolaşabiliriz.
let str = "can boz";
for (let item of str) {
  console.log(item);
}
