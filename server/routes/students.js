const express = require("express");
const router = express.Router();

// GET /api/students - Get all students (admin only)
router.get("/", async (req, res) => {
  try {
    // TODO: Implement proper authorization middleware
    // Mock student data
    const students = [
      {
        id: 1,
        name: "John Doe",
        email: "john@example.com",
        studentId: "STU001",
        grade: "A",
        course: "Computer Science",
      },
      {
        id: 2,
        name: "Jane Smith",
        email: "jane@example.com",
        studentId: "STU002",
        grade: "B+",
        course: "Mathematics",
      },
    ];

    res.json({
      message: "Students retrieved successfully",
      data: students,
    });
  } catch (error) {
    console.error("Get students error:", error);
    res.status(500).json({
      message: "Internal server error",
    });
  }
});

// GET /api/students/:id - Get student by ID
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    // Mock student data - in real app, fetch from database
    const student = {
      id: parseInt(id),
      name: "John Doe",
      email: "john@example.com",
      studentId: "STU001",
      grade: "A",
      course: "Computer Science",
      enrollmentDate: "2024-01-15",
      exams: [
        { subject: "Mathematics", score: 95, date: "2024-03-15" },
        { subject: "Physics", score: 88, date: "2024-03-20" },
      ],
    };

    res.json({
      message: "Student retrieved successfully",
      data: student,
    });
  } catch (error) {
    console.error("Get student error:", error);
    res.status(500).json({
      message: "Internal server error",
    });
  }
});

// POST /api/students - Create new student
router.post("/", async (req, res) => {
  try {
    const { name, email, course } = req.body;

    // Basic validation
    if (!name || !email || !course) {
      return res.status(400).json({
        message: "Name, email, and course are required",
      });
    }

    // TODO: Save to database
    const newStudent = {
      id: Date.now(),
      name,
      email,
      course,
      studentId: `STU${String(Date.now()).slice(-3)}`,
      enrollmentDate: new Date().toISOString().split("T")[0],
    };

    res.status(201).json({
      message: "Student created successfully",
      data: newStudent,
    });
  } catch (error) {
    console.error("Create student error:", error);
    res.status(500).json({
      message: "Internal server error",
    });
  }
});

// PUT /api/students/:id - Update student
router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email, course, grade } = req.body;

    // TODO: Update in database
    const updatedStudent = {
      id: parseInt(id),
      name,
      email,
      course,
      grade,
      lastModified: new Date().toISOString(),
    };

    res.json({
      message: "Student updated successfully",
      data: updatedStudent,
    });
  } catch (error) {
    console.error("Update student error:", error);
    res.status(500).json({
      message: "Internal server error",
    });
  }
});

// DELETE /api/students/:id - Delete student
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    // TODO: Delete from database

    res.json({
      message: `Student with ID ${id} deleted successfully`,
    });
  } catch (error) {
    console.error("Delete student error:", error);
    res.status(500).json({
      message: "Internal server error",
    });
  }
});

module.exports = router;
