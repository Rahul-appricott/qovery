import React from "react";
import {Slide, SlideImage1, SlideImage2} from '../../../img/index';
import {ShareProfileHomepage, DataUser} from '../../utils/button';
import {Container, Row, Col, Image} from 'react-bootstrap';
import {PrivatePics} from '../../../Component/utils/button';
import $ from 'jquery';

import "../../Sass/Pages/homepage.scss";

export const SlideUp = () => {
    $( document ).ready(function() {
        $('.arrow').on("click", function(e) {
        e.stopImmediatePropagation();
        e.preventDefault();
        if($('.slidee').hasClass('open')){
            $('.slidee').removeClass('open');
            $('.slidee').addClass('close');
        }else{
            $('.slidee').addClass('open');
            $('.slidee').removeClass('close');
        }
        });
    });
  return (
    <>
        <div className="slidee close" style={{ backgroundImage: `url(${Slide})` }}>
            <Container>
                <Row>   
                <div className="arrow">
                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="11" viewBox="0 0 10 11" fill="none">
                        <path d="M8.5 6.25L4.75 10L1 6.25M8.5 1L4.75 4.75L1 1" stroke="#3F4156" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
                    <DataUser/>
                    <Col xs={6}>
                <div className="image-text-small">
                    <Image src={SlideImage1} className="img-fluid" />
                </div>
            </Col>

            <Col xs={6}>
                <div className="image-text-small">
                    <PrivatePics />
                    <div className="filterImage"></div>
                    <div className="text">
                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
                            <path d="M38 22H10C7.79086 22 6 23.7909 6 26V40C6 42.2091 7.79086 44 10 44H38C40.2091 44 42 42.2091 42 40V26C42 23.7909 40.2091 22 38 22Z" stroke="white" strokeWidth="1.67572" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M14 22V14C14 11.3478 15.0536 8.8043 16.9289 6.92893C18.8043 5.05357 21.3478 4 24 4C26.6522 4 29.1957 5.05357 31.0711 6.92893C32.9464 8.8043 34 11.3478 34 14V22" stroke="white" strokeWidth="1.67572" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <h4>Private</h4>
                    </div>
                    <div className="slideImage">
                        <Image src={SlideImage1} className="img-fluid" />
                    </div>
                </div>
            </Col>

            <Col xs={6}>
                <div className="image-text-small">
                    <PrivatePics />
                    <div className="filterImage"></div>
                    <div className="text">
                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
                            <path d="M38 22H10C7.79086 22 6 23.7909 6 26V40C6 42.2091 7.79086 44 10 44H38C40.2091 44 42 42.2091 42 40V26C42 23.7909 40.2091 22 38 22Z" stroke="white" strokeWidth="1.67572" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M14 22V14C14 11.3478 15.0536 8.8043 16.9289 6.92893C18.8043 5.05357 21.3478 4 24 4C26.6522 4 29.1957 5.05357 31.0711 6.92893C32.9464 8.8043 34 11.3478 34 14V22" stroke="white" strokeWidth="1.67572" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <h4>Private</h4>
                    </div>
                    <div className="slideImage">
                        <Image src={SlideImage1} className="img-fluid" />
                    </div>
                </div>
            </Col>

            <Col xs={6}>
                <div className="image-text-small">
                    <PrivatePics />
                    <div className="filterImage"></div>
                    <div className="text">
                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
                            <path d="M38 22H10C7.79086 22 6 23.7909 6 26V40C6 42.2091 7.79086 44 10 44H38C40.2091 44 42 42.2091 42 40V26C42 23.7909 40.2091 22 38 22Z" stroke="white" strokeWidth="1.67572" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M14 22V14C14 11.3478 15.0536 8.8043 16.9289 6.92893C18.8043 5.05357 21.3478 4 24 4C26.6522 4 29.1957 5.05357 31.0711 6.92893C32.9464 8.8043 34 11.3478 34 14V22" stroke="white" strokeWidth="1.67572" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <h4>Private</h4>
                    </div>
                    <div className="slideImage">
                        <Image src={SlideImage1} className="img-fluid" />
                    </div>
                </div>
            </Col>
                    <Col xs={12}>
                        <div className="share-button">
                            <ShareProfileHomepage/>
                        </div>    
                    </Col>

                    <Col lg={12}>
                        <div className="image-text">
                            <div className="text">
                                <svg xmlns="http://www.w3.org/2000/svg" width="38" height="48" viewBox="0 0 38 48" fill="none">
                                    <path d="M8.43091 10.1605C8.25659 10.3348 8.15625 10.5769 8.15625 10.8234C8.15625 11.0709 8.25659 11.3119 8.43091 11.4862C8.60522 11.6605 8.84729 11.7609 9.09375 11.7609C9.34131 11.7609 9.58228 11.6605 9.75659 11.4862C9.93091 11.3119 10.0312 11.0709 10.0312 10.8234C10.0312 10.5769 9.93091 10.3348 9.75659 10.1605C9.58228 9.98621 9.34131 9.88586 9.09375 9.88586C8.84729 9.88586 8.60522 9.98621 8.43091 10.1605Z" fill="white"/>
                                    <path d="M34.5641 9.88623H12.8438C12.3259 9.88623 11.9063 10.3059 11.9063 10.8237C11.9063 11.3416 12.3259 11.7612 12.8438 11.7612H34.5641C35.3558 11.7612 36 12.405 36 13.1968V32.4375H29.7693C29.2515 32.4375 28.8318 32.8572 28.8318 33.375C28.8318 33.8928 29.2515 34.3125 29.7693 34.3125H36V34.7516C36 35.5433 35.3558 36.1875 34.5641 36.1875H7.18396C6.96314 36.1875 6.74927 36.2655 6.58008 36.408L1.875 40.37V13.1968C1.875 12.405 2.51917 11.7612 3.31091 11.7612H5.34412C5.86157 11.7612 6.28162 11.3416 6.28162 10.8237C6.28162 10.3059 5.86157 9.88623 5.34412 9.88623H3.31091C1.48535 9.88623 0 11.3712 0 13.1968V42.3853C0 42.75 0.211304 43.0814 0.541992 43.2352C0.668335 43.2938 0.803101 43.3228 0.937134 43.3228C1.1543 43.3228 1.3689 43.2473 1.54138 43.1023L7.526 38.0625H34.5641C36.3897 38.0625 37.875 36.5771 37.875 34.7516V13.1968C37.875 11.3712 36.3897 9.88623 34.5641 9.88623V9.88623Z" fill="white"/>
                                    <path d="M18.9375 6.55957C19.4553 6.55957 19.875 6.13989 19.875 5.62207V0.9375C19.875 0.419678 19.4553 0 18.9375 0C18.4197 0 18 0.419678 18 0.9375V5.62207C18 6.13989 18.4197 6.55957 18.9375 6.55957Z" fill="white"/>
                                    <path d="M26.0034 6.94006C26.2437 6.94006 26.4832 6.84851 26.6663 6.66541L29.9438 3.38818C30.3101 3.02197 30.3101 2.42834 29.9438 2.06213C29.5776 1.69592 28.984 1.69592 28.6178 2.06213L25.3406 5.33936C24.9744 5.70557 24.9744 6.29919 25.3406 6.66541C25.5237 6.84851 25.7636 6.94006 26.0034 6.94006Z" fill="white"/>
                                    <path d="M11.2085 6.65918C11.3916 6.84229 11.6315 6.93384 11.8713 6.93384C12.1112 6.93384 12.3511 6.84229 12.5342 6.65918C12.9004 6.29297 12.9004 5.69934 12.5342 5.33313L9.25659 2.05591C8.89075 1.6897 8.29712 1.6897 7.93091 2.05591C7.5647 2.42212 7.5647 3.01538 7.93091 3.38159L11.2085 6.65918Z" fill="white"/>
                                    <path d="M18.9375 41.4404C18.4197 41.4404 18 41.8601 18 42.3779V47.0625C18 47.5803 18.4197 48 18.9375 48C19.4553 48 19.875 47.5803 19.875 47.0625V42.3779C19.875 41.8601 19.4553 41.4404 18.9375 41.4404Z" fill="white"/>
                                    <path d="M26.6663 41.3346C26.3 40.9684 25.7068 40.9684 25.3406 41.3346C24.9744 41.7008 24.9744 42.2944 25.3406 42.6606L28.6178 45.9379C28.8009 46.121 29.0408 46.2125 29.2806 46.2125C29.5209 46.2125 29.7607 46.121 29.9438 45.9379C30.3097 45.5717 30.3097 44.978 29.9438 44.6118L26.6663 41.3346Z" fill="white"/>
                                    <path d="M11.2085 41.3408L7.93091 44.6184C7.5647 44.9846 7.5647 45.5779 7.93091 45.9441C8.11401 46.1272 8.35388 46.2188 8.59375 46.2188C8.83362 46.2188 9.07349 46.1272 9.25659 45.9441L12.5342 42.6669C12.9004 42.3007 12.9004 41.707 12.5342 41.3408C12.168 40.9746 11.5747 40.9746 11.2085 41.3408Z" fill="white"/>
                                    <path d="M27.5547 23.4049C27.5547 20.948 25.5563 18.9496 23.0994 18.9496H21.0654C20.548 18.9496 20.1279 19.3693 20.1279 19.8871V28.1371C20.1279 28.6545 20.548 29.0746 21.0654 29.0746H23.0994C25.5559 29.0746 27.5547 27.0758 27.5547 24.6189V23.4049ZM25.6797 24.6189C25.6797 26.042 24.5221 27.1996 23.0994 27.1996H22.0029V20.8246H23.0994C24.5221 20.8246 25.6797 21.9818 25.6797 23.4049V24.6189Z" fill="white"/>
                                    <path d="M11.1622 25.481L10.3693 27.8379C10.2042 28.3286 10.4678 28.8603 10.9586 29.0255C11.45 29.1907 11.981 28.9266 12.1462 28.4359L12.7314 26.6968H15.3359L15.9211 28.4359C16.0525 28.8274 16.4177 29.0746 16.8095 29.0746C16.9087 29.0746 17.0095 29.0588 17.1083 29.0255C17.5991 28.8603 17.8631 28.3286 17.6979 27.8379L14.9221 19.5879C14.7939 19.2063 14.4361 18.9496 14.0336 18.9496C13.6312 18.9496 13.2734 19.2063 13.1452 19.5879L11.1629 25.4791C11.1625 25.4799 11.1622 25.4802 11.1622 25.481V25.481ZM14.0336 22.8267L14.7049 24.8218H13.3624L14.0336 22.8267Z" fill="white"/>
                                    <path d="M25.4033 32.7122C25.229 32.8865 25.1287 33.1285 25.1287 33.375C25.1287 33.6226 25.229 33.8635 25.4033 34.0378C25.578 34.2122 25.8197 34.3125 26.0662 34.3125C26.313 34.3125 26.5547 34.2122 26.729 34.0378C26.9033 33.8635 27.0037 33.6215 27.0037 33.375C27.0037 33.1285 26.9033 32.8865 26.729 32.7122C26.5547 32.5378 26.313 32.4375 26.0662 32.4375C25.8197 32.4375 25.5776 32.5378 25.4033 32.7122Z" fill="white"/>
                                </svg>
                                <h4 className="mt-3">Sponsored By Brands AD</h4>
                            </div>
                            <div className="slideImage">
                                <Image src={SlideImage2} className="img-fluid"/>
                            </div>
                        </div>    
                    </Col>
                </Row>
            </Container>
      </div>
    </>
  );
};