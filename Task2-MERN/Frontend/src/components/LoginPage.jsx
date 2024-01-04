import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const LoginPage = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  //submit function
  const handleLoginSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:8000/login",
        loginData
      );
      const { success, message } = response.data;

      if (success) {
        setSuccessMessage("Login successful!");
        setErrorMessage(""); // Clear any previous error messages
        console.log("Login Successfully");

        // Redirect to the homepage after a successful login
        navigate("/");
      } else {
        setSuccessMessage(""); // Clear any previous success messages
        setErrorMessage(message);
        console.log(message);
      }
    } catch (error) {
      setSuccessMessage(""); // Clear any previous success messages
      setErrorMessage("Login error. Please try again.");
      console.error("Login error", error);
    }
    setLoginData({
      username: "",
      password: "",
    });
  };

  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-md">
        <h1 className="text-2xl mb-4 font-bold">Login Page</h1>
        {successMessage && (
          <div className="text-green-500 mb-4">{successMessage}</div>
        )}
        {errorMessage && (
          <div className="text-red-500 mb-4">{errorMessage}</div>
        )}
        <form onSubmit={handleLoginSubmit}>
          <div className="mb-4">
            <input
              className="border p-2 w-full"
              type="text"
              name="username"
              placeholder="Username"
              value={loginData.username}
              onChange={handleLoginChange}
              required
            />
          </div>

          <div className="mb-4">
            <input
              className="border p-2 w-full"
              type="password"
              name="password"
              placeholder="Password"
              value={loginData.password}
              onChange={handleLoginChange}
              required
            />
          </div>

          <button
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
            type="submit"
          >
            Login
          </button>

          <p className="mt-4">
            Not registered yet?{" "}
            <Link to="/register" className="text-blue-500">
              Register Here
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
