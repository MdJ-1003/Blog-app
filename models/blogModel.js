import db from "../config/db.js";

export async function getAllBlogs() {
  const result = await db.query('SELECT * FROM blogs ORDER BY id ASC;');
  return result.rows;
}

export async function createBlog(title, body) {
    await db.query("INSERT INTO blogs (title, body) VALUES ($1, $2)", [title, body]);
}

export async function getBlogById(id) {
    const result = await db.query('SELECT * FROM blogs WHERE id = $1', [id]);
    return result.rows[0];
}

export async function updateBlog(id, title, body) {
    await db.query('UPDATE blogs SET title = $1, body = $2 WHERE id = $3;', [title, body, id]);
}

export async function deleteBlog(id) {
    await db.query('DELETE FROM blogs WHERE id = $1', [id]);
}