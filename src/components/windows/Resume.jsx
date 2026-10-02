import React from "react";
import MacWindows from "./MacWindows";
import "./resume.scss";

function Resume({ windowName,  setWindowState }) {
  return (
    <MacWindows  windowName={windowName} setWindowState={setWindowState}>
      <div className="resume-window">
        <embed src="./resume.pdf"></embed>
      </div>
    </MacWindows>
  );
}

export default Resume;
