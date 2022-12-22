import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { publicRoutes } from "./router";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {publicRoutes.map((item, idx) => {
            return (
              <Route path={item.path} element={item.component} key={idx} />
            );
          })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
