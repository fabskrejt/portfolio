import React from 'react';
import './App.css';
import {Header} from "./header/Header";
import {About} from "./about/About";
import {Skills} from "./skills/Skills";
import {Projects} from "./projekkts/Projects";

function App() {
    return (
        <div className="App">
            <Header/>
            <About/>
            <Skills/>
            <Projects/>
        </div>
    );
}

export default App;
