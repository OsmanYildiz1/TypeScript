// classtaki fieldları constructorda tanımlamamız ve tiplerini vermemiz gerekir.
// Access Modifiers: Belirtmesekte default olarak publictir.
// Public: Her yerden erişime izin verir.
// Private: Sadece class içerisinde kullanmaya izin verir.
// Protected: Classın içinden erişilebilir ve Inheritance yapılan classtan erişilebilir.
// Readonly: Sadece okumaya izin verir. Dışarıdan ulaşılabilir fakat değiştirilemez.
var Person = /** @class */ (function () {
    function Person(id, firstName, lastName) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Person.prototype.getFullName = function () {
        return "".concat(this.firstName, " ").concat(this.lastName);
    };
    return Person;
}());
var kisibilgim = new Person(43, "Osman", "Yıldız");
// kisibilgim.id = 5;
console.log(kisibilgim.id);
console.log(kisibilgim.getFullName());
