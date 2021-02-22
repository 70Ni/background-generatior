import React from 'react';
import './styles.css';

function Navbar() {
    return (
        <div className="side_navigator">
            <div className="side_container">
            <div className="nav_element_a"> <div className="indicator"></div> Home</div>
                <div className="nav_element"> <span className="indicator"></span>Analyzer</div>
                <div className="nav_element"> <span className="indicator"></span>About</div>
            </div>
        </div>    
        );
}

export default Navbar;