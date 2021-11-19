import React from "react";
import AboutMe from './pages/aboutme';
import Contact from './pages/contact';
import Portfolio from './pages/portfolio';
import Resume from './pages/resume';
import Header from './header';
import Footer from './footer';

const Main = () => {

    let pageLocation = window.location.pathname;

    const renderPage = (pageLocation) => {
        if(window.location.pathname === '/') {
            return <AboutMe />;
        }
        if(window.location.pathname === '/about') {
           return <AboutMe />;
        }
        if(window.location.pathname === '/contact') {
            return <Contact />;
        }
        if(window.location.pathname === '/projects') {
            return <Portfolio />;
        }
        if(window.location.pathname === '/resume') {
            return <Resume />;
        }
   }
    return (
        <div>
            <Header />
            
            {renderPage(pageLocation)}
            
            <Footer />
        </div>
    )
};

export default Main;