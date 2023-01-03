import { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Page from "./components/Pages/Page";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import options from './assets/snow.json';
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

function App() {
    const [currentPage, setPage] = useState("about me")
    const pages = ["about me", "portfolio", "contact", "resume"]
    const particlesInit = useCallback(async engine => {
        console.log(engine);
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);


    return (
        <>
            <Particles
                init={particlesInit}
                loaded={particlesLoaded}
                options={options}/>
            <Router>
                <Header>
                    <Nav/>
                </Header>
                <Routes>
                    <Route path="/" element={<Page current="about me"/>}/>
                    <Route path="/portfolio" element={<Page current="portfolio"/>}/>
                    <Route path="/contact" element={<Page current="contact"/>}/>
                    <Route path="/resume" element={<Page current="resume"/>}/>
                    <Route path="/tutorials" element={<Page current="tutorials"/>}/>
                    <Route path="/tutorial" element={<Page current="tutorial"/>}/>
                </Routes>
            </Router>
            <Footer/>
            
        </>
    );
}

export default App;
