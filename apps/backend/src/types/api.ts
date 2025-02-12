export interface TokenApiResponse {
  expires_in: number;
  token_type: 'Bearer';
  access_token: string;
  refresh_token: string;
}
