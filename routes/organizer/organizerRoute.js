import express from "express";

const router = express.Router();

import {postOneEvent, getAllEvents, getOneEvent}
  //, , deleteOneEvent, updateOneEvent} 
  from '../../controller/organizer/eventController.js';

router
  .route('/events')
    .post(postOneEvent)
    .get(getAllEvents);
    
    // .delete(deleteOneEvent)
    // .patch(updateOneEvent);
router
  .route('/events/:id')
    .get(getOneEvent);

export default router;
