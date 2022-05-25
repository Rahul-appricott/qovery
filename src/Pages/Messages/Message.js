import React from 'react';
import {MessageHeader} from '../../Component/Header/Header';
import {Container, Row, Col } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import {favorite1, favorite2, favorite3, favorite4, favorite5, HappyEmoji} from '../../img/index';
import {NavLink} from 'react-router-dom';
import '../../Component/Sass/Pages/message.scss';

const Message = () =>{
    return(
        <>
            <div className="message">
                <MessageHeader/>
                <Container>
                    <Row>
                        <Col xs={12}>
                            <div className="inner-section">
                                <div className="message-tile">
                                    <NavLink to="#">
                                        <div className="image">
                                            <Image src={favorite5} className="img-fluid"/>
                                        </div>
                                        <div className="text">
                                            <h4>Leslie</h4>
                                            <p>Hi, How are you Jenny wilson
                                                <span className="mx-1">
                                                    <Image className="img-fluid" src={HappyEmoji}/>
                                                </span>
                                            </p>
                                        </div>
                                        <div className="notification">
                                            <label>06:42 AM</label>
                                            <p>1</p>
                                        </div>
                                    </NavLink>    
                                </div>

                                <div className="message-tile">
                                    <NavLink to="#">
                                        <div className="image">
                                            <Image src={favorite4} className="img-fluid"/>
                                        </div>
                                        <div className="text">
                                            <h4>Cameron</h4>
                                            <p>Hi, How are you Jenny wilson
                                                <span className="mx-1">
                                                    <Image className="img-fluid" src={HappyEmoji}/>
                                                </span>
                                            </p>
                                        </div>
                                        <div className="notification">
                                            <label>06:42 AM</label>
                                            <p>4</p>
                                        </div>
                                    </NavLink>    
                                </div>

                                <div className="message-tile">
                                    <NavLink to="#">
                                        <div className="image">
                                            <Image src={favorite3} className="img-fluid"/>
                                        </div>
                                        <div className="text">
                                            <h4>Courtney</h4>
                                            <p>Hi, How are you Jenny wilson
                                                <span className="mx-1">
                                                    <Image className="img-fluid" src={HappyEmoji}/>
                                                </span>
                                            </p>
                                        </div>
                                        <div className="notification">
                                            <label>06:42 AM</label>
                                            <p>2</p>
                                        </div>
                                    </NavLink>    
                                </div>

                                <div className="message-tile">
                                    <NavLink to="#">
                                        <div className="image">
                                            <Image src={favorite2} className="img-fluid"/>
                                        </div>
                                        <div className="text">
                                            <h4>Jenny</h4>
                                            <p>Hi, How are you Jenny wilson
                                                <span className="mx-1">
                                                    <Image className="img-fluid" src={HappyEmoji}/>
                                                </span>
                                            </p>
                                        </div>
                                        <div className="notification">
                                            <label>06:42 AM</label>
                                            {/* <p>5</p> */}
                                        </div>
                                    </NavLink>    
                                </div>

                                <div className="message-tile">
                                    <NavLink to="#">
                                        <div className="image">
                                            <Image src={favorite1} className="img-fluid"/>
                                        </div>
                                        <div className="text">
                                            <h4>Albert</h4>
                                            <p>Hi, How are you Jenny wilson
                                                <span className="mx-1">
                                                    <Image className="img-fluid" src={HappyEmoji}/>
                                                </span>
                                            </p>
                                        </div>
                                        <div className="notification">
                                            <label>06:42 AM</label>
                                            {/* <p>4</p> */}
                                        </div>
                                    </NavLink>    
                                </div>

                                <div className="message-tile">
                                    <NavLink to="#">
                                        <div className="image">
                                            <Image src={favorite5} className="img-fluid"/>
                                        </div>
                                        <div className="text">
                                            <h4>Cody</h4>
                                            <p>Hi, How are you Jenny wilson
                                                <span className="mx-1">
                                                    <Image className="img-fluid" src={HappyEmoji}/>
                                                </span>
                                            </p>
                                        </div>
                                        <div className="notification">
                                            <label>06:42 AM</label>
                                            {/* <p>4</p> */}
                                        </div>
                                    </NavLink>    
                                </div>

                                <div className="message-tile">
                                    <NavLink to="#">
                                        <div className="image">
                                            <Image src={favorite4} className="img-fluid"/>
                                        </div>
                                        <div className="text">
                                            <h4>Jenny</h4>
                                            <p>Hi, How are you Jenny wilson
                                                <span className="mx-1">
                                                    <Image className="img-fluid" src={HappyEmoji}/>
                                                </span>
                                            </p>
                                        </div>
                                        <div className="notification">
                                            <label>06:42 AM</label>
                                            {/* <p>4</p> */}
                                        </div>
                                    </NavLink>    
                                </div>

                                <div className="message-tile">
                                    <NavLink to="#">
                                        <div className="image">
                                            <Image src={favorite3} className="img-fluid"/>
                                        </div>
                                        <div className="text">
                                            <h4>Albert</h4>
                                            <p>Hi, How are you Jenny wilson
                                                <span className="mx-1">
                                                    <Image className="img-fluid" src={HappyEmoji}/>
                                                </span>
                                            </p>
                                        </div>
                                        <div className="notification">
                                            <label>06:42 AM</label>
                                            {/* <p>4</p> */}
                                        </div>
                                    </NavLink>    
                                </div>
                            </div>   
                        </Col>
                    </Row>
                </Container>
            </div>            
        </>
    );
}

export default Message;