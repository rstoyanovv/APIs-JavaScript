class UserService {
    constructor({ UserDatabaseConnector, passwordConfigurator, JwtService}) {
        this.UserDatabaseConnector = UserDatabaseConnector;
        this.passwordConfigurator = passwordConfigurator;
        this.JwtService = JwtService;
    }

    authenticateUserService = async (email, password) => {
        try {
            const user = await this.UserDatabaseConnector.getUser(email);

            const correctPassword = await this.passwordConfigurator.comparePassword(password, user.password);
            
            if (!correctPassword) {
                console.log("The password is incorrect!");
                throw new InvalidPasswordError;
            }

            const token = this.JwtService.generateToken({ email: user.email });
            return token;

        } catch (e) {
            console.error('An error occurred:', e.message);
            throw e;
        }
    }

    createUser = async (username, email, password) => {
        await this.UserDatabaseConnector.insertNewUserIntoDatabase(username, email, password);
    }
}

class InvalidPasswordError extends Error {
    constructor () {
        super();
    }
}

export default UserService;