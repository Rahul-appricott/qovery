import React from 'react';
import {MessageDetailHeader} from '../../Component/Header/Header';
import {Container, Row, Col, Form } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import {favorite1, favorite2, favorite3, favorite4, favorite5, HappyEmoji} from '../../img/index';
import {NavLink} from 'react-router-dom';
import '../../Component/Sass/Pages/MessageDetail.scss';

const MessageDetail = () =>{
    return(
        <>
            <div className="message-detail">    
                <Container>
                    <Row>
                        <Col xs={12}>
                            <div className="heading">
                                <MessageDetailHeader/>
                            </div>
                            <div className="inner-section">
                                <div className="outer-message">
                                    <Image className="img-fluid" src={favorite1}/>
                                    <p>It is a long established fact that a reader will be to many distracted bying.</p>
                                </div>
                                <span className="date">02:23 PM</span>

                                <div className="outer-message reverse">
                                    <Image className="img-fluid" src={favorite2}/>
                                    <p className="reverse">Fact that a reader will be to many distracted bying.</p>
                                </div>
                                <span className="date reverse">02:23 PM</span>
                                
                                <div className="outer-message reverse">
                                    <Image className="img-fluid" src={favorite2}/>
                                    <p className="reverse">Reader will be to many bying.</p>
                                </div>
                                <span className="date reverse">02:23 PM</span>

                                <div className="outer-message">
                                    <Image className="img-fluid" src={favorite1}/>
                                    <p>Fact that a reader will be to many distracted bying.</p>
                                </div>
                                <span className="date">02:23 PM</span>

                                <div className="outer-message">
                                    <Image className="img-fluid" src={favorite1}/>
                                    <p>Established fact that a reader will be to manyimng.</p>
                                </div>
                                <span className="date">02:23 PM</span>
                            </div>   
                        </Col>
                    </Row>
                </Container>
                <Form.Group className="input-field" controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="Type your message here..." />
                    <div className="send-button">
                        <NavLink to="">
                            <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none">
                                <circle r="17" transform="matrix(-1 0 0 1 17 17)" fill="#25A5FA"/>
                                <path d="M11.6357 23.3352L24.8201 17.6837C25.4321 17.4192 25.4321 16.5579 24.8201 16.2935L11.6357 10.6419C11.137 10.4228 10.5854 10.793 10.5854 11.3295L10.5779 14.8126C10.5779 15.1904 10.8574 15.5152 11.2352 15.5606L21.9112 16.9886L11.2352 18.409C10.8574 18.4619 10.5779 18.7868 10.5779 19.1646L10.5854 22.6477C10.5854 23.1841 11.137 23.5543 11.6357 23.3352Z" fill="white"/>
                            </svg>
                        </NavLink>
                    </div>
                </Form.Group>
            </div>            
        </>
    );
}

export default MessageDetail;