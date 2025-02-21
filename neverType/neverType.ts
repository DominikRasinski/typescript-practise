const ctiticalError = (message: string): never => {
  throw { message: message, errorCode: 500 };
};

ctiticalError('An error occurred!'); // { message: 'An error occurred!', errorCode: 500 }

// Kolejny przykład użycia never w pęttli while
// const infiniteLoop = (): never => {
//   while (true) {
//     console.log('Infinite loop');
//   }
// };
