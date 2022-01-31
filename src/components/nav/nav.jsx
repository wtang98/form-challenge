import React,{useState} from "react";
import './nav.scss'
import Cog from '../../assets/icons/cog.svg';

const Nav = ({handleClick}) => {

    return (
        <div className='nav'>
            <h1>Form Challenge</h1>
            <label className="switch">
                dark mode
                <input onClick={handleClick} type="checkbox"/>
            </label>
        </div>
    );
};

export default Nav;
