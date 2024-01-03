const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = 5000;

// Use CORS middleware
app.use(cors());

// Body parser middleware
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect(
  "mongodb+srv://nishantwork11:QlcWdJQ7Fj4XCt5h@cluster0.fbxksaw.mongodb.net/?retryWrites=true&w=majority"
);

// Define a MongoDB schema and model for the contact form data
const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
});

const Contact = mongoose.model("Contact", contactSchema);

// API endpoint to handle contact form submissions
app.post("/api/contact", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Save the form data to MongoDB
    const newContact = new Contact({ name, email, message });
    await newContact.save();

    // Respond with a success message or any necessary data
    res
      .status(200)
      .json({ success: true, message: "Contact form submitted successfully!" });
  } catch (error) {
    console.error("Error handling contact form submission:", error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
