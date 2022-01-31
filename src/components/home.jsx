import React from 'react';
import Form from './form/form';
import './home.scss'
import Nav from './nav/nav';
import { useState } from 'react';


const Home = () => {

const [darkMode, setDarkMode] = useState(false)

const handleDarkMode = () => {
    setDarkMode(!darkMode)
}
    
    return (
        <div className={`home ${darkMode && 'darkMode'}`}>
            <Nav handleClick={handleDarkMode}/>
            <div className="home__form">
                <Form/>
            </div>
        </div>
    );
};

export default Home;
