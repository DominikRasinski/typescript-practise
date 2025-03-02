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
var PoliceStation = /** @class */ (function () {
    function PoliceStation(name) {
        this.name = name;
    }
    return PoliceStation;
}());
var DetectiveStation = /** @class */ (function (_super) {
    __extends(DetectiveStation, _super);
    function DetectiveStation(name) {
        var _this = _super.call(this, name) || this;
        _this.detectiveCases = [];
        return _this;
    }
    DetectiveStation.prototype.addNewCase = function (caseName) {
        return this.detectiveCases.push(caseName);
    };
    DetectiveStation.prototype.showCases = function () {
        return this.detectiveCases;
    };
    return DetectiveStation;
}(PoliceStation));
var copDetective = new DetectiveStation('Jan');
var cop = new PoliceStation('Drake');
copDetective.addNewCase('murder');
copDetective.addNewCase('robbery');
console.log("Detective has name: ".concat(copDetective.name));
console.log(copDetective.showCases());
console.log("Regular cop has name: ".concat(cop.name));
