import './configs/config.js';
import express from 'express';
import { router } from './src/books/router.js';
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(router);

export default app;
