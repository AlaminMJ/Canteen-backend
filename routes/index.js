import { Router } from "express";
import { userController } from "../controllers";

const router = Router();
router.get("/", (req, res) => {
  res.send("ok vai thik ace");
});
router.post("/user/register", userController.register);
router.post("/user/login", userController.logIn);
router.get("/user/register", userController.logout);
export default router;
