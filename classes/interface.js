var Auth = /** @class */ (function () {
    function Auth(login, password) {
        this.login = login;
        this.password = password;
    }
    Auth.prototype.logUser = function () {
        console.log("User ".concat(this.login, " has logged!"));
    };
    Auth.prototype.logOutUser = function () {
        console.log("User ".concat(this.login, " was log out!"));
    };
    Auth.prototype.changePassword = function () {
        console.log("User ".concat(this.login, " has changed password!"));
    };
    return Auth;
}());
