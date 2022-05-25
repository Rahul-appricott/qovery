import React, { useState } from 'react';
import { useNavigate,NavLink } from 'react-router-dom';
import '../../../Component/Sass/Pages/Preference.scss';
import { Container, Row, Col, ProgressBar, Form } from 'react-bootstrap';
import {userService} from '../../../_services'; 

const UserPreference = () => {
    const history = useNavigate();
    const [preference, setPreference] = useState("");
    const [showOnProfile,setShowOnProfile] = useState(false);

    const handleSubmit = (e) => {
      e.preventDefault();
      let userData = {};
      userData.preference = preference;
      userData.showOnProfile = showOnProfile;
      userService.updatePreferences(userData, history);
    }

    const setShowOnProfileData = (e) => {
        if(showOnProfile === true){
            setShowOnProfile(false)
        }else{
            setShowOnProfile(true)
        }
    }

    return (
        <>
            <Container>
                <Row>
                    <Col>
                        <div className='Info-User'>
                            <div className='bg-Section'></div>
                            <div className='progress-b'>
                                <ProgressBar />
                            </div>
                            <div className='basicInfo'>
                                <div className='svg-i'>
                                    <NavLink to="/personalinformation">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="20" viewBox="0 0 30 20" fill="none">
                                            <path opacity="0.8" d="M30 8.45025V11.267H5.71429L11.4286 16.9005L10 19.7173L0 9.85863L10 0L11.4286 2.81675L5.71429 8.45025H30Z" fill="#666666" />
                                        </svg>
                                    </NavLink>    
                                </div>
                            </div>

                            {/* Basic Info */}
                            <h4>Preference</h4>
                            <p>Tell us about your self.</p>

                            <div className="form-component">
                                <Form onSubmit={handleSubmit}>
                                    {['radio'].map((type) => (
                                        <div key={`inline-${type}`} className="mb-3">
                                            <Form.Group className="mb-3 checkout" controlId="formBasicCheckbox">
                                                <Form.Label> Straight </Form.Label>
                                                <Form.Check
                                                    inline
                                                    name="group1"
                                                    type={type}
                                                    onClick={(e) => setPreference("Straight")}
                                                    id={`inline-${type}-1`}
                                                />
                                            </Form.Group>
                                            <Form.Group className="mb-3 checkout" controlId="formBasicCheckbox">
                                                <Form.Label> Gay </Form.Label>
                                                <Form.Check
                                                    inline
                                                    name="group1"
                                                    onClick={(e) => setPreference("Gay")}
                                                    type={type}
                                                    id={`inline-${type}-2`}
                                                />
                                            </Form.Group>
                                            <Form.Group className="mb-3 checkout" controlId="formBasicCheckbox">
                                                <Form.Label> Lesbian </Form.Label>
                                                <Form.Check
                                                    inline
                                                    name="group1"
                                                    type={type}
                                                    onClick={(e) => setPreference("Lesbian")}
                                                    id={`inline-${type}-3`}
                                                />
                                            </Form.Group>
                                            <Form.Group className="mb-3 checkout" controlId="formBasicCheckbox">
                                                <Form.Label> Asexual </Form.Label>
                                                <Form.Check
                                                    inline
                                                    name="group1"
                                                    type={type}
                                                    id={`inline-${type}-4`}
                                                />
                                            </Form.Group>
                                            <Form.Group className="mb-3 checkout" controlId="formBasicCheckbox">
                                                <Form.Label> Bisexual </Form.Label>
                                                <Form.Check
                                                    inline
                                                    name="group1"
                                                    type={type}
                                                    onClick={(e) => setPreference("Bisexual")}
                                                    id={`inline-${type}-5`}
                                                />
                                            </Form.Group>
                                            <Form.Group className="mb-3 checkout" controlId="formBasicCheckbox">
                                                <Form.Label> Demisexual </Form.Label>
                                                <Form.Check
                                                    inline
                                                    name="group1"
                                                    onClick={(e) => setPreference("Demisexual")}
                                                    type={type}
                                                    id={`inline-${type}-6`}
                                                />
                                            </Form.Group>
                                            <Form.Group className="mb-3 checkout" controlId="formBasicCheckbox">
                                                <Form.Label> Pansexual </Form.Label>
                                                <Form.Check
                                                    inline
                                                    name="group1"
                                                    type={type}
                                                    onClick={(e) => setPreference("Pansexual")}
                                                    id={`inline-${type}-7`}
                                                />
                                            </Form.Group>
                                            <Form.Group className="mb-3 checkout" controlId="formBasicCheckbox">
                                                <Form.Label> Queer </Form.Label>
                                                <Form.Check
                                                    inline
                                                    name="group1"
                                                    onClick={(e) => setPreference("Queer")}
                                                    type={type}
                                                    id={`inline-${type}-8`}
                                                />
                                            </Form.Group>
                                            <Form.Group className="mb-3 click" controlId="formBasicCheckbox">
                                                <Form.Check type="checkbox" checked={showOnProfile} onChange={(e) => setShowOnProfileData(e)} />
                                                <Form.Label> Show my preferences on my profile </Form.Label>                                        
                                            </Form.Group>
                                            <Form.Group className="mb-3">
                                                <Col sm={{ span: 10, offset: 2 }}>
                                                <button type='submit'  className="ButtonSet2 btn"> Continue </button>
                                                </Col>
                                            </Form.Group>
                                        </div>
                                    ))}
                                </Form>
                            </div>                        
                        </div>
                    </Col>
                </Row>
            </Container >
        </>
    );
};
export default UserPreference;