import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();

  const switchHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (email.includes("@") && password.length >= 4) {
      localStorage.setItem("email", email);
      localStorage.setItem("password", password);
      navigate("/landing");
    } else if (email.length === 0 || password.length === 0) {
      alert("Enter All required Details");
    } else if (email.includes("@") === false) {
      alert("Email required @ character");
    } else if (password.length < 4) {
      alert("Password length should be more than 3 character");
    }
  };

  return (
    <div className="w-[100vw]">
      <div className="bg-blue-300 w-96 m-auto text-center p-8 mt-48">
        <label className="font-bold text-2xl">
          {isLogin ? "Login" : "Sign Up"}
        </label>
        <div>
          <div>
            <input
              className="h-10 p-2 rounded-md border border-black mt-5"
              type="text"
              placeholder="Enter Email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>
          <div>
            <input
              className="h-10 p-2 rounded-md border border-black mt-5"
              type="password"
              placeholder="Enter Password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </div>
          <button
            className="bg-cyan-700 text-white mt-4 p-3 rounded-full font-bold w-[80%] h-12"
            onClick={submitHandler}
          >
            {isLogin ? "Login" : "Sign Up"}
          </button>
        </div>
        <button
          className="bg-purple-600 text-white mt-4 p-2 rounded-full font-bold w-[80%] h-12"
          onClick={switchHandler}
        >
          {isLogin
            ? "Don't have an account? Sign up"
            : "Have an account? Login"}
        </button>
      </div>
    </div>
  );
};

export default LoginScreen;
