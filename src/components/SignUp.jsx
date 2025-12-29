import React, { useState } from "react";
import loginPageImg from "../assets/download .jfif";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleSignUp = async () => {
    try {
      const response = await fetch(
        "https://employee-react.onrender.com/emp/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            password,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Signup failed");
      }

      const data = await response.json();
      console.log(data, "THIS IS FROM BACKEND");
      return data;
    } catch (error) {
      console.error("Signup error:", error.message);
    }
  };

  return (
    <>
      <div className="flex  justify-center items-center h-screen bg-white">
        <div className="flext  w-220 h-120 shadow-black/30 shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 h-100">
            <div className="flex items-center justify-center bg-gray-100">
              <img
                src={loginPageImg}
                alt="Login"
                className="w-full h-120 object-fill"
              />
            </div>

            <div className="flex flex-col  items-center justify-center bg-white">
              <h1 className="pb-5 pr-70 text-amber-300  text-3xl font-bold ">
                Signup
              </h1>
              <form className="w-full max-w-sm space-y-4">
                <div>
                  <label className="block text-sm font-medium">Name</label>
                  <input
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    type="text"
                    className="w-full border border-amber-300  p-2 rounded"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium">Email</label>
                  <input
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    type="email"
                    className="w-full border border-amber-300  p-2 rounded"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium">Password</label>
                  <input
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    type="password"
                    className="w-full border border-amber-300  p-2 rounded"
                  />
                </div>

                <p className="text-sm text-gray-400">
                  Already have an account?{" "}
                  <Link
                    to="/login"
                    className="text-amber-300 hover:text-amber-400 font-medium"
                  >
                    Log in
                  </Link>
                </p>
                <button
                  onClick={handleSignUp}
                  className="w-full border-2 border-yellow-300 text-black py-2 rounded hover:bg-yellow-300 hover:text-amber-50"
                >
                  Signup
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
