import React from 'react';
import {NotificationHeader} from '../../Component/Header/Header';
import {Container, Row, Col, Image} from 'react-bootstrap';
import {QuestionShare} from '../../Component/utils/button';
import {NavLink} from 'react-router-dom';
import {Notification1, Notification2, Notification3, Notification4, Notification5, Notification6} from '../../img/index';
import '../../Component/Sass/Pages/notification.scss';

const Notification = () =>{
    return(
        <>
            <div className="notification-inner">
                <NotificationHeader/>
                    <div className="inner-cont">
                        <div className="notif-1">
                            <div className="day">
                                <p>2h Ago</p>
                            </div>
                            <div className="img-cont">
                                <div className="imge">
                                    <Image className="img-fluid" src={Notification1}/>
                                </div>    
                                <div className="content">
                                    <p><b>Floyd Miles</b> wants to see your private stash</p>
                                    <div className="buttons">
                                        <button className="btn accept">Accept</button>
                                        <button className="btn decline">Decline</button>
                                    </div>
                                </div>
                            </div>    
                        </div>

                        <div className="notif-1">
                            <div className="day">
                                <p>2h Ago</p>
                            </div>
                            <div className="img-cont">
                                <div className="imge">
                                    <Image className="img-fluid" src={Notification2}/>
                                </div>    
                                <div className="content">
                                    <p><b>Guy Hawkins</b> send a new message</p>
                                </div>
                            </div>    
                        </div>

                        <div className="notif-1">
                            <div className="day">
                                <p>2h Ago</p>
                            </div>
                            <div className="img-cont">
                                <div className="imge">
                                    <Image className="img-fluid" src={Notification3}/>
                                </div>    
                                <div className="content">
                                    <p><b>Kristin Watson</b> added you to her favourite</p>
                                </div>
                            </div>    
                        </div>

                        <div className="notif-1">
                            <div className="day">
                                <p>2h Ago</p>
                            </div>
                            <div className="img-cont">
                                <div className="imge">
                                    <Image className="img-fluid" src={Notification4}/>
                                </div>    
                                <div className="content">
                                    <p><b>Jacob Jones</b> wants to go with you on date</p>
                                    <div className="buttons">
                                        <NavLink to="/question-bank-answer" className="btn accept">View Request</NavLink>
                                    </div>
                                </div>
                            </div>    
                        </div>

                        <div className="notif-1">
                            <div className="day">
                                <p>2h Ago</p>
                            </div>
                            <div className="img-cont">
                                <div className="imge">
                                    <Image className="img-fluid" src={Notification5}/>
                                </div>    
                                <div className="content">
                                    <p><b>Annette Black</b> added you to her favourite</p>
                                </div>
                            </div>    
                        </div>

                        <div className="notif-1">
                            <div className="day">
                                <p>2h Ago</p>
                            </div>
                            <div className="img-cont">
                                <div className="imge">
                                    <Image className="img-fluid" src={Notification6}/>
                                </div>    
                                <div className="content">
                                    <p><b>Guy Hawkins</b> send a new message</p>
                                </div>
                            </div>    
                        </div>

                        <div className="notif-1">
                            <div className="day">
                                <p>2h Ago</p>
                            </div>
                            <div className="img-cont">
                                <div className="imge">
                                    <Image className="img-fluid" src={Notification4}/>
                                </div>    
                                <div className="content">
                                    <p><b>Floyd Miles</b> wants to see your private stash</p>
                                </div>
                            </div>    
                        </div>
                    </div>    
                <div className="blue-background"></div>
            </div>            
        </>
    );
}

export default Notification;