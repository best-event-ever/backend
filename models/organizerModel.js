import mongoose from "mongoose";

const organizerSchema = new mongoose.Schema({
  veranstalter: { type: String, required: true },
  ansprechperson: { type: String },
  strasse: { type: String, required: true },
  hausnr: { type: String, required: true },
  plz: { type: String, required: true },
  stadt: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  telefonnummer: { type: String, required: true },
  password: { type: String, required: true },
  isAdmin: Boolean,
});

const organizerModel = mongoose.model("Organizer", organizerSchema);
export default organizerModel;
