import React from "react";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
// components
import FeedbackList from "../components/FeedbackList";
import FeedbackStats from "../components/FeedbackStats";
import FeedbackForm from "../components/FeedbackForm";
// utils
import FeedbackData from "../utils/FeedbackData";

const HomePage = () => {
  const [feedback, setFeedback] = useState(FeedbackData);

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
  };

  const deleteFeedback = (id) => {
    if (window.confirm("Confirm delete?")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  return (
    <div>
      <FeedbackForm handleAdd={addFeedback} />
      <FeedbackStats feedback={feedback} />
      <FeedbackList handleDelete={deleteFeedback} feedback={feedback} />
    </div>
  );
};

export default HomePage;
