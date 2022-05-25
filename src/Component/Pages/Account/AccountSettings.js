import React, { useState, useEffect } from 'react';
import { Accordion, Form, Image } from 'react-bootstrap';
import { NavLink, useNavigate } from 'react-router-dom';
import Slider from 'react-rangeslider'
import { Instagram, Facebook, Linkedin } from '../../../img/index';
import { PersonalInfoForm, PersonalInfoPassForm, } from '../../../Component/Form/form';
import 'react-rangeslider/lib/index.css'
import { profileService } from '../../../_services';

import '../../../Component/Sass/Pages/Account.scss';

const AccountSettings = () => {
    return (
        <>
            <div className='Info-User mt-4'>
                <div className='bg-Section'></div>
                <NavLink to="/setting">
                    <div className='svg-i'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="20" viewBox="0 0 30 20" fill="none">
                            <path opacity="0.8" d="M30 8.45025V11.267H5.71429L11.4286 16.9005L10 19.7173L0 9.85863L10 0L11.4286 2.81675L5.71429 8.45025H30Z" fill="#666666" />
                        </svg>
                    </div>
                </NavLink>
                <span className='Heading'>Account</span>
                <NavLink className="done" to="/profile-basic-information">Done</NavLink>
            </div>
        </>
    );
};
export default AccountSettings;


export const PersonalForm = () => {
    return (
        <>
            <div className='User-Form' >
                <Accordion defaultActiveKey={['0']} alwaysOpen>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header className='Heading' >Personal Info</Accordion.Header>
                        <Accordion.Body>
                            <PersonalInfoForm />
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        </>
    );
};

export const PersonalPass = () => {
    return (
        <>
            <div className='User-Pass'>
                <Accordion defaultActiveKey={['0']} alwaysOpen>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header className='Heading'>Password</Accordion.Header>
                        <Accordion.Body>
                            <PersonalInfoPassForm />
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        </>
    );
};

export const PersonalInteractions = () => {

    useEffect(() => {
        callApi()
    }, []);

    const callApi = async () => {
        let data = await profileService.getProfileData();
        setIsShowPeopleInRange(data.user.interactions.isShowPeopleInRange);
        setRange(data.user.interactions.range);
        setIsPrivate(data.user.isPrivate);
    }

    const [isShowPeopleInRange, setIsShowPeopleInRange] = useState(true);
    const handleClick = () => {
        isShowPeopleInRange ? setIsShowPeopleInRange(false) : setIsShowPeopleInRange(true);
        let userData = { isShowPeopleInRange };
        profileService.HideShowPeopleInRange(userData);
    };


    const [isPrivate, setIsPrivate] = useState(true);
    const onClick = () => {
        isPrivate ? setIsPrivate(false) : setIsPrivate(true);
        let userData = { isPrivate };
        profileService.PrivateAccount(userData);
    };


    const [range, setRange] = useState(0);
    const handleChangeStart = () => {
    };
    const handleChanges = (value) => {
        setRange(value)
    }
    const handleChangeComplete = () => {

        let userData = {};
        userData.range = range;
        profileService.InteractionsRange(userData);
    };

    return (

        <>
            <div className='User-Pass'>
                <Accordion defaultActiveKey={['0']} alwaysOpen>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header className='Heading'>Interactions</Accordion.Header>
                        <Accordion.Body>
                            <div className='Toggle'>
                                <p>Only Show People in the Range </p>
                                <Form className='switch-i'>
                                    <Form.Check
                                        type="switch"
                                        id="custom-switch"
                                        onClick={handleClick}
                                        checked={isShowPeopleInRange}
                                    />
                                </Form>
                            </div>
                            <hr></hr>
                            <form className='form-i'>
                                <div class="form-group">
                                    <div className='slider'>
                                        <Slider
                                            min={0}
                                            max={100}
                                            value={range}
                                            onChangeStart={handleChangeStart}
                                            onChange={handleChanges}
                                            onChangeComplete={handleChangeComplete}
                                        />
                                        <div className='value'>{range}</div>
                                    </div>
                                </div>
                            </form>
                            <hr className="my-5"></hr>
                            <div className='Toggle'>
                                <p>Private Account </p>
                                <Form className='switch-i'>
                                    <Form.Check
                                        type="switch"
                                        id="custom-switch"
                                        onClick={onClick}
                                        checked={isPrivate}
                                    />
                                </Form>
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        </>
    );
};


export const PersonalSocialCommunity = () => {

    return (
        <>
            <div className="User-Pass">
                <Accordion defaultActiveKey={['0']} alwaysOpen>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header className='Heading'>Social Community</Accordion.Header>
                        <Accordion.Body>
                            <div className='Toggle'>
                                <Image src={Facebook} className="img-fluid" />
                                {/* <FontAwesomeIcon icon="fa-brands fa-facebook-square" />
                                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" color="red" viewBox="0 0 448 512">
                                    <path d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z"/>
                                </svg> */}
                                <p>Facebook</p>
                                <Form className='switch-i'>
                                    <Form.Check
                                        type="switch"
                                        id="custom-switch"
                                    />
                                </Form>
                            </div>
                            <hr></hr>
                            <div className='Toggle'>
                                <Image src={Linkedin} className="img-fluid" />
                                <p>Linkedin</p>
                                <Form className='switch-i'>
                                    <Form.Check
                                        type="switch"
                                        id="custom-switch"
                                    />
                                </Form>
                            </div>
                            <hr></hr>
                            <div className='Toggle'>
                                <Image src={Instagram} className="img-fluid" />
                                <p>Instagram</p>
                                <Form className='switch-i'>
                                    <Form.Check
                                        type="switch"
                                        id="custom-switch"
                                    />
                                </Form>
                            </div>
                            <hr></hr>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        </>
    );
};