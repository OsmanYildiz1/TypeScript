// Media içindeki her değer 0 dan başlayıp 1 artarak tutulur.
// enumın default hali numberdır
enum Media {
  Newspaper = 1, // default değeri arttırabilirz.
  Newsletter,
  Magazine,
  Book,
}
console.log(Media.Magazine);
console.log(Media[4]); // enumda 4 e eşit olan değeri basar (Book)

enum PrintMedia {
  Newspaper = "NEWSPAPER",
  Newsletter = "NEWSLETTER",
  Magazine = "MAGAZINE",
  Book = "BOOK",
}
// atadıgımız string değer atanmış olacak.
console.log(PrintMedia.Newspaper);
console.log(PrintMedia["Newspaper"]); // bu şekilde de bastırılabilir.
