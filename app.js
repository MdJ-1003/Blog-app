import express from "express";
import blogRoutes from "./routes/blogRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import session from "express-session";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 // 1 day
    }
  })
);

app.use("/", authRoutes);
app.use("/", blogRoutes);


app.get("/me", (req, res) => {
  res.send(
    `Logged in user id: ${req.session.userId}`
  );
});

app.listen(port, () => {
  console.log(`Server is listening on ${port}`);
});
