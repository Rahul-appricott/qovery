import React from 'react';
import { Container, Row, Col} from 'react-bootstrap';
import { HelpSupportHeader } from '../../Component/Header/Header';
import {ProfilePic} from '../../Component/utils/button';
import {NotificationS} from '../../Component/Accordion/Accordion';
import '../../Component/Sass/Pages/HelpSupport.scss';

const HelpSupport = () => {
    return (
        <>
            <div className="privacy">
                <Container>
                    <Row>
                        <Col xs={12}>
                            <div className="privacy-h">
                                <HelpSupportHeader />
                            </div>
                            <div className="privacy-inner">
                                <NotificationS/>    
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
};

export default HelpSupport;