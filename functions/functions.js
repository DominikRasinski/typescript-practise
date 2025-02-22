function executeCallback(callback) {
    return callback();
}
function sayHello() {
    return 'Hello!';
}
console.log(executeCallback(sayHello)); // Hello!
