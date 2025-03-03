var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var AirPortWarsaw = /** @class */ (function () {
    function AirPortWarsaw() {
        this.name = "Warsaw";
    }
    Object.defineProperty(AirPortWarsaw.prototype, "AirPortName", {
        get: function () {
            return this.name;
        },
        enumerable: false,
        configurable: true
    });
    return AirPortWarsaw;
}());
var Plane = /** @class */ (function (_super) {
    __extends(Plane, _super);
    function Plane(name) {
        var _this = _super.call(this) || this;
        _this.planeName = name;
        return _this;
    }
    Plane.prototype.landing = function () {
        console.log("Plane ".concat(this.planeName, " land safely"));
    };
    Plane.prototype.departing = function (time) {
        console.log("Plane ".concat(this.planeName, " will depart at ").concat(time));
    };
    return Plane;
}(AirPortWarsaw));
var plane234 = new Plane("XC234");
plane234.landing();
plane234.departing("20-01-2025:19:45");
console.log(plane234.AirPortName);
