const mongoose = require("mongoose");
const FeedbackSchema = new mongoose.Schema({
  feedback: {
    id: 1,
    rating: 10,
    text: "this is feedback item 1 coming from the backend",
  },
});

module.exports = mongoose.model("feedback", FeedbackSchema);
