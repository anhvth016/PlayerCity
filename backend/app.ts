import express from 'express';
import compression from 'compression';
import cors from 'cors';
import session from 'express-session';
import cookieSession from 'cookie-session';
// import session from 'client-sessions';
import cookieParser from 'cookie-parser';

import appRouter from './src/routes/appRouter.js';
import { errorHandler, notFoundHandler } from './src/middlewares/commonError.middleware.js';

const app = express();

app.set('port', process.env.PORT || 8000);


app.use(
    cors({
        origin: true,
        credentials: true
    })
);
app.use(compression());
app.use(cookieParser('keyboard'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/api', appRouter);
app.use(notFoundHandler);
app.use(errorHandler);

export default app;
