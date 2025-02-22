// funkcja zwracająca inna funkcję jako callback
// jak widać wykonująca callback może mieć typ void i nadal zwróci wartość

function executeCallback(callback: () => void): void {
  return callback();
}

function sayHello(): string {
  return 'Hello!';
}

console.log(executeCallback(sayHello)); // Hello!
