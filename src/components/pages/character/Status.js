import React from 'react';

// Style
import "./style/Status.scss";

export default function Status({ status }) {
  return <span className={`dot ${status}`}></span>;
}
