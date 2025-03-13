import React from "react";

function Login() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-center mb-4">
          Welcome, <span className="text-blue-600">Sign in</span>
        </h1>
        <p className="text-center text-gray-600 mb-6">
          Please log in to continue.
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
              type="password"
              placeholder="Enter your Password"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
