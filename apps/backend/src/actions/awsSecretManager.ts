import { GetSecretValueCommand, PutSecretValueCommand, SecretsManagerClient } from '@aws-sdk/client-secrets-manager';

import { AWS_SECRET_MANAGER_ZOHO_DESK_REFRESH_TOKEN_KEY } from '../utils';

const client = new SecretsManagerClient();

export const saveRefreshToken = async (refreshToken: string) => {
  const command = new PutSecretValueCommand({
    SecretId: AWS_SECRET_MANAGER_ZOHO_DESK_REFRESH_TOKEN_KEY,
    SecretString: JSON.stringify({ refreshToken }),
  });

  try {
    await client.send(command);
  } catch (error) {
    console.error(error);
  }
};

export const getRefreshToken = async () => {
  const command = new GetSecretValueCommand({
    SecretId: AWS_SECRET_MANAGER_ZOHO_DESK_REFRESH_TOKEN_KEY,
  });

  try {
    const response = await client.send(command);

    const secretString = response.SecretString?.trim();

    return JSON.parse(secretString ? secretString : '{}').refreshToken ?? '';
  } catch (error) {
    console.error(error);
    return undefined;
  }
};
