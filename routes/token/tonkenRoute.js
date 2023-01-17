import express from "express";
import { tokenController } from "../../controller/token/tokenController.js";

const tokenRoute = express.Router();

tokenRoute.route("/").post(tokenController);

export default tokenRoute;
