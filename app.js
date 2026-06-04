import express from "express";
import blogRoutes from "./routes/blogRoutes.js";

const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"))

app.use("/", blogRoutes);

app.listen(port, () => {
  console.log(`Server is listening on ${port}`);
});
