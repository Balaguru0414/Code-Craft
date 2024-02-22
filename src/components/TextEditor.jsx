import React, { useState, useEffect } from "react";
import { Resizable } from "re-resizable";
import Editor from "./Editor";
import useLocalStorage from "../hooks/useLocalStorage";
import Navbar from "./NavBar";
import Preview from "./Preview";

function TextEditor() {
  const [html, setHtml] = useLocalStorage("html", "");
  const [css, setCss] = useLocalStorage("css", "");
  const [js, setJs] = useLocalStorage("js", "");
  const [srcDoc, setSrcDoc] = useState("");

  const handleRunCode = () => {
    setSrcDoc(`
    <!doctype html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Preview</title>
        <style>${css}</style>
      </head>
      <body>${html}
        <script>${js}</script>
      </body>
    </html>
      `);
  };

  return (
    <>
      <Navbar handleRunCode={handleRunCode} srcDoc={srcDoc} />
      <div
        className="lg:flex h-[50vh] resize-y max-h-[90vh] border-b-[12px] 
      border-b-[#333]  bg-[#111] overflow-auto text-fields"
      >
        <Editor
          language="xml"
          displayName="HTML"
          value={html}
          onChange={setHtml}
        />
        <Editor
          language="css"
          displayName="CSS"
          value={css}
          onChange={setCss}
        />
        <Editor
          language="javascript"
          displayName="JS"
          value={js}
          onChange={setJs}
        />
      </div>
      {/* <div className="lg:flex border h-[50vh]">
        <iframe
          srcDoc={srcDoc}
          title="output"
          sandbox="allow-modals allow-scripts"
          frameBorder="0"
          width="100%"
          height="100%"
        />
      </div> */}
      <Preview srcDoc={srcDoc} />
    </>
  );
}

export default TextEditor;
