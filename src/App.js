import React from 'react';

import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route } from 'react-router-dom';
import Navi from "./componants/navbar/Navi";
import Contact_Me from './componants/contact/Contact';
import Home from './componants/home/Home';
import About_Me from './componants/about/About'
import Projects from './componants/projects/Projects'
import Education from './componants/education/Education';
import Skills from './componants/skills/Skills';
import Resume from './componants/resume/Resume'









export default function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Home />} />
        <Route path='/about' element={<About_Me />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/contact' element={<Contact_Me />} />
        <Route path='/skills' element={<Skills />} />
        <Route path='/education' element={<Education />} />
        <Route path='/resume' element={<Resume />} />
      </Route>

    )
  )

  return (
    <>

      <RouterProvider router={router} />


    </>
  );
}

const Root = () => {
  return (
    <>
      <Navi/>
      
    </>
  );

}


