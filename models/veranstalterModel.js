import { Schema, model } from "mongoose";

const veranstalterSchema = new Schema({
  Veranstalter: { type: String, required: true },
  Anprechperson: { type: String, required: true },
  telefonnummer: { type: Nummer, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  passwordWiderholen: { type: String, required: true },
  zahlung: { type: String, required: true },
  zahlungsMethode: { type: String, required: true },
});
