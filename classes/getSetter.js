var PoliceSchool = /** @class */ (function () {
    function PoliceSchool(students) {
        this.schoolArchives = [];
        this.students = students;
    }
    Object.defineProperty(PoliceSchool.prototype, "showArchives", {
        get: function () {
            if (this.schoolArchives.length) {
                return this.schoolArchives;
            }
            return ("There is no value in archives");
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PoliceSchool.prototype, "addArchive", {
        set: function (archive) {
            if (archive) {
                this.schoolArchives.push(archive);
            }
            else {
                throw new Error("Please provide valid value!");
            }
        },
        enumerable: false,
        configurable: true
    });
    return PoliceSchool;
}());
var studentsName = ["Tomek", "Mateusz", "Dominik", "Jan"];
var NYPDSchool = new PoliceSchool(studentsName);
console.log(NYPDSchool.students);
console.log(NYPDSchool.showArchives);
NYPDSchool.addArchive = "D1";
console.log(NYPDSchool.showArchives);
// NYPDSchool.addArchive = "";
