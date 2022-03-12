import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import router from "./routes/index.js";
import db from "./db/index.js";
const app = express();
dotenv.config();
app.use(cors);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(router
db.connect();
app.get("/", (req, res) => {
  // res.send("ok re vai");
});
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server in runing on port ${PORT}`);
});
