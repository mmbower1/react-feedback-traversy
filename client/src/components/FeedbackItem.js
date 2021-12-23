import React, { useState } from "react";
// components
import Card from "./shared/Card";

function FeedbackItem({ item }) {
  const handleClick = () => {
    return "hello";
  };

  return (
    <Card>
      <div className="num-display">{item.rating}</div>
      <div className="text-display">{item.text}</div>
      <button onClick={handleClick}>Send It</button>
    </Card>
  );
}

export default FeedbackItem;
