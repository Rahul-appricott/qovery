import React, { useState } from 'react';
import Select from 'react-select';
import { Container, Row, ProgressBar, InputGroup, FormControl, Form } from 'react-bootstrap';
import {useNavigate,NavLink,Link} from 'react-router-dom';
import '../../../Component/Sass/Pages/BasicInfo.scss';
import '../../../Component/Sass/Pages/OwnProfile.scss';
import {userService} from '../../../_services'; 


const BasicInformation = () => {
    const options = [
        { value: 'Bikes', label: 'Bikes' },
        { value: 'Dance', label: 'Dance' },
        { value: 'Golf', label: 'Golf' },
        { value: 'Cricket', label: 'Cricket' },
        { value: 'Badminton', label: 'Badminton' },
        { value: 'Hockey', label: 'Hockey' },
        { value: 'Football', label: 'Football' },
        { value: 'Racing', label: 'Racing' },
        { value: 'TikTok', label: 'TikTok' }
    ]
    const options1 = [
        { value: 'Man', label: 'Man' },
        { value: 'Woman', label: 'Woman' }
    ]

    const history = useNavigate();
    const [bio, setBio] = useState("");
    const [interestedIn, setInterestedIn] = useState("");
    const [likedislike, setLikedislike] = useState([]);
    const handleSubmit = (e) => {
      e.preventDefault();
      let userData = {};
      let likeDislikeString = "";
      likedislike.forEach((element) => {
        if (element.value !== "") {
          likeDislikeString += element.value + ",";
        }
      });
      userData.bio = bio;
      userData.interestedin = interestedIn;
      userData.like = likeDislikeString;
      userService.updateBasicInformation(userData, history);
    }
 
    return (
        <>
            <Container>
                <Row >
                <form  onSubmit={handleSubmit}>
                    <div className='Info-User'>
                        <div className='progress-b'>
                            <ProgressBar />
                        </div>
                        <div className='w-100 basicInfo'>
                            <div className='svg-i'>
                                <NavLink to="/uploadvideo">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="20" viewBox="0 0 30 20" fill="none">
                                        <path opacity="0.8" d="M30 8.45025V11.267H5.71429L11.4286 16.9005L10 19.7173L0 9.85863L10 0L11.4286 2.81675L5.71429 8.45025H30Z" fill="#666666" />
                                    </svg>
                                </NavLink>    
                            </div>
                        </div>
                        <div className='w-100 basic-content'>
                            <h4>Basic Information</h4>
                            <p1>Tell us about your self.</p1>
                            <p>BIO (Min 150 words)</p>
                        </div>
                        <InputGroup>
                            <FormControl className='TextInput' as="textarea"  defaultValue={bio}
                        onChange={(e) => setBio(e.target.value)} aria-label="With textarea" placeholder='Enter your brief information about you' />
                        </InputGroup>
                        <Form.Group className="w-100 mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label><p>Likes / Dislikes</p></Form.Label>
                            <div className='LikesTag'>
                                <Select
                                    defaultValue={[]}
                                    isMulti
                                    name="colors"
                                    onChange={(e) => setLikedislike(e)}
                                    options={options}
                                    className="basic-multi-select form"
                                    classNamePrefix="select"
                                />
                            </div>
                        </Form.Group>
                        <Form.Group className="w-100 mb-3" controlId="exampleForm.ControlInput2">
                            <Form.Label><p>Intrested In</p></Form.Label>
                            <div className='LikesTag'>
                                <Select
                                    options={options1}
                                    className="basic-multi-select form"
                                    onChange={(e) => setInterestedIn(e.value)}
                                />
                            </div>
                        </Form.Group>
                        <button type='submit' to='/personalinformation' className="ButtonSet2 button btn">Continue</button>
                    </div>
                </form>
                </Row>
            </Container>
        </>
    );
};
export default BasicInformation;