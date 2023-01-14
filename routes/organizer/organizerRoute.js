import express from "express";

const organizerRouter = express.Router();

import {postOneEvent, getAllEvents, getOneEvent, deleteOneEvent, updateOneEvent} from '../../controller/organizer/organizerController.js';

organizerRouter
  .route('/events')
    .post(postOneEvent)
    .get(getAllEvents);
    
    // .
    // ;
organizerRouter
  .route('/events/:id')
    .get(getOneEvent)
    .delete(deleteOneEvent)
    .patch(updateOneEvent);

export default organizerRouter;
