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

        } catch (err) {
            console.error('An error occurred:', err.message);
            throw err; // Re-throw the error for higher-level handling if needed
        }
    }
}

class InvalidPasswordError extends Error {
    constructor () {
        super();
    }
}

export default UserService;