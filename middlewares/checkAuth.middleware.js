import { getUser } from "../services/auth.services.js";

function checkAuth(req, res, next) {
  const token = req.cookies?.uid;

  if (!token) {
    res.locals.user = null; // IMPORTANT
    return next();
  }

  const user = getUser(token);
  res.locals.user = user || null; // ALWAYS defined
  next();
}

export default checkAuth;
