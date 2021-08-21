import AWS from 'aws-sdk';

const UPLOAD_BUCKET = 'UPLOAD_BUCKET';
const MINIO_ENDPOINT = 'MINIO_ENDPOINT';
const AWS_ACCESS_KEY_ID = 'AWS_ACCESS_KEY_ID';
const AWS_SECRET_ACCESS_KEY = 'AWS_SECRET_ACCESS_KEY';

export class Storage {
  private readonly s3: AWS.S3 = new AWS.S3({
    endpoint: MINIO_ENDPOINT,
    accessKeyId: AWS_ACCESS_KEY_ID,
    secretAccessKey: AWS_SECRET_ACCESS_KEY,
    s3ForcePathStyle: true,
    signatureVersion: 'v4',
  });
  private readonly uploadBucket: string = UPLOAD_BUCKET;

  public async upload(localPath: string, s3Key: string, onProgress: (progress: number) => void): Promise<void> {
    const request = this.s3.upload({ Bucket: this.uploadBucket, Key: s3Key, Body: '123' });
  }
}

export const storage = new Storage();
