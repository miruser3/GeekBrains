import React from 'react';
import { Outlet } from 'react-router-dom';
import CustomLink from './CustomLink';
const layot = () => {
    return (
        <div>
            <header style={{ width: '100%', height: 100, margin: '20px', display: "flex", justifyContent: "space-evenly" }}>
                <CustomLink to="/">home</CustomLink>
                <CustomLink to="/About">about</CustomLink>
                <CustomLink to="/Blog">blog</CustomLink>
                
            </header>
            <main>
                <Outlet />
            </main>
            <footer>
                footer
            </footer>
        </div>
    );
};

export default layot;