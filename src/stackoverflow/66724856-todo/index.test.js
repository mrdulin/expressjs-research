const chai = require('chai');
const crypto = require('crypto');
const chaiJsonPattern = require('chai-json-pattern').default;
const { expect } = chai;

chai.use(chaiJsonPattern);

function uuid() {
  return crypto.randomBytes(16).toString('hex');
}

function create_transaction_request() {
  return {
    id: uuid(),
    seller: 'user1',
    seller_offer: [
      {
        inventory: uuid(),
        item: 'red_card',
        amount: '11',
      },
    ],
    recipient: 'user2',
    recipient_offer: [
      {
        inventory: uuid(),
        item: 'coin',
        amount: '1234',
      },
    ],
  };
}

describe('66724856', () => {
  it('should pass', () => {
    expect(create_transaction_request()).to.matchPattern(`
      {
        "id": String,
        "seller": String,
        "seller_offer": [
          {
            "inventory": String,
            "item": String,
            "amount": String
          }
        ],
        "recipient": String,
        "recipient_offer": [
          {
            "inventory": String,
            "item": String,
            "amount": String
          },
        ]
      }
    `);
  });
});
