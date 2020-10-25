import React from "react";

import Dropdown from "react-dropdown";
import { Multiselect } from "multiselect-react-dropdown";
import "react-dropdown/style.css";

export default function PrimaryFieldInputRow({
  fieldName,
  fieldId,
  column,
  setColumn,
  options,
}) {

  function addColumnNumber(selectedList, selectedItem) {
    console.log(selectedList, selectedItem);
  }

  function removeColumnNumber(selectedList, removedItem) {
    console.log(selectedList, removedItem);
  }

  return (
    <div className="flex-row">
      <label className="form-label" htmlFor={fieldId}>
        {fieldName}:
      </label>
      {/* <Dropdown
        options={options}
        onChange={(event) => setColumn(event)}
        value={column.label}
        id={fieldId}
      /> */}
      <Multiselect
        options={options}
        // onChange={(event) => setColumn(event)}
        onSelect={addColumnNumber}
        onRemove={removeColumnNumber}
        value={column.label}
        id={fieldId}
      />
    </div>
  );
}
