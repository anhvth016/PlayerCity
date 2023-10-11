import express from 'express';
import * as MainController from '../controllers/mainController.js';
const appRouter = express.Router();
appRouter.get('/news', MainController.getAllNews);
appRouter.post('/news', MainController.createNews);
appRouter.get('/news/:id', MainController.getNewsById);
export default appRouter;
//# sourceMappingURL=appRouter.js.map