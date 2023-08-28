import { asClass, createContainer } from 'awilix';

import UserRouter from './userLogic/userRouter.js';
import UserService from './userLogic/userService.js';
import UserDatabaseConnector from './userLogic/userDatabaseConnector.js';
import JwtService from './JWT.js'; 
import passwordConfigurator from './passwordConfigurator.js';

const container = createContainer();

container.register({
    UserRouter: asClass(UserRouter).singleton(),
    UserService: asClass(UserService).singleton(),
    UserDatabaseConnector: asClass(UserDatabaseConnector).singleton(),
    JwtService: asClass(JwtService).singleton(),
    passwordConfigurator: asClass(passwordConfigurator).singleton()
});

export default container;