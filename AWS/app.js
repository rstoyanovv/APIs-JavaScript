//Code for uploading a pciture into AWS S3 storage
const AWS = require('aws-sdk');
const fs = require('fs');

// Set up AWS credentials and region
AWS.config.update({
  accessKeyId: '--id--',
  secretAccessKey: '--key--',
  region: '--region--'
});

// Create an S3 instance
const s3 = new AWS.S3();

// Define the S3 bucket name
const bucketName = '--bucket-name--';

// Read the picture file
const pictureFilePath = "--file-path--';
const pictureData = fs.readFileSync(pictureFilePath);

// Upload the picture to S3
const pictureKey = 'pictures/' + Date.now() + 'model.png'; // Use a unique key for each upload
const uploadParams = {
  Bucket: bucketName,
  Key: pictureKey,
  Body: pictureData
};

s3.upload(uploadParams, (err, data) => {
  if (err) {
    console.error('Error uploading picture:', err);
  } else {
    console.log('Picture uploaded successfully:', data.Location);
  }
});
