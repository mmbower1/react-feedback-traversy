import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import PropTypes from "prop-types";
// components
import Card from "./shared/Card";

function FeedbackItem({ handleDelete, item }) {
  return (
    <Card>
      <div className="num-display">{item.rating}</div>
      <button className="close" onClick={() => handleDelete(item.id)}>
        <FaTimes color="purple" />
      </button>
      <div className="text-display">{item.text}</div>
      <button onClick={handleDelete}>Send It</button>
    </Card>
  );
}

FeedbackItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default FeedbackItem;
