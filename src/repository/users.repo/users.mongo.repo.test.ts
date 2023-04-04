import { User } from '../../entities/user';
import { UserModel } from './users.mongo.model';
import { UsersMongoRepo } from './users.mongo.repo';
import { Repo } from './users.repo.interface';

jest.mock('./users.mongo.model');

describe('Given UsersMongoRepo', () => {
  let repo: Repo<User>;

  beforeEach(() => {
    repo = UsersMongoRepo.getInstance();
  });

  describe('When getInstance is called', () => {
    it('Then it should return a single instance of UsersMongoRepo', () => {
      const repo = UsersMongoRepo.getInstance();
      expect(repo).toBeInstanceOf(UsersMongoRepo);
    });
  });

  describe('When the create method is used', () => {
    test('Then the create method should be called', async () => {
      (UserModel.create as jest.Mock).mockResolvedValue({ email: 'test' });
      const result = await repo.create({ email: 'test' });
      expect(UserModel.create).toHaveBeenCalled();
      expect(result).toEqual({ email: 'test' });
    });
  });

  describe('When the search method is used', () => {
    test('Then the search method should be called', async () => {
      (UserModel.find as jest.Mock).mockResolvedValue({ email: 'test' });
      const result = await repo.search({ key: 'test', value: 'test' });
      expect(UserModel.find).toHaveBeenCalled();
      expect(result).toEqual({ email: 'test' });
    });
  });
});
