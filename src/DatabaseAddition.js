import React, { useState } from "react";
import FileInputRow from "./FileInputRow";
import DateInputRow from "./DateInputRow";
import JurisdictionInputRow from "./JurisdictionInputRow";
import PrimaryFieldInputRow from "./PrimaryFieldInputRow";

import Table from "./Table";

import XLSX from "xlsx";

export default function DatabaseAddition({ jurisdiction_list }) {
  const [jurisdiction, setJurisdiction] = useState(jurisdiction_list[0]);
  const [file, setFile] = useState();
  const [date, setDate] = useState(new Date());

  const [lastColumn, setLastColumn] = useState(0);

  let primary_default = { value: -2, label: "Select..." };
  const [barNumber, setBarNumber] = useState(primary_default);
  const [firstName, setFirstName] = useState(primary_default);
  const [lastName, setLastName] = useState(primary_default);
  const [phoneNumber, setPhoneNumber] = useState(primary_default);
  const [email, setEmail] = useState(primary_default);

  const [tableData, setTableData] = useState();

  const [validInput, setValidInput] = useState(false);

  function next() {
    if (file === undefined) {
      console.log("Missing file");
      return;
    }

    parseFile(file).then((result) => {
      console.log(result);
      setLastColumn(result[0].length);
      setTableData(result);
      setValidInput(true);
    });
  }

  function parseFile(file) {
    return new Promise(function (resolve, reject) {
      let name_arr = file.name.split(".");
      let file_type = name_arr[name_arr.length - 1];
      if (file_type === "xlsx" || file_type === "xls" || file_type === "csv") {
        reader(file).then((result) => {
          resolve(result);
        });
      } else {
        reject("bad_file_type");
      }
    });
  }

  function reader(file) {
    return new Promise(function (resolve, reject) {
      const reader = new FileReader();
      const rABS = !!reader.readAsBinaryString;
      if (rABS) reader.readAsBinaryString(file);
      else reader.readAsArrayBuffer(file);

      reader.onload = ({ target: { result } }) => {
        const wb = XLSX.read(result, { type: rABS ? "binary" : "array" });
        const wsname = wb.SheetNames[0];
        const ws = wb.Sheets[wsname];
        const data = XLSX.utils.sheet_to_json(ws, { header: 1, defval: "" });
        resolve(data);
      };
    });
  }

  function submit() {
    let _bar_number = barNumber.value;
    let _first_name = firstName.value;
    let _last_name = lastName.value;
    let _phone_number = phoneNumber.value;
    let _email = email.value;

    let valid = true;

    if (_bar_number === -2) {
      valid = false;
    }

    if (_first_name === -2) {
      valid = false;
    }

    if (_last_name === -2) {
      valid = false;
    }

    if (_phone_number === -2) {
      valid = false;
    }

    if (_email === -2) {
      valid = false;
    }

    if (!valid) {
      console.log("Missing primary field mapping");
      return;
    }
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
          {tableData !== undefined ? (
            <Table data={tableData} />
          ) : (
            <div>BADTABLEDATA</div>
          )}
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
