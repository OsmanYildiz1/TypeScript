// Tek tek typeları geçmemek için burada interface kullanırız.
function getFullName(person) {
    return "".concat(person.firstName, " ").concat(person.lastName);
}
var person = {
    firstName: "Can",
    lastName: "Boz",
    age: 29,
};
console.log(getFullName(person));
