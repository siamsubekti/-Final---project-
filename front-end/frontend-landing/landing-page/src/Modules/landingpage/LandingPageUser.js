import React from 'react';
import AuthService from "../signin/service/AuthService";
import * as AlertConstant from '../../Constant/AlertConstant';
import {Link} from 'react-router-dom'
import './Styles/Style.css';
import Ship from '../../images/ship.jpg';
import Plane from '../../images/plane.jpg';
import ModalLoginUser from '../signin/ModalLoginUser';
import * as LandingPageService from './service/LandingPageService';
import {connect} from "react-redux";
import Custom from "../../images/fast.jpg";
import Storage from "../../images/storage.jpg";


class LandingPageUser extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            redirect: false
        }
    }

    handleTracking = (event) => {
        event.preventDefault();
        LandingPageService.findTrackById(this.props.trackNumber).then(res => {
                this.props.dispatch({type: 'TRACK_SUCCESS', transactions: res});
                this.setState({redirect: true});
                window.location.href = '#tracking';
            }
        ).catch(err => window.location.reload());
        console.log("NUMBER", this.state);
    };

    handleChangeTrackNumber = (event) => {
        const number = event.target.value;
        console.log("NUMBER", this.props);
        this.props.dispatch({type: 'HANDLE_TRACK_NUMBER', trackNumber: number})
    }

    handleLogout = () => {
        AuthService.logOut().then(r => AlertConstant.status_success_200("Logout Success")
        );
    };

    render() {
        return (
            <div className="App">
                <div className="site-wrap" id="home-section">
                    <div className="site-mobile-menu site-navbar-target">
                        <div className="site-mobile-menu-header">
                            <div className="site-mobile-menu-close mt-3">
                                <span className="icon-close2 js-menu-toggle"></span>
                            </div>
                        </div>
                        <div className="site-mobile-menu-body"></div>
                    </div>
                    <header className="site-navbar js-sticky-header site-navbar-target" role="banner">

                        <div className="container">
                            <div className="row align-items-center position-relative">


                                <div className="site-logo">
                                    <a href={"/"} className="text-black"><span
                                        className="text-primary">GED</span></a>
                                </div>

                                <div className="col-12">
                                    <nav className="site-navigation text-right ml-auto " role="navigation">
                                        <div className="dropdown show">

                                            <ul className="site-menu main-menu js-clone-nav ml-auto d-none d-lg-block">
                                                <li><a href="#home-section" className="nav-link">Home</a></li>
                                                <li><a href="#services-section" className="nav-link">Services</a>
                                                </li>


                                                <li className="has-children">
                                                    <a href="#about-section" className="nav-link">About Us</a>
                                                    <ul className="dropdown arrow-top">
                                                        <li><a href="#team-section" className="nav-link">Team</a>
                                                        </li>
                                                        <li><a href="#faq-section" className="nav-link">FAQ</a></li>
                                                    </ul>

                                                </li>

                                                <li><a href="#why-us-section" className="nav-link">Why Us</a></li>

                                                <li><a href="#testimonials-section"
                                                       className="nav-link">Testimonials</a>
                                                </li>
                                                <li>
                                                    <a href="http://localhost:3000" onClick={this.handleLogout}
                                                       className="nav-link">Logout</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </nav>

                                </div>

                                <div className="toggle-button d-inline-block d-lg-none"><a href="#"
                                                                                           className="site-menu-toggle py-5 js-menu-toggle text-black"><span
                                    className="icon-menu h3"></span></a></div>

                            </div>
                        </div>

                    </header>

                    <div className="ftco-blocks-cover-1">
                        <div className="ftco-cover-1 overlay"
                             style={{backgroundImage: `url('https://source.unsplash.com/pSyfecRCBQA/1920x780')`}}>
                            <div className="container">
                                <div className="row align-items-center">
                                    <div className="col-lg-6">
                                        <h1>Choose Your Quality Delivery of Your Expedition and Dropshipping</h1>
                                        <p className="mb-5">GED is a company engaged in shipping and logistics
                                            headquartered in Jakarta, Indonesia.
                                            The official name is Golden expedition and dropshipping</p>
                                        <form action="#">
                                            <div className="form-group d-flex">
                                                <input type="text" className="form-control"
                                                       placeholder="Enter your tracking number"
                                                       onChange={this.handleChangeTrackNumber}/>
                                                <button type="submit" className="btn btn-primary text-white px-4"
                                                        onClick={this.handleTracking}>track
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="ftco-service-image-1 pb-5">
                            <div className="container">
                                <div className="owl-carousel owl-all">
                                    <div className="service text-center">
                                        <a href="#"><img src={Custom} alt="Image"
                                                         className="img-fluid" style={{height: '225px'}}/></a>
                                        <div className="px-md-3">
                                            <h3 className="text-primary">Fast Delivery</h3>
                                            <p>The service that we prioritize for customers is speed in shipping
                                                packages.</p>
                                        </div>
                                    </div>
                                    <div className="service text-center">
                                        <a href="#"><img src="images/cargo_delivery_small.jpg" alt="Image"
                                                         className="img-fluid" style={{height: '225px'}}/></a>
                                        <div className="px-md-3">
                                            <h3 className="text-primary">Package Forwarding</h3>
                                            <p>We guarantee the package will definitely reach the customer's hands.</p>
                                        </div>
                                    </div>
                                    <div className="service text-center">
                                        <a href="#"><img src={Storage} alt="Image"
                                                         className="img-fluid"
                                                         style={{height: '225px'}}/></a>
                                        <div className="px-md-3">
                                            <h3 className="text-primary">Storage Point</h3>
                                            <p>We provide a lot of storage points scattered throughout Jakarta.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>


                    <div className="site-section bg-light" id="tracking">
                        <div className="container">
                            <div className="row mb-5 justify-content-center">
                                <div className="col-md-7 text-center">
                                    <div className="block-heading-1">
                                        <h2>Packages Tracking</h2>
                                        <div className="card o-hidden border-0 shadow-lg my-5 card">
                                            <div className="card-title">
                                                <p className="title-detail">Tracking Details</p>
                                            </div>
                                            <div className="card-body p-0">
                                                <div className="detail-card">
                                                    <div className="form-group row detail">
                                                        <div className="col-sm-4">
                                                            <label>Tracking Number</label>
                                                        </div>
                                                        <div className="col-1">
                                                            <label>:</label>
                                                        </div>
                                                        <div className="col-sm-4">
                                                            <label>{this.props.transactions.id}</label>
                                                        </div>
                                                    </div>
                                                    <div className="form-group row detail">
                                                        <div className="col-sm-4">
                                                            <label className="text-detail">Consignee</label>
                                                        </div>
                                                        <div className="col-1">
                                                            <label>:</label>
                                                        </div>
                                                        <div className="col-sm-1">
                                                            <label>{this.props.transactions.destinationName}</label>
                                                        </div>
                                                    </div>
                                                    <div className="form-group row detail">
                                                        <div className="col-sm-4">
                                                            <label className="text-detail">Destination</label>
                                                        </div>
                                                        <div className="col-1">
                                                            <label>:</label>
                                                        </div>
                                                        <div className="col-sm-1">
                                                            <label>{this.props.transactions.destinationAddresses.addressLocations.name}</label>
                                                        </div>
                                                    </div>
                                                    <div className="form-group row detail">
                                                        <div className="col-sm-4">
                                                            <label className="text-detail">Time</label>
                                                        </div>
                                                        <div className="col-1">
                                                            <label>:</label>
                                                        </div>
                                                        <div className="col-1">
                                                            <label>{this.props.transactions.createTime}</label>
                                                        </div>
                                                    </div>
                                                    <div className="form-group row detail">
                                                        <div className="col-sm-4">
                                                            <label className="text-detail">Status</label>
                                                        </div>
                                                        <div className="col-1">
                                                            <label>:</label>
                                                        </div>
                                                        <div className="col-sm-1">
                                                            <label>{this.props.transactions.status}</label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="site-section bg-light" id="services-section">
                        <div className="container">
                            <div className="row mb-5 justify-content-center">
                                <div className="col-md-7 text-center">
                                    <div className="block-heading-1">
                                        <h2>What We Offer</h2>
                                        <p>Enjoy convenience with Golden Expedition and Dropshipping (GED).</p>
                                    </div>
                                </div>
                            </div>
                            <div className="owl-carousel owl-all">
                                <div className="block__35630">
                                    <div className="icon mb-0">
                                        <span className="flaticon-box"></span>
                                    </div>
                                    <h3 className="mb-3">Package Forwarding</h3>
                                    <p>We guarantee the package will definitely reach the customer's hands flawless and
                                        ontime. </p>
                                </div>

                                <div className="block__35630">
                                    <div className="icon mb-0">
                                        <span className="flaticon-lorry"></span>
                                    </div>
                                    <h3 className="mb-3">Trucking</h3>
                                    <p>We deliver consumer packages using trucks, with consumer package trucks delivered
                                        very safely. </p>
                                </div>


                                <div className="block__35630">
                                    <div className="icon mb-0">
                                        <span className="flaticon-add"></span>
                                    </div>
                                    <h3 className="mb-3">Delivery</h3>
                                    <p>The service that we prioritize for customers is speed in shipping packages. </p>
                                </div>

                            </div>
                        </div>
                    </div>


                    <div className="site-section">

                        <div className="container">
                            <div className="row mb-5 justify-content-center">
                                <div className="col-md-7 text-center">
                                    <div className="block-heading-1" data-aos="fade-up" data-aos-delay="">
                                        <h2>About Us</h2>
                                        <p></p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>


                    <div className="site-section bg-light" id="about-section">
                        <div className="container">
                            <div className="row justify-content-center mb-4 block-img-video-1-wrap">
                                <div className="col-md-12 mb-5">
                                    <figure className="block-img-video-1" data-aos="fade">
                                        <a href="https://www.youtube.com/watch?v=MXc7Qwpdzis" data-fancybox
                                           data-ratio="2">
                                            <span className="icon"><span className="icon-play"></span></span>
                                            <img src="images/cargo_delivery_big.jpg" alt="Image"
                                                 className="img-fluid"/>
                                        </a>
                                    </figure>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <div className="row">
                                        <div className="col-6 col-md-6 mb-4 col-lg-0 col-lg-3"
                                             data-aos="fade-up"
                                             data-aos-delay="">
                                            <div className="block-counter-1">
                                                <span className="number"><span data-number="50">0</span>+</span>
                                                <span className="caption">Years of Experience</span>
                                            </div>
                                        </div>
                                        <div className="col-6 col-md-6 mb-4 col-lg-0 col-lg-3"
                                             data-aos="fade-up"
                                             data-aos-delay="100">
                                            <div className="block-counter-1">
                                                        <span className="number"><span
                                                            data-number="300">0</span>+</span>
                                                <span className="caption">Companies</span>
                                            </div>
                                        </div>
                                        <div className="col-6 col-md-6 mb-4 col-lg-0 col-lg-3"
                                             data-aos="fade-up"
                                             data-aos-delay="200">
                                            <div className="block-counter-1">
                                                        <span className="number"><span
                                                            data-number="108">0</span>+</span>
                                                <span className="caption">Covered Countries</span>
                                            </div>
                                        </div>
                                        <div className="col-6 col-md-6 mb-4 col-lg-0 col-lg-3"
                                             data-aos="fade-up"
                                             data-aos-delay="300">
                                            <div className="block-counter-1">
                                                        <span className="number"><span
                                                            data-number="1500">0</span>+</span>
                                                <span className="caption">Couriers</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="site-section" id="team-section">
                        <div className="container">
                            <div className="row mb-5 justify-content-center">
                                <div className="col-md-7 text-center">
                                    <div className="block-heading-1" data-aos="fade-up" data-aos-delay="">
                                        <h2>Our Staff</h2>
                                        <p>Below are the names of our staff who work at Golden Expedition and
                                            Dropshipping (GED).</p>
                                    </div>
                                </div>
                            </div>

                            <div className="owl-carousel owl-all">
                                <div className="block-team-member-1 text-center rounded h-100">
                                    <figure>
                                        <img src="images/tri.jpeg" alt="Image"
                                             className="img-fluid rounded-circle"/>
                                    </figure>
                                    <h3 className="font-size-20 text-black">Trisiam Subekti</h3>
                                    <span
                                        className="d-block font-gray-5 letter-spacing-1 text-uppercase font-size-12 mb-3">Backend Dev & Mobile Dev</span>
                                    <p className="mb-4">The person responsible for running the GED application
                                        features..</p>
                                    <div className="block-social-1">
                                        <a href="#"
                                           className="btn border-w-2 rounded primary-primary-outline--hover"><span
                                            className="icon-facebook"></span></a>
                                        <a href="#"
                                           className="btn border-w-2 rounded primary-primary-outline--hover"><span
                                            className="icon-twitter"></span></a>
                                        <a href="#"
                                           className="btn border-w-2 rounded primary-primary-outline--hover"><span
                                            className="icon-instagram"></span></a>
                                    </div>
                                </div>

                                <div className="block-team-member-1 text-center rounded h-100">
                                    <figure>
                                        <img src="images/elda.jpeg" alt="Image"
                                             className="img-fluid rounded-circle"/>
                                    </figure>
                                    <h3 className="font-size-20 text-black">Elda Oktaviani</h3>
                                    <span
                                        className="d-block font-gray-5 letter-spacing-1 text-uppercase font-size-12 mb-3">Frontend Dev</span>
                                    <p className="mb-4">The person in charge of the GED web application user
                                        interface.</p>
                                    <div className="block-social-1">
                                        <a href="#"
                                           className="btn border-w-2 rounded primary-primary-outline--hover"><span
                                            className="icon-facebook"></span></a>
                                        <a href="#"
                                           className="btn border-w-2 rounded primary-primary-outline--hover"><span
                                            className="icon-twitter"></span></a>
                                        <a href="#"
                                           className="btn border-w-2 rounded primary-primary-outline--hover"><span
                                            className="icon-instagram"></span></a>
                                    </div>
                                </div>

                                <div className="block-team-member-1 text-center rounded h-100">
                                    <figure>
                                        <img src="images/zebua.jpeg" alt="Image"
                                             className="img-fluid rounded-circle"/>
                                    </figure>
                                    <h3 className="font-size-20 text-black">Putri Zebua</h3>
                                    <span
                                        className="d-block font-gray-5 letter-spacing-1 text-uppercase font-size-12 mb-3">Mobile Dev</span>
                                    <p className="mb-4">The person in charge of the ged application.</p>
                                    <div className="block-social-1">
                                        <a href="#"
                                           className="btn border-w-2 rounded primary-primary-outline--hover"><span
                                            className="icon-facebook"></span></a>
                                        <a href="#"
                                           className="btn border-w-2 rounded primary-primary-outline--hover"><span
                                            className="icon-twitter"></span></a>
                                        <a href="#"
                                           className="btn border-w-2 rounded primary-primary-outline--hover"><span
                                            className="icon-instagram"></span></a>
                                    </div>
                                </div>

                                <div className="block-team-member-1 text-center rounded h-100">
                                    <figure>
                                        <img src="images/fira.jpeg" alt="Image"
                                             className="img-fluid rounded-circle"/>
                                    </figure>
                                    <h3 className="font-size-20 text-black">Safira Andjani</h3>
                                    <span
                                        className="d-block font-gray-5 letter-spacing-1 text-uppercase font-size-12 mb-3">Mobile Dev</span>
                                    <p className="mb-4">The person in charge of the ged application.</p>
                                    <div className="block-social-1">
                                        <a href="#"
                                           className="btn border-w-2 rounded primary-primary-outline--hover"><span
                                            className="icon-facebook"></span></a>
                                        <a href="#"
                                           className="btn border-w-2 rounded primary-primary-outline--hover"><span
                                            className="icon-twitter"></span></a>
                                        <a href="#"
                                           className="btn border-w-2 rounded primary-primary-outline--hover"><span
                                            className="icon-instagram"></span></a>
                                    </div>
                                </div>

                                <div className="block-team-member-1 text-center rounded h-100">
                                    <figure>
                                        <img src="images/fiqpar.jpeg" alt="Image"
                                             className="img-fluid rounded-circle"/>
                                    </figure>
                                    <h3 className="font-size-20 text-black">Fiqri Pratama</h3>
                                    <span
                                        className="d-block font-gray-5 letter-spacing-1 text-uppercase font-size-12 mb-3">Frontend Dev</span>
                                    <p className="mb-4">The person in charge of the GED web application user
                                        interface.</p>
                                    <div className="block-social-1">
                                        <a href="#"
                                           className="btn border-w-2 rounded primary-primary-outline--hover"><span
                                            className="icon-facebook"></span></a>
                                        <a href="#"
                                           className="btn border-w-2 rounded primary-primary-outline--hover"><span
                                            className="icon-twitter"></span></a>
                                        <a href="#"
                                           className="btn border-w-2 rounded primary-primary-outline--hover"><span
                                            className="icon-instagram"></span></a>
                                    </div>
                                </div>

                            </div>


                        </div>
                    </div>

                    <div className="site-section" id="faq-section">
                        <div className="container">
                            <div className="row mb-5">
                                <div className="block-heading-1 col-12 text-center">
                                    <h2>Frequently Ask Questions</h2>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-6">

                                    <div className="mb-5" data-aos="fade-up" data-aos-delay="100">
                                        <h3 className="text-black h4 mb-4"><span
                                            className="icon-question_answer text-primary mr-2"></span>Can I change the
                                            shipping address / telephone number?</h3>
                                        <p>For additional addresses, our Customer Support team is ready to assist
                                            you. </p>
                                    </div>

                                    <div className="mb-5" data-aos="fade-up" data-aos-delay="100">
                                        <h3 className="text-black h4 mb-4"><span
                                            className="icon-question_answer text-primary mr-2"></span>GED operational
                                            hours?</h3>
                                        <p>We pick up and deliver packages from Monday-Sunday, 9: 00-21: 00. Storage
                                            Point open Everyday 24 x 7</p>
                                    </div>

                                </div>
                                <div className="col-lg-6">

                                    <div className="mb-5" data-aos="fade-up" data-aos-delay="100">
                                        <h3 className="text-black h4 mb-4"><span
                                            className="icon-question_answer text-primary mr-2"></span>How do I send a
                                            package??</h3>
                                        <p>Please come to the nearest GED post. </p>
                                    </div>

                                    <div className="mb-5" data-aos="fade-up" data-aos-delay="100">
                                        <h3 className="text-black h4 mb-4"><span
                                            className="icon-question_answer text-primary mr-2"></span>How do I track the
                                            position of my package?</h3>
                                        <p>You can enter the transaction code in the search box when logging in on the
                                            web or mobile application.</p>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="block__73694 site-section border-top" id="why-us-section">
                        <div className="container">
                            <div className="row d-flex no-gutters align-items-stretch">

                                <div className="col-12 col-lg-6 block__73422 order-lg-2" data-aos="fade-left"
                                     style={{backgroundImage: `url('https://images.unsplash.com/photo-1573376670774-4427757f7963?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80')`}}
                                     data-aos-delay="">
                                </div>

                                <div className="col-lg-5 mr-auto p-lg-5 mt-4 mt-lg-0 order-lg-1"
                                     data-aos="fade-right"
                                     data-aos-delay="">
                                    <h2 className="mb-4 text-black">Why Us</h2>
                                    <h4 className="text-primary">We work quickly and efficiently!</h4>
                                    <p>GED as one of the shipping expedition services in Jakarta dares to claim that
                                        we are the best expedition service in Jakarta. Our motto is for customers to be
                                        satisfied with our services.</p>

                                    <ul className="ul-check primary list-unstyled mt-5">
                                        <li>Cargo express</li>
                                        <li>Secure Services</li>
                                        <li>Secure Warehouseing</li>
                                        <li>Cost savings</li>
                                        <li>Proven by great companies</li>
                                    </ul>

                                </div>

                            </div>
                        </div>
                    </div>


                    <div className="site-section bg-light block-13" id="testimonials-section" data-aos="fade">
                        <div className="container">

                            <div className="text-center mb-5">
                                <div className="block-heading-1">
                                    <h2>Happy Clients</h2>
                                </div>
                            </div>

                            <div className="owl-carousel nonloop-block-13">
                                <div>
                                    <div className="block-testimony-1 text-center">

                                        <blockquote className="mb-4">
                                            <p>&ldquo;The Big Oxmox advised her not to do so, because there were
                                                thousands
                                                of bad Commas, wild Question Marks and devious Semikoli, but the
                                                Little
                                                Blind Text didn’t listen. She packed her seven versalia, put her
                                                initial
                                                into the belt
                                                and made herself on the way.&rdquo;</p>
                                        </blockquote>

                                        <figure>
                                            <img src="images/person_4.jpg" alt="Image"
                                                 className="img-fluid rounded-circle mx-auto"/>
                                        </figure>
                                        <h3 className="font-size-20 text-black">Ricky Fisher</h3>
                                    </div>
                                </div>

                                <div>
                                    <div className="block-testimony-1 text-center">
                                        <blockquote className="mb-4">
                                            <p>&ldquo;Even the all-powerful Pointing has no control about the
                                                blind
                                                texts it
                                                is an almost unorthographic life One day however a small line of
                                                blind
                                                text
                                                by the name of Lorem Ipsum decided to leave for the far World of
                                                Grammar.&rdquo;</p>
                                        </blockquote>
                                        <figure>
                                            <img src="images/person_2.jpg" alt="Image"
                                                 className="img-fluid rounded-circle mx-auto"/>
                                        </figure>
                                        <h3 className="font-size-20 mb-4 text-black">Ken Davis</h3>

                                    </div>
                                </div>

                                <div>
                                    <div className="block-testimony-1 text-center">


                                        <blockquote className="mb-4">
                                            <p>&ldquo;A small river named Duden flows by their place and
                                                supplies it
                                                with
                                                the necessary regelialia. It is a paradisematic country, in
                                                which
                                                roasted
                                                parts of sentences fly into your mouth.&rdquo;</p>
                                        </blockquote>

                                        <figure>
                                            <img src="images/person_1.jpg" alt="Image"
                                                 className="img-fluid rounded-circle mx-auto"/>
                                        </figure>
                                        <h3 className="font-size-20 text-black">Mellisa Griffin</h3>


                                    </div>
                                </div>

                                <div>
                                    <div className="block-testimony-1 text-center">
                                        <blockquote className="mb-4">
                                            <p>&ldquo;Far far away, behind the word mountains, far from the
                                                countries
                                                Vokalia and Consonantia, there live the blind texts. Separated
                                                they
                                                live
                                                in
                                                Bookmarksgrove right at the coast of the Semantics, a large
                                                language
                                                ocean.&rdquo;</p>
                                        </blockquote>

                                        <figure>
                                            <img src="images/person_3.jpg" alt="Image"
                                                 className="img-fluid rounded-circle mx-auto"/>
                                        </figure>
                                        <h3 className="font-size-20 mb-4 text-black">Robert Steward</h3>

                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    <footer className="site-footer">
                        <h5>
                            @Copyright Semicolon Squad 2019
                        </h5>
                    </footer>
                </div>
                <ModalLoginUser/>
            </div>

        )
    }
}

function mapStateToProps(state) {
    return {...state.landingPage}
}

export default connect(mapStateToProps)(LandingPageUser);
