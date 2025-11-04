const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const session = require("express-session");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
const PORT = 3000;

// MongoDB Connection
// Note: options like useNewUrlParser and useUnifiedTopology are no longer necessary
// with modern mongoose/node drivers and will trigger deprecation warnings if kept.
mongoose.connect("mongodb://localhost:27017/agrisens")
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error('MongoDB connection error:', err));

// User Schema
const UserSchema = new mongoose.Schema({
  email: String,
  password: String,
});
const User = mongoose.model("User", UserSchema);

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
// Serve static files from the web-app root so assets like /js/main.js and /index.html are reachable
// Do not let express.static automatically serve index.html at '/'
// so our custom root route (main.html) can take precedence.
app.use(express.static(path.join(__dirname), { index: false }));
app.use(session({
  secret: "agrisens-secret",
  resave: false,
  saveUninitialized: false,
}));

// Routes

// Serve main landing page at root
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'main.html'));
});

// Login page
app.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "login.html"));
});

// Signup page
app.get("/signup", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "signup.html"));
});

// Keep legacy /home route working by redirecting to the protected app index
app.get('/home', (req, res) => {
  if (!req.session.userId) return res.redirect('/login');
  return res.redirect('/index');
});

// Main landing (after login) - serves a small page that forwards to the public index
app.get('/main', (req, res) => {
  if (!req.session.userId) return res.redirect('/login');
  res.sendFile(path.join(__dirname, 'views', 'main.html'));
});

// Serve the web app's index (protected)
app.get('/index', (req, res) => {
  if (!req.session.userId) return res.redirect('/login');
  // index.html lives in the web-app root
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Signup handler
app.post("/signup", async (req, res) => {
  const { email, password } = req.body;
  const userExists = await User.findOne({ email });
  if (userExists) return res.send("User already exists.");

  const hashedPassword = await bcrypt.hash(password, 10);
  await User.create({ email, password: hashedPassword });
  res.redirect("/login");
});

// Login handler
app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) return res.send("User not found");

  const match = await bcrypt.compare(password, user.password);
  if (!match) return res.send("Incorrect password");

  req.session.userId = user._id;
  // After successful login, redirect directly to the protected app index
  res.redirect("/index");
});

// Logout handler
app.post("/logout", (req, res) => {
  req.session.destroy(err => {
    if (err) return res.send("Logout error");
    res.redirect("/login");
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
