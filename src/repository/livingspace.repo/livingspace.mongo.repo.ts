import { Repo } from './livingspace.repo.interface';
import createDebug from 'debug';
import { HTTPError } from '../../errors/errors.js';
import { LivingSpaceModel } from './livingspace.mongo.model.js';
import { LivingSpace } from '../../entities/living.space.js';
import { query } from 'express';

const debug = createDebug('REFORMAS:repo:livingspace');

export class LivingSpaceMongoRepo implements Repo<LivingSpace> {
  private static instance: LivingSpaceMongoRepo;

  public static getInstance(): LivingSpaceMongoRepo {
    if (!LivingSpaceMongoRepo.instance)
      LivingSpaceMongoRepo.instance = new LivingSpaceMongoRepo();
    return LivingSpaceMongoRepo.instance;
  }

  private constructor() {
    debug('Instantiated at constructor livingspace');
  }

  async create(info: Partial<LivingSpace>): Promise<LivingSpace> {
    debug('create livingSpace');
    const data = await LivingSpaceModel.create(info);

    // Const data = await UserModel.find({ [query.key]: query.value });

    return data;
  }

  async query(): Promise<LivingSpace[]> {
    debug('getall livingSpace');
    const data = await LivingSpaceModel.find();
    return data;
  }

  async queryById(id: string): Promise<LivingSpace> {
    debug('GetbyId living Space');
    const data = await LivingSpaceModel.findById(id);
    if (!data) throw new HTTPError(404, 'Not found', 'Id not found in queryId');
    return data;
  }

  async update(info: Partial<LivingSpace>): Promise<LivingSpace> {
    debug('Update livingspace mongo repo');
    const data = await LivingSpaceModel.findByIdAndUpdate(info.id, info, {
      new: true,
    });
    if (!data)
      throw new HTTPError(404, 'Record not found', 'Id not found in update');
    return data;
  }

  async destroy(id: string): Promise<void> {
    debug(id + 'destroy living space');
    const data = await LivingSpaceModel.findByIdAndDelete(id);
    if (!data)
      throw new HTTPError(
        404,
        'Not found',
        'Delete not possible: id not found'
      );
  }
}
