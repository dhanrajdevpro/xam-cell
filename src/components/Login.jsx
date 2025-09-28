import { useState } from "react";
import { useNavigate } from "react-router-dom";
import apiService from "../services/api";

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Clear any previous error

    // Basic validation
    if (!formData.username || !formData.password) {
      setError("Please fill in all fields");
      return;
    }

    try {
      // Use the API service to authenticate
      const response = await apiService.login({
        email: formData.username, // API expects email
        password: formData.password,
      });

      console.log("Login successful:", response);

      // Store user data (in a real app, you'd use context or state management)
      localStorage.setItem('user', JSON.stringify(response.user));
      localStorage.setItem('token', response.token);

      // Navigate based on user type from API response or form selection
      const userRole = response.user?.role || formData.userType;
      switch (userRole) {
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
    } catch (error) {
      console.error("Login failed:", error);
      setError(error.message || "Login failed. Please try again.");
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
