// JS'de isteğe baglı parametre verdiğimiz arguments kullanımını
// TS'de rest parameters ile yaparız. aynı mantıktadır sadece dizi olarak vermeliyiz.

//rest parameter sonda olmalı sonrasında parametre olursa hata verecektir.
// function toplam0(a: string, ...numbers: number[]): number {
//   console.log(a);
//   let total = 0;
//   numbers.forEach((num) => (total += num));
//   return total;
// }

// console.log(toplam0("Osman", 20, 30));

function birlestir0(message: string, ...names: string[]) {
  console.log(message + " ", names.join(", "));
  // önce mesajı sonra ismi sonra her isimden sonra virgül ve varsa tekrar ismi basar.
}

birlestir0("Merhaba", "Can", "Osman", "Tuba");
