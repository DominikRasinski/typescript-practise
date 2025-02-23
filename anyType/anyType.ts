// Wszystkie operacje są dozwolene dla zmiennej typu any

let anyVar: any = 'Dominik';
anyVar = 20;

const stringArr = ['Dominik', 'Tomek', 'Mateusz'];

anyVar = stringArr;

const person = {
  name: 'Dominik',
  age: 25,
};

anyVar = person;
