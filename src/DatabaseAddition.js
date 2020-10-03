import React, { useState } from "react";
import FileInputRow from "./FileInputRow";
import DateInputRow from "./DateInputRow";
import JurisdictionInputRow from "./JurisdictionInputRow";
import PrimaryFieldInputRow from "./PrimaryFieldInputRow";

export default function DatabaseAddition({ jurisdiction_list }) {
  const [jurisdiction, setJurisdiction] = useState(jurisdiction_list[0]);
  const [file, setFile] = useState();
  const [date, setDate] = useState(new Date());

  const [lastColumn, setLastColumn] = useState(0);

  const [barNumber, setBarNumber] = useState("Column 0");
  const [firstName, setFirstName] = useState("Column 0");
  const [lastName, setLastName] = useState("Column 0");
  const [phoneNumber, setPhoneNumber] = useState("Column 0");
  const [email, setEmail] = useState("Column 0");

  const [validInput, setValidInput] = useState(false);

  function next() {
    console.log(jurisdiction);
    console.log(file);
    console.log(date);

    if (file === undefined) {
      console.log("Missing file");
      return;
    }

    //TODO: Parse file here
    setLastColumn(20);

    setValidInput(true);
  }

  function submit() {
    console.table([barNumber, firstName, lastName, phoneNumber, email]);
  }

  return (
    <div className="flex-center">
      <h3>Database Addition</h3>
      <hr className="small-hr" />

      <FileInputRow setFile={setFile} />
      <JurisdictionInputRow
        jurisdiction={jurisdiction}
        setJurisdiction={setJurisdiction}
        jurisdiction_list={jurisdiction_list}
      />
      <DateInputRow date={date} setDate={setDate} />

      {!validInput ? (
        <div className="button" onClick={next}>
          <div className="button-link">Next</div>
        </div>
      ) : (
        <div>
          <hr className="small-hr" />
          <PrimaryFieldInputRow
            fieldName={"Bar Number"}
            fieldId={1}
            column={barNumber}
            setColumn={setBarNumber}
            lastColumn={lastColumn}
          />
          <PrimaryFieldInputRow
            fieldName={"First Name"}
            fieldId={2}
            column={firstName}
            setColumn={setFirstName}
            lastColumn={lastColumn}
          />
          <PrimaryFieldInputRow
            fieldName={"Last Name"}
            fieldId={3}
            column={lastName}
            setColumn={setLastName}
            lastColumn={lastColumn}
          />
          <PrimaryFieldInputRow
            fieldName={"Phone Number"}
            fieldId={4}
            column={phoneNumber}
            setColumn={setPhoneNumber}
            lastColumn={lastColumn}
          />
          <PrimaryFieldInputRow
            fieldName={"Email"}
            fieldId={5}
            column={email}
            setColumn={setEmail}
            lastColumn={lastColumn}
          />
          <div className="button" onClick={submit}>
            <div className="button-link">Process</div>
          </div>
        </div>
      )}
    </div>
  );
}
