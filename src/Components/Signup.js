import React, { useState } from 'react';
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";

const Signup = () => {
  const [user, setUser] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  async function implementSignup(e) {
    e.preventDefault();

    if (!user.email || !user.password) {
      setError("All fields are required");
      setSuccess("");
      return;
    }
    try {
      let response = await axios.post("https://dummyjson.com/auth/login", { username: user.email, password: user.password });
      console.log(response.data);
      console.log(response.data.email);
      localStorage.setItem("user", JSON.stringify(response.data));
      setSuccess("Succesfullyloggedin");
      navigate("/login");
    } catch (e) {
      setError(e.message);
    }
  }

  return (
    <div className="signup">
      <div className="userinfo">
        <div>
          <p>Welcome back! 👋 </p>
          <h3>Sign in to your account</h3>
        </div>
        <label>Your email</label><br />
        <input type="text" placeholder="Enter email" onChange={(e) => setUser({ ...user, email: e.target.value })} />
        <label>Your password</label><br />

        <input type="password" placeholder="Enter password" onChange={(e) => setUser({ ...user, password: e.target.value })} />
        <button onClick={implementSignup}>Sign up</button>

      </div>
      <div className="userMessage">
        <p>Don't have an account?<a href="#">Signup</a></p>
        {error ? <p>{error}</p> : <p>{success}</p>}

      </div>

    </div>
  );
};

export default Signup;