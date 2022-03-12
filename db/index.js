import mongoose from "mongoose";
import { DB_URL } from "../config/index.js";
const db = {};
db.connect = () => {
  mongoose.connect(
    DB_URL,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    (error) => {
      if (!error) {
        console.log("Database conntect successfully");
      } else {
        console.log(error.message);
      }
    }
  );
};

export default db;
