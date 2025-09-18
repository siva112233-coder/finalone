const mongoose = require("mongoose");


const studentSchema = new mongoose.Schema({
//   roll_no: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  semester: { type: String, required: true },
  department: { type: String, required: true },
  hostel: { type: String, required: true },
  food_preference: { type: String, required: true },
  ratings: {
    Mon: { type: Number, min: 1, max: 5 },
    Tue: { type: Number, min: 1, max: 5 },
    Wed: { type: Number, min: 1, max: 5 },
    Thu: { type: Number, min: 1, max: 5 },
    Fri: { type: Number, min: 1, max: 5 },
    Sat: { type: Number, min: 1, max: 5 },
  },

  
  veg_menu: {
    Breakfast: [{ type: String }],
    Lunch: [{ type: String }],
    Snacks: [{ type: String }],
    Dinner: [{ type: String }],
  },

  
  nonveg_menu: {
    Breakfast: [{ type: String }],
    Lunch: [{ type: String }],
    Snacks: [{ type: String }],
    Dinner: [{ type: String }],
  },


}, { timestamps: true });
module.exports = mongoose.model("StudentFeedback", studentSchema);