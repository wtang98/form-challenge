import React from 'react';
import Form from './form/form';
import './home.scss'
import Nav from './nav/nav';
import { useState } from 'react';


const Home = () => {

const [darkMode, setDarkMode] = useState(false)


    const handleDarkMode = (e) => {
        if(e.target.checked === true){
            setDarkMode(true)
        }else{
            setDarkMode(false)
        }
    }

    return (
        <div className={`home ${darkMode && 'DarkMode'}`}>
            <Nav handleDarkMode={handleDarkMode} darkMode={darkMode}/>
            <div className="home__form">
                <Form darkMode={darkMode}/>
            </div>
        </div>
    );
};

export default Home;
