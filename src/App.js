// Import Libraries
import React, {useState} from "react";
import Header from "./Header.jsx";
import "./App.css";
import Footer from "./Footer.jsx";
import  List from "./List.jsx";
import Top from "./Top.js";
import {Button} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
// Membuat komponen dengan class
const App = () => {
  const [state,setState] = useState(0)
  const increase =()=>{
      setState (count=>count+1)
  }
  const decrease =()=>{
    setState (count=>count-1)
  }
  return (
    <div className="App">
    <Button variant="primary" onClick={increase} >Tambah</Button>
    <br/>
    <span>{state}</span>
    <br/>
    <Button onClick={decrease}>Kurang</Button>

    
    <Header list="10 daftar makanan" />
    <Top />
    <h1>Hello React</h1>
    <p>Nama saya Nayla</p>

    <List />
    <Footer />
    </div>
  );
}
// Export Default
export default App;

