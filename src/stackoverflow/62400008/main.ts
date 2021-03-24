import AWS from 'aws-sdk';

export function main() {
  const aws = new AWS.KMS();
  return aws.decrypt().promise();
}
