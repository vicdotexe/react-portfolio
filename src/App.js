import { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Page from "./components/Pages/Page";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'


function App() {
    const [currentPage, setPage] = useState("about me")
    const pages = ["about me", "portfolio", "contact", "resume"]



    return (
        <>

            <Router>
                <Header>
                    <Nav/>
                </Header>
                <Routes>
                    <Route path="/" element={<Page current="about me"/>}/>
                    <Route path="/portfolio" element={<Page current="portfolio"/>}/>
                    <Route path="/contact" element={<Page current="contact"/>}/>
                    <Route path="/resume" element={<Page current="resume"/>}/>
                </Routes>
            </Router>
            <Footer/>
            
        </>
    );
}

export default App;
