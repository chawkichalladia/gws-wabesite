import cors from 'cors';
import express, { Router, json } from 'express';
import serverlessHttp from 'serverless-http';

const app = express();
const router = Router();

router.use(cors());
router.use(json());

router.get('/contact', (req, res) => {
  res.json('hello');
});

app.use('/', router);

exports.handler = serverlessHttp(app);
