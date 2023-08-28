import express from 'express';
//import * as logic from '../index.js'; // Update the path to your index.js file

/*router.get('/', logic.getUsers);
router.get('/:id', logic.getUserById);
router.post('/', logic.createUser);
router.put('/:id', logic.updateUser);*/

class UserRouter {
    constructor({ UserService }) {
        this.UserService = UserService;
        this.router = express.Router();
        this.router.post('/authenticate', this.authenticateUser)
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
}

export default UserRouter;