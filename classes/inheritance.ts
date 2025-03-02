class PoliceStation {
   name: string;

   constructor(name: string) {
      this.name = name;
   }
}

class DetectiveStation extends PoliceStation {
   private detectiveCases: string[];

   constructor(name: string) {
      super(name);
      this.detectiveCases = [];
   }

   addNewCase(caseName: string) {
      return this.detectiveCases.push(caseName);
   }

   showCases() {
      return this.detectiveCases;
   }
}

const copDetective = new DetectiveStation('Jan');
const cop = new PoliceStation('Drake');

copDetective.addNewCase('murder');
copDetective.addNewCase('robbery');

console.log(`Detective has name: ${copDetective.name}`);
console.log(copDetective.showCases());
console.log(`Regular cop has name: ${cop.name}`);
