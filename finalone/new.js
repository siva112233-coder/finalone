const express = require("express");
const router = express.Router();
const StudentFeedback = require("./models/StudentFeedback"); // import your schema

// POST: submit student feedback
router.post("/api/users", async (req, res) => {
  try {
    const { personal, ratings, vegSelections, nonVegSelections, submittedAt } = req.body;

    // Unpack personal details into schema fields
    const feedback = new StudentFeedback({
      roll_no: personal.roll_no,
      name: personal.name,
      semester: personal.semester,
      department: personal.department,
      hostel: personal.hostel,
      food_preference: personal.food_preference,
      ratings: ratings,
      veg_menu: vegSelections,
      nonveg_menu: nonVegSelections,
      createdAt: submittedAt || new Date(),
    });

    await feedback.save();

    res.status(200).json({ message: "User data received and saved successfully!" });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error.", error: error.message });
  }
});

module.exports = router;
