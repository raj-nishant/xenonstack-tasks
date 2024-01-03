const Contact = require("../models/contactModel");

exports.handleContactFormSubmission = async (req, res) => {
  try {
    const { name, email, message } = req.body;
    // Create a new instance of the Contact model
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
};
