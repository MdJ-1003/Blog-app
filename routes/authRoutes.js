import express from "express";
import {
    showLoginPage,
    showRegistrationPage,
    registerUser,
    loginUser,
    showLandingPage,
    logoutUser
} from "../controllers/authController.js";

const router = express.Router();

router.get("/", showLandingPage);
router.get("/register", showRegistrationPage);
router.post("/register", registerUser);
router.get("/login", showLoginPage);
router.post("/login", loginUser);
router.get("/logout", logoutUser);

export default router;