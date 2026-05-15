import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import App from "./Activities/Activity 1/App";
import Act2 from "./Activities/Activity 2/Act2";
import Act3 from "./Activities/Activity 3/Act3";
import Act4 from "./Activities/Activity 4/Act4";

export default function App() {
  return (
    <Router>
      <Routes>
      
        <Route path="/act1" element={<App />} />
        <Route path="/act2" element={<Act2 />} />
        <Route path="/act3" element={<Act3 />} />
        <Route path="/act4" element={<Act4 />} />
       

      
      </Routes>
    </Router>
  );
}