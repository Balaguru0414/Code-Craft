import { createContext, useState, useContext } from "react";

const CodeContext = createContext();

export const useCodeContext = () => useContext(CodeContext);

export const CodeProvider = ({ children }) => {
  const [htmlCode, setHtmlCode] = useState("");
  const [cssCode, setCssCode] = useState("");
  const [jsCode, setJsCode] = useState("");
  const [previewUrl, setPreviewUrl] = useState("");

  return (
    <CodeContext.Provider
      value={{
        htmlCode,
        setHtmlCode,
        cssCode,
        setCssCode,
        jsCode,
        setJsCode,
        previewUrl,
        setPreviewUrl,
      }}
    >
      {children}
    </CodeContext.Provider>
  );
};
