# 📝 Blog App

A multi-user blog application built with Node.js, Express, PostgreSQL, EJS, and express-session.

---

## 🚀 Features

- User registration
- User login/logout
- Password hashing with bcrypt
- Session authentication
- Protected routes
- Public blog feed
- User-specific blog management
- Create/Edit/Delete posts
- PostgreSQL database
- MVC architecture

---

## 🛠️ Tech Stack

- Node.js
- Express.js
- PostgreSQL
- EJS
- bcrypt
- express-session

---
## 📁 Project Structure

```text
blog-app/
│
├── app.js
├── package.json
├── .env
├── .gitignore
│
├── config/
│   └── db.js
│
├── controllers/
│   ├── authController.js
│   └── blogController.js
│
├── middleware/
│   └── authMiddleware.js
│
├── models/
│   ├── authModel.js
│   └── blogModel.js
│
├── routes/
│   ├── authRoutes.js
│   └── blogRoutes.js
│
├── views/
│   ├── index.ejs
│   ├── login.ejs
│   ├── register.ejs
│   ├── home.ejs
│   ├── feed.ejs
│   ├── blogs.ejs
│   ├── create.ejs
│   ├── edit.ejs
│   └── partials/
│
├── public/
│   └── css/
│       └── styles.css
│
└── README.md
```

---

## ⚙️ Installation & Setup

### 1. Clone the repository

```bash
git clone <repository-url>
```

### 2. Navigate into the project folder

```bash
cd blog-app
```

### 3. Install dependencies

```bash
npm install
```

### 4. Configure Environment Variables

Create a `.env` file in the project root:

```env
DB_USER=your_db_user
DB_HOST=localhost
DB_NAME=your_db_name
DB_PASSWORD=your_db_password
DB_PORT=5432

SESSION_SECRET=your_secret_key
```

### 5. Create the Database

Create a PostgreSQL database and run the required tables:

```sql
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password TEXT NOT NULL
);

CREATE TABLE blogs (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    body TEXT NOT NULL,
    user_id INTEGER NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(id)
);
```

### 6. Start the server

```bash
node app.js
```

### 7. Open your browser

```text
http://localhost:3000
```

---

## 🔄 How It Works

* Users can register and create an account.
* Passwords are securely hashed using bcrypt before being stored.
* Users can log in using session-based authentication.
* Protected routes prevent unauthenticated access.
* Each blog post is associated with its creator through a foreign key relationship.
* Users can create, edit, and delete only their own posts.
* A public feed displays blog posts from all users.
* PostgreSQL provides persistent storage for users and blog posts.
* EJS dynamically renders pages on the server.

---

## 📌 Learning Objectives

This project demonstrates:

* MVC Architecture
* Express Routing
* PostgreSQL Integration
* Database Relationships (One-to-Many)
* User Authentication
* Session Management with express-session
* Password Hashing with bcrypt
* Route Protection using Middleware
* CRUD Operations
* EJS Templating
* Environment Variable Management
* Separation of Concerns

---

## 🔒 Authentication Features

* User Registration
* User Login
* User Logout
* Password Hashing with bcrypt
* Session-Based Authentication
* Protected Routes
* Blog Ownership Authorization
* Secure Access to User-Specific Resources

---

## ⚠️ Current Limitations

* No OAuth (Google/GitHub Login)
* No Password Reset Functionality
* No User Profile Management
* No Image Upload Support
* Minimal UI Styling
* No Pagination on Public Feed

---

## 📈 Future Improvements

* Google OAuth Authentication
* Password Strength Validation
* User Profiles
* Blog Categories and Tags
* Comment System
* Like/Bookmark Functionality
* Rich Text Editor
* Search Functionality
* Pagination
* Responsive UI Improvements
* Deployment (Render / Railway / VPS)

---

## 🛠️ Tech Stack

### Backend

* Node.js
* Express.js

### Database

* PostgreSQL

### Authentication

* bcrypt
* express-session

### Frontend

* EJS
* CSS

### Architecture

* MVC Pattern

---

## 👨‍💻 Author

Built as a full-stack learning project to practice:

* Backend Development
* Database Design
* Authentication & Authorization
* MVC Architecture
* Server-Side Rendering with EJS
* PostgreSQL Integration

```
```
