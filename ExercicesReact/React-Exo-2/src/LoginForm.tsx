<<<<<<< HEAD
import React from 'react'

function LoginForm() {
  return (
    <div>
      
    </div>
  )
}

export default LoginForm
=======
import React from "react";
import { useState } from "react";

function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (username === "") {
      setError("Username Required !");
    } else if (password === "") {
      setError("Password Required !");
    } else if (password.length < 6) {
      setError("Password must be 6 characters minimum");
    } else {
      setError("");
      alert("Login Successful !");
    }
  };

  const handleReset = () => {
    setUsername("")
    setPassword("")
    setError("")
    setShowPassword(false)
  }

  return (
    <div>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="username"
        />
        <input
          type={showPassword ? "text" : "password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="password"
        />
        <button onClick={() => setShowPassword((prev) => !prev)}>
          {showPassword ? "Hide" : "Show"}
        </button>
        <button onClick={handleLogin}>Login</button>
        <button onClick={handleReset}>Reset</button>
        <p style={{color: "red"}}>{error}</p>
    </div>
  );
}

export default LoginForm;
>>>>>>> 19727b7895089f7d20819068c33dfb3b4de7bcf9
