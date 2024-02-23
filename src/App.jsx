import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

import TextEditor from "./components/TextEditor";
import Loading from "./components/Loading";

const App = () => {
  const { isLoading, error } = useAuth0();
  return (
    <Router>
      {error && <h1>Authentication Error</h1>}
      {!error && isLoading && <Loading />}
      {!error && !isLoading && (
        <Routes>
          <Route path="/" element={<TextEditor />} />
        </Routes>
      )}
    </Router>
  );
};

export default App;
