import { Router } from "express";
import { postLogin, postSignup, postLogout } from "../controllers/auth.controller.js";

const router = new Router();

router.post("/login", postLogin);
router.post("/signup", postSignup);
router.post("/logout", postLogout);

export default router;
