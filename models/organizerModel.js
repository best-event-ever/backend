import { Schema, model } from "mongoose";

const organizerSchema = new Schema({
  veranstalter: { type: String, required: true },
  anprechPerson: { type: String, required: true },
  telefonnummer: { type: Number, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  passwordWiderholen: { type: String, required: true },
  adresse: { type: String, required: true },
  zahlung: { type: String, required: true },
  zahlungsMethode: { type: String, required: true },
  isAdmin: Boolean,
});

const organizerModel = model("Organizer", organizerSchema);
export default organizerModel;
