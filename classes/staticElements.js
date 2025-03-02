var Mech = /** @class */ (function () {
    function Mech(serialNumber) {
        this.eliminatedEnemy = [];
        this.serialNumber = serialNumber;
    }
    Mech.shoot = function () {
        console.log("BOOOM");
    };
    Object.defineProperty(Mech.prototype, "confirmedEliminations", {
        get: function () {
            return this.eliminatedEnemy;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Mech.prototype, "elimination", {
        set: function (enemy) {
            if (enemy) {
                this.eliminatedEnemy.push(enemy);
            }
            else {
                throw new Error("Please provide correct name enemy");
            }
        },
        enumerable: false,
        configurable: true
    });
    return Mech;
}());
var mechX2134 = new Mech("X2134");
console.log(mechX2134.serialNumber);
Mech.shoot();
