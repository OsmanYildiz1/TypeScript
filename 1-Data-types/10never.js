// geriye null dahil hiçbir değer döndürmez yani hata fırlatmayı ifade eder.
function throwError(errorMsg) {
    throw new Error(errorMsg);
}
throwError("hata");
// void geriye return etmez undefined  döndürebilir.. never null ve undefined dahil döndürmez. sadece hata fırlatır.
var something1 = undefined;
var nothing = null;
