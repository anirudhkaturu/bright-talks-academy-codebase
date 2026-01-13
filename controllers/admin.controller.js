import Blog from "../models/Blog.js";

// GET admin page
async function getAdminPage(req, res) {
  const blogs = await Blog.find();
  return res.render("admin", {blogs: blogs});
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
  return res.json(newBlog);
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

export {
  getAdminPage, 
  getAddBlog,
  getEditBlog,
  postAddBlog,
  putEditBlog,
  deleteBlog
}