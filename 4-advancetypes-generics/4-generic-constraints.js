// Generic kısıtlamaları.
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
// extends object: U'ya object kuralları dahil olsun demektir, yaptıgımızda 29 hata vermeye baslar.
// yani kısıtlama getirmiş olduk
function merge(obj1, obj2) {
    return __assign(__assign({}, obj1), obj2);
}
var person = merge({ name: "Can" }, { age: 29 }
//29
);
console.log(person);
