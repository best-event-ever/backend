import express from "express";

const router = express.Router();

import {postOneEvent}
  //getAllEvents, getOneEvent, deleteOneEvent, updateOneEvent} 
  from '../../controller/eventController.js';

router
  .route('/events')
    .post(postOneEvent);
    // .get(getAllEvents)
    // .get(getOneEvent)
    // .delete(deleteOneEvent)
    // .patch(updateOneEvent);

export default router;
