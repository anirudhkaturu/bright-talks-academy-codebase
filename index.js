import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import methodOverride from "method-override";

// database connection 
import connectDb from "./configdb.js";

// authorization middleware
import restrictLogin from "./middlewares/auth.middleware.js"
import checkAuth from "./middlewares/checkAuth.middleware.js";

// static router import
import staticRouter from "./routes/static.router.js";
// authentication router import
import authRouter from "./routes/auth.router.js";
// admin router import
import adminRouter from "./routes/admin.router.js";


dotenv.config();
const PORT = process.env.PORT;
const app = express();

// setting view engine
app.use(express.static("public"));
app.set("view engine", "ejs");
app.set("views", "./views");

// middlewares
app.use(express.json());
app.use(cookieParser());
app.use(checkAuth);
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

// routers setup
app.use("/", staticRouter);
// authentication routes
app.use("/auth", authRouter);
// admin routes
app.use("/admin", restrictLogin("admin"), adminRouter);

connectDb(process.env.MONGO_DB).then(() => {
    console.log("Successfully Connected to MongoDB");
    app.listen(PORT, "0.0.0.0", () => {
      console.log(`Server has started on http://localhost:${PORT}`);
    });
}).catch(err => {
    console.log("Error: ", err);
}) ;
