// import React, { useState } from "react";

// const TextFields = ({
//   htmlCode,
//   cssCode,
//   jsCode,
//   setHtmlCode,
//   setCssCode,
//   setJsCode,
// }) => {
//   const [expandedField, setExpandedField] = useState(null);

//   const handleExpandField = (field) => {
//     setExpandedField(field);
//   };

//   const handleShrinkFields = () => {
//     setExpandedField(null);
//   };

//   return (
//     <div className="grid grid-cols-3 gap-4" style={{ width: "100%" }}>
//       <div style={{ width: expandedField === "html" ? "100%" : "5%" }}>
//         <h2 className="text-xl font-semibold mb-2 flex items-center justify-between">
//           HTML
//           <button
//             className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600"
//             onClick={() => handleExpandField("html")}
//           >
//             Expand
//           </button>
//         </h2>
//         <textarea
//           className="w-full h-48 p-2 border border-gray-300 rounded"
//           value={htmlCode}
//           onChange={(e) => setHtmlCode(e.target.value)}
//         ></textarea>
//       </div>
//       <div style={{ width: expandedField === "css" ? "100%" : "5%" }}>
//         <h2 className="text-xl font-semibold mb-2 flex items-center justify-between">
//           CSS
//           <button
//             className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600"
//             onClick={() => handleExpandField("css")}
//           >
//             Expand
//           </button>
//         </h2>
//         <textarea
//           className="w-full h-48 p-2 border border-gray-300 rounded"
//           value={cssCode}
//           onChange={(e) => setCssCode(e.target.value)}
//         ></textarea>
//       </div>
//       <div style={{ width: expandedField === "js" ? "100%" : "5%" }}>
//         <h2 className="text-xl font-semibold mb-2 flex items-center justify-between">
//           JS
//           <button
//             className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600"
//             onClick={() => handleExpandField("js")}
//           >
//             Expand
//           </button>
//         </h2>
//         <textarea
//           className="w-full h-48 p-2 border border-gray-300 rounded"
//           value={jsCode}
//           onChange={(e) => setJsCode(e.target.value)}
//         ></textarea>
//       </div>
//       {expandedField && (
//         <div className="col-span-3">
//           <button
//             className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
//             onClick={handleShrinkFields}
//           >
//             Shrink All
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default TextFields;
