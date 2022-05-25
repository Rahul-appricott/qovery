import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProfileBasicInfo, { ProfilePage } from "../../Component/Pages/Account/ProfileBasicInfo";
import '../../Component/Sass/Pages/Profilebasicinformation.scss';

const ProfileBasicInformation = () => {
    return (
        <>
            <Container>
                <Row>
                    <Col>
                        <ProfileBasicInfo />                        
                    </Col>
                </Row>
            </Container>
            <ProfilePage />          
        </>
    )
}
export default ProfileBasicInformation;