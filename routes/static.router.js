import { Router } from "express";
import { 
    getHome, 
    getAbout, 
    getContact,
    getPortfolio, 
    getTAndC, 
    getLogin, 
    getSignup, 
    getBlogs, 
    getBlogById, 
    getProfile, 
    getCourses,
    getCourseById,
    enrollCourse
} from "../controllers/static.controller.js"; 

// authentication middleware
import restrictLogin from "../middlewares/auth.middleware.js";

const router = new Router();

router.get("/", getHome);
router.get("/about", getAbout);
router.get("/contact", getContact);
router.get("/portfolio", getPortfolio);
router.get("/tandc", getTAndC);
router.get("/login", getLogin);
router.get("/signup", getSignup);

// protected routes
router.get("/blogs", restrictLogin("admin", "user"), getBlogs);
router.get("/blogs/:id", restrictLogin("admin", "user"), getBlogById);
router.get("/profile", restrictLogin("admin", "user"), getProfile);
router.get("/courses", getCourses);
router.get("/courses/:id", getCourseById);
router.get("/courses/:id/enroll", restrictLogin("admin", "user"), enrollCourse);

export default router;
