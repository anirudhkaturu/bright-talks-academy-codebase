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

function getBlogs(req, res) {
    return res.render("blogs");
}

function getProfile(req, res) {
    return res.render("profile", { user: req.user}); // pass the user to the render 
}

function getBlogTemplate(req, res) {
    return res.render("blogTemplate");
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
    getBlogTemplate,
    getProfile
}
