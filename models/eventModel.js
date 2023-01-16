import { Schema, model } from "mongoose";

const eventSchema = new Schema({
  title: {
    type: String,
  },
});

const eventModel = model("Event", eventSchema);
export default eventModel;
