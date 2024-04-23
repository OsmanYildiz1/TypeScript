// intersection: kesişim. interfaceler kullanılır.

// let varName: number | string = "can"; // burada string veya numberdan birini alabilir.

interface BusinessPartner {
  name: string;
  credit: number;
}
interface Identity {
  name: string;
  id: number;
}
interface Contact {
  email: string;
  phone: string;
}

// yeni bir tip tanımladık. Interface gibi.
type Emloyee = Identity & Contact;

let kisim: Emloyee = {
  id: 54,
  name: "Osman Yildiz",
  email: "asjdnx@hotmail.com",
  phone: "4123452341",
};

console.log(kisim);

// örnek 2
type Customer = BusinessPartner & Contact;
let musterim: Customer = {
  credit: 1,
  name: "zeynep Yildiz",
  email: "asjdnx@hotmail.com",
  phone: "2134124",
};
console.log(musterim);
