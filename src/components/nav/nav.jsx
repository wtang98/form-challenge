import React,{useState} from "react";
import './nav.scss'
import Cog from '../../assets/icons/cog.svg';

const Nav = ({handleDarkMode, darkMode}) => {

    return (
        <div className='nav'>
            <h1 className={darkMode && 'DarkMode'}>Form Challenge</h1>
            <div>
                <p>Dark Mode</p>
                <label className="switch">
                    <input onClick={handleDarkMode} type="checkbox"/>
                    <span className="slider round"></span>
                </label>
            </div>
        </div>
    );
};

export default Nav;
