import React, { useState } from "react";
import FileInputRow from "./FileInputRow";
import DateInputRow from "./DateInputRow";
import JurisdictionInputRow from "./JurisdictionInputRow";
import PrimaryFieldInputRow from "./PrimaryFieldInputRow";
import TimeframeInput from "./TimeframeInput";

export default function DatabaseQuery({ jurisdiction_list }) {

  const [file, setFile] = useState();
  const [jurisdiction, setJurisdiction] = useState(jurisdiction_list[0]);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  return (
    <div className="flex-center">
      <h3>Database Query</h3>
      <hr className="small-hr" />
      <FileInputRow setFile={setFile} />
      <JurisdictionInputRow
        jurisdiction={jurisdiction}
        setJurisdiction={setJurisdiction}
        jurisdiction_list={jurisdiction_list}
      />
      <TimeframeInput startDate={startDate} endDate={endDate} setStartDate={setStartDate} setEndDate={setEndDate} />
      <div className="button">
          <div className="button-link">Search</div>
      </div>
    </div>
  );
}
