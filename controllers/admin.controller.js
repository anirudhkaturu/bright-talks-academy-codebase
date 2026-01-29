import Blog from "../models/Blog.js";
import Course from "../models/Course.js"

// GET admin page
async function getAdminPage(req, res) {
  const blogs = await Blog.find();
  const courses = await Course.find();
  return res.render("admin", {blogs: blogs, courses: courses});
}

// GET method to admin page to add new blog
function getAddBlog(req, res) {
  return res.render("addBlog");
}

// POST method to add new blog
async function postAddBlog(req, res) {
  const { title, content } = req.body;
  if (!title || !content) {
    return res.json({"message": "invalid input"});
  }

  const newBlog = await Blog.create({ title, content });
  return res.redirect("/admin");
}

// GET method to edit blog
async function getEditBlog(req, res) {
  const id = req.params.id;
  const blog = await Blog.findById(id);
  if (!blog) {
    return res.status(404).json({"message": "blog not found"});
  }

  return res.render("editBlog", { blog });
}

// POST method to edit blog
async function putEditBlog(req, res) {
  const { title, content } = req.body;
  await Blog.findByIdAndUpdate(req.params.id, {
    title, 
    content
  });

  res.redirect("/admin");
}

// DELETE method to delete blog
async function deleteBlog(req, res) {
  await Blog.findByIdAndDelete(req.params.id);
  return res.redirect("/admin");
}

async function getAddCourse(req, res) {
  const courses = await Course.find();
  return res.render("addCourse");
}

async function postAddCourse(req, res) {
  const { title, description, price } = req.body;
  if (!title || !description || !price) {
    return res.stauts(401).json({message: "invalid input"});
  }

  const newCourse = await Course.create({title, description, price});
  return res.redirect("/admin");
}

export {
  getAdminPage, 
  getAddBlog,
  getEditBlog,
  postAddBlog,
  putEditBlog,
  deleteBlog,
  getAddCourse,
  postAddCourse
}