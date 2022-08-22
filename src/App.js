import React from "react";
import {Route, Routes} from "react-router-dom";

import Layout from "./components/Layout";
import Home from "./components/Home";
import About from "./components/About";
import Art from "./components/Art";
import Blog from "./components/Blog";
import CV from "./components/CV";

import "./App.scss";

export default function App(){
  return (
    <>
      <Routes>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/art" element={<Art />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/cv" element={<CV />} />
      </Routes>
    </>
  )
}
