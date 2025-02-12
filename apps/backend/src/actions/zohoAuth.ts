import axios from 'axios';

import { TokenApiResponse } from '../types';

export const generateTokenFromGrantCode = async () => {
  const baseUrl = 'https://accounts.zoho.com/oauth/v2/token';

  const clientId = process.env.ZOHO_CLIENT_ID;
  const clientSecret = process.env.ZOHO_CLIENT_SECRET;
  const grantCode = process.env.ZOHO_GRANT_TOKEN;

  const codeQuery = `code=${grantCode}`;
  const grantTypeQuery = 'grant_type=authorization_code';
  const clientIdQuery = `client_id=${clientId}`;
  const clientSecretQuery = `client_secret=${clientSecret}`;

  const url = `${baseUrl}?${codeQuery}&${grantTypeQuery}&${clientIdQuery}&${clientSecretQuery}`;

  try {
    const response = await axios.post<TokenApiResponse>(url);

    return response.data;
  } catch (error) {
    console.error(error);

    return undefined;
  }
};

export const generateTokenFromRefreshToken = async (refreshToken: string) => {
  const baseUrl = 'https://accounts.zoho.com/oauth/v2/token';

  const clientId = process.env.ZOHO_CLIENT_ID;
  const clientSecret = process.env.ZOHO_CLIENT_SECRET;

  const refreshTokenQuery = `refresh_token=${refreshToken}`;
  const grantTypeQuery = 'grant_type=refresh_token';
  const scopeQuery = 'scope=Desk.tickets.CREATE';
  const clientIdQuery = `client_id=${clientId}`;
  const clientSecretQuery = `client_secret=${clientSecret}`;

  const url = `${baseUrl}?${refreshTokenQuery}&${scopeQuery}&${grantTypeQuery}&${clientIdQuery}&${clientSecretQuery}`;

  try {
    const response = await axios.post<Omit<TokenApiResponse, 'refresh_token'>>(url);

    return response.data;
  } catch (error) {
    console.error(error);

    return undefined;
  }
};
