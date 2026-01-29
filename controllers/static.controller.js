import Blog from "../models/Blog.js";
import Course from "../models/Course.js";
import { marked } from "marked";

function getHome(req, res) {
    return res.render("index");
}

function getAbout(req, res) {
    return res.render("about");
}

function getPortfolio(req, res) {
    return res.render("portfolio");
}

function getContact(req, res) {
    return res.render("contact");
}

function getTAndC(req, res) {
    return res.render("tandc");
}

function getLogin(req, res) {
    return res.render("login");
}

function getSignup(req, res) {
    return res.render("signup");
}

async function getBlogs(req, res) {
    const blogs = await Blog.find().sort({ createdAt: -1 });
    return res.render("blogs", { blogs: blogs });
}

async function getBlogById(req, res) {
    const blogId = req.params.id;
    const blog = await Blog.findById(blogId);
    if (!blog) {
        return res.json({"message": "Blog Not Found"});
    }

    const html = marked.parse(blog.content);
    return res.render("blogTemplate", { title: blog.title, content: html });
}

function getProfile(req, res) {
    return res.render("profile", { user: req.user}); // pass the user to the render 
}

async function getCourses(req, res) {
    const courses = await Course.find();
    return res.render("courses", {courses: courses});
}

async function getCourseById(req, res) {
    const courseId = req.params.id;
    if (!courseId) {
        return res.render("courses");
    }

    const course = await Course.findById(courseId);
    if (!course) {
        res.render("course");
    }
    
    return res.render("courseTemplate", { course: course });
}

export {
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
    getCourseById
}
