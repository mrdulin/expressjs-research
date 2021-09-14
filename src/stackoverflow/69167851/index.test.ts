import chai, { expect } from 'chai';
import chaiAsPromised from 'chai-as-promised';

chai.use(chaiAsPromised);

class InvalidInviteException extends Error {}

export const createInviteDomainOwner = () => {
  const inviteDomainOwner = async ({ emailAddress, firstName, lastName, domainId }) => {
    try {
      throw new InvalidInviteException('This is not a valid invite.');
    } catch (e) {
      throw e;
    }
  };

  return {
    inviteDomainOwner,
  };
};

it('invite domain owner', async function () {
  const { inviteDomainOwner } = createInviteDomainOwner();

  await expect(
    inviteDomainOwner({
      emailAddress: 'abc123abc@test.com',
      firstName: 'John',
      lastName: 'Doe',
      domainId: '1111-1111-1111-1111',
    }),
  ).to.eventually.rejectedWith(InvalidInviteException, 'This is not a valid invite.');
});
