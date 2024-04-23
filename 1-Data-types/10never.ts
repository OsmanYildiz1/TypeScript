// geriye null dahil hiçbir değer döndürmez yani hata fırlatmayı ifade eder.

function throwError(errorMsg: string): never {
  throw new Error(errorMsg);
}

throwError("hata");

// void geriye return etmez undefined  döndürebilir.. never null ve undefined dahil döndürmez. sadece hata fırlatır.

let something1: void = undefined;
// let nothing: never = null; tanımlanamayacağı için hata alırız.
