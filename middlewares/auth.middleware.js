import { getUser } from "../services/auth.services.js"

function requireAuth(req, res, next) {
    const token = req.cookies?.uid;

    if (!token) {
        return res.redirect("/login");
    }

    const user = getUser(token);
    if (!user) {
        return res.redirect("/login");
    }

    // adding the user object to the request
    req.user = user;
    next();
}

export default requireAuth;
