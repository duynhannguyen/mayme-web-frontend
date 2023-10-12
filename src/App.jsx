import "./index.css";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SiteLayout from "./component/Layouts/SiteLayout/SiteLayout"
import HomePage from "./pages/HomePage/HomePage";
import SectionHero from"./pages/SectionHero/SectionHero";
import Page3 from"./pages/Page3/Page3";
import Page2 from"./pages/Page2/Page2";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
    <Routes>
      <Route path='/' element={<SiteLayout />}/>
      <Route path='/sectionhero' element={<SectionHero />} />
      <Route path='/page3' element={<Page3 />} />
      <Route path='/page2' element={<Page2 />} />
      
    </Routes>
  </Router>
  );
}

export default App;
