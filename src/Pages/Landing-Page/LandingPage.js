import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import {Container, Row, Col, Player} from 'react-bootstrap';
import Image from "react-bootstrap/Image";
import {LandingBanner, LoveSmiley, favorite3, favorite1, favorite5, favorite4, ProfileImage, CoupleGirl} from '../../img/index';
import '../../Component/Sass/Pages/LandingPage.scss';
import '../../Component/Sass/Style.scss';
import $ from 'jquery';

const LandingPage = () => {

  return (
    <>
      <div>
          <section className="landing-page">
              <div className="inner-div" style={{ backgroundImage: `url(${LandingBanner})` }}>
                <Container>
                    <Row>
                        <Col xs={12}>
                            <div className="heading">
                                <h2><span className="logo-first">Up</span>Scal’d </h2>
                                <p>The worlds first open dating profile</p>
                            </div>
                            <div className="smiley">
                                <Image className="img-fluid" src={LoveSmiley}/>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <div className="user-background">
                    <div className="inner-user">
                        <Image className="img-fluid" src={favorite3}/>
                        <Image className="img-fluid" src={favorite1}/>
                    </div>
                    <div className="inner-user-outer">
                        <div className="inner-img">
                            <Image className="img-fluid" src={favorite5}/>
                            <Image className="img-fluid" src={favorite4}/>
                        </div>    
                    </div>
                    <div className="main-user">
                        <div className="buttons">
                            <div className="button-mr">
                                <button className="btn button signin">SIGN IN</button>
                                <button className="btn button reserve">RESERVE YOUR PROFILE</button>
                            </div>    
                        </div>
                        <Image className="img-fluid" src={ProfileImage}/>
                    </div>
                </div>    
            </div>

            <div className="how-it-works">
                <Container>
                    <Row>
                        <Col xs={12}>
                            <div className="heading">
                                <h4>How It Works</h4>
                                <p>There are many variations of passages of Lorem Ipsum available</p>
                            </div>
                        </Col>
                        <Col xs={12}>
                            <div className="parent-step">
                                <div className="steps">
                                    <div className="step1">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="47" height="47" viewBox="0 0 47 47" fill="none">
                                            <rect width="46.8859" height="46.8859" rx="6" fill="#25A5FA"/>
                                            <path d="M29.6295 28.39H28.3922V32.1019C28.3922 32.5968 28.1447 33.0918 27.6498 33.2155C27.1549 33.463 26.66 33.3392 26.2888 32.968L21.7107 28.39H17.2564C15.1529 28.39 13.5444 26.7815 13.5444 24.678V17.2542C13.5444 15.1507 15.1529 13.5422 17.2564 13.5422H29.6295C31.7329 13.5422 33.3415 15.1507 33.3415 17.2542V24.678C33.3415 26.7815 31.7329 28.39 29.6295 28.39ZM30.8668 17.2542C30.8668 16.5118 30.3719 16.0168 29.6295 16.0168H17.2564C16.514 16.0168 16.0191 16.5118 16.0191 17.2542V24.678C16.0191 25.4204 16.514 25.9153 17.2564 25.9153H22.2056C22.5768 25.9153 22.8243 26.0391 23.0717 26.2865L25.9176 29.1324V27.1527C25.9176 26.4103 26.4125 25.9153 27.1549 25.9153H29.6295C30.3719 25.9153 30.8668 25.4204 30.8668 24.678V17.2542Z" fill="white"/>
                                            <path d="M20.9683 23.4406H18.4937V19.7287H20.9683V23.4406Z" fill="white"/>
                                            <path d="M28.3922 23.4406H25.9176V19.7287H28.3922V23.4406Z" fill="white"/>
                                        </svg>
                                        <h6>Step 1</h6>
                                    </div>    
                                    <label>View a Profile</label>
                                    <p>There are many variations of passages go of Lorem Ipsum available, but the majority have suffered alteratio me form.</p>
                                </div>
                                <div className="steps display-reverse">
                                    <div className="step1">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="47" height="47" viewBox="0 0 47 47" fill="none">
                                            <rect width="46.8859" height="46.8859" rx="6" fill="#25A5FA"/>
                                            <path d="M33.8903 19.5088C33.8903 16.6357 31.5396 14.285 28.6665 14.285H28.5359C25.4016 12.5873 21.4838 12.5873 18.3495 14.285H18.2189C15.3458 14.285 12.9951 16.6357 12.9951 19.5088C12.9951 20.0312 13.1257 20.5536 13.2563 21.0759C13.1257 21.8595 12.9951 22.6431 12.9951 23.4267C12.9951 29.1728 17.6965 33.8743 23.4427 33.8743C29.1889 33.8743 33.8903 29.1728 33.8903 23.4267C33.8903 22.6431 33.7597 21.8595 33.6291 21.0759C33.7597 20.5536 33.8903 20.0312 33.8903 19.5088ZM31.2784 19.5088C31.2784 20.9454 30.103 22.1207 28.6665 22.1207C27.23 22.1207 26.0546 20.9454 26.0546 19.5088C26.0546 18.0723 27.23 16.8969 28.6665 16.8969C30.103 16.8969 31.2784 18.0723 31.2784 19.5088ZM18.2189 16.8969C19.6555 16.8969 20.8308 18.0723 20.8308 19.5088C20.8308 20.9454 19.6555 22.1207 18.2189 22.1207C16.7824 22.1207 15.607 20.9454 15.607 19.5088C15.607 18.0723 16.7824 16.8969 18.2189 16.8969ZM23.4427 31.2624C19.2637 31.2624 15.9988 28.1281 15.607 24.0796C16.3906 24.4714 17.3047 24.7326 18.2189 24.7326C21.092 24.7326 23.4427 22.3819 23.4427 19.5088C23.4427 18.0723 22.7897 16.7663 21.8756 15.7216C22.9203 15.591 23.9651 15.591 25.0098 15.7216C24.0957 16.7663 23.4427 18.0723 23.4427 19.5088C23.4427 22.3819 25.7934 24.7326 28.6665 24.7326C29.5807 24.7326 30.4948 24.4714 31.2784 24.0796C30.8866 28.1281 27.6217 31.2624 23.4427 31.2624Z" fill="white"/>
                                            <path d="M23.4427 29.9564C25.6628 29.9564 27.3606 28.2587 27.3606 26.0386H19.5249C19.5249 28.2587 21.2226 29.9564 23.4427 29.9564Z" fill="white"/>
                                        </svg>
                                        <h6>Step 2</h6>
                                    </div>    
                                    <label>Share your profile</label>
                                    <p>There are many variations of passages go of Lorem Ipsum available, but the majority have suffered alteratio me form.</p>
                                </div>
                                <div className="steps">
                                    <div className="step1">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="47" height="47" viewBox="0 0 47 47" fill="none">
                                            <rect width="46.8859" height="46.8859" rx="6" fill="#25A5FA"/>
                                            <path d="M29.9963 26.0644C29.2099 26.0644 28.5546 26.3265 27.8993 26.7197L24.7538 24.0985V20.5597C26.3265 20.0355 27.3751 18.5938 27.3751 16.8899C27.3751 14.6618 25.6712 12.958 23.4431 12.958C21.215 12.958 19.5112 14.6618 19.5112 16.8899C19.5112 18.5938 20.5597 20.0355 22.1325 20.5597V24.0985L18.987 26.5887C18.3316 26.3266 17.6763 26.0644 16.8899 26.0644C14.6618 26.0644 12.958 27.7682 12.958 29.9963C12.958 32.2244 14.6618 33.9283 16.8899 33.9283C19.118 33.9283 20.8219 32.2244 20.8219 29.9963C20.8219 29.6031 20.6908 29.0789 20.5597 28.6857L23.4431 26.4576L26.3266 28.6857C26.1955 29.0789 26.0644 29.4721 26.0644 29.9963C26.0644 32.2244 27.7682 33.9283 29.9963 33.9283C32.2244 33.9283 33.9283 32.2244 33.9283 29.9963C33.9283 27.7682 32.2244 26.0644 29.9963 26.0644ZM16.8899 31.307C16.1035 31.307 15.5793 30.7827 15.5793 29.9963C15.5793 29.2099 16.1035 28.6857 16.8899 28.6857C17.6763 28.6857 18.2006 29.2099 18.2006 29.9963C18.2006 30.7827 17.6763 31.307 16.8899 31.307ZM23.4431 18.2006C22.6567 18.2006 22.1325 17.6763 22.1325 16.8899C22.1325 16.1035 22.6567 15.5793 23.4431 15.5793C24.2295 15.5793 24.7538 16.1035 24.7538 16.8899C24.7538 17.6763 24.2295 18.2006 23.4431 18.2006ZM29.9963 31.307C29.2099 31.307 28.6857 30.7827 28.6857 29.9963C28.6857 29.2099 29.2099 28.6857 29.9963 28.6857C30.7827 28.6857 31.307 29.2099 31.307 29.9963C31.307 30.7827 30.7827 31.307 29.9963 31.307Z" fill="white"/>
                                        </svg>
                                        <h6>Step 3</h6>
                                    </div>    
                                    <label>Find your Favorites</label>
                                    <p>There are many variations of passages go of Lorem Ipsum available, but the majority have suffered alteratio me form.</p>
                                </div>
                                <div className="photos">
                                    <Image className="img-fluid img-1" src={favorite5}/>
                                    <Image className="img-fluid img-2" src={favorite4}/>
                                    <Image className="img-fluid img-3" src={favorite1}/>
                                </div>
                                <div className="buttons">
                                    <button className="btn button">Create a Profile</button>
                                </div>
                            </div>    
                        </Col>
                    </Row>
                </Container>
            </div>

            <div className="proper-couple">
                <Container>
                    <Row>
                        <Col xs={12}>
                            <div className="heading">
                                <h4>We Make a Proper Couple</h4>
                                <p>There are many variations of passages of Lorem Ipsum available</p>
                            </div>
                            <div className="img">
                                <Image className="img-fluid" src={CoupleGirl}/>
                                <video controls>
                                    <source
                                        src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4"
                                        type="video/mp4"
                                    ></source>
                                    Sorry, your browser doesn't support videos.
                                </video>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

            <div className="">
                
            </div>
        </section>    
      </div>
    </>
  );
};

export default LandingPage;
