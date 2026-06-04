import {
    getAllBlogs,
    createBlog,
    getBlogById,
    updateBlog,
    deleteBlog
} from "../models/blogModel.js";

export function showHomePage(req, res) {
    res.render("index.ejs", {title: "Home"})
}

export async function showBlogs(req, res) {
    const blogPosts = await getAllBlogs();

    res.render("blogs.ejs", {
        blogPosts: blogPosts
    })
}

export async function showCreatePage(req, res) {
    res.render("create.ejs");
}

export async function addBlog(req, res) {
    const {title, body} = req.body;

    await createBlog(title, body);

    res.redirect("/blogs");
}

export async function showEditPage(req, res) {
    const id = Number(req.params.id, 10);
    const result = await getBlogById(id);
    const title = result.title;
    const body = result.body;

    res.render("edit.ejs", {
    editingTitle: title,
    editingBody: body
  })
}

export async function editBlog(req, res) {
    const title = req.body.editingTitle;
    const id = Number(req.params.id, 10);
    const body = req.body.editingBody;

    await updateBlog(id, title, body);

    res.redirect("/blogs");    
}

export async function removeBlog(req, res) {
    const id = Number(req.params.id, 10);

    await deleteBlog(id);

    res.redirect("/blogs");
}
