import express from 'express';
import * as logic from '../index.js'; // Update the path to your index.js file

const router = express.Router();

router.get('/', logic.getUsers);
router.get('/:id', logic.getUserById);
router.post('/', logic.createUser);
router.put('/:id', logic.updateUser);
router.post('/authenticate', logic.authenticateUser);

export default router;