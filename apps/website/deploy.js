/* eslint-disable @typescript-eslint/no-require-imports */
const fs = require('fs');
const path = require('path');

const { DeleteObjectsCommand, ListObjectsCommand, PutObjectCommand, S3Client } = require('@aws-sdk/client-s3');
const mime = require('mime-types');

const DeploymentConfig = require('./deployment_config.json');

const client = new S3Client({ profile: DeploymentConfig.profile, region: DeploymentConfig.region });

const listObjectsFromBucket = async () => {
  const command = new ListObjectsCommand({
    Bucket: DeploymentConfig.bucketName,
  });

  const listedObjects = await client.send(command);

  return listedObjects.Contents;
};

/**
 *
 * @param {import('@aws-sdk/client-s3')._Object[]} objects
 * @returns
 */
const clearBucket = async (objects) => {
  if (objects.length === 0) {
    console.log('Bucket is empty');
    return;
  }

  const command = new DeleteObjectsCommand({
    Bucket: DeploymentConfig.bucketName,
    Delete: {
      Objects: objects.map((object) => ({ Key: object.Key })),
    },
  });

  await client.send(command);
  console.log('Bucket cleared');
};

/**
 *
 * @param {string} dirPath
 * @param {string[]} allFiles
 * @returns
 */
const getFiles = (dirPath = DeploymentConfig.buildFolder, allFiles = []) => {
  const files = fs.readdirSync(dirPath);

  files.forEach((file) => {
    const filePath = path.join(dirPath, file);

    if (fs.statSync(filePath).isDirectory()) {
      getFiles(filePath, allFiles);
    } else {
      allFiles.push(filePath);
    }
  });

  return allFiles;
};

/**
 *
 * @param {string[]} files
 * @returns
 */
const uploadFiles = async (files) => {
  for (const filePath of files) {
    const fileContent = fs.readFileSync(filePath);
    const key = path.relative(DeploymentConfig.buildFolder, filePath).replace(/\\/g, '/');
    const contentType = mime.lookup(filePath);

    const command = new PutObjectCommand({
      Bucket: DeploymentConfig.bucketName,
      Key: key,
      Body: fileContent,
      ContentType: contentType,
    });

    await client.send(command);
    console.log(`file at ${filePath} uploaded successfully`);
  }
};

const main = async () => {
  try {
    const objects = await listObjectsFromBucket();
    await clearBucket(objects ?? []);

    const files = getFiles();

    await uploadFiles(files);
  } catch (error) {
    console.error('Error:', error);
  }
};

main();
