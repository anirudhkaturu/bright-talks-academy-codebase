import { getUser } from "../services/auth.services.js"

function restrictLogin(...access) {
    return (req, res, next) => {
        const token = req.cookies?.uid;
        if (!token) {
          return res.json({"message": "no token"});
        }

        const user = getUser(token);
        if (!user) {
          return res.json({ message: "no user" });
        }

        if (access.length > 0 && !access.includes(user.access)) {
          return res.json({ message: "not authorized" });
        }

        // adding the user object to the request
        req.user = user;
        next();
    }
}

export default restrictLogin;
