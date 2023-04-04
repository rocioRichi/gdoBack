import { Router as router } from 'express';
import createDebug from 'debug';
import { UsersMongoRepo } from '../repository/users.repo/users.mongo.repo.js';
import { UserController } from '../controller/users.controller.js';

const debug = createDebug('HOME:users:router');

export const usersRouter = router();
const repoUsers = UsersMongoRepo.getInstance();
const controllerUsers = new UserController(repoUsers);

debug('Users router');

usersRouter.post('/register', controllerUsers.register.bind(controllerUsers));
usersRouter.post('/login', controllerUsers.login.bind(controllerUsers));
usersRouter.delete('/:id', controllerUsers.delete.bind(controllerUsers));
