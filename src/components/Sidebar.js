import React, { Component } from 'react';

import '../App.css';


export  class Sidebar  extends Component {
    render() {

        return(
            <div className="wrapper">

                <nav id="sidebar">
                    
                    {/* sidebar header */}
                    <div className="sidebar-header">
                    <h3>Collapsible Sidebar</h3>
                    <strong>BS</strong>

                    </div>
                    {/* sidebar header */}

                    {/* Sidebar Links */}
                    <ul className="list-unstyled components">

                        <li className="active">
                        <a href="#homeSubmenu" >
                            <i className="glyphicon glyphicon-home"></i>
                            Home
                        </a>
                        </li>

                        <li>
                    <a href="#">
                        <i className="glyphicon glyphicon-send"></i>
                        about
                    </a>
                </li>
                <li>
                        <a href="#">
                            <i className="glyphicon glyphicon-paperclip"></i>
                            FAQ
                        </a>
                    </li>

                    <li>
                        <a href="#">
                            <i className="glyphicon glyphicon-link"></i>
                            Portfolio
                        </a>
                    </li>

                <li>
                    <a href="#">
                        <i className="glyphicon glyphicon-send"></i>
                        Contact
                    </a>
                </li>

                    </ul>

                     {/* Sidebar Links */}

                </nav>

                  {/* Page Content Holder  */}
                  <div id="content">

                        <nav className="navbar navbar-default">
                            <div className="container-fluid">

                                <div className="navbar-header">
                                    <button type="button" id="sidebarCollapse" className="btn btn-info navbar-btn">
                                        <i className="glyphicon glyphicon-align-left"></i>
                                        <span>Toggle Sidebar</span>
                                    </button>
                                </div>

                                <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                                    <ul className="nav navbar-nav navbar-right">
                                        <li><a href="#">Page</a></li>
                                        <li><a href="#">Page</a></li>
                                        <li><a href="#">Page</a></li>
                                        <li><a href="#">Page</a></li>
                                    </ul>
                                </div>
                            </div>
                        </nav>

                        <div>

                        <h2>Collapsible Sidebar Using Bootstrap 3</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                        <div className="line"></div>

                        <h2>Lorem Ipsum Dolor</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                        <div className="line"></div>

                        <h2>Lorem Ipsum Dolor</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                        <div className="line"></div>

                        <h3>Lorem Ipsum Dolor</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
             
             </div>
                 {/* Page Content Holder  */}
                




                 </div>
        )
    }
}