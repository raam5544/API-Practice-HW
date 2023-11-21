import React from 'react'
import Breeds from './pages/Breeds'
import Nav from './components/Nav'
import { Route, Routes } from "react-router-dom";
import Main from './pages/Main';
import './style.css'


function App() {
    return (
        <div className="App">
            <Nav />
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/Breeds" element={<Breeds />} />
            </Routes>
        </div>
    )
}

export default App