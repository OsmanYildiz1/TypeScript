// number veya string olsun dediğimiz durumu tip olarak tanımlama type guard'dır.

type tip = string | number;

function add(a: tip, b: tip) {
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

class Customer1 {
  isCreditAllowed(): boolean {
    return true;
  }
}

class Supplier {
  isShortList(): boolean {
    return true;
  }
}
// class type'ıda oluşturulabilir.
type BusinessPartner1 = Customer1 | Supplier; // iki class tipinden biri olabilir.

function signContract(partner: BusinessPartner1): string {
  let message: string = "";
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
