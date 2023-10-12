import "./index.css";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SiteLayout from "./component/Layouts/SiteLayout/SiteLayout"
import HomePage from "./pages/HomePage/HomePage";
import SectionHero from"./pages/SectionHero/SectionHero";
import Page2 from"./pages/Page2/Page2";
import Page3 from"./pages/Page3/Page3";
import Page4 from"./pages/Page4/Page4";


function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
    <Routes>
      <Route path='/test' element={<HomePage />}/>  
      <Route path='/' element={<SiteLayout />}/>
      <Route path='/sectionhero' element={<SectionHero />} />
      <Route path='/page2' element={<Page2 />} />
      <Route path='/page3' element={<Page3 />} />
      <Route path='/page4' element={<Page4 />} />
      
    </Routes>
  </Router>
  );
}

export default App;
