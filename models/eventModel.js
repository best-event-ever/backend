import mongoose, {Schema, model} from "mongoose";

const eventSchema = new Schema ({
  title: {
    type: String,
    required: true
  }
});

const eventModel = model('Event', eventSchema);
export default eventModel;