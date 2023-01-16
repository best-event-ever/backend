import express from "express";
const userRouter = express.Router();

import {getAllEvents, getOneEvent} from '../../controller/user/userController.js';

import auth from '../../middleware/auth.js';

userRouter
  .route('/events')
    .get(auth, getAllEvents);
    
userRouter
  .route('/events/:id')
    .get(getOneEvent);

export default userRouter;