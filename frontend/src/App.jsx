import "@styles/App/App.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

import Main from "./pages/Main";
import AboutEvent from "./pages/AboutEvent";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/page" element={<AboutEvent />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
