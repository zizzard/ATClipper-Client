import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function LinkButton(props) {
  function handleClick() {
    console.log("Click");
  }

  return (
    <div className="button">
      <Link className="button-link" to={props.link}>
        {props.text}
      </Link>
    </div>
  );
}
