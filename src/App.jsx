import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Menu from "./components/Menu";
import News from "./components/News";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
          <Route
            path="/menu"
            element={<Menu />}
          />

          <Route
            path="/news"
            element={<News />}
          />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
