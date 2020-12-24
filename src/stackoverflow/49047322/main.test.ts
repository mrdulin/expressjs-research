import faker from 'faker';
import chai, { expect } from 'chai';
import chaiJsonPattern from 'chai-json-pattern';
chai.use(chaiJsonPattern);

declare global {
  export namespace Chai {
    interface Assertion {
      matchPattern(pattern: string): void;
    }
  }
}

type myType = {
  title: string;
  description: string;
  level: number;
  categorie: string;
  name: string;
};

describe('49047322', () => {
  it('should pass if the data has correct types', () => {
    const ach: myType[] = [
      {
        title: faker.name.title(),
        description: faker.lorem.sentence(),
        level: faker.random.number(),
        categorie: faker.lorem.word(),
        name: faker.name.findName(),
      },
      {
        title: faker.name.title(),
        description: faker.lorem.sentence(),
        level: faker.random.number(),
        categorie: faker.lorem.word(),
        name: faker.name.findName(),
      },
    ];
    expect(ach).to.matchPattern(`
      [
       {
        "title": String,
        "description":String,
        "level": Number,
        "categorie": String,
        "name": String
       }
      ]
    `);
  });

  it.skip('should fail if the data has incorrect types', () => {
    const ach: myType[] = [
      {
        title: 1 as any,
        description: faker.lorem.sentence(),
        level: faker.random.number(),
        categorie: faker.lorem.word(),
        name: faker.name.findName(),
      },
    ];
    expect(ach).to.matchPattern(`
      [
       {
        "title": String,
        "description":String,
        "level": Number,
        "categorie": String,
        "name": String
       }
      ]
    `);
  });
});
