//Librarry
import React from "react";
import Header from "./Header.jsx";
import "./App.css";
import Footer from "./Footer.jsx";
import List from "./List.jsx";
import Top from './Top.js'

//Create Component
const App = () => {
  return (
    <div className="App">
      <Header list="10 Dftar Mkanan"/>
      <Top />
      <List/>
      <Footer/>
      </div>
  );
};

//Export Default
export default App;