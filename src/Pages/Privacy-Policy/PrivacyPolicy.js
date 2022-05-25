import React from 'react';
import { NavLink } from 'react-router-dom';
import { Container, Row, Col, Accordion, Form } from 'react-bootstrap';
import { PrivacyHeader } from '../../Component/Header/Header';
import MultipleItems from '../../Component/Pages/Homepage/Carousel';
import {ProfilePic} from '../../Component/utils/button';
import {PrivacyAccordion} from '../../Component/Accordion/Accordion';
import '../../Component/Sass/Pages/PrivacyPolicy.scss';

const PrivacyPolicy = () => {
    return (
        <>
            <div className="privacy">
                <Container>
                    <Row>
                        <Col xs={12}>
                            <div className="privacy-h">
                                <PrivacyHeader />
                            </div>
                            <div className="privacy-inner">
                                <PrivacyAccordion/>
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

export default PrivacyPolicy;
