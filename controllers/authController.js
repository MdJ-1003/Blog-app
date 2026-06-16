import { addUser, checkUser } from "../models/authModel.js";
import session from "express-session";

export async function showLandingPage(req, res) {
  res.render("home.ejs");
}

export async function showRegistrationPage(req, res) {
  res.render("register.ejs");
}

export async function showLoginPage(req, res) {
  res.render("login.ejs");
}

export async function registerUser(req, res) {
  const { email, password } = req.body;

  try {
    const user = await addUser(email, password);

    if (!user || user.length === 0) {
      return res.render("register.ejs", {
        error: "Registration failed",
      });
    }

    return res.redirect("/login");

  } catch (error) {
    console.error(error);

    return res.render("register.ejs", {
      error: "Email already exists or registration failed",
    });
  }
}

export async function loginUser(req, res, next) {
  const { email, password } = req.body;
  const user = await checkUser(email, password);
  console.log(user);

  if (!user) {
    return res.render("login.ejs", {
      error: "Invalid email or password",
    });
  }

  req.session.regenerate((err) => {
    if (err) return next(err);

    req.session.userId = user.id;
    req.session.email = user.email;

    req.session.save((err) => {
      if (err) return next(err);

      res.redirect("/home");
    });
  });
}

export function logoutUser(req, res, next) {
  req.session.userId = null;

  req.session.save((err) => {
    if (err) return next(err);

    req.session.regenerate((err) => {
      if (err) return next(err);

      res.redirect("/login");
    });
  });
}
