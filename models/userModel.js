import { Schema, model } from "mongoose";

const userSchema = new Schema({
  benutzername: { type: String, required: true },
  vorname: { type: String, required: true },
  nachname: { type: String, required: true },
  telefonnummer: { type: Number, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  passwordWiderholen: { type: String, required: true },
  adresse: { type: String, required: true },
  zahlung: { type: String, required: true },
  zahlungsMethode: { type: String, required: true },
  isAdmin: Boolean,

});


const userModel = model("User", userSchema);
export default userModel;
