import express from "express";
import {
    showHomePage,
    showBlogs,
    showCreatePage,
    addBlog,
    showEditPage,
    editBlog,
    removeBlog
} from "../controllers/blogController.js"
// import { updateBlog } from "../models/blogModel.js";

const router = express.Router();

router.get("/", showHomePage);
router.get("/blogs", showBlogs);
router.get("/create", showCreatePage);
router.post("/create", addBlog);
router.get("/edit/:id", showEditPage);
router.post("/edit/:id", editBlog);
router.post("/delete/:id", removeBlog);

export default router;
