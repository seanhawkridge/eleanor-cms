module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: env('UPLOAD_PROVIDER', 'local'),
      ...(env('UPLOAD_PROVIDER') === 'aws-s3' && {
        providerOptions: {
          baseUrl: env('AWS_S3_BASE_URL'),
          s3Options: {
            credentials: {
              accessKeyId: env('AWS_ACCESS_KEY_ID'),
              secretAccessKey: env('AWS_ACCESS_SECRET'),
            },
            region: env('AWS_REGION'),
            params: {
              Bucket: env('AWS_BUCKET'),
            },
          },
        },
      }),
    },
  },
});
