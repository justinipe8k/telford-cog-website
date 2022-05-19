import React from 'react';
import "./HeaderNew.css";
import logo from "./images/logo_full_dark_750x200.png";

function HeaderNew() {

    // const toggleButton = document.getElementsByClassName('toggle-button')[0]
    // const navbarLinks = document.getElementsByClassName('navbar-links')[0]

    // toggleButton.addEventListener('click', () => {
    //     navbarLinks.classList.toggle('active')
    // })

    return (

        <nav class="navbar">
            <div className="brand-title">
                <div><img className='HeaderNew_logoImg' src={logo} /></div>
                <div className="brand-title-name">
                    <div>Mahanaim Church of God</div>
                    <div>Telford</div>
                </div>
                </div>
            <a href="#" class="toggle-button">
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
            </a>
            <div class="navbar-links">
                <ul>
                    <li><a href="/about/beliefs">Our Beliefs</a></li>
                    <li><a href="#">Our Ministries</a></li>
                    <li><a href="/pastors">Our Leadership</a></li>
                    <li><a href="#">Contact us</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default HeaderNew;