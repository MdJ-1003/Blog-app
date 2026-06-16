import {
    getUserBlogs,
    createBlog,
    getBlogById,
    updateBlog,
    deleteBlog,
    getAllBlogs
} from "../models/blogModel.js";
import session from "express-session";

export function showHomePage(req, res) {
    res.render("index.ejs", {title: "Home"})
}

export async function showBlogs(req, res) {
    const userId = req.session.userId;
    const blogPosts = await getUserBlogs(userId);

    res.render("blogs.ejs", {
        blogPosts: blogPosts
    })
}

export async function showCreatePage(req, res) {
    res.render("create.ejs");
}

export async function addBlog(req, res) {
    const {title, body} = req.body;
    console.log(req.body)

    const userId = req.session.userId;
 
    await createBlog(title, body, userId);

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
    const userId = req.session.userId;

    await updateBlog(id, title, body, userId);

    res.redirect("/blogs");    
}

export async function removeBlog(req, res) {
    const id = Number(req.params.id, 10);
    const userId = req.session.userId;

    await deleteBlog(id, userId);

    res.redirect("/blogs");
}

export async function showAllBlogs(req, res) {
    const result = await getAllBlogs();
    console.log(result)
    
    res.render("feed.ejs", {
        blogPosts: result
    })
}
