import React from "react";
import PropTypes from 'prop-types'

import "./style/message.scss";

const Message = ({ text}) => (
  <div className={`conatainerMessage`}>
    {text}
  </div>
);

Message.propTypes = {
  show: PropTypes.bool,
  text: PropTypes.string.isRequired
};

Message.defaultProps = {
  text: ''
};

export default Message;
