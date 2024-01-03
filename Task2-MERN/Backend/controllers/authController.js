const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.signup = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // Check if the email is already registered
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res
        .status(400)
        .json({ success: false, message: "Email already registered" });
    }

    // Hash the password before saving it to the database
    const hashedPassword = await bcrypt.hash(password, 10);

    // Save the user data to MongoDB
    const newUser = new User({ username, email, password: hashedPassword });
    await newUser.save();

    // Respond with a success message or any necessary data
    res
      .status(200)
      .json({ success: true, message: "User registered successfully!" });
  } catch (error) {
    console.error("Error handling user registration:", error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if the email is registered
    const user = await User.findOne({ email });
    if (!user) {
      return res
        .status(401)
        .json({ success: false, message: "Invalid credentials" });
    }

    // Check if the password is correct
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res
        .status(401)
        .json({ success: false, message: "Invalid credentials" });
    }

    // Create a JSON Web Token (JWT) for authentication
    const token = jwt.sign({ userId: user._id }, "your-secret-key", {
      expiresIn: "1h",
    });

    // Respond with the token
    res.status(200).json({ success: true, token });
  } catch (error) {
    console.error("Error handling user login:", error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};
