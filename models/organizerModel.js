import { Schema, model } from "mongoose";

const organirzerSchema = new Schema({
  veranstalter: { type: String, required: true },
  anprechperson: { type: String, required: true },
  telefonnummer: { type: Number, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  passwordWiderholen: { type: String, required: true },
  zahlung: { type: String, required: true },
  zahlungsMethode: { type: String, required: true },
  isAdmin: Boolean,
  /*  toObject: {
    virtuals: true,
  } 
  toJSON: {
    virtuals: true,
  },*/
});

// virtual
/* userSchema.virtual("Anprechperson").get(function () {
  return `${this.anprechperson}`;
}); */

// Model - Template for DB entries
const userModel = model("Organizer", organirzerSchema);
export default userModel;
