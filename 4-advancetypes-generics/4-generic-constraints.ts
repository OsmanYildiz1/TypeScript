// Generic kısıtlamaları.

// extends object: U'ya object kuralları dahil olsun demektir, yaptıgımızda 29 hata vermeye baslar.
// yani kısıtlama getirmiş olduk
function merge<U extends object, V extends object>(obj1: U, obj2: V) {
  return {
    ...obj1,
    ...obj2,
  };
}

let person = merge(
  { name: "Can" },
  { age: 29 }
  //29
);

console.log(person);
