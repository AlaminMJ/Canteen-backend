import { Router } from "express";
import { userController } from "../controllers";
import auth from "../middlewares/auth";

const router = Router();
router.get("/", (req, res) => {
  res.send("ok vai thik ace");
});
router.post("/user/register", userController.register);
router.post("/user/login", userController.logIn);
router.get("/user/register", userController.logout);
router.get("/user/me/:id", auth, userController.me);
export default router;
