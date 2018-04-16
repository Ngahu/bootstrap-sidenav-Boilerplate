import React, { Component } from 'react';


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
                        <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false">
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
                        <i className="glyphicon glyphicon-send"></i>
                        Contact
                    </a>
                </li>

                    </ul>

                     {/* Sidebar Links */}

                </nav>
                
                 </div>
        )
    }
}