import express from "express";

const userRouter = express.Router();

import {getAllEvents, getOneEvent} from '../../controller/user/userController.js';

userRouter
  .route('/events')
    .get(getAllEvents);
    
userRouter
  .route('/events/:id')
    .get(getOneEvent);

export default userRouter;