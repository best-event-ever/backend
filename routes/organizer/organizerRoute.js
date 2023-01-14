import express from "express";

const router = express.Router();

import {postOneEvent, getAllEvents, getOneEvent, deleteOneEvent}
  //, , updateOneEvent} 
  from '../../controller/organizer/eventController.js';

router
  .route('/events')
    .post(postOneEvent)
    .get(getAllEvents);
    
    // .
    // .patch(updateOneEvent);
router
  .route('/events/:id')
    .get(getOneEvent)
    .delete(deleteOneEvent);

export default router;
