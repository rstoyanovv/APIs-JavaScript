import bcrypt from 'bcrypt';
import { passwordConfig } from './environment.js'

class passwordConfigurator {

    constructor() {
        this.saltRounds = passwordConfig.saltRounds;
    }

    async hashPassword(password) {
        return bcrypt.hash(password, this.saltRounds);
    }

    async comparePassword(password, hash) {
        return bcrypt.compare(password, hash);
    }
}

export default passwordConfigurator;
