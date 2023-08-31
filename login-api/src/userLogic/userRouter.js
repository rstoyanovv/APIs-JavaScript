import express from 'express';

class UserRouter {

    constructor({ UserService, passwordConfigurator }) {
        this.UserService = UserService;
        this.passwordConfigurator = passwordConfigurator;
        this.router = express.Router();
        this.router.post('/authenticate', this.authenticateUser);
        this.router.post('/create-user', this.createUser);
    }

    authenticateUser = async (req, res) => {
        try {
            const email = req.body.email;
            const password = req.body.password;
            const token = await this.UserService.authenticateUserService(email, password);
            res.status(200).json({ message : "Successful authentication", token});

        } catch (e) {
            console.error(e);
            res.status(500).json({ message: "Error with authentication!"});
        }
    }

    createUser = async (req, res) => {
        try {
            const email = req.body.email;
            const username = req.body.username;
            const password = req.body.password;
            const hashedPassword = await this.passwordConfigurator.hashPassword(password);

            await this.UserService.createUser(username, email, hashedPassword);
            res.status(200).json({message: "Successful added new user"});

        } catch (e) {
            console.error(e);
            res.status(500).json({ message: "Error with creating new account!" });
        }
    }
}

export default UserRouter;