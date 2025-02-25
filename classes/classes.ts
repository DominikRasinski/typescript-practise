class Detective {
  name: string;
  policeDepartment: string;

  constructor(name: string, policeDepartment: string) {
    this.name = name;
    this.policeDepartment = policeDepartment;
  }

  public investigation(caseName: string): string {
    return `Detective ${this.name} must ivestigate case of ${caseName}!`;
  }
}

const firstDetective = new Detective('Michael Washington', 'Milwaukee PD');
console.log(firstDetective.name);
console.log(firstDetective.policeDepartment);

console.log(firstDetective.investigation('Alice murder'));

const secondDetective = new Detective('Ashley Kenedy', 'NYPD');
console.log(secondDetective.investigation('Mystery vanishing of Ethan Carter'));
