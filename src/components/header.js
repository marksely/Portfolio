import React, { useState, useEffect }  from "react";
import NavTabs from "./navtabs";

const Header = () => {
    const [currentPage, setCurrentPage] = useState('');

    const handlePageChange = (page) => setCurrentPage(page);

    useEffect(() => {

        if(window.location.pathname === '/about') {
            setCurrentPage('About');
        }
        if(window.location.pathname === '/contact') {
            setCurrentPage('Contact');
        }
        if(window.location.pathname === '/projects') {
            setCurrentPage('projects');
        }
        if(window.location.pathname === '/resume') {
            setCurrentPage('Resume');
        }
    }, []);


    return (
        <div>
            <NavTabs currentPage={currentPage} handlePageChange={handlePageChange}/>
        </div>
    );
};

export default Header;