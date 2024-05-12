
import './App.css';

import React, { useState } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import { HashRouter } from 'react-router-dom';
// import React from "react";
import {BrowserRouter,Routes,Route,} from "react-router-dom";
const App = ()=> {
  const pageSize = 5;
    return (
      <>
         <HashRouter>
            <div>
            <NavBar />
            <Routes>
              <Route exact path="/" element={<News key="general" pageSize={pageSize} country="in" category="general" />}></Route>
            </Routes>
            <Routes>
              <Route exact path="/business" element={<News key="business" pageSize={pageSize} country="in" category="business" />}></Route>
            </Routes>
            <Routes>
              <Route exact path="/entertainment" element={<News key="entertainment" pageSize={pageSize} country="in" category="entertainment" />}></Route>
            </Routes>
            <Routes>
              <Route exact path="/health" element={<News key="health" pageSize={pageSize} country="in" category="health" />}></Route>
            </Routes>
            <Routes>
              <Route exact path="/science" element={<News key="science" pageSize={pageSize} country="in" category="science" />}></Route>
            </Routes>
            <Routes>
              <Route exact path="/sports" element={<News key="sports" pageSize={pageSize} country="in" category="sports" />}></Route>
            </Routes>
            <Routes>
              <Route exact path="/technology" element={<News key="technology" pageSize={pageSize} country="in" category="technology" />}></Route>
            </Routes>
            {/* <NavBar/>
        <Switch>
          <Route path="/"><News pageSize={pageSize} country="in" category="general"/></Route>
          <Route path="/business"><News pageSize={pageSize} country="in" category="business"/></Route>
          <Route path="/entertainment"><News pageSize={pageSize} country="in" category="entertainment"/></Route>
          <Route path="/health"><News pageSize={pageSize} country="in" category="health"/></Route>
          <Route path="/science"><News pageSize={pageSize} country="in" category="science"/></Route>
          <Route path="/sports"><News pageSize={pageSize} country="in" category="sports"/></Route>
          <Route path="/technology"><News pageSize={pageSize} country="in" category="technology"/></Route>
        </Switch> */}
          </div>
        </HashRouter>
      </>
    )
}


export default App;
