import express from "express";

const generalRouter = express.Router();

import {getAllEvents} from "../../controller/general/generalController.js";

generalRouter
  .route("/")
    .get(getAllEvents);

export default generalRouter;