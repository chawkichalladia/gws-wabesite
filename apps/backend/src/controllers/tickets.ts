import axios, { AxiosError } from 'axios';
import { Request, Response } from 'express';

import { CreateTicketReqBody, ReqParams, ZohoDeskCreateTicketReqBody } from '../types';

const baseUrl = 'https://desk.zoho.com/api/v1/tickets';

interface RequestType extends Request<ReqParams> {
  apiGateway?: { event: { body: string } };
}

export const createTicket = async (req: RequestType, res: Response) => {
  const accessToken = req.params.access;

  if (!accessToken) {
    res.status(500).send('Failed to load access token');
    return;
  }

  const {
    email,
    message = '',
    name = '',
    subject = '',
  } = JSON.parse(req.apiGateway?.event.body ?? '') as Partial<CreateTicketReqBody>;

  if (!email) {
    res.status(400).send('Missing email');
    return;
  }

  if (!process.env.ZOHO_DESK_DEPARTMENT_ID) {
    res.status(400).send('Missing departmentId provided');
    return;
  }

  const requestBody: ZohoDeskCreateTicketReqBody = {
    subject: subject.slice(0, 255),
    email,
    contact: {
      email,
      lastName: name,
    },
    description: message,
    departmentId: process.env.ZOHO_DESK_DEPARTMENT_ID,
  };

  try {
    await axios.post(baseUrl, requestBody, {
      headers: {
        Authorization: `Zoho-oauthtoken ${accessToken}`,
      },
    });

    res.status(200).json({});
  } catch (error) {
    console.error(error);
    console.error((error as AxiosError)?.response?.data);
    res.status(500).send('Failed to create ticket');
  }
};
