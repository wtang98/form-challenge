import React,{useState} from "react";
import './nav.scss'
import Cog from '../../assets/icons/cog.svg';

const Nav = ({handleDarkMode, darkMode}) => {

    return (
        <div className='nav'>
            <h1 className={darkMode &&'darkMode'}>Form Challenge</h1>
            <label className="switch">
                dark mode
                <input onClick={handleDarkMode} type="checkbox"/>
            </label>
        </div>
    );
};

export default Nav;
