import React, { useState } from "react";
import "../styles/RegisterModal.css"; 

export default function RegisterModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  if (!isOpen) return null; // Hide modal if not open

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.password || !formData.confirmPassword) {
      setError("All fields are required.");
      return;
    }
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    // Simulate registration request (replace with API call)
    console.log("Registering:", formData);
    setError("");
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-box">
        <h2 className="modal-title">Register</h2>

        {error && <p className="error-message">{error}</p>}

        <form onSubmit={handleSubmit}>
          <input 
            type="text" 
            name="name" 
            placeholder="Full Name" 
            className="modal-input" 
            value={formData.name} 
            onChange={handleChange}
            required
          />
          <input 
            type="email" 
            name="email" 
            placeholder="Email" 
            className="modal-input" 
            value={formData.email} 
            onChange={handleChange}
            required
          />
          <div className="password-container">
            <input 
              type={showPassword ? "text" : "password"} 
              name="password" 
              placeholder="Password" 
              className="modal-input" 
              value={formData.password} 
              onChange={handleChange}
              required
            />
            <span 
              className="toggle-password" 
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "🙈" : "👁️"}
            </span>
          </div>
          <input 
            type="password" 
            name="confirmPassword" 
            placeholder="Confirm Password" 
            className="modal-input" 
            value={formData.confirmPassword} 
            onChange={handleChange}
            required
          />

          <div className="modal-buttons">
            <button type="button" onClick={onClose} className="modal-link">Close</button>
            <button type="submit" className="modal-link">Register</button>
          </div>
        </form>
      </div>
    </div>
  );
}


