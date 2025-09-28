import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    userType: "student",
  });

  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setError(""); // Clear any previous error when user makes changes
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(""); // Clear any previous error

    // Basic validation
    if (!formData.username || !formData.password) {
      setError("Please fill in all fields");
      return;
    }

    // In a real application, you would validate credentials against a backend
    // For now, we'll just simulate a successful login
    console.log("Form submitted:", formData);

    // Navigate based on user type
    switch (formData.userType) {
      case "student":
        navigate("/student");
        break;
      case "faculty":
        navigate("/faculty");
        break;
      case "admin":
        navigate("/admin");
        break;
      default:
        setError("Invalid user type");
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <h1>Login</h1>

        {error && <div className="error-message">{error}</div>}

        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="userType">User Type:</label>
          <select
            id="userType"
            name="userType"
            value={formData.userType}
            onChange={handleInputChange}
          >
            <option value="student">Student</option>
            <option value="faculty">Faculty</option>
            <option value="admin">Admin</option>
          </select>
        </div>

        <button type="submit" className="login-button">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
