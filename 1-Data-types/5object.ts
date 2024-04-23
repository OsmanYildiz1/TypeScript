type Person = {
  firsName: string;
  lastName: string;
  age: number;
  jobTitle: string;
};

let instructor1: Person;

instructor1 = {
  firsName: "Can",
  lastName: "Boz",
  age: 29,
  jobTitle: "Software Instructor",
};
// burada hata alacağımız için bir type oluşturup içerine fieldların tipini geçtik.
// ve objemizin type'ını oluşturduğumuz eleman olarak veriyoruz.

// Alternatif kullanım
let person: {
  firsName: "Can";
  lastName: "Boz";
  age: 29;
  jobTitle: "Software Instructor";
};

person = {
  firsName: "Can",
  lastName: "Boz",
  age: 29,
  jobTitle: "Software Instructor",
};

console.log(person);
