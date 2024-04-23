// classlarda generic kullanımı
var Stack = /** @class */ (function () {
    function Stack(size) {
        this.size = size;
        this.elements = [];
    }
    Stack.prototype.isEmpty = function () {
        return this.elements.length === 0; // elemanı sıfırsa isEmpty true döner
    };
    Stack.prototype.isFull = function () {
        return this.elements.length === this.size; // eleman size'a eşitse true döner
    };
    Stack.prototype.push = function (element) {
        if (this.elements.length === this.size) {
            // dizi boyutu size'a eşitse stack doludur hatayı fırlat
            throw new Error("The stack is overflow!");
        }
        this.elements.push(element); // eşit değilse diziye elemanı ekle
    };
    Stack.prototype.pop = function () {
        if (this.elements.length == 0) {
            throw new Error("The stack is empty");
        }
        return this.elements.pop();
    };
    return Stack;
}());
function randBetween(low, high) {
    return Math.floor(Math.random() * (high - low + 1) + low);
}
var numbers1 = new Stack(10);
while (!numbers1.isFull()) {
    // numbers full değilse pushlamaya devam et
    var n = randBetween(1, 10);
    console.log("Push ".concat(n, " into the stack"));
    numbers1.push(n);
}
while (!numbers1.isEmpty()) {
    //numbers boş değilse çıkarmaya devam et
    var n = numbers1.pop();
    console.log("Pop ".concat(n, " from the stack"));
}
