import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import handlePageChange from './header';

export default function NavTabs({currentPage, setCurrentPage}) {
    return (
        <Router>
            <div> 
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <div class="container-fluid">
                        <h1> Mark Selyuzhitskiy</h1>
                        <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <Link class="nav-link" to='/about' onClick={() => handlePageChange('About')}>About Me</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to='/contact' onClick={() => handlePageChange('Contact')}>Contact</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to='/portfolio' onClick={() => handlePageChange('Portfolio')}>Portfolio</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to='/resume' onClick={() => handlePageChange('Resume')}>Resume</Link>
                            </li>
                        </ul>
                        </div>
                    </div>
                </nav>   
            </div>
        </Router>
    )
}

