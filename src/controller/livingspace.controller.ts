import { Response, Request, NextFunction } from 'express';
import { LivingSpace } from '../entities/living.space';
import { HTTPError } from '../errors/errors.js';
import { Repo } from '../repository/livingspace.repo/livingspace.repo.interface.js';
import createDebug from 'debug';
import { LivingSpaceModel } from '../repository/livingspace.repo/livingspace.mongo.model.js';

const debug = createDebug('REFORMAS:controller livingspace');

export class LivingSpaceController {
  constructor(public repo: Repo<LivingSpace>) {
    this.repo = repo;
    debug('Controller livingspace instanced');
  }

  async createLivingSpace(req: Request, resp: Response, next: NextFunction) {
    try {
      debug('POST, create livingSpace');
      if (!req.body)
        throw new HTTPError(
          401,
          'No livingSpace to create',
          'No livingSpace to create'
        );

      const data = await this.repo.create(req.body);

      resp.status(201);
      resp.json({
        results: [data],
      });
    } catch (error) {
      next(error);
    }
  }

  async getAll(_req: Request, resp: Response, next: NextFunction) {
    try {
      debug('GetAll livingSpace');
      const data = await this.repo.query();
      resp.json({
        results: data,
      });
    } catch (error) {
      next(error);
    }
  }

  async getById(req: Request, resp: Response, next: NextFunction) {
    try {
      debug('GetBy Id livingSpace');
      const data = await this.repo.queryById(req.params.id);
      resp.json({
        results: [data],
      });
    } catch (error) {
      next(error);
    }
  }

  async update(req: Request, resp: Response, next: NextFunction) {
    try {
      debug('upadate living space');
      const data = await this.repo.update(req.body);
      resp.json({
        results: data,
      });
    } catch (error) {
      next(error);
    }
  }

  async delete(req: Request, resp: Response, next: NextFunction) {
    try {
      debug('LivingSpace delete');
      const deletelivingSpace = req.body.id;
      debug('delete livingSpace');

      await this.repo.destroy(deletelivingSpace);
      resp.json({
        results: [],
      });
    } catch (error) {
      next(error);
    }
  }
}
