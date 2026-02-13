import express from "express";

const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"))

app.get("/", (req, res) => {
  res.render("index.ejs", { title: "Home" });
});

app.get("/create", (req, res) => {
  res.render("create.ejs");
});

const blogs = [];
let id = 1;

app.post("/create", (req, res) => {
  const title = req.body["title"];
  const body = req.body["body"];

  blogs.push({
    id,
    title,
    body,
  });
  id++;
  res.redirect("/blogs");
});

app.get("/blogs", (req, res) => {
  res.render("blogs.ejs", { blogPosts: blogs });
});

app.get("/edit/:id", (req, res) => {
  const editingId = Number(req.params.id, 10);

  let editingTitle = "";
  let editingBody = "";
  for (let j of blogs) {
    if (j.id === editingId) {
      editingTitle = j.title;
      editingBody = j.body;
      break;
    }
  }

  res.render("edit.ejs", {
    editingTitle1: editingTitle,
    editingBody1: editingBody,
  });
});

app.post("/edit/:id", (req, res) => {
  const editingId = Number(req.params.id, 10);

  for (let j of blogs) {
    if (j.id === editingId) {
      j.title = req.body.title;
      j.body = req.body.body;
      break;
    }
  }

  res.redirect("/blogs");
});

app.get("/delete/:id", (req, res) => {
  const deletingId = Number(req.params.id, 10);

  const index = blogs.findIndex((item) => item.id === deletingId);

  if (index !== -1) {
    // splice(startIndex, deleteCount)
    blogs.splice(index, 1);
  }

  res.redirect("/blogs")
});

app.listen(port, () => {
  console.log(`Server is listening on ${port}`);
});
