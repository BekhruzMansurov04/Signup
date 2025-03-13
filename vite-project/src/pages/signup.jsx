import React from "react";

function Signup() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-center mb-4">
          Welcome, <span className="text-blue-600">Sign up</span>
        </h1>
        <p className="text-center text-gray-600 mb-6">
          It is our great pleasure to have you on board!
        </p>
        <form>
          <div className="mb-4">
            <input
              type="email"
              placeholder="Enter your Email"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2"
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Create your Login"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2"
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              placeholder="Create your Password"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
          >
            Sign up
          </button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
