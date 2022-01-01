import React, { useContext } from "react";
import { FaTimes, FaEdit } from "react-icons/fa";
import PropTypes from "prop-types";
// components
import Button from "./shared/Button";
import Card from "./shared/Card";
// context
import FeedbackContext from "../context/FeedbackContext";

function FeedbackItem({ item }) {
  const { editFeedback, deleteFeedback } = useContext(FeedbackContext);

  return (
    <Card>
      <div className="num-display">{item.rating}</div>
      <button className="edit" onClick={() => editFeedback(item)}>
        <FaEdit color="purple" />
      </button>
      <button className="close" onClick={() => deleteFeedback(item.id)}>
        <FaTimes color="purple" />
      </button>
      <div className="text-display">{item.text}</div>
      {/* <Button onClick={handleDelete}>Send It</Button> */}
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
