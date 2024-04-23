// Tek tek typeları geçmemek için burada interface kullanırız.

// function getFullName(person: { firstName: string; lastName: string }) {
//   return `${person.firstName} ${person.lastName}`;
// }
// bu şekilde kullanmak yerine interface ile tanımlarız
interface Persona {
  firstName: string;
  lastName: string;
}

function getFullName(person: Persona) {
  return `${person.firstName} ${person.lastName}`;
}

let person = {
  firstName: "Can",
  lastName: "Boz",
  age: 29,
};

console.log(getFullName(person));
