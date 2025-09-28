import express from "express";
const router = express.Router();

// POST /api/auth/login
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    console.log(email, password, "email, password");

    // Basic validation
    if (!email || !password) {
      return res.status(400).json({
        message: "Email and password are required",
      });
    }

    // TODO: Implement actual authentication logic
    // For now, return a mock response
    if (email === "student@example.com" && password === "password") {
      res.json({
        message: "Login successful",
        user: {
          id: 1,
          email: email,
          role: "student",
          name: "John Doe",
        },
        token: "mock_jwt_token_here",
      });
    } else {
      res.status(401).json({
        message: "Invalid credentials",
      });
    }
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({
      message: "Internal server error",
    });
  }
});

// POST /api/auth/register
router.post("/register", async (req, res) => {
  try {
    const { email, password, name } = req.body;

    // Basic validation
    if (!email || !password || !name) {
      return res.status(400).json({
        message: "Email, password, and name are required",
      });
    }

    // TODO: Implement user registration logic
    res.status(201).json({
      message: "User registered successfully",
      user: {
        id: Date.now(), // Mock ID
        email: email,
        name: name,
        role: "student",
      },
    });
  } catch (error) {
    console.error("Registration error:", error);
    res.status(500).json({
      message: "Internal server error",
    });
  }
});

// POST /api/auth/logout
router.post("/logout", (req, res) => {
  res.json({ message: "Logout successful" });
});

export default router;
