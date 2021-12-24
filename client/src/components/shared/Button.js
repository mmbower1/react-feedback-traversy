import React from "react";
import PropTypes from "prop-types";

const Button = ({ children, isDisabled, type, version }) => {
  return (
    <button className={`btn btn-${version}`} type={type} disabled={isDisabled}>
      {children}
    </button>
  );
};

Button.defaultProps = {
  isDisabled: false,
  type: "button",
  version: "primary",
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  isDisabled: PropTypes.bool,
  type: PropTypes.string,
  version: PropTypes.string,
};

export default Button;
