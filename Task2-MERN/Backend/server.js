const express = require("express");
const app = express();
const port = 8000;
const mongoose = require("mongoose");

const connectDB = require("./db/dbConnection");
const User = require("./db/user");
const cors = require("cors");

// Middleware for parsing JSON
app.use(express.json());

// Enable CORS
app.use(cors());

// Connect to MongoDB
connectDB();

// Define a schema for the contact form data
const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
});

// Create a Contact model based on the schema
const Contact = mongoose.model("Contact", contactSchema);

// Registration
app.post("/register", async (req, res) => {
  try {
    const { username, password } = req.body;
    console.log(req.body);
    const user = new User({ username, password });
    await user.save();
    res.status(201).json({ message: "Registration Successful" });
  } catch (error) {
    res.status(500).json({ error: "Registration failed" });
  }
});

// Login
app.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });

    if (!user) {
      return res.status(401).json({ error: "Invalid username or Password" });
    }

    if (user.password !== password) {
      return res.status(401).json({ error: "Invalid username or password" });
    }
    res.status(200).json({ message: "Login successful" });
  } catch (error) {
    res.status(500).json({ error: "Login failed" });
  }
});

// Contact form
app.post("/api/contact", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Validate data if needed

    // Save the contact form data to MongoDB
    const contact = new Contact({ name, email, message });
    await contact.save();

    // Respond with success message
    const successMessage = `Thank you, ${name}! Your message has been received.`;
    res.status(200).json({ success: true, message: successMessage });
  } catch (error) {
    console.error("Error submitting contact form:", error);
    res.status(500).json({
      success: false,
      message: "An error occurred while submitting the form. Please try again.",
    });
  }
});

app.listen(port, () => {
  console.log("Server is listening on Port 8000");
});
