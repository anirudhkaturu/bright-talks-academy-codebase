import Blog from "../models/Blog.js";

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

    return res.render("blogTemplate", { blog: blog });
}

function getProfile(req, res) {
    return res.render("profile", { user: req.user}); // pass the user to the render 
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
    getProfile
}
