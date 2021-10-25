//@ts-nocheck
const defaultAllApproverUserItemsForTeam = ({ teamId }) => {
  return [];
};

export default ({ teamId, allApproverUserItemsForTeam = defaultAllApproverUserItemsForTeam }) => {
  const teamApprovers = allApproverUserItemsForTeam({ teamId });

  const csvContent = teamApprovers.map(
    (teamApprover) => `${teamApprover.firstName}, ${teamApprover.lastName}, ${teamApprover.emailAddress}`,
  );

  const joinedApproversList = csvContent.join();

  return joinedApproversList;
};
