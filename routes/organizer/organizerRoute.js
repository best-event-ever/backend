import express from "express";

const organizerRouter = express.Router();
import {
  organizerValidator,
  organizerUpdateValidator,
} from "../../middleware/organizerValidator.js";
import auth from "../../middleware/auth.js";
import admin from "../../middleware/admin.js";
import {
  addOrganizer,
  getOrganizer,
  postOneEvent,
  getAllEvents,
  getOneEventById,
  deleteOneEventById,
  updateOneEventById,
} from "../../controller/organizer/organizerController.js";

organizerRouter
  .route("/events")
  .post(postOneEvent, addOrganizer)
  .get(getOrganizer, getAllEvents);

// .
// ;
organizerRouter
  .route("/events/:id")
  .get(getOneEventById)
  .delete(deleteOneEventById)
  .patch(updateOneEventById);

export default organizerRouter;
