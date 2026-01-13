import { Router } from "express";
import {
    getAdminPage,
    getAddBlog,
    getEditBlog,
    postAddBlog,
    putEditBlog,
    deleteBlog
} from "../controllers/admin.controller.js"

const router = new Router();

router.get("/", getAdminPage);

router.get("/add", getAddBlog);
router.post("/add", postAddBlog);

router.get("/edit/:id", getEditBlog);
router.put("/edit/:id", putEditBlog);

router.delete("/delete/:id", deleteBlog);

export default router;
