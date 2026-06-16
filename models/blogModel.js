import db from "../config/db.js";

export async function getUserBlogs(userId) {
  const result = await db.query('SELECT * FROM blogs WHERE user_id = $1', [userId]);
  return result.rows;
}

export async function createBlog(title, body, userId) {
    await db.query("INSERT INTO blogs (title, body, user_id) VALUES ($1, $2, $3)", [title, body,userId ]);
}

export async function getBlogById(id) {
    const result = await db.query('SELECT * FROM blogs WHERE id = $1', [id]);
    return result.rows[0];
}

export async function updateBlog(id, title, body, userId) {
    await db.query('UPDATE blogs SET title = $1, body = $2 WHERE id = $3 AND user_id = $4;', [title, body, id, userId]);
}

export async function deleteBlog(id, userId) {
    await db.query('DELETE FROM blogs WHERE id = $1 AND user_id = $2', [id, userId]);
}

export async function getAllBlogs() {
    const result = await db.query("SELECT blogs.*, users.email FROM blogs JOIN users ON blogs.user_id = users.id ORDER BY blogs.id DESC")
    return result.rows;
}