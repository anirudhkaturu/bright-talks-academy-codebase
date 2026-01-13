import User from "../models/User.js";
import { setUser } from "../services/auth.services.js";

async function postLogin(req, res) {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({ message: "invalid input" });;
    }
    
    const user = await User.findOne({email});
    if (!user) {
        return res.status(404).redirect("/signup");
    }
    if (user.password !== password) {
        return res.redirect("/home");
    }
    const token = setUser(user);
    res.cookie("uid", token);
    return res.redirect("/profile");
}

async function postSignup(req, res) { // have to implement character and length check
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
        return res.status(400).json({"message": "invalid input"});
    }
    const result = await User.create({name, email, password});
    return res.json(result);
}

async function postLogout(req, res) {
    res.clearCookie("uid");
    return res.redirect("/");
} 

export {
    postLogin, 
    postSignup,
    postLogout
}
