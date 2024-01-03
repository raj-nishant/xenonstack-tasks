const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const contactRoutes = require("./routes/contactRoutes");
const authRoutes = require("./routes/authRoutes");

const app = express();
const PORT = 5000;

// Use CORS middleware
app.use(cors());

// Body parser middleware
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect(
  "mongodb+srv://nishantwork11:QlcWdJQ7Fj4XCt5h@cluster0.fbxksaw.mongodb.net/test", // Use your actual MongoDB connection string
  { useNewUrlParser: true, useUnifiedTopology: true }
);

// Routes
app.use("/api/contact", contactRoutes);
app.use("/api/auth", authRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
