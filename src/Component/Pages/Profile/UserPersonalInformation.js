import React, { useState } from 'react';
import { useNavigate,NavLink } from 'react-router-dom';
import { Container, Form, Row, ProgressBar } from 'react-bootstrap';
import Select from 'react-select'
// import '../../../Component/Sass/Pages/UserPersonalInfo.scss';
import {userService} from '../../../_services'; 

const UserPersoanalInformation = () => {
    const options = [
        { value: 'Painting', label: 'Painting' },
        { value: 'Cooking', label: 'Cooking' },
        { value: 'Drawing', label: 'Drawing' },
        { value: 'Drawing2', label: 'Drawing2' },
        { value: 'Learning', label: 'Learning' }
    ]

    const options1 = [
        { value: 'Married', label: 'Married' },
        { value: 'Single', label: 'Single' },
        { value: 'Committed', label: 'Committed' }
    ]

    const options2 = [
        { value: 'Swinging', label: 'Swinging' },
        { value: 'Marriage', label: 'Marriage' },
        {value:'Polyamory',label:'Polyamory'}
    ]

    const options3 = [
        { value: 'Yes', label: 'Yes' },
        { value: 'No', label: 'No' }
    ]


    const history = useNavigate();
    const [status, setStatus] = useState("");
    const [openTo, setOpenTo] = useState("");
    const [career, setCareer] = useState("");
    const [kids, setKids] = useState(false);
    const [hobbies,setHobbies] = useState("");
    const handleSubmit = (e) => {
      e.preventDefault();
      let userData = {};
      
      userData.status = status;
      userData.openToDating = openTo;
      userData.career = career;
      userData.kids = kids;
      userData.hobbies = hobbies;
      userService.updatePersonalInformation(userData, history);
    }
    
    const setHobbiesData = (e) => {
        let arr = [];
        e.forEach(element => {
            arr.push(element.value)
        });
        setHobbies(arr.toString())
    }
    return (
        <>
            <Container>
                <Row>
                    <div className='Info-User'>
                    <Form onSubmit={handleSubmit}>
                       
                        <div className='progress-b'>
                            <ProgressBar />
                        </div>
                        <div className='basicInfo'>
                            <div className='svg-i'>
                                <NavLink to="/userinformation">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="20" viewBox="0 0 30 20" fill="none">
                                        <path opacity="0.8" d="M30 8.45025V11.267H5.71429L11.4286 16.9005L10 19.7173L0 9.85863L10 0L11.4286 2.81675L5.71429 8.45025H30Z" fill="#666666" />
                                    </svg>
                                </NavLink>    
                            </div>
                        </div>

                        {/* BAsic Info */}
                        <div className='basic-content'>
                            <h4>Personal information</h4>
                            <p className='p1'>Tell us about your self.</p>
                        </div>
                        
                        {/* Select Field */}

                        <p className="lable-text">Status</p>
                        <Select
                            options={options1}
                            className="basic-multi-select form input-t"
                            onChange={(e) => setStatus(e.value)}
                        />

                        {/* Select Field */}

                        <p>Open to</p>
                        <Select
                            options={options2}
                            className="basic-multi-select form input-t"
                            onChange={(e) => setOpenTo(e.value)}
                        />

                        {/* Select Field */}

                        <p className="lable-text">Career</p>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="text" className="input-t" placeholder="Type here" onChange={(e) => setCareer(e.target.value)}/>
                            <Form.Text className="text-muted">
                            </Form.Text>
                        </Form.Group>

                        {/* Select Field */}

                        <p className="lable-text">Do you have kids?</p>
                       
                            {['radio'].map((type) => (
                                <div  key={`inline-${type}`} className="ml-5 mt-3 mb-3">
                                    <Form.Check
                                        inline
                                        label="Yes"
                                        name="group1"
                                        type={type}
                                        onClick={(e) => setKids(true)}
                                        id={`inline-${type}-1`}
                                    />
                                    <Form.Check
                                        inline
                                        label="No"
                                        name="group1"
                                        onClick={(e) => setKids(false)}
                                        type={type}
                                        id={`inline-${type}-2`}
                                    />                                
                                </div>
                            ))}

                        {/* Select Field */}

                        <p className="lable-text">Hobbies</p>
                        <Select
                            defaultValue={[options[2], options[3]]}
                            isMulti
                            name="colors"
                            options={options}
                            onChange={(e) => setHobbiesData(e)}
                            className="basic-multi-select form input-t"
                            classNamePrefix="select"
                        />

                        <button type='submit' to='/preference' className="btn ButtonSet2"> Continue </button>
                        </Form>
                    </div>
                </Row>    
            </Container>        
            
        </>
    );
};
export default UserPersoanalInformation;