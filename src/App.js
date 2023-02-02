import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Favorites from "./pages/Favorites";
import Home from "./pages/Home";


import "./styles/App.scss";

function App() {
  return (
    <HashRouter>
    <div className="App">
      <Header />
      <main className="main-container">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/favorites" element={<Favorites/>}/>
        </Routes>
        
        
      </main>
      <Footer />
    </div>
    </HashRouter>
  );
}

export default App;
