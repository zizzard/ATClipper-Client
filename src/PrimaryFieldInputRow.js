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
  // let column_options = [];
  // for (let i = 1; i <= lastColumn; i++) {
  //   let option = "Column " + i;
  //   column_options.push(option);
  // }

  let column_options = [{ value: -1, label: "N/A" }];
  for (let i = 0; i < lastColumn; i++) {
    let obj = {
      label: "Column " + i,
      value: i,
    };
    column_options.push(obj);
  }

  return (
    <div className="flex-row">
      <label className="form-label" htmlFor={fieldId}>
        {fieldName}:
      </label>
      <Dropdown
        options={column_options}
        onChange={(event) => setColumn(event)}
        value={column.label}
        id={fieldId}
      />
    </div>
  );
}
