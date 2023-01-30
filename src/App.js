import React from "react";
import { Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import SearchBar from "./components/SearchBar/SearchBar";
import Home from "./pages/Home";


import "./styles/App.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <SearchBar/>
      <main className="main-container">
        <Routes></Routes>
        
        <Home/>
      </main>
      <Footer />
    </div>
  );
}

export default App;
