// interface Persona {
//   readonly firstName: string;
//   lastName: string;
//   middleName?: string; // optional interface
// }
var format;
format = function (str, isUpper) {
    return isUpper ? str.toLocaleUpperCase() : str.toLocaleLowerCase();
};
console.log(format("Can Boz", false));
