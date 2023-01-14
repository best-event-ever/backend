import express from "express";

const router = express.Router();

import {postOneEvent, getAllEvents, getOneEvent, deleteOneEvent, updateOneEvent} from '../../controller/organizer/eventController.js';

router
  .route('/events')
    .post(postOneEvent)
    .get(getAllEvents);
    
    // .
    // ;
router
  .route('/events/:id')
    .get(getOneEvent)
    .delete(deleteOneEvent)
    .patch(updateOneEvent);

export default router;
