import "./index.css";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home/Home"
import SiteLayout from "./component/Layouts/SiteLayout/SiteLayout";


function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Routes>

        <Route path='/' element={<SiteLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<Home />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
