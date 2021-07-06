import React, { useState, useContext } from 'react';
import ThemeContext from '../context/ThemeContext';

const Header = () =>{
    const [darkmode, setDarkmMode] = useState(false);
    const color = useContext(ThemeContext);

    const handleClick = () => {
        setDarkmMode(!darkmode);
    }
    return(
        <div className="Header">
            <h1 style={{ color }}>React Hooks</h1>
            <button type="button" onClick={ handleClick }>{darkmode ? 'Dark Mode' : 'Light Mode'}</button>
            <button type="button" onClick={ () => setDarkmMode(!darkmode) }>{darkmode ? 'Dark Mode 2' : 'Light Mode 2'}</button>
        </div>
    );
}

export default Header;