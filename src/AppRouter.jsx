import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import React from "react";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import App from "./App";
import Profile from "./Pages/Profile";

const AppRouter =()=>{
    return(
        <Router>
            <nav>
                <Link to="/Contact">Contact</Link>
                <Link to="/">Home</Link>
                <Link to="/Profile">Profile</Link>
                <Link to="/About">About</Link>
            </nav>
            <Routes>
                <Route path="/Contact" element={<Contact/>}></Route>
                <Route path="/" element={<App/>} /> 
                <Route path="/About" element={<About />} />
                <Route path="/Profile" element={<Profile />} />
            </Routes>
        </Router>

    )
}
export default AppRouter