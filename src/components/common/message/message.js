import React from "react";
import PropTypes from 'prop-types'

import "./style/message.scss";
import Spinner from "../Spinner";

const Message = ({ show, text}) => (
  <div className={`conatainerMessage`}>
    {show ? text : <Spinner size={100} />}
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
