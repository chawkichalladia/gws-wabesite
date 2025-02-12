import { NextFunction, Request, Response } from 'express';

import { generateTokenFromRefreshToken } from '../actions';
import { ReqParams } from '../types';

export const generateAccessToken = async (req: Request<ReqParams>, res: Response, next: NextFunction) => {
  if (!req.params.refresh) {
    res.status(500).send('Failed to load refresh token');
    return;
  }

  if (req.params.access) return next();

  const response = await generateTokenFromRefreshToken(req.params.refresh);

  if (!response || !response.access_token) {
    res.status(500).send('Failed to load refresh token');
    return;
  }

  req.params.access = response.access_token;

  next();
};
