const mongoose = require("mongoose");
const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://rajnishanta1:qQOtZardseMZepgs@cluster0.q5xg5dg.mongodb.net/?retryWrites=true&w=majority"
    );
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDB;
