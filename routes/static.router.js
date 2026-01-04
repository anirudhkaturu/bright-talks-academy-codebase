import { Router } from "express";
import { getHome, getAbout, getContact, getPortfolio, getTAndC, getLogin, getSignup, getBlogs, getBlogTemplate, getProfile } from "../controllers/static.controller.js";   
// authentication middleware
import requireAuth from "../middlewares/auth.middleware.js";

const router = new Router();

router.get("/", getHome);
router.get("/about", getAbout);
router.get("/contact", getContact);
router.get("/portfolio", getPortfolio);
router.get("/tandc", getTAndC);
router.get("/login", getLogin);
router.get("/signup", getSignup);

// protected routes
router.get("/blogs", requireAuth, getBlogs);
router.get("/profile", requireAuth, getProfile);
router.get("/blog", requireAuth, getBlogTemplate);

export default router;
