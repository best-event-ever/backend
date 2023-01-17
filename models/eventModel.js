import { Schema, model } from "mongoose";

const eventSchema = new Schema({
  eventTitle: {
    type: String,
  },
  eventPlace: {
    type: String,
  },
  eventCity: {
    type: String,
  },
  eventDate: {
    type: String,
  },
  eventPrice: {
    type: String,
  },
});

const eventModel = model("Event", eventSchema);
export default eventModel;
