// number veya string olsun dediğimiz durumu tip olarak tanımlama type guard'dır.
function add(a, b) {
    if (typeof a === "number" && typeof b === "number") {
        return a + b;
    }
    if (typeof a === "string" && typeof b === "string") {
        return a.concat(b); // concat ile birleştirdik.
    }
    throw new Error("Lütfen doğru formatta data gönderin");
}
console.log(add(1, "2"));
// INSTANCEOF: classları içerip içermediğini kontrol etmek için kullanılır.
var Customer1 = /** @class */ (function () {
    function Customer1() {
    }
    Customer1.prototype.isCreditAllowed = function () {
        return true;
    };
    return Customer1;
}());
var Supplier = /** @class */ (function () {
    function Supplier() {
    }
    Supplier.prototype.isShortList = function () {
        return true;
    };
    return Supplier;
}());
function signContract(partner) {
    var message = "";
    if (partner instanceof Customer1) {
        message = partner.isCreditAllowed()
            ? "Sign a new contract with the customer"
            : "Credit issue";
    }
    if (partner instanceof Supplier) {
        message = partner.isShortList()
            ? "Sign a new contract the supplier "
            : "Need to evaluate further";
    }
    return message;
}
