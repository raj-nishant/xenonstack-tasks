import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const LoginPage = () => {
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });

  //submit function
  const handleLoginSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://xenon6565.onrender.com/login",
        loginData
      );
      const { success, message } = response.data;

      if (success) {
        console.log("Login Successfully");
      } else {
        console.log(message);
      }
    } catch (error) {
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
            <Link to="/registration" className="text-blue-500">
              Register Here
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
