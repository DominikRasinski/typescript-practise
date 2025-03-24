"use strict";
/// <reference path="interfaces.ts" />
class EmailValidator {
    checkEmail(email) {
        return EmailValidator.valid(email);
    }
    static valid(email) {
        if (email) {
            return email.includes("@");
        }
        return false;
    }
}
const notValidEmail = EmailValidator.valid("fasdas");
const validEmail = EmailValidator.valid("dominik@wp.pl");
console.log(notValidEmail, validEmail);
