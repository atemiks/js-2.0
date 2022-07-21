class Valid2 extends Valid {
    constructor(email, password) {
        super(email, password);
        this.emaiError = '';
        this.passwordError = '';
    }


    validate() {
        if(this.email.length == 0) {
            this.isValid = false;
            this.emaiError = 'email empty';
        }

        if(this.password.length > 6) {
            this.isValid = true;
        } else {
            this.isValid = false;
            this.passwordError = 'min length 6';
        }
    }
}