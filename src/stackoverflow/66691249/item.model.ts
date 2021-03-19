import getConfig from './config';

class Item {
  _id: number;
  amount: number;

  constructor(_id: number) {
    this._id = _id;
    this.amount = getConfig().amount;
  }
}

export default Item;
