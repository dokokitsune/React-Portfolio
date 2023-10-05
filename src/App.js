import React from 'react';

import {
  Route,
  Routes} from 'react-router-dom';
import Navi from "./componants/navbar/Navi";
import Contact_Me from './componants/contact/Contact';
import Home from './componants/home/Home';
import About_Me from './componants/about/About'
import Projects from './componants/projects/Projects'
import Skills from './componants/skills/Skills';



function App() {

  return (
    <>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About_Me />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/contact' element={<Contact_Me />} />
        <Route path='/skills' element={<Skills />} />
      </Routes>
      <Navi />
    </>
  );
}

export default App;





