var Detective = /** @class */ (function () {
    function Detective(name, policeDepartment) {
        this.name = name;
        this.policeDepartment = policeDepartment;
    }
    Detective.prototype.investigation = function (caseName) {
        return "Detective ".concat(this.name, " must ivestigate case of ").concat(caseName, "!");
    };
    return Detective;
}());
var firstDetective = new Detective('Michael Washington', 'Milwaukee PD');
console.log(firstDetective.name);
console.log(firstDetective.policeDepartment);
console.log(firstDetective.investigation('Alice murder'));
var secondDetective = new Detective('Ashley Kenedy', 'NYPD');
console.log(secondDetective.investigation('Mystery vanishing of Ethan Carter'));
