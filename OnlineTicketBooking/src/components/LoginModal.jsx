import React, { useState } from "react";
import "../styles/LoginModal.css"; 

export default function LoginModal({ isOpen, onClose }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  if (!isOpen) return null; // Hide modal if not open

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Please fill in all fields.");
      return;
    }
    // Simulate login request (replace with API call)
    console.log("Logging in with:", { email, password });
    setError("");
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-box">
        <h2 className="modal-title">Login</h2>

        {error && <p className="error-message">{error}</p>}

        <form onSubmit={handleSubmit}>
          <input 
            type="email" 
            placeholder="Email" 
            className="modal-input" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <div className="password-container">
            <input 
              type={showPassword ? "text" : "password"} 
              placeholder="Password" 
              className="modal-input" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <span 
              className="toggle-password" 
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "🙈" : "👁️"}
            </span>
          </div>

          <div className="modal-links">
            <a href="/forgot-password" className="forgot-password">Forgot Password?</a>
            <a href="/register" className="register-link">Sign Up</a>
          </div>

          <div className="modal-buttons">
            <button type="button" onClick={onClose} className="modal-link">Close</button>
            <button type="submit" className="modal-link">Login</button>
          </div>
        </form>
        <div calss = "Navb">
        <h1>NAv bar this is</h1>
        </div>
      </div>
    </div>
  );
}
