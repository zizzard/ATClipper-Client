import React from "react";

export default function FileInputRow({ setFile }) {
  return (
    <div className="flex-row">
      <label className="form-label" htmlFor="file">
        Input (Excel or .csv file):
      </label>
      <input
        id="file"
        type="file"
        onChange={(event) => setFile(event.target.files[0])}
      />
    </div>
  );
}
