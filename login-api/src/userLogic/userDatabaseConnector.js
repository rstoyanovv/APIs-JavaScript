import { pool } from '../db.js';
import User from './user.js';

class UserDatabaseConnector {
    constructor(db) {
        this.db = db;
    }

    getUser = async (email) => {
        try {
            const result = await new Promise((resolve, reject) => {
                pool.query('SELECT * FROM users WHERE email = $1', [email], (e, result) => {
                    if (e) {
                       
                        console.error(e);
                        reject(new UserNotFound("Not found user with this email!"));
                    } else {
                        resolve(result);
                    }
                });
            });

            if (result.rows.length === 0) {
                throw new UserNotFound("User not found!");
            }

            return new User({
                email: result.rows[0].email,
                password: result.rows[0].password
            });

        } catch (error) {
            throw error;
        }
    }
}

class UserNotFound extends Error {
    constructor() {
        super();
    }
}

export default UserDatabaseConnector;