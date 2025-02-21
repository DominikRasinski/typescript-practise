let userInput: unknown;
let userValue: string;

userInput = 5;
userInput = 'Max';

// userValue = userInput; // Error: Type 'unknown' is not assignable to type 'string'.

if (typeof userInput === 'string') {
  userValue = userInput;
}
