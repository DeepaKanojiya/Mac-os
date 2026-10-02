import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import MacWindows from "./MacWindows";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atelierDuneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import "./note.scss";

function Note({ windowName,  setWindowState }) {
  const [markdown, setMarkdown] = useState("");

  useEffect(() => {
    fetch("/note.txt")
      .then((res) => {
        if (!res.ok) {
          throw new Error("File not found");
        }
        return res.text();
      })
      .then((text) => setMarkdown(text))
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <MacWindows windowName={windowName} setWindowState={setWindowState}>
      <div className="note-window">
        {markdown ? (
          <SyntaxHighlighter langauge="typescript" style={atelierDuneDark}>
            {markdown}
          </SyntaxHighlighter>
        ) : (
          <p>Loading.......</p>
        )}
      </div>
    </MacWindows>
  );
}

export default Note;
