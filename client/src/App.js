import React, { Lazy, suspense } from "react";
import { useState } from "react";
// components
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import Header from "./components/Header";

// styles
import "./App.css";
import "./scss/App.scss";

// redux
import {
  store,
  // persistor
} from "./store";
import { Provider } from "react-redux";
// utils
import FeedbackData from "./utils/FeedbackData";

function App() {
  const [feedback, setFeedback] = useState(FeedbackData);

  const deleteFeedback = (id) => {
    if (window.confirm("Confirm delete?")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  return (
    <Provider store={store}>
      <Header />
      <div className="container">
        <FeedbackStats feedback={feedback} />
        <FeedbackList handleDelete={deleteFeedback} feedback={feedback} />
      </div>
    </Provider>
  );
}

export default App;
