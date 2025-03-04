interface AuthType {
    login: string;
    password: string;

    logUser(): void;
    logOutUser(): void;
}

interface AuthType {
    changePassword(): void;
}

class Auth implements AuthType {
    login: string;
    password: string;

    constructor(login: string, password: string) {
        this.login = login;
        this.password = password;
    }

    logUser(): void {
        console.log(`User ${this.login} has logged!`);
    }

    logOutUser(): void {
        console.log(`User ${this.login} was log out!`);
    }

    changePassword(): void {
        console.log(`User ${this.login} has changed password!`)
    }

}