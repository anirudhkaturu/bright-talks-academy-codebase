import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

// database connection 
import connectDb from "./configdb.js";

// static router import
import staticRouter from "./routes/static.router.js";
// authentication router import
import authRouter from "./routes/auth.router.js";


dotenv.config();
const PORT = process.env.PORT;
const app = express();

// setting view engine
app.set("view engine", "ejs");
app.set("views", "./views");

// middlewares
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

// routers setup
app.use("/", staticRouter);
// authentication routes
app.use("/auth", authRouter);

connectDb(process.env.MONGO_DB).then(() => {
    console.log("Successfully Connected to MongoDB");
    app.listen(PORT, () => {
      console.log(`Server has started on http://localhost:${PORT}`);
    });
}).catch(err => {
    console.log("Error: ", err);
}) ;
