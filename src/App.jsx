import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
// import LoginPage from "./auth/LoginPage";
// import RegisterPage from "./auth/RegisterPage";
import TextEditor from "./components/TextEditor";
import Dashboard from "./components/Dashboard";

const App = () => {
  // const [isLoggedIn, setLoggedIn] = useState(false);

  // const handleLogin = () => {
  //   setLoggedIn(true);
  // };

  // const handleLogout = () => {
  //   setLoggedIn(false);
  // };

  return (
    <Router>
      <Routes>
        {/* <Route
          path="/login"
          element={
            isLoggedIn ? (
              <Navigate to="/home" />
            ) : (
              <LoginPage onLogin={handleLogin} />
            )
          }
        />

        <Route
          path="/register"
          element={
            isLoggedIn ? (
              <Navigate to="/home" />
            ) : (
              <RegisterPage onRegister={handleLogin} />
            )
          }
        />

        <Route
          path="/home"
          element={
            isLoggedIn ? (
              <TextEditor onLogout={handleLogout} />
            ) : (
              <Navigate to="/login" />
            )
          }
        /> */}
        {/* <Route path="/" element={<Navigate to="/dashboard" />} /> */}
        {/* <Route path="/dashboard" element={<Dashboard />} /> */}
        {/* <Route path="/" element={<Dashboard />} /> */}

        {/* <Route path="/" element={<Navigate to="/home" />} /> */}
        {/* <Route path="/home" element={<TextEditor />} /> */}
        <Route path="/" element={<TextEditor />} />
      </Routes>
    </Router>
  );
};

export default App;

// App.jsx
// import React from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Navbar from "./Navbar";
// import TextEditor from "./TextEditor";
// import ProjectList from "./ProjectList";
// import Project from "./Project";

// const App = () => {
//   return (
//     <Router>
//       <div>
//         <Navbar />
//         <div className="container">
//           <Routes>
//             <Route path="/" element={<TextEditor />} />
//             <Route path="/projects" element={<ProjectList />} />
//             <Route path="/project/:id" element={<Project />} />
//           </Routes>
//         </div>
//       </div>
//     </Router>
//   );
// };

// export default App;
