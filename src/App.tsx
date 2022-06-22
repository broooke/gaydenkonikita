import React from 'react';
import './index.scss'
import {Header} from "./components/Header";
import Intro from "./sections/Intro";
import TypeText from "./components/TypeText";
import About from "./sections/About";

function App() {
    return (
        <main className='app'>
            <Header />
            <TypeText />
            <div className='container'>
                <Intro />
                <About />
            </div>
        </main>
    );
}

export default App;
