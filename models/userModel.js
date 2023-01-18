import { Schema, model } from "mongoose";

const userSchema = new Schema({
  benutzername: { type: String, required: true },
  stadt: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  isAdmin: Boolean,
});

const userModel = model("User", userSchema);
export default userModel;
