import { Router as router } from 'express';
import createDebug from 'debug';
import { LivingSpaceController } from '../controller/livingspace.controller.js';
import { LivingSpaceMongoRepo } from '../repository/livingspace.repo/livingspace.mongo.repo.js';

const debug = createDebug('HOME:users:router');

export const livingSpaceRouter = router();
const repoLivingSpace = LivingSpaceMongoRepo.getInstance();
const controllerlivingSpace = new LivingSpaceController(repoLivingSpace);

debug('livingSpace router');

livingSpaceRouter.post(
  '/create',
  controllerlivingSpace.createLivingSpace.bind(controllerlivingSpace)
);
livingSpaceRouter.get(
  '/',
  controllerlivingSpace.getAll.bind(controllerlivingSpace)
);

livingSpaceRouter.get(
  '/:id',
  controllerlivingSpace.getById.bind(controllerlivingSpace)
);
livingSpaceRouter.patch(
  '/update',
  controllerlivingSpace.update.bind(controllerlivingSpace)
);
livingSpaceRouter.delete(
  '/delete',
  controllerlivingSpace.delete.bind(controllerlivingSpace)
);
