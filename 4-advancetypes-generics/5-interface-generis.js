// interface ve classlarda generic olabilir.
// interface Months<U, V> {
//   key: U;
//   value: V;
// }
var List = /** @class */ (function () {
    function List() {
        this.items = []; // tipi T olan boş bir dizi
    }
    List.prototype.add = function (o) {
        this.items.push(o); // items dizisine o değerini push et
        console.log(this.items);
    };
    List.prototype.remove = function (o) {
        var index = this.items.indexOf(o); // indexof o değeri yoksa -1 döndüreceği için.
        if (index > -1) {
            this.items.splice(index, 1);
        }
    };
    return List;
}());
var list = new List();
for (var i = 0; i < 10; i++) {
    list.add(i);
}
