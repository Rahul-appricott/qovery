import React from 'react';
import { Container, Row, Col} from 'react-bootstrap';
import { ShareProfileButton, PrivatePics } from '../../../Component/utils/button';
import { ShareProfilE } from '../../../img/index';
import '../../Sass/Pages/homepage.scss';


const ShareProfilee = () => {
    
    return (
        <>
            <div className="shareProfile" style={{ backgroundImage: `url(${ShareProfilE})` }}>
                <Container>
                    <Row>
                        <Col xs={12}>
                            <div className="shareButtonText">
                                <ShareProfileButton/>
                            </div>    
                            <div className="button-private">
                                <PrivatePics/>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
};

export default ShareProfilee;