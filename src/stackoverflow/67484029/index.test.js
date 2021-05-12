const chai = require('chai');
const chaiJsonPattern = require('chai-json-pattern').default;
const faker = require('faker');

chai.use(chaiJsonPattern);
const { expect } = chai;

describe('67484029', () => {
  it('should pass', () => {
    const obj = {
      id: faker.random.uuid(),
      seller: 'user1',
      seller_offer: [
        {
          inventory: faker.random.uuid(),
          item: 'red_card',
          amount: '11',
        },
      ],
      recipient: 'user2',
      recipient_offer: [
        {
          inventory: faker.random.uuid(),
          item: 'coin',
          amount: '1234',
        },
      ],
    };

    expect(obj).to.matchPattern(`
      {
        "id": String,
        "seller": "user1",
        "seller_offer": [
          {
            "inventory": String,
            "item": "red_card",
            "amount": "11"
          }
        ],
        "recipient": "user2",
        "recipient_offer": [
          {
            "inventory": String,
            "item": "coin",
            "amount": "1234"
          }
        ]
      }
    `);
  });
});
