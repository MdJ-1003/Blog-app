import express from "express";
import pg from "pg";
import dotenv from "dotenv";


const app = express();
const port = 3000;
dotenv.config();

const db = new pg.Client({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT
})
db.connect();

console.log(process.env.DB_NAME);

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"))

app.get("/", (req, res) => {
  res.render("index.ejs", { title: "Home" });
});

app.get("/create", (req, res) => {
  res.render("create.ejs");
});

async function getBlogPosts() {
  const result = await db.query('SELECT * FROM blogs ORDER BY id ASC;');
  return result.rows;
}

app.post("/create", async (req, res) => {
  const title = req.body["title"];
  const body = req.body["body"];

  await db.query('INSERT INTO blogs (title, body) VALUES ($1, $2);',[title, body]);
  res.redirect("/blogs");
});

app.get("/blogs", async (req, res) => {
  const blogPosts = await getBlogPosts();
  res.render("blogs.ejs", { blogPosts: blogPosts });
});

app.get("/edit/:id", async (req, res) => {
  const id = req.params.id;
  const result = await db.query('SELECT * FROM blogs WHERE id = $1', [id]);
  const title = result.rows[0].title;
  const body = result.rows[0].body;
  console.log(result.rows)
  console.log(result.rows[0].title)
  

  res.render("edit.ejs", {
    editingTitle: title,
    editingBody: body
  })
})
 
app.post("/edit/:id", async (req, res) => {
    const title = req.body.editingTitle;
    const id = Number(req.params.id, 10);
    const body = req.body.editingBody;
        
    try {
      await db.query('UPDATE blogs SET title = $1, body = $2 WHERE id = $3;', [title, body, id]);
      res.redirect("/blogs");
    } catch (error) {
      console.log(error)
    }
});

app.get("/delete/:id", async (req, res) => {
  const id = Number(req.params.id, 10);

  /*const index = blogs.findIndex((item) => item.id === deletingId);
  if (index !== -1) {
    // splice(startIndex, deleteCount)
    blogs.splice(index, 1);
  }*/
 try {
   await db.query('DELETE FROM blogs WHERE id = $1', [id]);
   res.redirect("/blogs")
 } catch (error) {
  console.log(error)
 }

});

app.listen(port, () => {
  console.log(`Server is listening on ${port}`);
});
