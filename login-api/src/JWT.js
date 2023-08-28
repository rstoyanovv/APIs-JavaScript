import jwt from 'jsonwebtoken';
import { jwtConfig } from './environment.js';

class JwtService {

    generateToken(payload) {
        return jwt.sign(payload, jwtConfig.secret, { expiresIn : jwtConfig.expiresIn });
    }

    verifyToken(token) {
        try {
            const decoded = jwt.verify(token, jwtConfig.secret);
            return decoded;
        } catch (err) {
            return null;
        }
    }

}

export default JwtService;
