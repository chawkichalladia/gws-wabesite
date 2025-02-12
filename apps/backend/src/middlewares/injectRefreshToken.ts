import { NextFunction, Request, Response } from 'express';

import { generateTokenFromGrantCode, getRefreshToken, saveRefreshToken } from '../actions';
import { ReqParams } from '../types';

export const injectRefreshTokenFromAWS = async (req: Request<ReqParams>, _: unknown, next: NextFunction) => {
  const token = await getRefreshToken();

  if (token) req.params.refresh = token;

  next();
};

export const injectRefreshTokenFromZoho = async (req: Request<ReqParams>, res: Response, next: NextFunction) => {
  if (req.params.refresh) return next();

  const response = await generateTokenFromGrantCode();

  if (!response || !response.refresh_token) {
    res.status(500).send('Failed to load refresh token');
    return;
  }

  await saveRefreshToken(response.refresh_token);

  req.params.access = response.access_token;
  req.params.refresh = response.refresh_token;

  next();
};
