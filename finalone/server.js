const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const Studentdetails = require('./database'); // your schema file

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(cors());

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI, {})
  .then(() => console.log('MongoDB connected...'))
  .catch(err => console.error('MongoDB connection error:', err));

// Routes
app.get('/', (req, res) => {
  res.send('hello world');
});

app.post("/api/users", async (req, res) => {
  try {
    const { personal, ratings, vegSelections, nonVegSelections, submittedAt } = req.body;

    const feedback = new Studentdetails({
    //   roll_no: personal.rollNo,
      name: personal.name,
      semester: personal.semester,
      department: personal.department,
      hostel: personal.hostel,
      food_preference: personal.foodPreference,
      ratings: ratings,
      veg_menu: vegSelections,
      nonveg_menu: nonVegSelections,
      createdAt: submittedAt || new Date()
    });
    await feedback.save();
    res.status(200).json({ message: "User data received and saved successfully!" });

  } catch (error) {
    console.error("Error saving user:", error);
    res.status(500).json({ message: "Server error.", error: error.message });
  }
});

// Start server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
