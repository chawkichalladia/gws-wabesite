import { Router } from 'express';

import { TicketController } from '../controllers';
import { generateAccessToken, injectRefreshTokenFromAWS, injectRefreshTokenFromZoho } from '../middlewares';

const router = Router();

router.post(
  '/contact',
  injectRefreshTokenFromAWS,
  injectRefreshTokenFromZoho,
  generateAccessToken,
  TicketController.createTicket
);

export { router };
