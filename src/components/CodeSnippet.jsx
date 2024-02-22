// CodeSnippet component
import React, { useState } from "react";

const CodeSnippet = () => {
  const [code, setCode] = useState(""); // State to store code content

  const handleCodeChange = (event) => {
    setCode(event.target.value);
  };

  return (
    <div className="p-4 lg:flex">
      <textarea
        className="w-full lg:w-1/2 h-64 border border-gray-300 rounded p-2 mb-4 lg:mr-4"
        value={code}
        onChange={handleCodeChange}
        placeholder="Write your code here..."
      />
      <div className="w-full lg:w-1/2 border border-gray-300 rounded p-4">
        {/* Real-time preview area */}
        <iframe
          className="w-full h-64"
          srcDoc={`<html><body>${code}</body></html>`}
          title="preview"
        />
      </div>
    </div>
  );
};

export default CodeSnippet;
