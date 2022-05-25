import React, { useState, useEffect } from 'react';
import { Accordion, Form } from 'react-bootstrap';
import MultipleItems from '../../Component/Pages/Privacy-Policy/Carousel';
import '../../Component/Sass/Component/Accordion.scss';
import { profileService } from '../../_services';

export const PrivacyAccordion = () => {

    useEffect(() => {
        callApi()
    }, []);

    const callApi = async () => {
        let data = await profileService.getProfileData();
        setIsShow(data.user.profileStatus.isShowActivityStatus);
    }

    const [isShow, setIsShow] = useState(true);
    const handleClick = () => {
        isShow ? setIsShow(false) : setIsShow(true);
        let userData = { isShow };
        profileService.ShowActivityStatus(userData);
    };

    return (
        <>
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Connections</Accordion.Header>
                    <Accordion.Body className="carousel-bod">
                        <h4>Block Accounts</h4>
                        <div className="cover-block">
                            <MultipleItems/>
                        </div>    
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>

            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Active Status</Accordion.Header>
                    <Accordion.Body>
                        <div className="active-status">
                            <div className="show-activity">
                                <p>Show activity status</p>
                                <Form.Check 
                                    type="switch"
                                    id="custom-switch"
                                    onClick={handleClick}
                                    checked={isShow}
                                />
                            </div>
                        </div>
                        {/* <div className="active-status">
                            <div className="show-activity">
                                <p>Contact Sync</p>
                                <Form.Check 
                                    type="switch"
                                    id="custom-switch"
                                />
                            </div>
                        </div> */}
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>                         
        </>
    );
};

export const NotificationS = () => {
    return (
        <>
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Report a Problem</Accordion.Header>
                    <Accordion.Body>
                        <p>Hello! Welcome to Upscaled Help Centre. You can reach us any time. </p>
                        <p>Contact No</p>
                        <p><b>+824-4592255</b></p>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>

            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Help Center</Accordion.Header>
                    <Accordion.Body>
                        <p>Hello! Welcome to Upscaled Help Centre. You can reach us any time. </p>
                        <p>Contact No</p>
                        <p><b>+824-4592255</b></p>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>

            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Privacy and Security Help</Accordion.Header>
                    <Accordion.Body>
                        <p>Hello! Welcome to Upscaled Help Centre. You can reach us any time. </p>
                        <p>Contact No</p>
                        <p><b>+824-4592255</b></p>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>

            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Support Request</Accordion.Header>
                    <Accordion.Body>
                        <p>Hello! Welcome to Upscaled Help Centre. You can reach us any time. </p>
                        <p>Contact No</p>
                        <p><b>+824-4592255</b></p>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </>
    );
};
