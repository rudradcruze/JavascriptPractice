class User {
    constructor(email, password) {
        this.email = email;
        this.password = password;
    }

    get email() {
        return this._email.toUpperCase();
    }
    set email(value) {
        this._email = value;
    }

    get password() {
        return `${this._password}rudra`;
    }

    set password(value) {
        this._password = value;
    }
}

const rudra = new User("r@rudra.ai", "abc");
console.log(rudra.email);
