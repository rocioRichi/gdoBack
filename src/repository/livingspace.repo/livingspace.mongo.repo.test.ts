import { LivingSpace } from '../../entities/living.space';
import { LivingSpaceModel } from './livingspace.mongo.model';
import { LivingSpaceMongoRepo } from './livingspace.mongo.repo';
import { Repo } from './livingspace.repo.interface';

jest.mock('./livingspace.mongo.model');

describe('Given UsersMongoRepo', () => {
  let repo = LivingSpaceMongoRepo.getInstance();
  beforeEach(() => {
    repo = LivingSpaceMongoRepo.getInstance();
  });

  describe('When getInstance is called', () => {
    it('Then it should return a single instance of UsersMongoRepo', () => {
      const repo = LivingSpaceMongoRepo.getInstance();
      expect(repo).toBeInstanceOf(LivingSpaceMongoRepo);
    });
  });

  describe('When the create method is used', () => {
    test('Then the create method should be called', async () => {
      (LivingSpaceModel.create as jest.Mock).mockResolvedValue({
        email: 'test',
      });
      const result = await repo.create({ livingspace: 'test' });
      expect(LivingSpaceModel.create).toHaveBeenCalled();
      expect(result).toEqual({ livingSpace: 'test' });
    });
  });

  describe('When the search method is used', () => {
    test('Then the search method should be called', async () => {
      (LivingSpaceModel.find as jest.Mock).mockResolvedValue({ email: 'test' });
      const result = await repo.create({
        m2: 6,
        livingspace: 'value',
      });
      expect(LivingSpaceModel.find).toHaveBeenCalled();
      expect(result).toEqual({ email: 'test' });
    });
  });
});
