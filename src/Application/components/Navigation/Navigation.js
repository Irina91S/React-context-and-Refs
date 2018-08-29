import React from 'react';
import './Navigation.css';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className="Navigation">
            <NavLink to="/">Main</NavLink>
            <NavLink to="/Todo">Todo</NavLink>
        </div>
    );
}
export default Navigation;