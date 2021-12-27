import React from "react";
import { FaTimes } from "react-icons/fa";
import PropTypes from "prop-types";
// components
import Button from "./shared/Button";
import Card from "./shared/Card";

function FeedbackItem({ handleDelete, item }) {
  return (
    <Card>
      <div className="num-display">{item.rating}</div>
      <button className="close" onClick={() => handleDelete(item.id)}>
        <FaTimes color="purple" />
      </button>
      <div className="text-display">{item.text}</div>
      <Button onClick={handleDelete}>Send It</Button>
    </Card>
  );
}

FeedbackItem.propTypes = {
  item: PropTypes.object.isRequired,
};

Button.defaultProps = {
  version: "secondary",
};

export default FeedbackItem;
