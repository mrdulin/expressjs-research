import { Countdown } from './database/orm';

export class PersistentTimer {
  protected constructor(entity: Countdown) {}

  public static async create() {
    const entity = new Countdown();
    await entity.save();
    return new PersistentTimer(entity);
  }
}
