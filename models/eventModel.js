import { Schema, model } from "mongoose";

const eventSchema = new Schema({
  eventTitle: {
    type: String,
    required: true
  },
  eventPlace: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  date: {
    type: String,
    default: Date.now,
  },
  price: {
    type: Number,
    required: true
  },
});

const eventModel = model("Event", eventSchema);
export default eventModel;
