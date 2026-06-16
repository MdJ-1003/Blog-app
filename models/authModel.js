import db from "../config/db.js";
import bcrypt from "bcrypt";

export async function addUser(email, password) {
    const saltRounds = 10;
    // Salting & Hashing
    const hash = await bcrypt.hash(password, saltRounds);
    // Inserting new user to users table
    const result = await db.query("INSERT INTO users (email, password) VALUES ($1, $2) RETURNING *", [email, hash]);
    return result.rows;
}

export async function checkUser(email, password) {
    const result = await db.query("SELECT * FROM users WHERE email = $1", [email]);

    if(result.rows.length === 0) {
        return null;
    } 

    const user = result.rows[0];

    const isValid = await bcrypt.compare(password, user.password);

    if(isValid) {
        return user;
    } else {
        return null;
    }
}