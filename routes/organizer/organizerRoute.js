import express from "express";

const organizerRouter = express.Router();

import {postOneEvent, getAllEvents, getOneEventById, deleteOneEventById, updateOneEventById} from '../../controller/organizer/organizerController.js';

organizerRouter
  .route('/events')
    .post(postOneEvent)
    .get(getAllEvents);
    
    // .
    // ;
organizerRouter
  .route('/events/:id')
    .get(getOneEventById)
    .delete(deleteOneEventById)
    .patch(updateOneEventById);

export default organizerRouter;
