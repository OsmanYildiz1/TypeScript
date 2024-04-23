// interface Persona {
//   readonly firstName: string;
//   lastName: string;
//   middleName?: string; // optional interface
// }

// function getFullNameX(person: Persona) {
//   if (person.middleName) {
//     return `${person.firstName} ${person.middleName} ${person.lastName}`;
//   }
//   return `${person.firstName} ${person.lastName}`;
// }

// let personX: Persona = {
//   firstName: "Can",
//   middleName: "X", // tanımlamasakta hata almayız.
//   lastName: "Boz",
// };

// // personX.firstName = "Cann";
// console.log(getFullNameX(personX));

// Örnek true olursa string büyük harf false ise küçük harf olsun
// INTERFACE'I FUNCTION OLARAK TANIMLAYABİLİRİZ.
interface StringFormat {
  (str: string, isUpper: boolean): string; // iki parametreli string dönen bir fonksiyon
}

let format: StringFormat;

format = function (str: string, isUpper: boolean) {
  return isUpper ? str.toLocaleUpperCase() : str.toLocaleLowerCase();
};

console.log(format("Can Boz", false));
