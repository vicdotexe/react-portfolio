import { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Page from "./components/Pages/Page";


function App() {
    const [currentPage, setPage] = useState("about me")
    const pages = ["about me", "portfolio", "contact", "resume"]



    return (
        <>
            <Header>
                <Nav pages={pages} current={currentPage} setPage={setPage}/>
            </Header>
            <Page current={currentPage}>
            
            </Page>
            <Footer/>
            
        </>
    );
}

export default App;
