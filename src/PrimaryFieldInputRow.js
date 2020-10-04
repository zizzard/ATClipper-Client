import React from "react";

import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

export default function PrimaryFieldInputRow({
  fieldName,
  fieldId,
  column,
  setColumn,
  lastColumn,
}) {
  let column_options = [];
  for (let i = 1; i <= lastColumn; i++) {
    let option = "Column " + i;
    column_options.push(option);
  }

  return (
    <div className="flex-row">
      <label className="form-label" htmlFor={fieldId}>
        {fieldName}:
      </label>
      <Dropdown
        options={column_options}
        onChange={(event) => setColumn(event.value)}
        value={column}
        id={fieldId}
      />
    </div>
  );
}
