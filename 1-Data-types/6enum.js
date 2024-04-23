// Media içindeki her değer 0 dan başlayıp 1 artarak tutulur.
// enumın default hali numberdır
var Media;
(function (Media) {
    Media[Media["Newspaper"] = 1] = "Newspaper";
    Media[Media["Newsletter"] = 2] = "Newsletter";
    Media[Media["Magazine"] = 3] = "Magazine";
    Media[Media["Book"] = 4] = "Book";
})(Media || (Media = {}));
console.log(Media.Magazine);
console.log(Media[4]); // enumda 4 e eşit olan değeri basar (Book)
var PrintMedia;
(function (PrintMedia) {
    PrintMedia["Newspaper"] = "NEWSPAPER";
    PrintMedia["Newsletter"] = "NEWSLETTER";
    PrintMedia["Magazine"] = "MAGAZINE";
    PrintMedia["Book"] = "BOOK";
})(PrintMedia || (PrintMedia = {}));
// atadıgımız string değer atanmış olacak.
console.log(PrintMedia.Newspaper);
console.log(PrintMedia["Newspaper"]); // bu şekilde de bastırılabilir.
