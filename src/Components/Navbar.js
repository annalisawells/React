import React from 'react';

function Navbar(){
    return (
        <header>
            <div className="nav">
                <ul>
                    <li className="home"><a href="#">Home</a></li>
                    <li className="tutorials"><a className="active" href="#">Tutorials</a></li>
                    <li className="about"><a href="#">About</a></li>
                    <li className="news"><a href="#">Newsletter</a></li>
                    <li className="contact"><a href="#">Contact</a></li>
                </ul>
            </div>
        </header>
    )
};

export default Navbar;