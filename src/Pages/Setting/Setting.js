import React from 'react';
import {NavLink} from 'react-router-dom';
import {Container, Row, Col} from 'react-bootstrap';
import {SuccesfullyPopup} from '../../Component/utils/button';
import {SettingHeader} from '../../Component/Header/Header';
import '../../Component/Sass/Pages/Setting.scss';

const Setting = () =>{
    return(
        <>
            <section className="setting">
                <Container>
                    <Row>
                        <Col xs={12}>
                            <div className="setting-inner">
                                <div className="setting-header">
                                    <SettingHeader/>
                                </div>
                                <div className="option1">
                                    <div className="account">
                                        <div className="account-inner">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="20" viewBox="0 0 18 20" fill="none">
                                                <path d="M17 19V17C17 15.9391 16.5786 14.9217 15.8284 14.1716C15.0783 13.4214 14.0609 13 13 13H5C3.93913 13 2.92172 13.4214 2.17157 14.1716C1.42143 14.9217 1 15.9391 1 17V19" stroke="#3F4156" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                                <path d="M9 9C11.2091 9 13 7.20914 13 5C13 2.79086 11.2091 1 9 1C6.79086 1 5 2.79086 5 5C5 7.20914 6.79086 9 9 9Z" stroke="#3F4156" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                            <p>Account Settings</p>
                                        </div>   
                                        <div className="arrow">
                                            <NavLink to="/account-setting">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="7" height="11" viewBox="0 0 7 11" fill="none">
                                                    <path d="M1 1L5.5 5.5L1 10" stroke="#3F4156" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                                </svg>
                                            </NavLink> 
                                        </div>    
                                    </div>
                                </div>

                                <div className="option1">
                                    <div className="account">
                                        <div className="account-inner">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="22" viewBox="0 0 20 22" fill="none">
                                                <path d="M12 1L16 5L5 16H1V12L12 1Z" stroke="#3F4156" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                                <path d="M1 21H19" stroke="#3F4156" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                            <p>Edit Profile</p>
                                        </div>   
                                        <div className="arrow">
                                            <NavLink to="/profile-basic-information">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="7" height="11" viewBox="0 0 7 11" fill="none">
                                                    <path d="M1 1L5.5 5.5L1 10" stroke="#3F4156" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                                </svg>
                                            </NavLink> 
                                        </div>    
                                    </div>
                                </div>

                                <div className="option1">
                                    <div className="account">
                                        <div className="account-inner">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="22" viewBox="0 0 20 22" fill="none">
                                                <path d="M17 10H3C1.89543 10 1 10.8954 1 12V19C1 20.1046 1.89543 21 3 21H17C18.1046 21 19 20.1046 19 19V12C19 10.8954 18.1046 10 17 10Z" stroke="#3F4156" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                                <path d="M5 10V6C5 4.67392 5.52678 3.40215 6.46447 2.46447C7.40215 1.52678 8.67392 1 10 1C11.3261 1 12.5979 1.52678 13.5355 2.46447C14.4732 3.40215 15 4.67392 15 6V10" stroke="#3F4156" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                            <p>Privacy</p>
                                        </div>   
                                        <div className="arrow">
                                            <NavLink to="/privacy-policy">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="7" height="11" viewBox="0 0 7 11" fill="none">
                                                    <path d="M1 1L5.5 5.5L1 10" stroke="#3F4156" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                                </svg>
                                            </NavLink> 
                                        </div>    
                                    </div>
                                </div>

                                {/* <div className="option1">
                                    <div className="account">
                                        <div className="account-inner">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="21" height="22" viewBox="0 0 21 22" fill="none">
                                                <path d="M12.73 20C12.5542 20.3031 12.3018 20.5547 11.9982 20.7295C11.6946 20.9044 11.3504 20.9965 11 20.9965C10.6496 20.9965 10.3054 20.9044 10.0018 20.7295C9.69816 20.5547 9.44581 20.3031 9.27 20M21 16H1C1.79565 16 2.55871 15.6839 3.12132 15.1213C3.68393 14.5587 4 13.7956 4 13V8C4 6.14348 4.7375 4.36301 6.05025 3.05025C7.36301 1.7375 9.14348 1 11 1C12.8565 1 14.637 1.7375 15.9497 3.05025C17.2625 4.36301 18 6.14348 18 8V13C18 13.7956 18.3161 14.5587 18.8787 15.1213C19.4413 15.6839 20.2044 16 21 16V16Z" stroke="#3F4156" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                            <p>Notification</p>
                                        </div>   
                                        <div className="arrow">
                                            <NavLink to="/notification-setting">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="7" height="11" viewBox="0 0 7 11" fill="none">
                                                    <path d="M1 1L5.5 5.5L1 10" stroke="#3F4156" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                                </svg>
                                            </NavLink> 
                                        </div>    
                                    </div>
                                </div> */}

                                <div className="option1">
                                    <div className="account">
                                        <div className="account-inner">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="20" viewBox="0 0 18 20" fill="none">
                                                <path d="M12.6953 13.2812H10.9375V12.7332C11.4145 12.4724 11.8392 12.1276 12.1917 11.7188H13.4766C14.6612 11.7188 15.625 10.755 15.625 9.57031V7.61719C15.625 6.8534 15.135 6.20258 14.4531 5.96078V5.66406C14.4531 2.5409 11.9122 0 8.78906 0C5.6659 0 3.125 2.5409 3.125 5.66406V5.96016C2.44301 6.20203 1.95312 6.85332 1.95312 7.61719C1.95312 8.58644 2.74168 9.375 3.71094 9.375H4.33508C4.52477 10.8248 5.4084 12.0593 6.64062 12.7332V13.2812H4.88281C2.19043 13.2812 0 15.4717 0 18.1641V19.4141C0 19.7377 0.262344 20 0.585938 20H16.9922C17.3158 20 17.5781 19.7377 17.5781 19.4141V18.1641C17.5781 15.4717 15.3877 13.2812 12.6953 13.2812ZM14.4531 9.57031C14.4531 10.1088 14.015 10.5469 13.4766 10.5469H12.9229C13.08 10.1787 13.1893 9.78551 13.243 9.375H14.4531V9.57031ZM14.4531 7.61719V8.20312H13.2812V7.03125H13.8672C14.1903 7.03125 14.4531 7.2941 14.4531 7.61719ZM4.29688 8.20312H3.71094C3.38785 8.20312 3.125 7.94027 3.125 7.61719C3.125 7.2941 3.38785 7.03125 3.71094 7.03125H4.29688V8.20312ZM4.29688 5.85938V5.66406C4.29688 3.18707 6.31207 1.17188 8.78906 1.17188C11.2661 1.17188 13.2812 3.18707 13.2812 5.66406V5.85938H12.9009L11.1082 4.42527C10.875 4.23875 10.539 4.25738 10.3279 4.46848C9.43098 5.36539 8.23844 5.85938 6.97 5.85938H4.29688ZM5.46875 8.78906V7.03125H6.97C8.37445 7.03125 9.70434 6.54547 10.7677 5.65352L12.1094 6.72691V8.78906C12.1094 9.4343 11.9238 10.0367 11.604 10.5469H9.17969C8.85609 10.5469 8.59375 10.8092 8.59375 11.1328C8.59375 11.4564 8.85609 11.7188 9.17969 11.7188H10.3495C9.88402 11.9677 9.35285 12.1094 8.78906 12.1094C6.95824 12.1094 5.46875 10.6199 5.46875 8.78906ZM9.76562 13.174V13.8672C9.76562 14.4057 9.32754 14.8438 8.78906 14.8438C8.25059 14.8438 7.8125 14.4057 7.8125 13.8672V13.174C8.12703 13.244 8.45375 13.2812 8.78906 13.2812C9.12438 13.2812 9.45109 13.244 9.76562 13.174ZM16.4062 18.8281H1.17188V18.1641C1.17188 16.1179 2.8366 14.4531 4.88281 14.4531H6.7225C6.97824 15.3538 7.80754 16.0156 8.78906 16.0156C9.77059 16.0156 10.5998 15.3538 10.8556 14.4531H12.6953C14.7415 14.4531 16.4062 16.1179 16.4062 18.1641V18.8281Z" fill="#3F4156"/>
                                            </svg>
                                            <p>Help & Support</p>
                                        </div>   
                                        <div className="arrow">
                                            <NavLink to="/help-support">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="7" height="11" viewBox="0 0 7 11" fill="none">
                                                    <path d="M1 1L5.5 5.5L1 10" stroke="#3F4156" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                                </svg>
                                            </NavLink> 
                                        </div>    
                                    </div>
                                </div>
                                <SuccesfullyPopup/>
                            </div>
                        </Col>    
                    </Row>    
                </Container>    
            </section>  
        </>
    );
};

export default Setting;
