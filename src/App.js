import React from "react";
// import { Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Search from "./pages/Search";

import "./styles/App.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <main className="main-container">
        {/* <Routes></Routes> */}
        <Search/>
      </main>
      <Footer />
    </div>
  );
}

export default App;
