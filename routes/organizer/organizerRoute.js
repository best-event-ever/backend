import express from "express";

const organizerRouter = express.Router();
import {
  organizerValidator,
  organizerUpdateValidator,
} from "../../middleware/organizerValidator.js";
import auth from "../../middleware/auth.js";
import admin from "../../middleware/admin.js";
import {
  login,
  addOrganizer,
  getOrganizer,
  postOneEvent,
  getAllEvents,
  getOneEventById,
  deleteOneEventById,
  updateOneEventById,
} from "../../controller/organizer/organizerController.js";

organizerRouter.route("/events").post(postOneEvent).get(getAllEvents);

organizerRouter.route("/registration").post(addOrganizer).get(getOrganizer);

organizerRouter.route("/login").post(login).get;

organizerRouter.route("/").get(getOrganizer);

organizerRouter
  .route("/events/:id")
  .get(getOneEventById)
  .delete(deleteOneEventById)
  .patch(updateOneEventById);

export default organizerRouter;
