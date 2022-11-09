import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Explore from './Explore';
export default function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
      <Route exact path='' element={<Home/>} />
      <Route exact path='About' element={<About/>} />
      <Route exact path='Contact' element={<Contact/>} />
      <Route exact path='Explore' element={<Explore/>} />
      </Routes>
    </BrowserRouter>
    </>
  );
}
// export default App;
