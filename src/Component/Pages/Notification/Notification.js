import React from 'react';
import { NavLink } from 'react-router-dom';
import { Container, Row, Col, Accordion, Form } from 'react-bootstrap';
import { NotificationSettingHeader } from '../../../Component/Header/Header';
import {ProfilePic} from '../../../Component/utils/button';
import {NotificationS} from '../../../Component/Accordion/Accordion';
import '../../Sass/Pages/NotificationSetting.scss';

const NotificationSetting = () => {
    return (
        <>
            <div className="privacy">
                <Container>
                    <Row>
                        <Col xs={12}>
                            <div className="privacy-h">
                                <NotificationSettingHeader />
                            </div>
                            <div className="privacy-inner">
                                <NotificationS/>
                                <div className="profile-p">
                                    <ProfilePic/>
                                </div>    
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
};

export default NotificationSetting;