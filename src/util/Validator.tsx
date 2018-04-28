export class Validator {
    validateEmail(email: string): string {
        const valid = /(.+)@(.+){2,}\.(.+){2,}/.test(email);
        return !valid ? "Your email ain't right" : "";
    }

    validatePassword(password: string): string {
        const valid = password.length < 8;
        return valid ? "Your password is too short" : "";
    }
}
