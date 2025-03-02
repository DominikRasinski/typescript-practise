class PoliceSchool {
    students: string[];
    private schoolArchives: string[] = [];

    constructor(students: string[]) {
        this.students = students;
    }

    get showArchives() {
        if (this.schoolArchives.length) {
            return this.schoolArchives;
        }
        return("There is no value in archives");
    }

    set addArchive(archive: string) {
        if (archive) {
             this.schoolArchives.push(archive);
        } else {
            throw new Error(
                "Please provide valid value!"
            )
        }
    }
}

const studentsName = ["Tomek", "Mateusz", "Dominik", "Jan"];

const NYPDSchool = new PoliceSchool(studentsName);

console.log(NYPDSchool.students);
console.log(NYPDSchool.showArchives);

NYPDSchool.addArchive = "D1";
console.log(NYPDSchool.showArchives);

// NYPDSchool.addArchive = "";