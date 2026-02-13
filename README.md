# 📝 Blog Web Application (Node.js + Express + EJS)

A full-stack blog web application built using **Node.js**, **Express.js**, and **EJS**.  
This application allows users to create, edit, view, and delete blog posts.

This project was built as a capstone to demonstrate backend routing, dynamic templating, and full CRUD functionality without using a database.

---

## 🚀 Features

- ✅ Create new blog posts
- ✅ View all blog posts
- ✅ Edit existing posts
- ✅ Delete posts with confirmation
- ✅ Dynamic route parameters
- ✅ In-memory data storage
- ✅ Clean and responsive UI
- ✅ Reusable EJS partials (header & footer)

---

## 🛠️ Tech Stack

- **Node.js**
- **Express.js**
- **EJS (Embedded JavaScript Templates)**
- **HTML5**
- **CSS3**

---

## 📁 Project Structure

blog-app/
│
├── app.js
├── package.json
│
├── views/
│ ├── index.ejs
│ ├── create.ejs
│ ├── edit.ejs
│ ├── blogs.ejs
│ └── partials/
│ ├── header.ejs
│ └── footer.ejs
│
├── public/
│ └── css/
│ └── styles.css
│
└── README.md

---

## ⚙️ Installation & Setup

1. Clone the repository:

2. Navigate into the project folder:
   cd blog-app

3. Install dependencies:
   npm install

4. Start the server:
   node app.js

5. Open your browser and go to:
   http://localhost:3000

---

## 🔄 How It Works

- Blog posts are stored in memory using a JavaScript array.
- Each post is assigned a unique auto-incrementing ID.
- Express handles routing and request processing.
- EJS dynamically renders blog content.
- POST → Redirect → GET pattern ensures clean request handling.
- Data resets when the server restarts (no database used).

---

## 📌 Learning Objectives

This project demonstrates:

- REST-style routing with Express
- Route parameters (`/edit/:id`, `/delete/:id`)
- Form handling with `req.body`
- Dynamic rendering with EJS
- Server-side state management
- Clean project structure using partial templates

---

## ⚠️ Limitations

- No database (data is lost on server restart)
- No authentication
- No persistent storage

---

## 📈 Future Improvements

- Integrate MongoDB or PostgreSQL
- Add user authentication
- Implement MVC folder structure
- Add pagination
- Deploy to a cloud platform (Render / Railway / Vercel)

---

## 👨‍💻 Author

Built as part of a web development capstone project to strengthen backend development fundamentals.
