import AWS from 'aws-sdk';

const dynamodb = new AWS.DynamoDB.DocumentClient();

export async function checkIfUserExist(user): Promise<boolean> {
  let result;

  const params = {
    TableName: 'Users',
    IndexName: 'Email-index',
    KeyConditionExpression: 'Email = :user_email',
    ExpressionAttributeValues: {
      ':user_email': user.Email,
    },
  };

  result = await dynamodb.query(params).promise();

  if (result.$response.error != null) {
    console.log(`Error query: ${result.$response.error}`);
    return true;
  } else if (result.Count > 0) {
    console.log(`User already exist`);
    return true;
  } else {
    return false;
  }
}
