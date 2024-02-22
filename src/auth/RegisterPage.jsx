import React, { useState } from "react";
import { Link } from "react-router-dom";

const RegisterPage = ({ onRegister }) => {
  const [userInfo, setUserInfo] = useState({
    username: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  const handleRegister = (e) => {
    e.preventDefault();
    // Implement registration logic here (e.g., send user info to a server)
    // For simplicity, let's assume registration is successful without actual validation
    onRegister();
  };

  return (
    <div className="container mx-auto p-4">
      <div className="w-full md:w-1/3 bg-white p-8 rounded shadow-md mx-auto mt-16">
        <h2 className="text-2xl font-bold mb-8 text-center">Register</h2>
        <form onSubmit={handleRegister}>
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-600"
            >
              Username:
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={userInfo.username}
              onChange={handleInputChange}
              className="mt-1 p-2 w-full border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-600"
            >
              Password:
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={userInfo.password}
              onChange={handleInputChange}
              className="mt-1 p-2 w-full border rounded"
              required
            />
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
            >
              Register
            </button>
          </div>
        </form>
        <p className="mt-4 text-center">
          Already have an account?{" "}
          <Link to="/login" className="text-indigo-600 hover:underline">
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
