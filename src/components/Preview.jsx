import React from "react";

const Preview = ({ srcDoc }) => {
  const handleOpenNewTab = () => {
    const newTab = window.open();
    newTab.document.write(srcDoc);
  };

  return (
    <div className="lg:flex border h-[88vh] relative">
      <iframe
        srcDoc={srcDoc}
        title="output"
        sandbox="allow-modals allow-scripts"
        width="100%"
        height="100%"
      />
      <button
        className="absolute bottom-0 right-0 m-4 bg-blue-500 text-white px-2 py-1 rounded"
        onClick={handleOpenNewTab}
      >
        Open in New Tab
      </button>
    </div>
  );
};

export default Preview;
