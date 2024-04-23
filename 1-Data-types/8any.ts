// önerilmeyen bir tip olsa da karmasıklığı ve istenmeye hataları önlemek için(backendde değişebilecek tip durumları gibi..) kullanılır.
// her tip değeri alır

let someThing: any = "Hello";
someThing = 45;
someThing = true;
someThing = {
  firstName: "can",
  lastName: "boz",
};
console.log(someThing);

let arr1: any[] = ["John", 212, true];

console.log(arr1);
