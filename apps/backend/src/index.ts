import cors from 'cors';
import express, { json } from 'express';
import serverlessHttp from 'serverless-http';

import { router } from './routes';

const app = express();

app.use(cors());
app.use(json());

app.use('/', router);

export const handler = serverlessHttp(app);
