import express from "express";

const router = express.Router();

import {getAllEvents, getOneEvent} from '../../controller/user/userController.js';

router
  .route('/events')
    .get(getAllEvents);
    
router
  .route('/events/:id')
    .get(getOneEvent);

export default router;