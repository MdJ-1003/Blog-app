import express from "express";
import {
    showHomePage,
    showBlogs,
    showCreatePage,
    addBlog,
    showEditPage,
    editBlog,
    removeBlog,
    showAllBlogs
} from "../controllers/blogController.js"
import isAuthenticated from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/home", isAuthenticated, showHomePage);
router.get("/blogs", isAuthenticated, showBlogs);
router.get("/create", isAuthenticated, showCreatePage);
router.post("/create", isAuthenticated, addBlog);
router.get("/edit/:id", isAuthenticated, showEditPage);
router.post("/edit/:id", isAuthenticated, editBlog);
router.post("/delete/:id", isAuthenticated, removeBlog);
router.get("/all-blogs", showAllBlogs);

export default router;
