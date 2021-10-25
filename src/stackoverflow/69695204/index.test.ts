import createTeamApproversCsv from '.';
import { expect } from 'chai';
import sinon from 'sinon';

describe('create_team_approvers_csv_test', () => {
  describe('given a teamId for a team that has a list of approvers', () => {
    const teamId = '123';
    const allApproverUserItemsForTeam = sinon.stub();
    const approversForTeam = [
      {
        id: 'fwwfw',
        emailAddress: 'joe@bloggs.com',
        firstName: 'Joe',
        lastName: 'Bloggs',
        title: 'Mr',
        isTeamProfile: false,
        version: 1,
      },
      {
        id: 'wgerher6446',
        emailAddress: 'jane@doe.com',
        firstName: 'Jane',
        lastName: 'Doe',
        title: 'Mrs',
        isTeamProfile: false,
        version: 3,
      },
    ];
    allApproverUserItemsForTeam.withArgs({ teamId }).returns(approversForTeam);

    it('should create a list of approvers in a required CSV format', () => {
      const expected = ['Joe, Bloggs, joe@bloggs.com', 'Jane, Doe, jane@doe.com'].join();

      const result = createTeamApproversCsv({ teamId, allApproverUserItemsForTeam });

      expect(result).to.be.deep.equal(expected);
    });
  });
});
