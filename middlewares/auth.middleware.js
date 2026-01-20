import { getUser } from "../services/auth.services.js";

function restrictLogin(...access) {
  return (req, res, next) => {
    const token = req.cookies?.uid;

    if (!token) {
      return res.redirect("/login?error=login_required");
    }

    const user = getUser(token);
    if (!user) {
      return res.redirect("/login?error=invalid_session");
    }

    if (access.length > 0 && !access.includes(user.access)) {
      return res.redirect("/login?error=unauthorized");
    }

    req.user = user;
    next();
  };
}

export default restrictLogin;
