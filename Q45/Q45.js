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
function createCar(manufacturer, model) {
    var otherProperties = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        otherProperties[_i - 2] = arguments[_i];
    }
    var car = { manufacturer: manufacturer, model: model };
    var otherPropertiesObj = otherProperties.reduce(function (acc, prop) {
        if (Array.isArray(prop) && prop.length === 2) {
            acc[prop[0]] = prop[1];
        }
        else {
            console.warn("Invalid property: ".concat(prop));
        }
        return acc;
    }, {});
    return __assign(__assign({}, car), otherPropertiesObj);
}
var myCar = createCar("Audi", "Sportback", ["color", "blue"], ["sunroof", true]);
console.log(myCar);
