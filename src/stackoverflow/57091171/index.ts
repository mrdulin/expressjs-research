export class ClassToTest {
  person;

  constructor(person) {
    this.setPerson(person);
  }

  setPerson(person) {
    if (typeof person.firstName === 'undefined') {
      throw new Error('Person has to have first name.');
    }

    this.person = person;
  }
}
