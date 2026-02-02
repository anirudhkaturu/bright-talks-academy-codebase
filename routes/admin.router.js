import { Router } from "express";
import {
    getAdminPage,
    getAddBlog,
    getEditBlog,
    postAddBlog,
    putEditBlog,
    deleteBlog,
    getAddCourse,
    postAddCourse,
    deleteCourse
} from "../controllers/admin.controller.js"

const router = new Router();

router.get("/", getAdminPage);

router.get("/add", getAddBlog);
router.post("/add", postAddBlog);

router.get("/edit/:id", getEditBlog);
router.put("/edit/:id", putEditBlog);

router.delete("/delete/:id", deleteBlog);

// courses feature
router.get("/courses/add", getAddCourse);
router.post("/courses/add", postAddCourse);
router.delete("/courses/delete/:id", deleteCourse);

export default router;
