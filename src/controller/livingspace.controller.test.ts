export {};
// Import { NextFunction, Request, Response } from 'express';
// import { User } from '../entities/user';
// import { UserController } from './users.controller.js';
// import { Auth } from '../services/auth.js';
// import { Repo } from '../repository/users.repo/users.repo.interface.js';

// jest.mock('../services/auth.js');

// describe('Given users.controller', () => {
//   const mockPassword = 'test';

//   const mockRepo = {
//     create: jest.fn(),
//     search: jest.fn(),
//   } as unknown as Repo<User>;

//   const controller = new UserController(mockRepo);

//   const resp = {
//     json: jest.fn(),
//     status: jest.fn(),
//   } as unknown as Response;

//   const next = jest.fn() as unknown as NextFunction;

//   describe('when the register is called', () => {
//     test('then should return  OK', async () => {
//       const req = {
//         body: {
//           email: 'a@test.com',
//           passwd: mockPassword,
//         },
//       } as unknown as Request;

//       await controller.register(req, resp, next);
//       expect(mockRepo.create).toHaveBeenCalled();
//       expect(resp.status).toHaveBeenCalled();
//       expect(resp.json).toHaveBeenCalled();
//     });
//     test('then if email or/and password are WRONG, should return next', async () => {
//       const req = {
//         body: {
//           password: mockPassword,
//         },
//       } as unknown as Request;

//       await controller.register(req, resp, next);
//       expect(next).toHaveBeenCalled();
//     });
//   });
//   describe('when  login is called', () => {
//     test('then if all is OK it should return the data', async () => {
//       const req = {
//         body: {
//           email: 'a@test.com',
//           password: mockPassword,
//         },
//       } as unknown as Request;

//       await controller.login(req, resp, next);
//       (mockRepo.search as jest.Mock).mockReturnValue(['test']);
//       Auth.compare = jest.fn().mockResolvedValue(true);

//       expect(mockRepo.search).toHaveBeenCalled();
//       expect(resp.status).toHaveBeenCalled();
//       expect(resp.json).toHaveBeenCalled();
//     });
//     test('then if there is no email, it should return next', async () => {
//       const req = {
//         body: {
//           passwd: mockPassword,
//         },
//       } as unknown as Request;

//       await controller.login(req, resp, next);

//       expect(next).toHaveBeenCalled();
//     });
//     test('then if there is no password, it should return next', async () => {
//       const req = {
//         body: {
//           email: 'test',
//         },
//       } as unknown as Request;

//       await controller.login(req, resp, next);

//       expect(next).toHaveBeenCalled();
//     });
//     test('then if you receive the repoUser.search empty, it should return next', async () => {
//       const req = {
//         body: {
//           email: 'a@test.com',
//           password: mockPassword,
//         },
//       } as unknown as Request;

//       (mockRepo.search as jest.Mock).mockReturnValue([]);
//       await controller.login(req, resp, next);

//       expect(next).toHaveBeenCalled();
//     });
//     test('then if you receive the body well, but the compare method is false, it should return next', async () => {
//       const req = {
//         body: {
//           email: 'sample@test.com',
//           password: mockPassword,
//         },
//       } as unknown as Request;

//       (mockRepo.search as jest.Mock).mockReturnValue(['test']);
//       Auth.compare = jest.fn().mockResolvedValue(false);
//       await controller.login(req, resp, next);

//       expect(next).toHaveBeenCalled();
//     });
//   });
// });
