import express from 'express';
import { Router } from 'express';
import { pause } from '../utils/utils.js';

import * as MainController from '../controllers/mainController.js';

const appRouter: Router = express.Router();

appRouter.get('/news', MainController.getAllNews);
appRouter.post('/news', MainController.createNews);
appRouter.get('/news/:id', MainController.getNewsById);
appRouter.get('/position', MainController.getPosition);
appRouter.get('/matches', MainController.getAllMatches);
appRouter.get('/matches/:id', MainController.get5MatchesOfTeam);

export default appRouter;
