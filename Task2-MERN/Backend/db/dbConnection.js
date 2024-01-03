const mongoose = require("mongoose");
const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://nishantwork11:QlcWdJQ7Fj4XCt5h@cluster0.fbxksaw.mongodb.net/test"
    );
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDB;
