import React, { useEffect, useState } from 'react';
import { Form, Row, Col, Button, InputGroup, FormControl,Container,Modal } from 'react-bootstrap';
import Select from 'react-select';
import {useNavigate, NavLink} from 'react-router-dom';
import {ViewEmail} from '../../Component/utils/button';
import {profileService} from '../../_services';
import {userService} from '../../_services';  
import '../Sass/Component/form.scss';


export const PersonalInfoForm = () => {
    const [firstName,setFirstName] = useState("");
    const [lastName,setLastName] = useState("");
    const [username,setVanityUrl] = useState("");
    const [email,setEmail] = useState("");
    const [phone,setPhone] = useState("");
    useEffect(() => {
        callApi()
      }, []);

      const callApi = async ()  => {
        let data = await profileService.getProfileData();
        setFirstName(data.user.firstName);
        setLastName(data.user.lastName);
        setVanityUrl(data.user.username);
        setEmail(data.email);
        setPhone(data.user.phone);
      }
    return (
        <>
            <Form className="form">                
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control
                        type="name"
                        placeholder="Devon Williamson"
                        value={firstName +' '+ lastName}
                        autoFocus
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Devonwilliamson@gmail.com"
                        value={email}
                        autoFocus
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
                    <Form.Label>Vanity URL</Form.Label>
                    <Form.Control
                        type="url"
                        placeholder="https://UpScale'd.com/devonwilliamsonon"
                        value={username}
                        autoFocus
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput4">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control
                        type="number"
                        placeholder="+65 8974523154"
                        value={phone}
                        autoFocus
                    />
                </Form.Group>                
            </Form>
        </>
    );
};


export const LoginForm = () => {
    const history = useNavigate();
  const [submit, setSubmit] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmit(true);
    let checkCondition =
    email &&
    password;
  if (checkCondition) {
    userService.login(email, password, history);
  }
  };
    return (
        <>
            <Form className="form" onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Enter your email address"
                        autoFocus
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    {submit && !email && (
                        <span className="spanError">Email Required</span>
                      )}
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Enter your password"
                        autoFocus
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    {submit && !password && (
                        <span className="spanError">Password Required</span>
                      )}
                </Form.Group>
                <Form.Group className="mb-3">
                    <div className="d-flex w-100 justify-content-between">
                        <Form.Check type="checkbox" label="Remember Me" />
                        <NavLink to="#" className="forgot">Forgot password?</NavLink>
                    </div>
                </Form.Group>
                <Form.Group as={Row} className="mb-3">
                    <Col sm={{ span: 10, offset: 2 }}>
                        <Button className="signin" type="submit">SIGN IN</Button>
                    </Col>
                </Form.Group>
            </Form>
        </>
    );
};

export const RegisterForm = () => {

    const history = useNavigate();
    const [submit,setSubmit] = useState(false);
    const [vanityUrl,setVanityUrl] = useState("");
    const [fullName,setFullName] = useState("");
    const [email,setEmail] = useState("");
    const [phone,setPhone] = useState("");
    const [dob,setDob] = useState("");
    const [gender,setGender] = useState("");
    const [profileStatus, setProfileStatus] = useState("");
    const [password, setPassword] = useState("");
    const [repeatPassword, setRepeatPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState(true);
    const [errorMessageForUsername,setErrorMessageForUsername] = useState("")
    const [errorColorClass,setErrorColorClass] = useState("")
    const handleSubmit = (e) => {
      e.preventDefault();
      setSubmit(true);
      let checkConfirmPassword = password === repeatPassword;
    if (!checkConfirmPassword && repeatPassword) {
      setConfirmPassword(false);
    } else {
      setConfirmPassword(true);
    }
    
      let checkCondition =
      fullName &&
      email &&
      vanityUrl &&
      phone &&
      dob && 
      gender && 
      profileStatus &&
      password &&
      repeatPassword;
    if (checkCondition) {
        let userData = {};
        userData.fullName = fullName;
        userData.email = email;
        userData.username = vanityUrl;
        userData.phone = phone;
        userData.dob = dob;
        userData.gender = gender;
        userData.profileStatus = profileStatus;
        userData.password = password;
      userService.register(userData, history);
    }
    }

    const checkUsername = async (params) => {
        let wordCount = params.target.value.length > 4;
        if(wordCount){
            let result = await userService.checkUsername(params.target.value,history);
            if(vanityUrl){
                if(result?.statusCode === 400){
                    setErrorMessageForUsername(result?.customMessage)
                    setErrorColorClass("red");
                }else{
                    setErrorMessageForUsername(result?.customMessage)
                    setErrorColorClass("green");
                }
            }else{
                setErrorMessageForUsername("please type atleast 5 words")
                    setErrorColorClass("red");
            }
        }else{
            setErrorMessageForUsername("please type atleast 5 words")
                    setErrorColorClass("red");
        }
    }
  
    return (
        <>
            <Form className="form" onSubmit={handleSubmit}>
                <div className="input-field">
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
                        <Form.Label>Vanity URL</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Type here.."
                            autoFocus
                            value={vanityUrl}
                            onChange={(e) => setVanityUrl(e.target.value)}
                            onKeyUpCapture={checkUsername}
                            className="form-vanity"
                        />
                        {submit && !vanityUrl && (
                            <span className="spanError">Vanity Url Required</span>
                        )}
                    </Form.Group>
                    <span>https://upScale'd.com/</span>
                </div>
                <Form.Text className={errorColorClass}>
                  
                  {errorMessageForUsername}
                </Form.Text>    
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter your Full Name"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                    />
                     {submit && !fullName && (
                        <span className="spanError">Name Required</span>
                      )}
                </Form.Group>
                <Form.Group className="mb-2" controlId="exampleForm.ControlInput2">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Enter your Email Address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    {submit && !email && (
                        <span className="spanError">Email Required</span>
                      )}
                </Form.Group>
                <ViewEmail/>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput4">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control
                        type="number"
                        placeholder="Enter Your Phone Number"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                    />
                    {submit && !phone && (
                        <span className="spanError">Phone Required</span>
                      )}
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput5">
                    <Form.Label>DOB</Form.Label>
                    <Form.Control
                        type="date"
                        placeholder="dd/mm/yy"
                        value={dob}
                        onChange={(e) => setDob(e.target.value)}
                    />
                    {submit && !dob && (
                        <span className="spanError">DOB Required</span>
                      )}
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Gender</Form.Label>
                        <Form.Select  value={gender}
                        onChange={(e) => setGender(e.target.value)} id="exampleForm.ControlInput6">
                            <option value={""}>Select Gender</option>
                            <option value={"male"}>Male</option>
                            <option value={"female"}>Female</option>
                            <option value={"others"}>Others</option>
                        </Form.Select>
                        {submit && !gender && (
                        <span className="spanError">Gender Required</span>
                      )}
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput7">
                    <Form.Label>Profile Status</Form.Label>
                        <Form.Select value={profileStatus}
                        onChange={(e) => setProfileStatus(e.target.value)} size="lg">
                            <option>Select Status</option>
                            <option value={"Taking a break"}>Taking a break</option>
                            <option value={"Focusing on an opportunity"}>Focusing on an opportunity</option>
                            <option value={"Off-Market"}>Off-Market</option>
                        </Form.Select>
                        {submit && !gender && (
                        <span className="spanError">Profile Status</span>
                      )}
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput8">
                    <Form.Label>Create Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Enter a Strong Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                       {submit && !password && (
                        <span className="spanError">Password Required</span>
                      )}
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput9">
                    <Form.Label>Repeat Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Repeat Password"
                        value={repeatPassword}
                        onChange={(e) => setRepeatPassword(e.target.value)}
                    />
                      {submit && !repeatPassword && (
                        <span className="spanError">
                          Repeat Password Required
                        </span>
                      )}

                      {submit && !confirmPassword && (
                        <span className="spanError">
                          Password or repeat password not matched please check
                        </span>
                      )}
                </Form.Group>
                <Form.Group as={Row} className="mb-3">
                    <Col sm={{ span: 10, offset: 2 }}>
                        <Button className="signin" type="submit">SIGN UP</Button>
                    </Col>
                </Form.Group>
            </Form>
        </>
    );
};


export const PersonalInfoPassForm = () => {
    const history = useNavigate();
    const [submit,setSubmit] = useState(false);
    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [repeatPassword, setRepeatPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState(true);
    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmit(true);
        let checkConfirmPassword = newPassword === repeatPassword;
      if (!checkConfirmPassword && repeatPassword) {
        setConfirmPassword(false);
      } else {
        setConfirmPassword(true);
      }
      
        let checkCondition =
        oldPassword &&
        newPassword &&
        repeatPassword;
      if (checkCondition) {
          let userData = {};
          userData.oldPassword = oldPassword;
          userData.newPassword = newPassword;
          profileService.changePassword(userData, history);
      }
      }
    return (
        <>
            <Form className="form" onSubmit={handleSubmit}>                
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput8">
                    <Form.Label>Old Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Enter your old password"
                        value={oldPassword}
                        autoFocus
                        onChange={(e) => setOldPassword(e.target.value)}
                    />
                </Form.Group>
                <Form.Group className="mb-3 real-pose" controlId="exampleForm.ControlInput9">
                    <Form.Label>New Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Enter a Strong Password"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                    />
                    {submit && !newPassword && (
                    <span className="spanError">Password Required</span>
                    )}
                    <div className='wrap-i'>
                        <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd">
                            <path d="M8.137 15.147c-.71-.857-1.146-1.947-1.146-3.147 0-2.76 2.241-5 5-5 1.201 0 2.291.435 3.148 1.145l1.897-1.897c-1.441-.738-3.122-1.248-5.035-1.248-6.115 0-10.025 5.355-10.842 6.584.529.834 2.379 3.527 5.113 5.428l1.865-1.865zm6.294-6.294c-.673-.53-1.515-.853-2.44-.853-2.207 0-4 1.792-4 4 0 .923.324 1.765.854 2.439l5.586-5.586zm7.56-6.146l-19.292 19.293-.708-.707 3.548-3.548c-2.298-1.612-4.234-3.885-5.548-6.169 2.418-4.103 6.943-7.576 12.01-7.576 2.065 0 4.021.566 5.782 1.501l3.501-3.501.707.707zm-2.465 3.879l-.734.734c2.236 1.619 3.628 3.604 4.061 4.274-.739 1.303-4.546 7.406-10.852 7.406-1.425 0-2.749-.368-3.951-.938l-.748.748c1.475.742 3.057 1.19 4.699 1.19 5.274 0 9.758-4.006 11.999-8.436-1.087-1.891-2.63-3.637-4.474-4.978zm-3.535 5.414c0-.554-.113-1.082-.317-1.562l.734-.734c.361.69.583 1.464.583 2.296 0 2.759-2.24 5-5 5-.832 0-1.604-.223-2.295-.583l.734-.735c.48.204 1.007.318 1.561.318 2.208 0 4-1.792 4-4z"/>
                        </svg> 
                    </div>                                      
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput9">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput9">
                    <Form.Control
                        type="password"
                        placeholder="Repeat Password"
                        value={repeatPassword}
                        onChange={(e) => setRepeatPassword(e.target.value)}
                    />
                      {submit && !repeatPassword && (
                        <span className="spanError">
                          Repeat Password Required
                        </span>
                      )}

                      {submit && !confirmPassword && (
                        <span className="spanError">
                          Password or repeat password not matched please check
                        </span>
                      )}
                </Form.Group>
                </Form.Group>    
                <Form.Group as={Row} className="mb-3">
                    <Col sm={{ span: 10, offset: 2 }}>
                        <Button className="signin" type="submit">Change Password</Button>
                    </Col>
                </Form.Group>
            </Form>
        </>
    );
};



export const BasicInfo = () => {

    const [firstName,setFirstName] = useState("");
    const [lastName,setLastName] = useState("");
    useEffect(() => {
        callApi()
      }, []);

      const callApi = async ()  => {
        let data = await profileService.getProfileData();
        setFirstName(data.user.firstName);
        setLastName(data.user.lastName);
        setVanityUrl(data.user.username);
        setEmail(data.email);
        setPhone(data.user.phone);
        setDob(data.user.dob);
        setGender(data.user.gender);
        setProfileStatus(data.user.profileStatus.status);
      }
    
    const history = useNavigate();
    const [submit,setSubmit] = useState(false);
    const [vanityUrl,setVanityUrl] = useState("");
    const [fullName,setFullName] = useState("");
    const [email,setEmail] = useState("");
    const [phone,setPhone] = useState("");
    const [dob,setDob] = useState("");
    const [gender,setGender] = useState("");
    const [profileStatus, setProfileStatus] = useState("");
    const [errorMessageForUsername,setErrorMessageForUsername] = useState("")
    const [errorColorClass,setErrorColorClass] = useState("")
    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmit(true);
        let checkCondition =
        fullName &&
        email &&
        vanityUrl &&
        phone &&
        dob && 
        gender && 
        profileStatus;

    if (checkCondition) {
        let userData = {};
        userData.fullName = fullName;
        userData.email = email;
        userData.username = vanityUrl;
        userData.phone = phone;
        userData.dob = dob;
        userData.gender = gender;
        userData.profileStatus = profileStatus;
        profileService.basicInfo(userData, history);
    }
    }

    const checkUsername = async (params) => {
        let wordCount = params.target.value.length > 4;
        if(wordCount){
            let result = await userService.checkUsername(params.target.value,history);
            if(vanityUrl){
                if(result?.statusCode === 400){
                    setErrorMessageForUsername(result?.customMessage)
                    setErrorColorClass("red");
                }else{
                    setErrorMessageForUsername(result?.customMessage)
                    setErrorColorClass("green");
                }
            }else{
                setErrorMessageForUsername("please type atleast 5 words")
                    setErrorColorClass("red");
            }
        }else{
            setErrorMessageForUsername("please type atleast 5 words")
                    setErrorColorClass("red");
        }
    }

    return (
        <>
            <Container>
                <Row>
                    <Col xs={12}>
                        <Form className="form" onSubmit={handleSubmit}>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
                                <Form.Label>Vanity URL</Form.Label>
                                <div className='Input-Outer'>
                                    <div className='Input-Sign'>
                                        <Form.Control
                                            type="text"
                                            placeholder="Type here..."
                                            autoFocus
                                            value={vanityUrl}
                                            onChange={(e) => setVanityUrl(e.target.value)}
                                            onKeyUpCapture={checkUsername}
                                            className="form-vanity"
                                        />
                                        {submit && !vanityUrl && (
                                            <span className="spanError">Vanity Url Required</span>
                                        )}
                                    </div>
                                </div>
                                <div className='Value-Sign'>
                                    <Form.Label>upscaled.com/{checkUsername}</Form.Label>
                                    {/* <p className='Error-Msg'>not available</p> */}
                                </div>
                                <Form.Text className={errorColorClass}>
                                    {errorMessageForUsername}
                                </Form.Text> 
                            </Form.Group>
                            <Form.Group className="mb-3 real-pose" controlId="exampleForm.ControlInput9">
                                <Form.Label>Full Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter here"
                                    value={firstName +' '+ lastName}
                                    onChange={(e) => setFullName(e.target.value)}
                                />
                                {submit && !fullName && (
                                    <span className="spanError">Name Required</span>
                                )}
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                                <Form.Label>Email Address</Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder="Enter your Email Address"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                {submit && !email && (
                                    <span className="spanError">Email Required</span>
                                )}
                            </Form.Group>
                            <ViewEmail/>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput4">
                                <Form.Label>Phone Number</Form.Label>
                                <Form.Control
                                    type="number"
                                    placeholder="Enter Your Phone Number"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                />
                                {submit && !phone && (
                                    <span className="spanError">Phone Required</span>
                                )}
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput4">
                                <Form.Label>DOB</Form.Label>
                                <Form.Control
                                    type="date"
                                    placeholder="dd/mm/yy"
                                    value={dob}
                                    onChange={(e) => setDob(e.target.value)}
                                />
                                {submit && !dob && (
                                    <span className="spanError">DOB Required</span>
                                )}
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput4">
                                <Form.Label>Gender</Form.Label>
                                <Form.Select  value={gender}
                                onChange={(e) => setGender(e.target.value)} id="exampleForm.ControlInput6">
                                    <option value={""}>Select Gender</option>
                                    <option value={"male"}>Male</option>
                                    <option value={"female"}>Female</option>
                                    <option value={"others"}>Others</option>
                                </Form.Select>
                                {submit && !gender && (
                                    <span className="spanError">Gender Required</span>
                                )}
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput4">
                                <Form.Label>Profile Status</Form.Label>
                                <Form.Select value={profileStatus}
                                onChange={(e) => setProfileStatus(e.target.value)} size="lg">
                                    <option>Select Status</option>
                                    <option value={"Taking a break"}>Taking a break</option>
                                    <option value={"Focusing on an opportunity"}>Focusing on an opportunity</option>
                                    <option value={"Off-Market"}>Off-Market</option>
                                </Form.Select>
                                {submit && !gender && (
                                    <span className="spanError">Profile Status</span>
                                )}
                            </Form.Group>
                            <Form.Group as={Row} className="mb-3">
                                <Col sm={{ span: 10, offset: 2 }}>
                                    <Button className="signin" type="submit">Submit</Button>
                                </Col>
                            </Form.Group>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </>
    );
};


export const PersonalInfo = () => {

    const [openToDating,setOpenToDating] = useState("");
    const [career,setCareer] = useState("");
    const [kids,setKids] = useState("");
    const [vibe,setvibe] = useState("");
    const [hobbies,setHobbies] = useState("");

    const options = [
        { value: 'Painting', label: 'Painting' },
        { value: 'Cooking', label: 'Cooking' },
        { value: 'Drawing', label: 'Drawing' },
        { value: 'Drawing2', label: 'Drawing2' },
        { value: 'Learning', label: 'Learning' },
        { value: 'Learning1', label: 'Learning1' },
        { value: 'Learning2', label: 'Learning2' },
        { value: 'Learning3', label: 'Learning3' }
    ]
    const options2 = [
        { value: 'Swinging', label: 'Swinging' },
        { value: 'Marriage', label: 'Marriage' },
        {value:'Polyamory',label:'Polyamory'}
    ]
    const options3 = [
        { value: 'Option 1', label: 'Option 1' },
        { value: 'Option 2', label: 'Option 2' }
    ]

    useEffect(() => {
        callApi()
      }, []);

      const callApi = async ()  => {
        let data = await profileService.getProfileData();
        setOpenToDating(data.user.openToDating);
        setCareer(data.user.career);
        setKids(data.user.kids);
        setvibe(data.user.vibe);
            let cateArr = [];
            data.user.hobbies.forEach(element => {
                let finalData = { value: element, label: element };
                cateArr.push(finalData);
            });
            setHobbies(cateArr);
      }
    
    const history = useNavigate();
  
    const handleSubmit = (e) => {
        e.preventDefault();
      let userData = {};
      userData.openToDating = openToDating;
      userData.career = career;
      userData.kids = kids;
      userData.vibe = vibe;
      userData.hobbies = hobbies;
      profileService.updatePersonalInformation(userData, history);
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
                    <Col xs={12}>
                        <Form className="form" onSubmit={handleSubmit}>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
                                <Form.Label>Open to dating </Form.Label>
                                <Form.Select  value={openToDating}
                                    onChange={(e) => setOpenToDating(e.target.value)} id="exampleForm.ControlInput6">
                                    <option value={""}>Select here</option>
                                    <option value={"Swinging"}>Swinging</option>
                                    <option value={"Marriage"}>Marriage</option>
                                    <option value={"Polyamory"}>Polyamory</option>
                                </Form.Select>
                            </Form.Group>
                            <Form.Group className="mb-3 real-pose" controlId="exampleForm.ControlInput9">
                                <Form.Label>Career</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter career here"
                                    onChange={(e) => setCareer(e.target.value)}
                                    value={career}
                                    autoFocus
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                                <Form.Label>Do you have kids?</Form.Label>
                                <Form>
                                    {['radio'].map((type) => (
                                        <div key={`inline-${type}`} className="ml-5 mt-3 mb-3">
                                            <Form.Check
                                                inline
                                                label="Yes"
                                                name="group1"
                                                // value={kids}
                                                type={type}
                                                onClick={(e) => setKids(true)}
                                                id={`inline-${type}-1`}
                                                defaultChecked
                                            />
                                            <Form.Check
                                                inline
                                                label="No"
                                                name="group1"
                                                // value={kids}
                                                onClick={(e) => setKids(false)}
                                                type={type}
                                                id={`inline-${type}-2`}
                                                defaultChecked
                                            />
                                        </div>
                                    ))}
                                </Form>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput4">
                                <Form.Label>Hobbies</Form.Label>
                                <Select
                                    defaultValue={[options[0], options[1]]}
                                    isMulti
                                    name="colors"
                                    options={options}
                                    // value={hobbies}
                                    onChange={(e) => setHobbiesData(e)}
                                    className="basic-multi-select form"
                                    classNamePrefix="select"
                                    placeholder="Select here"
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput4">
                                <Form.Label>Vibe</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter vibe here"
                                    onChange={(e) => setvibe(e.target.value)}
                                    value={vibe}
                                    autoFocus
                                />
                            </Form.Group>
                            <Form.Group as={Row} className="mb-3">
                                <Col sm={{ span: 10, offset: 2 }}>
                                    <Button className="signin" type="submit">Submit</Button>
                                </Col>
                            </Form.Group>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </>
    );
};


export const AddRemoveInputField = () => {

    const [inputFields, setInputFields] = useState([{
        fullName: '',
    }]);
    const addInputField = () => {
        setInputFields([...inputFields, {
            fullName: '',
        }])
    }
    const handleChange = (index, evnt) => {
        const { name, value } = evnt.target;
        const list = [...inputFields];
        list[index][name] = value;
        setInputFields(list);
    }
    return (
        <Container>
            <Row>
                <Col sm={12}>
                    <Form.Label>Social media links </Form.Label>
                    {
                        inputFields.map((data, index) => {
                            const { fullName, facebook, youtube, linkedin, instagram } = data;
                            return (
                                <div className="row my-3" key={index}>
                                    <div className="Form-Group">
                                        <input type="text" onChange={(evnt) => handleChange(index, evnt)} value={fullName} name="fullName" className="form-control" placeholder="Type your link here" />
                                    </div>
                                </div>
                            )
                        })
                    }
                    <div style={{ height: 40, width: 131 }}>
                        <div onClick={addInputField}>
                            <svg width="131" height="40" viewBox="0 0 131 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g opacity="0.1" filter="url(#filter0_b_943_6065)">
                                    <rect width="131" height="40" rx="4" fill="#F78000" />
                                </g>
                                <path d="M47.26 25L50.497 16.42H52.161L55.398 25H53.929L51.719 18.864L51.329 17.629H51.29L50.926 18.838L48.69 25H47.26ZM48.989 22.751V21.62H53.63V22.751H48.989ZM59.0809 25.13C58.5435 25.13 58.0539 24.9957 57.6119 24.727C57.1785 24.4583 56.8362 24.0727 56.5849 23.57C56.3335 23.0673 56.2079 22.465 56.2079 21.763C56.2079 21.035 56.3422 20.4197 56.6109 19.917C56.8795 19.4143 57.2392 19.033 57.6899 18.773C58.1405 18.5043 58.6345 18.37 59.1719 18.37C59.7265 18.37 60.1945 18.5217 60.5759 18.825C60.9572 19.1283 61.2129 19.5227 61.3429 20.008L61.1869 20.151V15.575H62.5779V25H61.3429L61.2389 23.232L61.4209 23.245C61.3602 23.635 61.2172 23.973 60.9919 24.259C60.7665 24.5363 60.4849 24.753 60.1469 24.909C59.8175 25.0563 59.4622 25.13 59.0809 25.13ZM59.3799 24.012C59.7525 24.012 60.0732 23.9167 60.3419 23.726C60.6105 23.5353 60.8185 23.2667 60.9659 22.92C61.1132 22.5733 61.1869 22.1573 61.1869 21.672C61.1869 21.2213 61.1132 20.8357 60.9659 20.515C60.8185 20.1857 60.6105 19.9343 60.3419 19.761C60.0819 19.5877 59.7785 19.501 59.4319 19.501C58.8512 19.501 58.4005 19.7003 58.0799 20.099C57.7592 20.4977 57.5989 21.048 57.5989 21.75C57.5989 22.452 57.7549 23.0067 58.0669 23.414C58.3789 23.8127 58.8165 24.012 59.3799 24.012ZM67.2313 25.13C66.6939 25.13 66.2043 24.9957 65.7623 24.727C65.3289 24.4583 64.9866 24.0727 64.7353 23.57C64.4839 23.0673 64.3583 22.465 64.3583 21.763C64.3583 21.035 64.4926 20.4197 64.7613 19.917C65.0299 19.4143 65.3896 19.033 65.8403 18.773C66.2909 18.5043 66.7849 18.37 67.3223 18.37C67.8769 18.37 68.3449 18.5217 68.7263 18.825C69.1076 19.1283 69.3633 19.5227 69.4933 20.008L69.3373 20.151V15.575H70.7283V25H69.4933L69.3893 23.232L69.5713 23.245C69.5106 23.635 69.3676 23.973 69.1423 24.259C68.9169 24.5363 68.6353 24.753 68.2973 24.909C67.9679 25.0563 67.6126 25.13 67.2313 25.13ZM67.5303 24.012C67.9029 24.012 68.2236 23.9167 68.4923 23.726C68.7609 23.5353 68.9689 23.2667 69.1163 22.92C69.2636 22.5733 69.3373 22.1573 69.3373 21.672C69.3373 21.2213 69.2636 20.8357 69.1163 20.515C68.9689 20.1857 68.7609 19.9343 68.4923 19.761C68.2323 19.5877 67.9289 19.501 67.5823 19.501C67.0016 19.501 66.5509 19.7003 66.2303 20.099C65.9096 20.4977 65.7493 21.048 65.7493 21.75C65.7493 22.452 65.9053 23.0067 66.2173 23.414C66.5293 23.8127 66.9669 24.012 67.5303 24.012ZM86.0832 16.42V25H84.7962V20.034L84.9002 17.668H84.8872L82.2742 25H81.1172L78.5042 17.668H78.4912L78.5952 20.034V25H77.3082V16.42H79.3752L81.1042 21.386L81.7022 23.427H81.7282L82.3392 21.386L84.0552 16.42H86.0832ZM91.1695 18.37C91.8022 18.37 92.3612 18.5043 92.8465 18.773C93.3319 19.0417 93.7089 19.4317 93.9775 19.943C94.2549 20.4457 94.3935 21.048 94.3935 21.75C94.3935 22.452 94.2549 23.0587 93.9775 23.57C93.7089 24.0727 93.3319 24.4583 92.8465 24.727C92.3612 24.9957 91.8022 25.13 91.1695 25.13C90.5369 25.13 89.9779 24.9957 89.4925 24.727C89.0072 24.4583 88.6259 24.0727 88.3485 23.57C88.0712 23.0587 87.9325 22.452 87.9325 21.75C87.9325 21.048 88.0712 20.4457 88.3485 19.943C88.6259 19.4317 89.0072 19.0417 89.4925 18.773C89.9779 18.5043 90.5369 18.37 91.1695 18.37ZM91.1695 19.462C90.7795 19.462 90.4459 19.553 90.1685 19.735C89.8999 19.9083 89.6919 20.164 89.5445 20.502C89.3972 20.84 89.3235 21.256 89.3235 21.75C89.3235 22.2353 89.3972 22.6513 89.5445 22.998C89.6919 23.336 89.8999 23.596 90.1685 23.778C90.4459 23.9513 90.7795 24.038 91.1695 24.038C91.5595 24.038 91.8889 23.9513 92.1575 23.778C92.4262 23.596 92.6342 23.336 92.7815 22.998C92.9289 22.6513 93.0025 22.2353 93.0025 21.75C93.0025 21.256 92.9289 20.84 92.7815 20.502C92.6342 20.164 92.4262 19.9083 92.1575 19.735C91.8889 19.553 91.5595 19.462 91.1695 19.462ZM96.1435 25V18.5H97.3265L97.4565 19.67C97.6298 19.2453 97.8855 18.9247 98.2235 18.708C98.5701 18.4827 98.9948 18.37 99.4975 18.37C99.6275 18.37 99.7575 18.383 99.8875 18.409C100.017 18.4263 100.126 18.4567 100.212 18.5L100.017 19.722C99.9221 19.6873 99.8138 19.6613 99.6925 19.644C99.5798 19.618 99.4238 19.605 99.2245 19.605C98.9558 19.605 98.6915 19.6787 98.4315 19.826C98.1715 19.9647 97.9548 20.177 97.7815 20.463C97.6168 20.749 97.5345 21.113 97.5345 21.555V25H96.1435ZM104.221 25.13C103.571 25.13 102.999 24.9957 102.505 24.727C102.011 24.4583 101.626 24.0727 101.348 23.57C101.08 23.0587 100.945 22.452 100.945 21.75C100.945 21.048 101.08 20.4457 101.348 19.943C101.626 19.4317 102.007 19.0417 102.492 18.773C102.978 18.5043 103.528 18.37 104.143 18.37C104.776 18.37 105.313 18.5 105.755 18.76C106.197 19.02 106.535 19.3753 106.769 19.826C107.003 20.2767 107.12 20.788 107.12 21.36C107.12 21.516 107.116 21.6633 107.107 21.802C107.099 21.9407 107.086 22.062 107.068 22.166H101.842V21.1H106.457L105.768 21.308C105.768 20.7187 105.621 20.268 105.326 19.956C105.032 19.6353 104.629 19.475 104.117 19.475C103.745 19.475 103.42 19.5617 103.142 19.735C102.865 19.9083 102.653 20.1683 102.505 20.515C102.358 20.853 102.284 21.269 102.284 21.763C102.284 22.2483 102.362 22.66 102.518 22.998C102.674 23.336 102.895 23.5917 103.181 23.765C103.467 23.9383 103.805 24.025 104.195 24.025C104.629 24.025 104.98 23.9427 105.248 23.778C105.517 23.6133 105.729 23.3837 105.885 23.089L106.99 23.609C106.834 23.921 106.622 24.194 106.353 24.428C106.093 24.6533 105.781 24.8267 105.417 24.948C105.053 25.0693 104.655 25.13 104.221 25.13Z" fill="#F78000" />
                                <path d="M32 27.5C36.1421 27.5 39.5 24.1421 39.5 20C39.5 15.8579 36.1421 12.5 32 12.5C27.8579 12.5 24.5 15.8579 24.5 20C24.5 24.1421 27.8579 27.5 32 27.5Z" stroke="#F78000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M32 17V23" stroke="#F78000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M29 20H35" stroke="#F78000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <defs>
                                    <filter id="filter0_b_943_6065" x="-24" y="-24" width="179" height="88" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                        <feGaussianBlur in="BackgroundImage" stdDeviation="12" />
                                        <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_943_6065" />
                                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_943_6065" result="shape" />
                                    </filter>
                                </defs>
                            </svg>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>

    )
}

export const PopupDelete = () => {
    const [PopupDelete, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handlePopupDelete = () => setShow(true);

    // const [video, setVideo] = useState();
    // const handleSubmit = () => {
    //     let userData = {};
    //     userData.video = video;
    //     profileService.deleteVideo(video);
    // }
    return (
        <>
            <NavLink to="" className="p-0" onClick={handlePopupDelete}>
                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="30" height="30" rx="4" fill="#FF3838" fill-opacity="0.1" />
                    <path d="M8.78052 10.9757H10.2439H21.9512" stroke="#FF3838" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M12.439 10.9757V9.51224C12.439 9.12412 12.5932 8.7519 12.8676 8.47745C13.1421 8.20301 13.5143 8.04883 13.9024 8.04883H16.8293C17.2174 8.04883 17.5896 8.20301 17.8641 8.47745C18.1385 8.7519 18.2927 9.12412 18.2927 9.51224V10.9757M20.4878 10.9757V21.2196C20.4878 21.6077 20.3336 21.9799 20.0592 22.2543C19.7847 22.5288 19.4125 22.683 19.0244 22.683H11.7073C11.3192 22.683 10.947 22.5288 10.6725 22.2543C10.3981 21.9799 10.2439 21.6077 10.2439 21.2196V10.9757H20.4878Z" stroke="#FF3838" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M13.9026 14.6342V19.0244" stroke="#FF3838" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M16.8293 14.6342V19.0244" stroke="#FF3838" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </NavLink>
            <Modal show={PopupDelete} onHide={handleClose} className="login">
                <Modal.Body>
                    <div className="favorite-delete">
                        <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 70 70" fill="none">
                            <circle opacity="0.1" cx="35" cy="35" r="35" fill="#E83C3C" />
                            <path d="M26 29H28H44" stroke="#E83C3C" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M31 29V27C31 26.4696 31.2107 25.9609 31.5858 25.5858C31.9609 25.2107 32.4696 25 33 25H37C37.5304 25 38.0391 25.2107 38.4142 25.5858C38.7893 25.9609 39 26.4696 39 27V29M42 29V43C42 43.5304 41.7893 44.0391 41.4142 44.4142C41.0391 44.7893 40.5304 45 40 45H30C29.4696 45 28.9609 44.7893 28.5858 44.4142C28.2107 44.0391 28 43.5304 28 43V29H42Z" stroke="#E83C3C" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M33 34V40" stroke="#E83C3C" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M37 34V40" stroke="#E83C3C" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <div className="heading">
                            <h4>Delete?</h4>
                            <p>Are you sure you want to detele Savannah Video?</p>
                        </div>
                        <div className="button">
                            <button className="btn btn-link cancel">NO</button>
                            <button className="btn btn-link save">YES</button>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
};


export const UpdateprofileSuccess = () => {
    const [PopupDelete, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handlePopupDelete1 = () => setShow(true);
    return (
        <>
            <NavLink to="" className="p-0" onClick={handlePopupDelete1}>
                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="30" height="30" rx="4" fill="#FF3838" fill-opacity="0.1" />
                    <path d="M8.78052 10.9757H10.2439H21.9512" stroke="#FF3838" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M12.439 10.9757V9.51224C12.439 9.12412 12.5932 8.7519 12.8676 8.47745C13.1421 8.20301 13.5143 8.04883 13.9024 8.04883H16.8293C17.2174 8.04883 17.5896 8.20301 17.8641 8.47745C18.1385 8.7519 18.2927 9.12412 18.2927 9.51224V10.9757M20.4878 10.9757V21.2196C20.4878 21.6077 20.3336 21.9799 20.0592 22.2543C19.7847 22.5288 19.4125 22.683 19.0244 22.683H11.7073C11.3192 22.683 10.947 22.5288 10.6725 22.2543C10.3981 21.9799 10.2439 21.6077 10.2439 21.2196V10.9757H20.4878Z" stroke="#FF3838" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M13.9026 14.6342V19.0244" stroke="#FF3838" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M16.8293 14.6342V19.0244" stroke="#FF3838" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </NavLink>
            <Modal show={PopupDelete} onHide={handleClose} className="login">
                <Modal.Body>
                    <div className="favorite-delete">                        
                        <div className="heading">
                            <h4>SUCCESS!</h4>
                            <p>You have successfuly updated your profile</p>
                        </div>
                        <div className="button">
                            <button className="btn btn-link save">Done</button>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
                
                <Form.Group as={Row} className="mb-3">
                    <Col sm={{ span: 10, offset: 2 }}>
                        <Button className="signin" type="submit">SIGN UP</Button>
                    </Col>
                </Form.Group>
        </>
    );
};
