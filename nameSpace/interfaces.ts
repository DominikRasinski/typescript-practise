namespace ValidationInterfaces {
    export interface ValidEmail {
        checkEmail(email: string): boolean;
    }

    export interface ValidLogin {
        checkLogin(login: string): boolean;
    }
}