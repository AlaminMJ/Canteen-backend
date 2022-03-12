import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, trim: true },
    password: { type: String, required: true, trim: true },
    roll: { type: String, required: true, trim: true },
  },
  { timestamps: true }
);

const User = mongoose.model("User", UserSchema, "Users");
export default User;
