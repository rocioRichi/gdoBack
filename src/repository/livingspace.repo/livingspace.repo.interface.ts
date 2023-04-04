import { LivingSpace } from '../../entities/living.space';

export interface Repo<LS> {
  create(_info: Partial<LS>): Promise<LS>;
  destroy(_id: string): Promise<void>;
  update(_info: Partial<LivingSpace>): Promise<LS>;
  query(): Promise<LS[]>;
  queryById(id: string): Promise<LS>;
}
