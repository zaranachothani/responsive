// import logo from './logo.svg';
import './App.css';
// import 'owl.carousel/dist/assets/owl.carousel.css';
// import 'owl.carousel/dist/assets/owl.theme.default.css';
// import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';
import React from 'react';
import banner1 from './image/banner1.jpeg'
import banner2 from './image/banner2.jpeg'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { SlLocationPin } from "react-icons/sl";
import { BsBriefcase } from "react-icons/bs";
import { FaArrowUpLong } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import { FaFacebookF,FaInstagram,FaTwitter,FaPinterestP,FaQuoteRight,FaStar,FaStarHalfAlt,FaArrowsAlt,FaLinkedinIn,FaAlignJustify } from "react-icons/fa";
import { LuPhoneCall } from "react-icons/lu";
import { IoReorderThree } from "react-icons/io5";
import { Row, Col, Container } from 'react-bootstrap';
import { TfiEmail } from "react-icons/tfi";
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

const option={
    responsive:{
        0:{
            items:1,
            dots:false,
            nav:false,
        },
        600:{
            items:1,
            dots:false,
            nav:false,
        },
        1000:{
            items:1,
            dots:false,
            nav:false,
        }
    }
}
const brand={
    responsive:{
        0:{
            items:4,
            dots:false,
            nav:false,
        },
        600:{
            items:4,
            dots:false,
            nav:false,
        },
        1000:{
            items:4,
            dots:false,
            nav:false,
        }
    }
}
const test={
    responsive:{
        0:{
            items:1,
            dots:false,
        },
        600:{
            items:1,
            dots:false,
        },
        1000:{
            items:1,
            dots:false,
        }
    }
}

function App() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true); 


  return (
 
    <section>

    {/*********************************************************  
                          header
     ************************************************************  */}
     <header className='sticky' id='angle'>
        <div className='nav_menu'>
            <div className='container-fluid'>
                <Row className='d-flex justify-content-between'>
                    <Col lg={2} className='logo pl-0 d-flex justify-content-between'>
                        <div>
                            <a href='#'>
                                <img src={require(`./image/logo.png`)}></img>
                            </a>
                        </div>
                    <Button variant="primary" className='navbar-toggler d-lg-none d-md-block' onClick={handleShow}>
                        <span className='navbar-toggler-icon'><IoReorderThree></IoReorderThree></span>
                    </Button>

                    <Offcanvas show={show} onHide={handleClose}
                    >
                        <Offcanvas.Header closeButton>
                        <Offcanvas.Title>Offcanvas</Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <ul className='c_main_menu'>
                                <li><a href='#'>HOME</a></li><hr/>
                                <li><a href='#'>ABOUT US+</a></li>
                                <li><a href='#'>PAGES+</a></li>
                                <li><a href='#'>SERVICES+</a></li>
                                <li><a href='#'>BLOG+</a></li>
                                <li><a href='#'>CONTACT US+</a></li>
                            </ul>
                    
                        </Offcanvas.Body>
                    </Offcanvas>
                    </Col>
                   
                    <Col lg={10} className='d-md-none d-none d-lg-block pe-0'>
                        <div className='dex_menu align-items-center'>
                            <ul className='nav_scroll main_menu d-flex align-items-center'>
                                <li>
                                    <a href='#'>HOME+</a>
                                    <ul className='sub_menu'>
                                        <li><a href='#'>Architecture</a></li>
                                        <li><a href='#'>Architecture Dark</a></li>
                                        <li><a href='#'>Interior</a></li>
                                        <li><a href='#'>Interior Dark Version</a></li>
                                        <li><a href='#'>Interior Version</a></li>
                                    </ul>    
                                </li>
                                <li><a href='#'>ABOUT US</a></li>
                                <li>
                                    <a href='#'>PAGES+</a>
                                    <ul className='sub_menu'>
                                        <li><a href='#'>About</a></li>
                                        <li><a href='#'>Company</a></li>
                                        <li><a href='#'>Our Team</a></li>
                                        <li><a href='#'>Team Details</a></li>
                                        <li><a href='#'>Project</a></li>
                                        <li><a href='#'>Project Details</a></li>
                                        <li><a href='#'>Contact Us</a></li>
                                    </ul>  
                                </li>
                                <li>
                                    <a href='#'>SERVICES+</a>
                                    <ul className='sub_menu'>
                                        <li><a href='#'>Service</a></li>
                                        <li><a href='#'>Service Details</a></li>
                                    </ul>
                                </li>
                                <li>
                                    <a href='#'>BLOG+</a>
                                    <ul className='sub_menu'>
                                        <li><a href='#'>Blog Grid</a></li>
                                        <li><a href='#'>Blog List</a></li>
                                        <li><a href='#'>Blog Details</a></li>
                                        <li><a href='#'>Blog 2 Column</a></li>
                                    </ul>
                                </li>
                                <li><a href='#'>CONTACT US+</a></li>
                            </ul>
                            <div className='search_box search_box_btn d-flex ms-4'>
                                <div className='slider_bage'>
                                    <i><BsBriefcase></BsBriefcase></i><span>0</span>
                                </div>
                                <div className='search'>
                                    <i><IoSearch></IoSearch></i>
                                </div>
                            </div>
                            <div className='header_button ms-3'>
                                <a href='#'><span>Get a Quote</span></a>
                            </div>
                            <div className='canvas'>
                                <i><FaAlignJustify></FaAlignJustify></i>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
     </header>


      {/* **********************************************  
                        Slider
      ***************************************************/}

        <OwlCarousel className='owl-theme' loop margin={10} nav {...option}>
            <div class='item'>
                <img src={banner1}></img>
                <div className='slider_area'></div>
                <Container>
                    <Row>
                        <Col sm={12} md={12}>
                            <div className='slider_content'>
                                <h4>LUXURY INNOVATE</h4>
                                <h1>Innovate Design</h1>
                                <h1>In <span>Canada</span></h1>
                                <p>Founded in 2005, Sparch is specializing providing innovative such as website design, brand identity.</p>
                                <div className='slider_contact'>
                                    <div className='slider_button'>
                                        <a href='#'>Discover More</a>
                                    </div>
                                    <div className='slider_icon d-none d-md-block'>
                                        <i><LuPhoneCall></LuPhoneCall></i>
                                        <h6><span>Call :</span>00 456(123)698</h6>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <div className='slider_social'>
                            <span className='follow_us'>Follow_Us:</span>
                            <a href='#'><FaFacebookF></FaFacebookF></a>
                            <a href='#'><FaInstagram></FaInstagram></a>
                            <a href='#'><FaTwitter></FaTwitter></a>
                            <a href='#'><FaPinterestP></FaPinterestP></a>
                        </div>
                    </Row>
                </Container>
            </div>
            <div class='item'>
                <img src={banner2}></img>
                <div className='slider_area'></div>
                <Container>
                    <Row>
                        <Col sm={12} md={12}>
                            <div className='slider_content'>
                                <h4>LUXURY INNOVATE</h4>
                                <h1>Innovate Design</h1>
                                <h1>In <span>Canada</span></h1>
                                <p>Founded in 2005, Sparch is specializing providing innovative such as website design, brand identity.</p>
                                <div className='slider_contact'>
                                    <div className='slider_button'>
                                        <a href='#'>Discover More</a>
                                    </div>
                                    <div className='slider_icon'>
                                        <i><LuPhoneCall></LuPhoneCall></i>
                                        <h6><span>Call :</span>00 456(123)698</h6>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <div className='slider_social'>
                            <span className='follow_us'>Follow_Us:</span>
                            <a href='#'><FaFacebookF></FaFacebookF></a>
                            <a href='#'><FaInstagram></FaInstagram></a>
                            <a href='#'><FaTwitter></FaTwitter></a>
                            <a href='#'><FaPinterestP></FaPinterestP></a>
                        </div>
                    </Row>
                </Container>
            </div>
        </OwlCarousel>;
    

     {/* ************************************************88
                        Features
    ******************************************************/}

    <div className='feature_area'>
        <Container>    
        <div className=''>
            <Row className='feature_top d-flex'>
                <Col lg={4} md={6} sm={12}>
                    <div className='feature_box'>
                        <div className='feature_inner'>
                            <div className='feature_content'>
                                <div className='feature_icon'>
                                    <img src={require(`./image/f1.png`)}></img>
                                </div>
                                <div className='feature_title'>
                                    <h2>Architecture</h2>
                                    <p>Progressively impact 24/365 relationships transparent opportunitie. Monotonectally cooperative outside the box thinking all an open-source information</p>
                                </div>
                                <div className='feature_button'>
                                    <a href='#'>Read More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col lg={4} md={6} sm={12}>
                    <div className='feature_box active'>
                        <div className='feature_inner'>
                            <div className='feature_content'>
                                <div className='feature_icon'>
                                    <img src={require(`./image/f2.png`)} className='middle_img' width="65px"></img>
                                </div>
                                <div className='feature_title'>
                                    <h2>Architecture</h2>
                                    <p>Progressively impact 24/365 relationships transparent opportunitie. Monotonectally cooperative outside the box thinking all an open-source information</p>
                                </div>
                                <div className='feature_button'>
                                    <a href='#'>Read More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col  lg={4} md={6} sm={12}>
                    <div className='feature_box'>
                        <div className='feature_inner'>
                            <div className='feature_content'>
                                <div className='feature_icon'>
                                    <img src={require(`./image/f3.png`)}></img>
                                </div>
                                <div className='feature_title'>
                                    <h2>Architecture</h2>
                                    <p>Progressively impact 24/365 relationships transparent opportunitie. Monotonectally cooperative outside the box thinking all an open-source information</p>
                                </div>
                                <div className='feature_button'>
                                    <a href='#'>Read More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    </Container>
</div>


    {/* ***************************************************
                        About area
    *******************************************************/}
        <Container>
            <div className='row about_area'>
                 {/* <div className='about_area spacer'> */}
                    <div className='col-lg-6 col-md-6 col-sm-12'>
                        <div className='about_thumb_box'>
                            <div className='about_thumb big'>
                                <img src={require(`./image/about.jpeg`)}></img>
                            </div>
                            <div className='about_content'>
                                <div className='about_thumb'>
                                    <img src={require(`./image/f2.png`)}></img>
                                </div>
                                <div className='about_title'>
                                    <h3><span>10</span>Years Of</h3>
                                    <h3>Experinces</h3>
                                </div>
                            </div>
                            <div className='about_shape'>
                                <div className='about_thumb'>
                                    <img src={require(`./image/shape.png`)}></img>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-6 col-md-6 col-sm-12'>
                        <div className='dreamit_section_title'>
                            <h4>ABOUT US</h4>
                            <h1>Simple Minimal for Modern</h1>
                            <h1>home <span>Exterior design</span></h1>
                        </div>
                        <div className='shape_dex'>
                            <div className='shape_title'>
                                <h1>DEX</h1>
                            </div>
                        </div>
                        <p className='about_text'>
                            Competently visualize error-free metrics before client-focused bandwidth. Interactively re-engineer intuitive core competencies via 24/365 services. Dynamically underwhelm inexpensive
                        </p>
                        <div className='row'>
                            <div className='col-lg-6'>
                                <div className='about_icon_box'>
                                    <div className='icon'>
                                        <span></span>
                                        <p>Retail Residental Projects</p>
                                    </div>
                                    <div className='icon'>
                                        <span></span>
                                        <p>Retail Residental Projects</p>
                                    </div>
                                    <div className='icon'>
                                        <span></span>
                                        <p>Retail Residental Projects</p>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-6'>
                                <div className='about_icon_box'>
                                    <div className='icon'>
                                        <span></span>
                                        <p>Retail Residental Projects</p>
                                    </div>
                                    <div className='icon'>
                                        <span></span>
                                        <p>Retail Residental Projects</p>
                                    </div>
                                    <div className='icon'>
                                        <span></span>
                                        <p>Retail Residental Projects</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='about_button'>
                            <a href='#'>Read More</a>
                        </div>
                    </div>
                {/* </div> */}
            </div>
        </Container>

        {/* *************************************************8
                            Service area
        *******************************************************/}
        <div className='service_area'>
            <Container>
                <Row>
                    <Col lg={4} md={6} sm={12}>
                        <div className='dreamit_section_title service'>
                            <h4>ABOUT US</h4>
                            <h1>The Best <span>Service</span></h1>
                            <h1>we Provide</h1>
                        </div>
                        <div className='shape_dex'>
                            <div className='shape_title'>
                                <h1>DEX</h1>
                            </div>
                        </div>
                        <p className='about_text'>
                            Competently visualize error-free metrics before Interactively re-engineer intuitive core compete Dynamically underwhelm.
                        </p>
                    </Col>
                    <Col lg={4} md={6} sm={12}>
                        <div className='single_service_box'>
                            <div className='service_icon_thumb'>
                                <img src={require(`./image/s1.png`)}></img>
                            </div>
                            <div className='service_title'>
                                <h2>Home Exterior Design</h2>
                                <p>Holisticly mesh web-enabled manufactur products vis-a-vis viral app <span>services has driven expertise done.</span></p>
                            </div>
                            <div className='service_button'>
                                <a href='#'>Read More +</a>
                            </div>
                        </div>
                    </Col>
                    <Col lg={4} md={6} sm={12}>
                        <div className='single_service_box'>
                            <div className='service_icon_thumb'>
                                <img src={require(`./image/s2.png`)}></img>
                            </div>
                            <div className='service_title'>
                                <h2>2D/3D Design Layout</h2>
                                <p>Holisticly mesh web-enabled manufactur products vis-a-vis viral app <span>services has driven expertise done.</span></p>
                            </div>
                            <div className='service_button'>
                                <a href='#'>Read More +</a>
                            </div>
                        </div>
                    </Col>
                    <Col lg={4} md={6} sm={12}>
                        <div className='single_service_box'>
                            <div className='service_icon_thumb'>
                                <img src={require(`./image/s3.png`)}></img>
                            </div>
                            <div className='service_title'>
                                <h2>Furniture Design</h2>
                                <p>Holisticly mesh web-enabled manufactur products vis-a-vis viral app <span>services has driven expertise done.</span></p>
                            </div>
                            <div className='service_button'>
                                <a href='#'>Read More +</a>
                            </div>
                        </div>
                    </Col>
                    <Col lg={4} md={6} sm={12}>
                        <div className='single_service_box'>
                            <div className='service_icon_thumb'>
                                <img src={require(`./image/s4.png`)}></img>
                            </div>
                            <div className='service_title'>
                                <h2>Modern Home Interrior</h2>
                                <p>Holisticly mesh web-enabled manufactur products vis-a-vis viral app <span>services has driven expertise done.</span></p>
                            </div>
                            <div className='service_button'>
                                <a href='#'>Read More +</a>
                            </div>
                        </div>
                    </Col>
                    <Col lg={4} md={6} sm={12}>
                        <div className='single_service_box'>
                            <div className='service_icon_thumb'>
                                <img src={require(`./image/s5.png`)}></img>
                            </div>
                            <div className='service_title'>
                                <h2>Custom Design Plan</h2>
                                <p>Holisticly mesh web-enabled manufactur products vis-a-vis viral app <span>services has driven expertise done.</span></p>
                            </div>
                            <div className='service_button'>
                                <a href='#'>Read More +</a>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>

        {/* ****************************************************************************8
                            Skill area
        **********************************************************************************/}

        <div className='skill_area'>
            <Container>
                <Row>
                    <Col lg={6} md={6} sm={12}>
                        <div className='single_skill_thumb'>
                            <img src={require(`./image/skill.jpeg`)}></img>
                        </div>
                    </Col>
                    <Col lg={6} md={6} sm={12}>
                        <div className='single_skill_box'>
                            <div className='dreamit_section_title'>
                                <h4>SKILLS</h4>
                                <h1>Dex expertise <span>Skills</span></h1>
                                {/* <h1>we Provide</h1> */}
                            </div>
                            <div className='prossess_bar_plugin'>
                                <span className='prossess_bar'>Interior Design</span>
                                <div className='barfiller'>
                                    <div className='tipWrap d-inline'>
                                        <span className='tip'>70%</span>
                                    </div>
                                    <span className='fill'></span>
                                </div>
                            </div>
                            <div className='prossess_bar_plugin'>
                                <span className='prossess_bar'>Home Exterior</span>
                                <div className='barfiller'>
                                    <div className='tipWrap d-inline'>
                                        <span className='tip'>70%</span>
                                    </div>
                                    <span className='fill'></span>
                                </div>
                            </div>
                            <div className='prossess_bar_plugin'>
                                <span className='prossess_bar'>Furnitures</span>
                                <div className='barfiller'>
                                    <div className='tipWrap d-inline'>
                                        <span className='tip'>70%</span>
                                    </div>
                                    <span className='fill'></span>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>

        {/* **********************************************************
                            Brand area
        ***************************************************************/}

        <div className='brand_area'>
            <Container>
                <Row>
                    <OwlCarousel className='owl-theme brand_slider' loop margin={10} dots={false} {...brand} autoplay={1000}>
                    <   div class='item'>
                            <div className='img_item'>
                                <img src={require(`./image/b1.jpeg`)}></img>
                                <div className='layer'></div>
                            </div>
                        </div>
                        <div class='item'>
                            <div className='img_item'>
                                <img src={require(`./image/b2.jpeg`)}></img>
                                <div className='layer'></div>
                            </div>
                        </div>
                        <div class='item'>
                            <div className='img_item'>
                                <img src={require(`./image/b3.jpeg`)}></img>
                                <div className='layer'></div>
                            </div>
                        </div>
                        <div class='item'>
                            <div className='img_item'>
                                <img src={require(`./image/b4.jpeg`)}></img>
                                <div className='layer'></div>
                            </div>
                        </div>
                    </OwlCarousel>;
                </Row>
            </Container>
        </div>

        {/* ****************************************8
                    Project area
        ************************************************/}

        {/* <div className='project_area'>
            <Container>
                <Row>
                    <Col lg={9} md={9} sm={12}>
                        <div className='section_title'>
                            <div className='dreamit_section_title service'>
                                <h4>PROJECT</h4>
                                <h1>Our Featured <span>Works</span></h1>
                                <h1>we Provide</h1>
                            </div>
                            <div className='shape_dex'>
                                <div className='shape_title'>
                                    <h1>WORK</h1>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg={3} md={3} sm={12}>
                        <div className='slider_button'>
                            <a href='#'>All Project</a>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Container className='wrapper'>
                
            </Container>
        </div> */}

        {/* ***************************************************
                        Testimonial_slider
        ******************************************************/}

        <div className='testimonial_area'>
            <Container>
                <Row>
                    <Col lg={12}>
                        <div className='dreamit_section_title'>
                            <h4>SKILLS</h4>
                            <h1>Dex expertise <span>Skills</span></h1>
                            {/* <h1>we Provide</h1> */}
                        </div>
                    </Col>
                    <Row className='testi_border'>
                        <Col lg={6} md={6} sm={12}>
                            <Row>
                            <OwlCarousel className='owl-theme testimonial_list' loop margin={10} nav dots={false} {...test}>
                                <div class='item'>
                                    <div className='testimonial_single_box'>
                                        <div className='test_thumb'>
                                            <img src={require(`./image/t1.png`)}></img>
                                        </div>
                                        <div className='testimonial_title'>
                                            <h3>Krishna Lee</h3>
                                            <p>Civil Engineer</p>
                                        </div>
                                        <div className='testi_top_icon d-none d-md-block'>
                                            <i><FaQuoteRight></FaQuoteRight></i>
                                        </div>
                                        <div className='testimonial_text'>
                                            <p>Credibly communicate ethical mindshare vis-a-vis premium nice Interactively fabricate superior methodologies for top-lines into Completely expedite impactful content with clicks-and-mortars Intrinsicly disseminate line services.</p>
                                        </div>
                                        <div className='testimonial_social_icon'>
                                            <div className='testimonial_icon'>
                                                <i><FaStar></FaStar></i>
                                                <i><FaStar></FaStar></i>
                                                <i><FaStar></FaStar></i>
                                                <i><FaStar></FaStar></i>
                                                <i><FaStarHalfAlt></FaStarHalfAlt></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </OwlCarousel>
                            </Row>
                        </Col>
                        <Col lg={6} md={6} sm={12}>
                            <div className='testimonial_single_thumb'>
                                <img src={require(`./image/test.jpeg`)}></img>
                            </div>
                        </Col>
                    </Row>
                </Row>
            </Container>
        </div>

        {/* *************************************************
                                Team area
        ***************************************************/}

        <div className='team_area'>
            <Container>
                <Row>
                    <Col lg={12}>
                        <div className='dreamit_section_title'>
                            <h4>ENGINEERS</h4>
                            <h1>Expert <span>Engineer</span></h1>
                        </div>
                    </Col>
                
                </Row>
            </Container>
                <Container>
                    <Row>
                        <Col lg={3} md={6} sm={12} className='mt-5'>
                            <div className='dreamit_single_team_box2'>
                                <div className='single_team_thumb'>
                                    <img src={require(`./image/team1.jpeg`)}></img>
                                    <div className='port_content_icon'>
                                        <a href='#'>
                                            <i><FaArrowsAlt></FaArrowsAlt></i>
                                        </a>
                                    </div>
                                    <div className='team_content'>
                                        <div className='team_title'>
                                            <h3><a href='#'>Resta Wany</a></h3>
                                        </div>
                                    </div>
                                    <div className='team_text'>
                                        <p>Civil Engineer</p>
                                    </div>
                                    <div className='team_share_social'>
                                        <div className='team_social_icon'>
                                            <a href='#'><FaFacebookF></FaFacebookF></a>
                                            <a href='#'><FaTwitter></FaTwitter></a>
                                            <a href='#'><FaLinkedinIn></FaLinkedinIn></a>
                                            <a href='#'><FaInstagram></FaInstagram></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col lg={3} md={6} sm={12} className='mt-5'>
                            <div className='dreamit_single_team_box2'>
                                <div className='single_team_thumb'>
                                    <img src={require(`./image/team2.jpeg`)}></img>
                                    <div className='port_content_icon'>
                                        <a href='#'>
                                            <i><FaArrowsAlt></FaArrowsAlt></i>
                                        </a>
                                    </div>
                                    <div className='team_content'>
                                        <div className='team_title'>
                                            <h3><a href='#'>Jack Martin</a></h3>
                                        </div>
                                    </div>
                                    <div className='team_text'>
                                        <p>AI Designer</p>
                                    </div>
                                    <div className='team_share_social'>
                                        <div className='team_social_icon'>
                                            <a href='#'><FaFacebookF></FaFacebookF></a>
                                            <a href='#'><FaTwitter></FaTwitter></a>
                                            <a href='#'><FaLinkedinIn></FaLinkedinIn></a>
                                            <a href='#'><FaInstagram></FaInstagram></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col lg={3} md={6} sm={12} className='mt-5'>
                            <div className='dreamit_single_team_box2'>
                                <div className='single_team_thumb'>
                                    <img src={require(`./image/team3.jpeg`)}></img>
                                    <div className='port_content_icon'>
                                        <a href='#'>
                                            <i><FaArrowsAlt></FaArrowsAlt></i>
                                        </a>
                                    </div>
                                    <div className='team_content'>
                                        <div className='team_title'>
                                            <h3><a href='#'>Amelia Daniel</a></h3>
                                        </div>
                                    </div>
                                    <div className='team_text'>
                                        <p>Civil Engineer</p>
                                    </div>
                                    <div className='team_share_social'>
                                        <div className='team_social_icon'>
                                            <a href='#'><FaFacebookF></FaFacebookF></a>
                                            <a href='#'><FaTwitter></FaTwitter></a>
                                            <a href='#'><FaLinkedinIn></FaLinkedinIn></a>
                                            <a href='#'><FaInstagram></FaInstagram></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col lg={3} md={6} sm={12} className='mt-5'>
                            <div className='dreamit_single_team_box2'>
                                <div className='single_team_thumb'>
                                    <img src={require(`./image/team4.jpeg`)} height="310px"></img>
                                    <div className='port_content_icon'>
                                        <a href='#'>
                                            <i><FaArrowsAlt></FaArrowsAlt></i>
                                        </a>
                                    </div>
                                    <div className='team_content'>
                                        <div className='team_title'>
                                            <h3><a href='#'>Rusha Shen</a></h3>
                                        </div>
                                    </div>
                                    <div className='team_text'>
                                        <p>Managing Dr.</p>
                                    </div>
                                    <div className='team_share_social'>
                                        <div className='team_social_icon'>
                                            <a href='#'><FaFacebookF></FaFacebookF></a>
                                            <a href='#'><FaTwitter></FaTwitter></a>
                                            <a href='#'><FaLinkedinIn></FaLinkedinIn></a>
                                            <a href='#'><FaInstagram></FaInstagram></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            
        </div>

        {/* **************************************************
                                Footer
        **********************************************************/}

        <div className='footer_middle'>
            <Container>
                <Row className='subscribe_bg2'>
                    <Col lg={6} md={6} sm={12}>
                        <div className='subscribe_content'>
                            <div className='subscribe_title'>
                                <h1>Sign Up To get latest Update</h1>
                                <p>Sign up for our monthly newsletter for the latest news & articles</p>
                            </div>
                        </div>
                    </Col>
                    <Col lg={6} md={6} sm={12}>
                        <div className='contact_form_box2'>
                            <form>
                                <div className='form_box2'>
                                    {/* <input type='text' placeholder='Enter your E-mail'></input> */}
                                    {/* <button>Subscribe</button> */}
                                </div>
                            </form>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col lg={4} md={6} sm={12}>
                        <div className='widget_company_info'>
                            <div className='dex_logo'>
                                <img src={require(`./image/logo.png`)}></img>
                            </div>
                            <div className='company_info_desc'>
                                <p>Founded in 2005, Sparch is specializing such as website design, brand .</p>
                            </div>
                            <div className='company_icon'>
                                <a href='#'><FaFacebookF></FaFacebookF></a>
                                <a href='#'><FaInstagram></FaInstagram></a>
                                <a href='#'><FaTwitter></FaTwitter></a>
                                <a href='#'><FaPinterestP></FaPinterestP></a>
                            </div>
                        </div>
                    </Col>
                    <Col lg={2} md={6} sm={12}>
                        <div className='widget_nav_menu'>
                            <h4 className='widget_title'>Quick Links</h4>
                            <div className='menu_quick_link_content'>
                                <ul className='menu'>
                                    <li><a href='#'><span>+</span> Portfolio</a></li>
                                    <li><a href='#'><span>+</span> About</a></li>
                                    <li><a href='#'><span>+</span> Planing</a></li>
                                    <li><a href='#'><span>+</span> Latest News</a></li>
                                    <li><a href='#'><span>+</span> Privacy Policy</a></li>
                                </ul>
                            </div>
                        </div>
                    </Col>
                    <Col lg={3} md={6} sm={12}>
                        <div className='widget_nav_menu'>
                            <h4 className='widget_title'>Help Links</h4>
                            <div className='menu_quick_link_content'>
                                <ul className='menu'>
                                    <li><a href='#'><span>+</span> Portfolio</a></li>
                                    <li><a href='#'><span>+</span> About</a></li>
                                    <li><a href='#'><span>+</span> Planing</a></li>
                                    <li><a href='#'><span>+</span> Latest News</a></li>
                                    <li><a href='#'><span>+</span> Privacy Policy</a></li>
                                </ul>
                            </div>
                        </div>
                    </Col>
                    <Col lg={3} md={6} sm={12}>
                        <div className='footer_widget_address'>
                            <h4 className='widget_title'>Contact Us</h4>
                            <div className='footer_inner'>
                                <div className='footer_social_icon'>
                                    <i><LuPhoneCall></LuPhoneCall></i>
                                </div>
                                <div className='footer_social_info'>
                                    <p>Phone Number</p>
                                    <span>+123 456 7890</span>
                                </div>
                            </div>
                            <div className='footer_inner'>
                                <div className='footer_social_icon'>
                                    <i><TfiEmail></TfiEmail></i>
                                </div>
                                <div className='footer_social_info'>
                                    <p>E-Mail</p>
                                    <span>example@gmail.com</span>
                                </div>
                            </div>
                            <div className='footer_inner'>
                                <div className='footer_social_icon'>
                                    <i><SlLocationPin></SlLocationPin></i>
                                </div>
                                <div className='footer_social_info'>
                                    <p>Location</p>
                                    <span>16/B, California, USA</span>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row className='footer_bottom'>
                    <Col lg={6} md={6} sm={12}>
                        <div className='footer_bottom_content'>
                            <p>Copyright © 2022 <span>Dream</span> Copyright © 2022 </p>
                        </div>
                    </Col>
                    <Col lg={6} md={6} sm={12}>
                        <div className='footer_bottom_menu'>
                            <p>Privacy Policy</p>
                            <span>Contact</span>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
        
       cd <div className='angle_up'>
            <a href='#angle'><i><FaArrowUpLong></FaArrowUpLong></i></a>
        </div>
    </section>
  );
}

// function Example() {
//     return (
//       <>
//         {['start', 'end', 'top', 'bottom'].map((placement, idx) => (
//           <OffCanvasExample key={idx} placement={placement} name={placement} />
//         ))}
//       </>
//     );
//   }
  
//   render(<Example />);

export default App;
