import React from "react";
import {Image14} from '../../img/index';
import {Container, Row, Col, ProgressBar} from 'react-bootstrap';
import '../../Component/Sass/Pages/homepage.scss';

const Status = () => {
  return (
    <>
        <div className="status" style={{ backgroundImage: `url(${Image14})` }}>
            <Container>
                <Row>
                    <Col xs={12}>
                        <div className="progressDiv">
                            <ProgressBar now={60} />
                        </div>
                        <div className="progressName">
                            <div className="name">
                                <h4>Brooklyn</h4>
                            </div>
                            <div className="time">
                                <p>14 Hours Ago</p>
                            </div>    
                        </div>
                        <div className="heart">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                            <g filter="url(#filter0_d_5_6559)">
                                    <path d="M24.4578 9.54219C23.9691 9.05327 23.3889 8.66542 22.7503 8.40081C22.1117 8.1362 21.4272 8 20.7359 8C20.0446 8 19.3601 8.1362 18.7215 8.40081C18.0829 8.66542 17.5026 9.05327 17.0139 9.54219L15.9997 10.5564L14.9855 9.54219C13.9984 8.55507 12.6596 8.00051 11.2636 8.00051C9.86761 8.00051 8.52879 8.55507 7.54168 9.54219C6.55456 10.5293 6 11.8681 6 13.2641C6 14.6601 6.55456 15.9989 7.54168 16.9861L8.55588 18.0003L15.9997 25.4441L23.4436 18.0003L24.4578 16.9861C24.9467 16.4974 25.3346 15.9171 25.5992 15.2785C25.8638 14.6399 26 13.9554 26 13.2641C26 12.5728 25.8638 11.8883 25.5992 11.2497C25.3346 10.6111 24.9467 10.0309 24.4578 9.54219V9.54219Z" stroke="#F78000" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round" shape-rendering="crispEdges"/>
                                </g>
                                <defs>
                                    <filter id="filter0_d_5_6559" x="1" y="3" width="30" height="27.4441" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                        <feOffset/>
                                        <feGaussianBlur stdDeviation="2"/>
                                        <feComposite in2="hardAlpha" operator="out"/>
                                        <feColorMatrix type="matrix" values="0 0 0 0 0.94902 0 0 0 0 0.490196 0 0 0 0 0.00392157 0 0 0 0.2 0"/>
                                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_5_6559"/>
                                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_5_6559" result="shape"/>
                                    </filter>
                                </defs>
                            </svg>
                        </div>      
                    </Col>
                </Row>
            </Container>
        </div>
    </>
  );
};

export default Status;