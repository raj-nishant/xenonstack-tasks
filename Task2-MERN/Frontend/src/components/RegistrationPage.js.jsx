import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const RegistrationPage = () => {
  const [registrationData, setRegistrationData] = useState({
    username: "",
    password: "",
  });

  const handleRegistrationChange = (e) => {
    const { name, value } = e.target;

    setRegistrationData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleRegistrationSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://xenon6565.onrender.com/api/register",
        registrationData
      );
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
    setRegistrationData({
      username: "",
      password: "",
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-md">
        <h1 className="text-2xl mb-4 font-bold">Registration Form</h1>
        <form onSubmit={handleRegistrationSubmit}>
          <div className="mb-4">
            <input
              className="border p-2 w-full"
              type="text"
              name="username"
              placeholder="Username"
              value={registrationData.username}
              onChange={handleRegistrationChange}
              required
            />
          </div>

          <div className="mb-4">
            <input
              className="border p-2 w-full"
              type="password"
              name="password"
              placeholder="Password"
              value={registrationData.password}
              onChange={handleRegistrationChange}
              required
            />
          </div>

          <button
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
            type="submit"
          >
            Register
          </button>

          <p className="mt-4">
            Already registered?{" "}
            <Link to="/login" className="text-blue-500">
              Login Here
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default RegistrationPage;
