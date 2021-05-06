import { myDecorator } from './decorator/MyDecorator';

interface ItemOption {}

export class MyClass {
  @myDecorator()
  public async createItem(itemId: string, itemOptions: ItemOption[]): Promise<boolean> {
    return true;
  }
}
