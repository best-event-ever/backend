import express from "express";

const userRouter = express.Router();

import {
  login,
  addUser,
  getAllEvents,
  getOneEvent,
} from "../../controller/user/userController.js";

userRouter.route("/events").get(getAllEvents);
userRouter.route("/registration").post(addUser);
userRouter.route("/login").post(login);
userRouter.route("/events/:id").get(getOneEvent);

export default userRouter;
