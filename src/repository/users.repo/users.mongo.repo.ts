import { User } from '../../entities/user.js';
import { Repo } from './users.repo.interface.js';
import createDebug from 'debug';
import { UserModel } from './users.mongo.model.js';
import { HTTPError } from '../../errors/errors.js';

const debug = createDebug('REFORMAS:repo:users');

export class UsersMongoRepo implements Repo<User> {
  private static instance: UsersMongoRepo;

  public static getInstance(): UsersMongoRepo {
    if (!UsersMongoRepo.instance)
      UsersMongoRepo.instance = new UsersMongoRepo();
    return UsersMongoRepo.instance;
  }

  private constructor() {
    debug('Instantiated at constructor');
  }

  async create(info: Partial<User>): Promise<User> {
    debug('Instantiated at constructor at create method');
    const data = await UserModel.create(info);
    return data;
  }

  async search(query: { key: string; value: unknown }): Promise<User[]> {
    debug('Instantiated at constructor at search method');
    const data = await UserModel.find({ [query.key]: query.value });
    return data;
  }

  async destroy(id: string): Promise<void> {
    debug(id);
    const data = await UserModel.findByIdAndDelete(id);
    if (!data)
      throw new HTTPError(
        404,
        'Not found',
        'Delete not possible: id not found'
      );
  }
}
