// import React from 'react'
// import Navbar from './components/Home/Navbar'
// import Home from './components/Home/Home'
// import { BrowserRouter } from 'react-router-dom'
// function App() {
//   return (
//     <div>
     
//       <Home/>
//     </div>
//   )
// }

// export default App



import React from "react";
import Navbar from "./components/Home/Navbar";
import Home from "./components/Home/Home";
import Worker from "./components/pages/Worker";
import Introduction from "./components/pages/Introduction";
import { Routes, Route } from "react-router-dom";
import News from "./components/pages/News";
import Gallery from "./components/pages/Gallery";
import Agenda from "./components/pages/Agenda";
import Realated from "./components/pages/Realated";
import Read from "./components/pages/Read";
function App() {
  return (
    <>
     
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pages/introduction" element={<Introduction />} />
        <Route path="/pages/agenda" element={<Agenda />} />
        <Route path="/pages/worker" element={<Worker />} />
        <Route path="pages/news" element={<News />} />
        <Route path="/pages/gallery" element={<Gallery />} />
        <Route path="/related/:id" element={<Realated />} />
        <Route path="/pages/Read" element={<Read />} />
      </Routes>

      
    </>
  );
}

export default App;
