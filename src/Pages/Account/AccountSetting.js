import React from 'react';
import AccountSettings, { PersonalForm, PersonalPass, PersonalInteractions, PersonalSocialCommunity}  from '../../Component/Pages/Account/AccountSettings';
import {Container, Row, Col} from 'react-bootstrap';

const AccountSetting = () => {
   
    return(
        <>
            <Container>
                <Row>
                    <Col xs={12}>
                        <AccountSettings />                         
                        <PersonalForm />
                        <PersonalPass />
                        <PersonalInteractions/>
                        <PersonalSocialCommunity/>
                    </Col>    
                </Row>    
            </Container>  
        </>
    );
}
export default AccountSetting;