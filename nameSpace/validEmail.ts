/// <reference path="interfaces.ts" />

class EmailValidator implements ValidationInterfaces.ValidEmail {
    checkEmail(email: string): boolean {
        return EmailValidator.valid(email);
    }

    static valid(email: string): boolean {
        if(email) {
            return email.includes("@");
        }
        return false;
    }
}

const notValidEmail = EmailValidator.valid("fasdas");
const validEmail = EmailValidator.valid("dominik@wp.pl");

console.log(notValidEmail, validEmail);