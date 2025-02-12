import axios from 'axios';
import { Request, Response } from 'express';

import { CreateTicketReqBody, ReqParams, ZohoDeskCreateTicketReqBody } from '../types';

const baseUrl = 'https://desk.zoho.com/api/v1/tickets/';

export const createTicket = async (req: Request<ReqParams, unknown, CreateTicketReqBody>, res: Response) => {
  const accessToken = req.params.access;

  if (!accessToken) {
    res.send('Failed to load access token');
    return;
  }

  const { email, message, name, subject } = req.body;

  const requestBody: ZohoDeskCreateTicketReqBody = {
    subject: subject.slice(0, 255),
    email,
    contact: {
      email,
      lastName: name,
    },
    description: message,
    departmentId: Number(process.env.ZOHO_DESK_DEPARTMENT_ID),
  };

  try {
    await axios.post(baseUrl, requestBody, {
      headers: {
        Authorization: `Zoho-oauthtoken ${accessToken}`
      },
    });

    res.status(200).json({});
  } catch (error) {
    console.error(error);
    res.status(500).send('Failed to create ticket');
  }
};
