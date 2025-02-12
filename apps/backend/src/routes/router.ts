import { Router } from 'express';

import { TicketController } from '../controllers';
import { generateAccessToken, injectRefreshTokenFromAWS, injectRefreshTokenFromZoho } from '../middlewares';

const router = Router();

router.get(
  '/contact',
  injectRefreshTokenFromAWS,
  injectRefreshTokenFromZoho,
  generateAccessToken,
  TicketController.createTicket
);

export { router };
