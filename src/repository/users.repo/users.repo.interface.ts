export interface Repo<T> {
  search(query: { key: string; value: unknown }): Promise<T[]>;
  create(_info: Partial<T>): Promise<T>;
  destroy(_id: string): Promise<void>;
}
