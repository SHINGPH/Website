import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import './Style.css';
import QRFormPopup from './QRFormPopUp';

import TypingAnimation from './TypingAnimation';
// import ImageAnimation from './ImageAnimation';
import imageSrc from './img/userguide.png';
import imageSrc1 from './img/works.png';
import gplay from './img/button-google-play.png';
import appay from './img/button-app-store.png';
import shoes from './img/shoes.png';
import watches from './img/watches.png';
import bag from './img/bags.png';
import jewelry from './img/jewelry.png';
import collectibles from './img/coll.png';
import artwork from './img/artwork.png';
import Countdown from './Countdown';
import xuredeallogo from './img/xuredeal-logo/Logo-design-Xure-Deal-gold-colors-dark-BG-PNG.png';
import check from './img/Icons-Xure-Deal/Group 37.png'
import Exchange from './img/Icons-Xure-Deal/Group 33.png'
import Exhibition from './img/Icons-Xure-Deal/Group 35.png'
import iphoneauthenticate from './img/Icons-Xure-Deal/Authenticate.png'
import iphoneexhibition from './img/Icons-Xure-Deal/Exhibition.png'
// import '@fortawesome/fontawesome-free/css/all.css';
import fb from './img/Icons-Xure-Deal/Group 1.png';
import twitter from './img/Icons-Xure-Deal/Group 2.png';
import ig from './img/Icons-Xure-Deal/Group.png';
import sa from './img/Icons-Xure-Deal/Shield Access.png';
import vp from './img/Icons-Xure-Deal/Verified Profile.png';
import l1 from './img/Icons-Xure-Deal/Layer_1.png';
import globe from './img/Icons-Xure-Deal/Globe.png';
import mocha from './img/mocha.png'
import user from './img/Icons-Xure-Deal/Users.png';
import g12 from './img/Icons-Xure-Deal/Group 12.png';
import Modal from 'react-modal';

function Home() {

    const imgStyles = {
        width: '190px',
        height: '80px',
        paddingTop: '20px',
        marginRight: '10px',
        marginLeft: '-50px'
    };

    const img1Styles = {
        width: '180px',
        height: '80px',
        paddingTop: '20px',
        marginRight: '-55px',
    };

    const logostyle = {
        width: '50px',
        height: '50px',
        paddingTop: '20px',
        marginRight: '10px'
    };

    const containerStyles = {
        display: 'flex',
        alignItems: 'center',
        marginTop: '-10px'
    };

    // Media Query Styles
    const mediaQueryStyles = {
        '@media (max-width: 768px)': {
            imgStyles: {
                width: '120px',
                height: '60px',
                paddingTop: '10px',
                marginRight: '5px',
                gap: '20px',
            },
            logostyle: {
                width: '40px',
                height: '40px',
                paddingTop: '10px',
                marginRight: '5px'
            },
            containerStyles: {
                marginTop: '-5px'
            }
        }
    };



    const words = ['Shoes', 'Watches', 'Bags', 'Jewelry', 'Collectibles', 'Artwork'];
    // const words = ['Shoes👕', 'Watches⌚', 'Bags🛍️', 'Jewelry💍', 'Collectibles', 'Artwork🎨'];


    // const content = [
    //   { type: 'image', src: shoes, alt: 'Image alt text 1' },
    //   { type: 'image', src: watches, alt: 'Image alt text 2' },
    //   { type: 'image', src: bag, alt: 'Image alt text 2' },
    //   { type: 'image', src: jewelry, alt: 'Image alt text 2' },
    //   { type: 'image', src: collectibles, alt: 'Image alt text 2' },
    //   { type: 'image', src: artwork, alt: 'Image alt text 2' },
    // ];

    //Clock
    const targetDate = new Date('2023-06-19T08:30:00'); // Set your target date here

    const calculateTimeRemaining = () => {
        const currentTime = new Date();
        const timeDifference = targetDate - currentTime;

        if (timeDifference > 0) {
            const months = Math.floor(timeDifference / (1000 * 60 * 60 * 24 * 30));
            const days = Math.floor(
                (timeDifference / (1000 * 60 * 60 * 24)) % 30
            );
            const hours = Math.floor(
                (timeDifference / (1000 * 60 * 60)) % 24
            );
            const minutes = Math.floor((timeDifference / (1000 * 60)) % 60);
            const seconds = Math.floor((timeDifference / 1000) % 60);

            return { months, days, hours, minutes, seconds };
        }

        return { months: 0, days: 0, hours: 0, minutes: 0, seconds: 0 };
    };

    const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

    /*PROBLEM CAUSING TYPINGACTIONS AND COUNTDOWN */
    useEffect(() => {

        const intervalCountdown = setInterval(() => {
            setTimeRemaining(calculateTimeRemaining());
        }, 1000); // Update countdown every 1 second

        return () => {
            clearInterval(intervalCountdown);
        };
    }, []);

    //menu mobile
    useEffect(() => {
        const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
        const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
        const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
        const header = document.querySelector('.header.container');

        const handleClick = () => {
            hamburger.classList.toggle('active');
            mobile_menu.classList.toggle('active');
        };

        hamburger.addEventListener('click', handleClick);

        const handleScroll = () => {
            const scroll_position = window.scrollY;
            if (scroll_position > 250) {
                header.style.backgroundColor = '#29323c';
            } else {
                header.style.backgroundColor = 'transparent';
            }
        };

        document.addEventListener('scroll', handleScroll);

        menu_item.forEach((item) => {
            item.addEventListener('click', handleClick);
        });

        // Cleanup function to remove event listeners
        return () => {
            hamburger.removeEventListener('click', handleClick);
            document.removeEventListener('scroll', handleScroll);
            menu_item.forEach((item) => {
                item.removeEventListener('click', handleClick);
            });
        };
    }, []);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [formData, setFormData] = useState({
        authenticate: '',
    });

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Process form data here
        console.log(formData);
        // Reset form fields
        setFormData({
            authenticate: '',
        });
        // Close the modal
        setIsModalOpen(false);
    };

    return (
        <div>
            <section id="header">
                <div class="header container">
                    <div class="nav-bar">
                        <div class="brand">
                            <a href="#hero">
                                <img src={xuredeallogo} alt="Image Description" className="small-image" />
                            </a>
                        </div>
                        <div class="nav-list">
                            <div class="hamburger">
                                <div class="bar"></div>
                            </div>
                            <ul>
                                <li>
                                    <a href="#" data-after="Home" style={{ fontFamily: 'Inter' }}><Link to="/">Home</Link></a>
                                </li>
                                <li>
                                    <QRFormPopup />
                                    {/* <div>
                                        <a href="#" onClick={handleOpenModal}>Authenticate</a>

                                        {isModalOpen && (
                                            <div className="modal">
                                                <div className="modal-content">
                                                    <span className="close" onClick={handleCloseModal}>&times;</span>
                                                    <form onSubmit={handleSubmit}>
                                                        <h4>Authenticate your item   </h4>
                                                        <input type="text" name="authenticate" value={formData.authenticate} onChange={handleChange} placeholder="Authenticate" required />
                                                        <button type="submit">Submit</button>
                                                    </form>
                                                </div>
                                            </div>
                                        )}
                                    </div> */}

                                </li>
                                <li>
                                    <a href="#services" data-after="Projects" style={{ fontFamily: 'Inter' }}>User Guide</a>
                                </li>
                                <li>
                                    <a href="#" data-after="works" style={{ fontFamily: 'Inter' }}><Link to="/#works">How it Works</Link></a>
                                </li>
                                <li><a href="#" data-after="Contact" style={{ fontFamily: 'Inter' }}><Link to="/#contact">Contact Us</Link></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>




            <section id="services">
                <div class="services container">
                    <div class="background-container">
                        <div class="product-view">

                            <div class="product-images">

                                <div class="additional-images">
                                    <div class="image-details">
                                        <img src={mocha} alt="Image Description" />
                                        <img src={mocha} alt="Image Description" />
                                        <img src={mocha} alt="Image Description" />
                                        <img src={mocha} alt="Image Description" />
                                        <img src={mocha} alt="Image Description" />
                                    </div>
                                </div>
                                <div class="image-details">
                                    <img src={mocha} alt="Image Description" className="main-image" />
                                </div>

                            </div>

                            <div class="product-details">
                                <h2>Jordan 1 Retro High</h2>
                                <p class="product-price">Men's Shoes</p>
                                <p class="product-price">$99.99</p>
                                <p class="product-price">#1234567890</p>
                                <p class="product-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed convallis justo sit amet purus volutpat bibendum. Nulla euismod ipsum at mauris vehicula ultrices. Ut sed arcu sed massa hendrerit congue nec eu lorem. Aenean in velit feugiat, pellentesque urna quis, hendrerit leo. Aliquam id nisl ac est finibus rutrum eget non ligula.</p>
                                {/* <button class="add-to-cart">Add to Cart</button> */}
                            </div>
                        </div>
                        <div class="container-provenance">
                            <div class="provenance-details">
                                <h2>Specifications</h2>
                                <p class="product-description">
                                    <span class="column">Item Code</span>
                                    <span class="column" style={{ paddingLeft: '120px' }}>2ANEFR39T4K0</span>
                                </p>
                                <p class="product-description">
                                    <span class="column">Brand</span>
                                    <span class="column" style={{ paddingLeft: '170px' }}>Nike</span>
                                </p>
                                <p class="product-description">
                                    <span class="column">Model</span>
                                    <span class="column" style={{ paddingLeft: '170px' }}>Jordan 1 Mocha</span>
                                </p>
                                <p class="product-description">
                                    <span class="column">Movement</span>
                                    <span class="column" style={{ paddingLeft: '170px' }}>Quartz</span>
                                </p>
                                <p class="product-description">
                                    <span class="column">Case Material</span>
                                    <span class="column" style={{ paddingLeft: '170px' }}>ETA Foam
                                        Nylon
                                        Polyester</span>
                                </p>
                                <p class="product-description">
                                    <span class="column">Year of Production</span>
                                    <span class="column" style={{ paddingLeft: '170px' }}>2016-2018</span>
                                </p>
                                <p class="product-description">
                                    <span class="column">Condition</span>
                                    <span class="column" style={{ paddingLeft: '170px' }}>New</span>
                                </p>
                                <p class="product-description">
                                    <span class="column">Inclusions</span>
                                    <span class="column" style={{ paddingLeft: '170px' }}>Jordan 1 Mocha</span>
                                </p>
                                <p class="product-description">
                                    <span class="column">Gender</span>
                                    <span class="column" style={{ paddingLeft: '170px' }}>Unisex</span>
                                </p>

                            </div>
                            <div class="provenance-details">
                                <h2>Provenance</h2>
                                <p class="product-description">
                                    <span class="column">Authenticated</span>
                                    <span class="column" style={{ paddingLeft: '120px' }}>22-Nov-2021  18:54</span>
                                </p>
                                <p class="product-description">
                                    <span class="column">Control Number</span>
                                    <span class="column" style={{ paddingLeft: '170px' }}>1234567890</span>
                                </p>
                                <p class="product-description">
                                    <span class="column">Authenticator</span>
                                    <span class="column" style={{ paddingLeft: '170px' }}>Jane Doe</span>
                                </p>
                                <p class="product-description">
                                    <span class="column">Registered</span>
                                    <span class="column" style={{ paddingLeft: '170px' }}>24-Nov-2021  09:53</span>
                                </p>
                                <p class="product-description">
                                    <span class="column">Member Code</span>
                                    <span class="column" style={{ paddingLeft: '170px' }}>9876543210</span>
                                </p>
                                <p class="product-description">
                                    <span class="column">Member Name</span>
                                    <span class="column" style={{ paddingLeft: '170px' }}>John Doe</span>
                                </p>
                                <p class="product-description">
                                    <span class="column">Transferred</span>
                                    <span class="column" style={{ paddingLeft: '170px' }}>22-Nov-2021  18:54</span>
                                </p>
                                <p class="product-description">
                                    <span class="column">Control Number</span>
                                    <span class="column" style={{ paddingLeft: '155px' }}>101010101010</span>
                                </p>
                                <p class="product-description">
                                    <span class="column">FROM</span>
                                    <span class="column" style={{ paddingLeft: '170px' }}>Unisex</span>
                                </p>
                                <p class="product-description">
                                    <span class="column">TO</span>
                                    <span class="column" style={{ paddingLeft: '170px' }}>Unisex</span>
                                </p>

                            </div>
                        </div>
                    </div>
                </div>

            </section>
            <footer class="footer-distributed">

                <div class="footer-left">
                    <div class="brand">
                        <img src={xuredeallogo} alt="Image Description" className="footerlogo-image" />
                        <h4 style={{ color: 'white', fontSize: '22px', textAlign: 'center' }}>Authenticate, Showcase, and Trade</h4>
                        <p style={{ color: 'white', fontSize: '14px', textAlign: 'center' }}>Level 39, Marina Bay Financial Centre Tower 2 <br /> 10 Marina Boulevard Singapore 018983</p>
                    </div>
                </div>

                <div class="footer-center">
                    <div>
                        <ul class="grid1-container">
                            <li class="grid1-title"><h4 style={{ color: 'white', fontSize: '28px', textAlign: 'center' }}>ABOUT</h4></li>
                            <li class="grid1-item"> <p style={{ color: 'white', fontSize: '14px', textAlign: 'center', fontWeight: 'bold' }}>Contact Us </p></li>
                            <li class="grid1-item"> <p style={{ color: 'white', fontSize: '14px', textAlign: 'center', fontWeight: 'bold' }}>Privacy Policy</p></li>
                            <li class="grid1-item"> <p style={{ color: 'white', fontSize: '14px', textAlign: 'center', fontWeight: 'bold' }}>Terms of Use</p></li>
                            <li class="grid1-item"> <p style={{ color: 'white', fontSize: '14px', textAlign: 'center', fontWeight: 'bold' }}>FAQ's</p></li>
                        </ul>

                    </div>





                </div>

                <div class="footer-right">

                    <p class="footer-company-about">
                        <span><h4 style={{ color: 'white', fontSize: '28px', textAlign: 'center' }}>Social Media </h4></span>
                    </p>



                    <a href="#" target="_blank" rel="noopener noreferrer">
                        <img src={fb} alt="Image Description" className="footer-image" />
                    </a>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                        <img src={twitter} alt="Image Description" className="footer-image" />
                    </a>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                        <img src={ig} alt="Image Description" className="footer-image" />
                    </a>




                </div>

            </footer>
            <footer>
                <div class="credits">
                    <p style={{ color: 'white' }}>&copy; 2023 Xure Deal. All rights reserved.</p>
                </div>
            </footer>

        </div>
    );
}

export default Home;