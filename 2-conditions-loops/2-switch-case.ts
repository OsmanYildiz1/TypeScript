// switchin içindeki parametre casede tutuyorsa çalışıyorsa o case calısır.

let day: number = 10;

switch (day) {
  case 0:
    console.log("Pazar");
    break;

  case 1:
    console.log("Pazartesi");
    break;

  case 2:
    console.log("Salı");
    break;

  case 3:
    console.log("Çarşamba");
    break;

  case 4:
    console.log("Perşembe");
    break;

  case 5:
    console.log("Cuma");
    break;

  case 6:
    console.log("Cumartesi");
    break;

  default:
    console.log("Geçerli bir sayı giriniz.");
    break;
}
