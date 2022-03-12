import express from "express";
import cors from "cors";
import { APP_PORT } from "./config";
import db from "./db";
import router from "./routes";
import errorHandler from "./middlewares/errorhandeler";
const app = express();
// middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
db.connect();
app.use("/api", router);
app.use(errorHandler);

// server
const PORT = APP_PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server in runing on port ${PORT}`);
});
