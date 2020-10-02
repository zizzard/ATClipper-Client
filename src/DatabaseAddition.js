import React, { useState } from "react";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

export default function DatabaseAddition(props) {
  const jurisdiction_list = [
    "AL",
    "AK",
    "AS",
    "AZ",
    "AR",
    "CA",
    "CO",
    "CT",
    "DE",
    "DC",
    "FM",
    "FL",
    "GA",
    "GU",
    "HI",
    "ID",
    "IL",
    "IN",
    "IA",
    "KS",
    "KY",
    "LA",
    "ME",
    "MH",
    "MD",
    "MA",
    "MI",
    "MN",
    "MS",
    "MO",
    "MT",
    "NE",
    "NV",
    "NH",
    "NJ",
    "NM",
    "NY",
    "NC",
    "ND",
    "MP",
    "OH",
    "OK",
    "OR",
    "PW",
    "PA",
    "PR",
    "RI",
    "SC",
    "SD",
    "TN",
    "TX",
    "UT",
    "VT",
    "VI",
    "VA",
    "WA",
    "WV",
    "WI",
    "WY",
  ];
  const [jurisdiction, setJurisdiction] = useState(jurisdiction_list[0]);

  return (
    <div className="flex-center">
      <h3>Database Addition</h3>
      <hr className="small-hr" />
      <Dropdown
        options={jurisdiction_list}
        onChange={(event) => setJurisdiction(event.value)}
        value={jurisdiction_list[0]}
      />
    </div>
  );
}
