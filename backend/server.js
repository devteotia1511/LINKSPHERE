const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin: "http://localhost:3000", credentials: true }));

// MongoDB Connection
mongoose.connect('mongodb+srv://devteotia1511:EKTWsjsZFVVGiqBu@cluster0.i452v.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.log(err));

// User Schema and Model
const userSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
});

const User = mongoose.model("User", userSchema);
User.create({
    email:"devteotia1511@gmail.com",
    password:"456789765435"
})
// Routes

// Register Route
app.post("/api/register", async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) return res.status(400).json({ message: "All fields are required." });

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({ email, password: hashedPassword });

    try {
        await newUser.save();
        res.status(201).json({ message: "User registered successfully." });
    } catch (err) {
        res.status(500).json({ message: "Error registering user.", error: err });
    }
});

// Login Route
app.post("/api/login", async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) return res.status(400).json({ message: "All fields are required." });

    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: "User not found." });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(401).json({ message: "Invalid credentials." });

    const token = jwt.sign({ id: user._id }, "secretkey", { expiresIn: "1h" });

    res.cookie("token", token, {
        httpOnly: true,
        secure: false, // Set to true in production
        sameSite: "strict",
    });

    res.json({ message: "Login successful." });
});
// Logout Route
app.post("/api/logout", (req, res) => {
    res.clearCookie("token");
    res.json({ message: "Logout successful." });
});

// Middleware for Authentication
const auth = (req, res, next) => {
    const token = req.cookies.token;
    if (!token) return res.status(401).json({ message: "Unauthorized." });

    try {
        const verified = jwt.verify(token, "secretkey");
        req.user = verified.id;
        next();
    } catch (err) {
        res.status(401).json({ message: "Invalid token." });
    }
};

// Protected Route
app.get("/api/protected", auth, (req, res) => {
    res.json({ message: "You have accessed a protected route.", userId: req.user });
});

// Start the Server
app.listen(5900, () => {
    console.log("Server running on 5900");
});