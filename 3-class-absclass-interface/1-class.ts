// classtaki fieldları constructorda tanımlamamız ve tiplerini vermemiz gerekir.
// Access Modifiers: Belirtmesekte default olarak publictir.
// Public: Her yerden erişime izin verir.
// Private: Sadece class içerisinde kullanmaya izin verir.
// Protected: Classın içinden erişilebilir ve Inheritance yapılan classtan erişilebilir.
// Readonly: Sadece okumaya izin verir. Dışarıdan ulaşılabilir fakat değiştirilemez.

class Person {
  readonly id: number;
  firstName: string;
  lastName: string;

  constructor(id: number, firstName: string, lastName: string) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

let kisibilgim = new Person(43, "Osman", "Yıldız");
// kisibilgim.id = 5;
console.log(kisibilgim.id);

console.log(kisibilgim.getFullName());
