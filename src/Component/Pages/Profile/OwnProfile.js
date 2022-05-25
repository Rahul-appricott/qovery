import React, {useState} from 'react';
import { useNavigate,Link } from "react-router-dom";
import { Container, Row, Image, Col, ProgressBar} from 'react-bootstrap';
import {NavLink} from 'react-router-dom';
import {SmilingFace, SideAngled, Personality, RandomImage, RandomImage1, RandomImage2, UserImage3 } from '../../../img/index';
import { userService } from "../../../_services";
import '../../../Component/Sass/Pages/Profile.scss';



export const OwnProfile = () => {
    const history = useNavigate();
    const [error, setError] = useState("");
    const [smilingFace,setSmilingFace] = useState("upload");
    const [sideAngled,setSideAngled] = useState("upload");
    const [personality,setPersonality] = useState("upload");
    const [random,setRandom] = useState("upload");
    const [random1,setRandom1] = useState("upload");
    const [random2,setRandom2] = useState("upload");
    const onFileChange = (event) => {
        // sideAngled
      let input = event.target;
      let getInputName = event.target.name;
      let reader = new FileReader();
      const formData = new FormData();
      if (event.target.files[0] !== undefined) {
        let checkType = event.target.files[0].type.split("/");
        let checkTypeCondition =
          checkType[1] === "png" ||
          checkType[1] === "jpg" ||
          checkType[1] === "jpeg";
        if (checkTypeCondition) {
            if(getInputName === "smilingFace"){
                reader.onload = function () {
                  var dataURL = reader.result;
                  var output = document.getElementById("output");
                  output.src = dataURL;
                };
                reader.readAsDataURL(input.files[0]);
                formData.append("image", event.target.files[0]);
                formData.append("image_type", "SMILING_FACE");
                userService.uploadImages(formData, history);
                setSmilingFace("Varify")
            }
            if(getInputName === "sideAngled"){
                reader.onload = function () {
                  var dataURL = reader.result;
                  var output = document.getElementById("output2");
                  output.src = dataURL;
                };
                reader.readAsDataURL(input.files[0]);
                formData.append("image", event.target.files[0]);
                formData.append("image_type", "SIDE_ANGLED");
                userService.uploadImages(formData, history);
                setSideAngled("Varify")
            }
            if(getInputName === "personality"){
                reader.onload = function () {
                  var dataURL = reader.result;
                  var output = document.getElementById("output3");
                  output.src = dataURL;
                };
                reader.readAsDataURL(input.files[0]);
                formData.append("image", event.target.files[0]);
                formData.append("image_type", "PERSONALITY");
                userService.uploadImages(formData, history);
                setPersonality("Varify")
            }
            if(getInputName === "random"){
                reader.onload = function () {
                  var dataURL = reader.result;
                  var output = document.getElementById("output4");
                  output.src = dataURL;
                };
                reader.readAsDataURL(input.files[0]);
                formData.append("image", event.target.files[0]);
                formData.append("image_type", "RANDOM_IMAGE");
                userService.uploadImages(formData, history);
                setRandom("Varify")
            }
            if(getInputName === "random1"){
                reader.onload = function () {
                  var dataURL = reader.result;
                  var output = document.getElementById("output5");
                  output.src = dataURL;
                };
                reader.readAsDataURL(input.files[0]);
                formData.append("image", event.target.files[0]);
                formData.append("image_type", "RANDOM_IMAGE");
                userService.uploadImages(formData, history);
                setRandom1("Varify")
            }
            if(getInputName === "random2"){
                reader.onload = function () {
                  var dataURL = reader.result;
                  var output = document.getElementById("output6");
                  output.src = dataURL;
                };
                reader.readAsDataURL(input.files[0]);
                formData.append("image", event.target.files[0]);
                formData.append("image_type", "RANDOM_IMAGE");
                userService.uploadImages(formData, history);
                setRandom2("Varify")
            }
        } else {
          setError("Upload Only PNG/JPG/JPEG File..");
        }
      }
    };

      
    return (
        <>
            <div className='OwnProfile full-height'>
                <div className="progress-b">
                    <ProgressBar now={30} />
                </div>
                <span className='back'>
                    <NavLink to="/profile">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="20" viewBox="0 0 30 20" fill="none">
                            <path opacity="0.8" d="M30 8.45025V11.267H5.71429L11.4286 16.9005L10 19.7173L0 9.85863L10 0L11.4286 2.81675L5.71429 8.45025H30Z" fill="#666666"/>
                        </svg>
                    </NavLink>    
                </span>
                <h3 className='Heading'>Upload Profile Picture</h3>
                <div className="paragraph-heading">
                    <p>Upload profile pictures that can be viewed by everyone who comes to your profile. </p>
                </div>    
                <div className='Box'>
                    <Container>
                        <Row>
                            <Col xs={12}>
                                <div className="heading">
                                    <h2 className='Example'>Example</h2>    
                                </div>    
                                <div className="images-div">
                                    <div className="images">
                                        <input type="file" onChange={onFileChange} name="smilingFace" required className="file-uplod"/>
                                        {(smilingFace === 'Varify') && (
                                            <Image src={SmilingFace}  id="output" className="images1 img-fluid" />
                                            )}
                                        {(smilingFace !== 'Varify') && (
                                            <Image src={SmilingFace}  id="output" className="images1 img-fluid rec" />
                                        )}
                                        <span className={smilingFace}>
                                        {(smilingFace === 'Varify') && (
                                            <>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-patch-check-fill" viewBox="0 0 16 16">
                                                <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z"/>
                                            </svg>
                                            </>
                                        )}
                                        {(smilingFace !== 'Varify') && (
                                            <>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cloud-upload" viewBox="0 0 16 16">
                                                <path fillRule="evenodd" d="M4.406 1.342A5.53 5.53 0 0 1 8 0c2.69 0 4.923 2 5.166 4.579C14.758 4.804 16 6.137 16 7.773 16 9.569 14.502 11 12.687 11H10a.5.5 0 0 1 0-1h2.688C13.979 10 15 8.988 15 7.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 2.825 10.328 1 8 1a4.53 4.53 0 0 0-2.941 1.1c-.757.652-1.153 1.438-1.153 2.055v.448l-.445.049C2.064 4.805 1 5.952 1 7.318 1 8.785 2.23 10 3.781 10H6a.5.5 0 0 1 0 1H3.781C1.708 11 0 9.366 0 7.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383z"/>
                                                <path fillRule="evenodd" d="M7.646 4.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V14.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3z"/>
                                            </svg>
                                            </>
                                        )}
                                        </span>
                                        <h3 className='title'>Smiling face</h3>
                                        <span className="spanError error">{error}</span>
                                    </div>
                                    <div className="images">
                                        <input type="file" onChange={onFileChange} name="sideAngled" required className="file-uplod"/>
                                        {(sideAngled === 'Varify') && (
                                           <Image src={SideAngled}  id="output2" className="images1 img-fluid" />
                                        )}
                                        {(sideAngled !== 'Varify') && (
                                           <Image src={SideAngled}  id="output2" className="images1 img-fluid rec" />
                                        )}
                                        <span className={sideAngled}>
                                        {(sideAngled === 'Varify') && (
                                            <>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-patch-check-fill svg-g" viewBox="0 0 16 16">
                                                <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z"/>
                                            </svg>
                                            </>
                                        )}
                                        {(sideAngled !== 'Varify') && (
                                            <>
                                            <svg xmlns="http://www.w3.org/2000/svg"  width="16" height="16" fill="currentColor" className="bi bi-cloud-upload svg-g" viewBox="0 0 16 16">
                                                <path fillRule="evenodd" d="M4.406 1.342A5.53 5.53 0 0 1 8 0c2.69 0 4.923 2 5.166 4.579C14.758 4.804 16 6.137 16 7.773 16 9.569 14.502 11 12.687 11H10a.5.5 0 0 1 0-1h2.688C13.979 10 15 8.988 15 7.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 2.825 10.328 1 8 1a4.53 4.53 0 0 0-2.941 1.1c-.757.652-1.153 1.438-1.153 2.055v.448l-.445.049C2.064 4.805 1 5.952 1 7.318 1 8.785 2.23 10 3.781 10H6a.5.5 0 0 1 0 1H3.781C1.708 11 0 9.366 0 7.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383z"/>
                                                <path fillRule="evenodd" d="M7.646 4.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V14.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3z"/>
                                            </svg>
                                            </>
                                        )}
                                        </span>
                                        <span className="centered">{(sideAngled !== 'Varify') && (
                                                <>
                                                    {"Upload Image"}
                                                </>
                                        )}</span>
                                        <h3 className='title'>Side Angled</h3>
                                    </div>
                                    <div className="images">
                                    <input type="file" onChange={onFileChange} name="personality" required className="file-uplod"/>
                                        {(personality === 'Varify') && (
                                           <Image src={Personality}  id="output3" className="images1 img-fluid" />
                                        )}
                                        {(personality !== 'Varify') && (
                                           <Image src={Personality}  id="output3" className="images1 img-fluid rec" />
                                        )}
                                        <span className={personality}>
                                        {(personality === 'Varify') && (
                                            <>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-patch-check-fill" viewBox="0 0 16 16">
                                                <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z"/>
                                            </svg>
                                            </>
                                        )}
                                        {(personality !== 'Varify') && (
                                            <>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cloud-upload" viewBox="0 0 16 16">
                                                <path fillRule="evenodd" d="M4.406 1.342A5.53 5.53 0 0 1 8 0c2.69 0 4.923 2 5.166 4.579C14.758 4.804 16 6.137 16 7.773 16 9.569 14.502 11 12.687 11H10a.5.5 0 0 1 0-1h2.688C13.979 10 15 8.988 15 7.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 2.825 10.328 1 8 1a4.53 4.53 0 0 0-2.941 1.1c-.757.652-1.153 1.438-1.153 2.055v.448l-.445.049C2.064 4.805 1 5.952 1 7.318 1 8.785 2.23 10 3.781 10H6a.5.5 0 0 1 0 1H3.781C1.708 11 0 9.366 0 7.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383z"/>
                                                <path fillRule="evenodd" d="M7.646 4.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V14.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3z"/>
                                            </svg>
                                            </>
                                        )}
                                        </span>
                                        <span className="centered">{(personality !== 'Varify') && (
                                                <>
                                                    {"Upload Image"}
                                                </>
                                        )}</span>
                                        <h3 className='title'>Personality</h3>
                                    </div>
                                    <div className="images">
                                    <input type="file" onChange={onFileChange} name="random" required className="file-uplod"/>
                                        {(random === 'Varify') && (
                                           <Image src={RandomImage}  id="output4" className="images1 img-fluid" />
                                        )}
                                        {(random !== 'Varify') && (
                                           <Image src={RandomImage}  id="output4" className="images1 img-fluid rec" />
                                        )}
                                        <span className={random}>
                                        {(random === 'Varify') && (
                                            <>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-patch-check-fill" viewBox="0 0 16 16">
                                                <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z"/>
                                            </svg>
                                            </>
                                        )}
                                        {(random !== 'Varify') && (
                                            <>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cloud-upload" viewBox="0 0 16 16">
                                                <path fillRule="evenodd" d="M4.406 1.342A5.53 5.53 0 0 1 8 0c2.69 0 4.923 2 5.166 4.579C14.758 4.804 16 6.137 16 7.773 16 9.569 14.502 11 12.687 11H10a.5.5 0 0 1 0-1h2.688C13.979 10 15 8.988 15 7.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 2.825 10.328 1 8 1a4.53 4.53 0 0 0-2.941 1.1c-.757.652-1.153 1.438-1.153 2.055v.448l-.445.049C2.064 4.805 1 5.952 1 7.318 1 8.785 2.23 10 3.781 10H6a.5.5 0 0 1 0 1H3.781C1.708 11 0 9.366 0 7.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383z"/>
                                                <path fillRule="evenodd" d="M7.646 4.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V14.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3z"/>
                                            </svg>
                                            </>
                                        )}
                                        </span>
                                        <span className="centered">{(random !== 'Varify') && (
                                                <>
                                                    {"Upload Image"}
                                                </>
                                        )}</span>
                                        <h3 className='title'>Random Image</h3>
                                    </div>
                                    <div className="images">
                                    <input type="file" onChange={onFileChange} name="random1" required className="file-uplod"/>
                                        {(random1 === 'Varify') && (
                                           <Image src={RandomImage1}  id="output5" className="images1 img-fluid" />
                                        )}
                                        {(random !== 'Varify') && (
                                           <Image src={RandomImage1}  id="output5" className="images1 img-fluid rec" />
                                        )}
                                        <span className={random1}>
                                        {(random1 === 'Varify') && (
                                            <>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-patch-check-fill" viewBox="0 0 16 16">
                                                <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z"/>
                                            </svg>
                                            </>
                                        )}
                                        {(random1 !== 'Varify') && (
                                            <>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cloud-upload" viewBox="0 0 16 16">
                                                <path fillRule="evenodd" d="M4.406 1.342A5.53 5.53 0 0 1 8 0c2.69 0 4.923 2 5.166 4.579C14.758 4.804 16 6.137 16 7.773 16 9.569 14.502 11 12.687 11H10a.5.5 0 0 1 0-1h2.688C13.979 10 15 8.988 15 7.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 2.825 10.328 1 8 1a4.53 4.53 0 0 0-2.941 1.1c-.757.652-1.153 1.438-1.153 2.055v.448l-.445.049C2.064 4.805 1 5.952 1 7.318 1 8.785 2.23 10 3.781 10H6a.5.5 0 0 1 0 1H3.781C1.708 11 0 9.366 0 7.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383z"/>
                                                <path fillRule="evenodd" d="M7.646 4.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V14.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3z"/>
                                            </svg>
                                            </>
                                        )}
                                        </span>
                                        <span className="centered">{(random1 !== 'Varify') && (
                                                <>
                                                    {"Upload Image"}
                                                </>
                                        )}</span>
                                        <h3 className='title'>Random Image</h3>
                                    </div>
                                    <div className="images">
                                    <input type="file" onChange={onFileChange} name="random2" required className="file-uplod"/>
                                        {(random2 === 'Varify') && (
                                           <Image src={RandomImage2}  id="output6" className="images1 img-fluid" />
                                        )}
                                        {(random !== 'Varify') && (
                                           <Image src={RandomImage2}  id="output6" className="images1 img-fluid rec" />
                                        )}
                                        <span className={random2}>
                                        {(random2 === 'Varify') && (
                                            <>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-patch-check-fill" viewBox="0 0 16 16">
                                                <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z"/>
                                            </svg>
                                            </>
                                        )}
                                        {(random2 !== 'Varify') && (
                                            <>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cloud-upload" viewBox="0 0 16 16">
                                                <path fillRule="evenodd" d="M4.406 1.342A5.53 5.53 0 0 1 8 0c2.69 0 4.923 2 5.166 4.579C14.758 4.804 16 6.137 16 7.773 16 9.569 14.502 11 12.687 11H10a.5.5 0 0 1 0-1h2.688C13.979 10 15 8.988 15 7.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 2.825 10.328 1 8 1a4.53 4.53 0 0 0-2.941 1.1c-.757.652-1.153 1.438-1.153 2.055v.448l-.445.049C2.064 4.805 1 5.952 1 7.318 1 8.785 2.23 10 3.781 10H6a.5.5 0 0 1 0 1H3.781C1.708 11 0 9.366 0 7.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383z"/>
                                                <path fillRule="evenodd" d="M7.646 4.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V14.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3z"/>
                                            </svg>
                                            </>
                                        )}
                                        </span>
                                        <span className="centered">{(random2 !== 'Varify') && (
                                                <>
                                                    {"Upload Image"}
                                                </>
                                        )}</span>
                                        <h3 className='title'>Random Image</h3>
                                    </div>
                                </div>    
                            </Col>    
                        </Row>
                    </Container>
                </div>

                <div className="private-stash-t">
                    <p>Photos in your private stash can only be viewed by people you approve</p>     
                    
                    <div className="upload-pics video-upload">
                        <div className='upload-video'>
                            <p>Private Stash</p>
                            <input type="file" onChange={onFileChange} name="video" required className="file-upload file-video"/> 
                            <div className='boxes'>
                                <span className='upload1'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cloud-upload" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M4.406 1.342A5.53 5.53 0 0 1 8 0c2.69 0 4.923 2 5.166 4.579C14.758 4.804 16 6.137 16 7.773 16 9.569 14.502 11 12.687 11H10a.5.5 0 0 1 0-1h2.688C13.979 10 15 8.988 15 7.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 2.825 10.328 1 8 1a4.53 4.53 0 0 0-2.941 1.1c-.757.652-1.153 1.438-1.153 2.055v.448l-.445.049C2.064 4.805 1 5.952 1 7.318 1 8.785 2.23 10 3.781 10H6a.5.5 0 0 1 0 1H3.781C1.708 11 0 9.366 0 7.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383z" />
                                        <path fillRule="evenodd" d="M7.646 4.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V14.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3z" />
                                    </svg>
                                </span>
                                <span className='UploadTitle'>Upload your Private Photos from gallery</span>
                                <Link type='submit' to='/#' > Browse Video </Link>
                            </div> 
                        
                            <div className="images-delete">
                                <div className="imge">
                                    <Image className="img-fluid" src={UserImage3}/>
                                        <NavLink to="">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
                                                <path d="M1.25 2.5H2.08333H8.75" stroke="#FF3838" strokeWidth="0.666667" strokeLinecap="round" strokeLinejoin="round"/>
                                                <path d="M3.33337 2.50004V1.66671C3.33337 1.44569 3.42117 1.23373 3.57745 1.07745C3.73373 0.921171 3.94569 0.833374 4.16671 0.833374H5.83337C6.05439 0.833374 6.26635 0.921171 6.42263 1.07745C6.57891 1.23373 6.66671 1.44569 6.66671 1.66671V2.50004M7.91671 2.50004V8.33337C7.91671 8.55439 7.82891 8.76635 7.67263 8.92263C7.51635 9.07891 7.30439 9.16671 7.08337 9.16671H2.91671C2.69569 9.16671 2.48373 9.07891 2.32745 8.92263C2.17117 8.76635 2.08337 8.55439 2.08337 8.33337V2.50004H7.91671Z" stroke="#FF3838" strokeWidth="0.666667" strokeLinecap="round" strokeLinejoin="round"/>
                                                <path d="M4.16663 4.58337V7.08337" stroke="#FF3838" strokeWidth="0.666667" strokeLinecap="round" strokeLinejoin="round"/>
                                                <path d="M5.83337 4.58337V7.08337" stroke="#FF3838" strokeWidth="0.666667" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                        </NavLink>    
                                </div>
                                <div className="imge">
                                    <Image className="img-fluid" src={UserImage3}/>
                                        <NavLink to="">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
                                                <path d="M1.25 2.5H2.08333H8.75" stroke="#FF3838" strokeWidth="0.666667" strokeLinecap="round" strokeLinejoin="round"/>
                                                <path d="M3.33337 2.50004V1.66671C3.33337 1.44569 3.42117 1.23373 3.57745 1.07745C3.73373 0.921171 3.94569 0.833374 4.16671 0.833374H5.83337C6.05439 0.833374 6.26635 0.921171 6.42263 1.07745C6.57891 1.23373 6.66671 1.44569 6.66671 1.66671V2.50004M7.91671 2.50004V8.33337C7.91671 8.55439 7.82891 8.76635 7.67263 8.92263C7.51635 9.07891 7.30439 9.16671 7.08337 9.16671H2.91671C2.69569 9.16671 2.48373 9.07891 2.32745 8.92263C2.17117 8.76635 2.08337 8.55439 2.08337 8.33337V2.50004H7.91671Z" stroke="#FF3838" strokeWidth="0.666667" strokeLinecap="round" strokeLinejoin="round"/>
                                                <path d="M4.16663 4.58337V7.08337" stroke="#FF3838" strokeWidth="0.666667" strokeLinecap="round" strokeLinejoin="round"/>
                                                <path d="M5.83337 4.58337V7.08337" stroke="#FF3838" strokeWidth="0.666667" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                        </NavLink>    
                                </div>
                                <div className="imge">
                                    <Image className="img-fluid" src={UserImage3}/>
                                        <NavLink to="">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
                                                <path d="M1.25 2.5H2.08333H8.75" stroke="#FF3838" strokeWidth="0.666667" strokeLinecap="round" strokeLinejoin="round"/>
                                                <path d="M3.33337 2.50004V1.66671C3.33337 1.44569 3.42117 1.23373 3.57745 1.07745C3.73373 0.921171 3.94569 0.833374 4.16671 0.833374H5.83337C6.05439 0.833374 6.26635 0.921171 6.42263 1.07745C6.57891 1.23373 6.66671 1.44569 6.66671 1.66671V2.50004M7.91671 2.50004V8.33337C7.91671 8.55439 7.82891 8.76635 7.67263 8.92263C7.51635 9.07891 7.30439 9.16671 7.08337 9.16671H2.91671C2.69569 9.16671 2.48373 9.07891 2.32745 8.92263C2.17117 8.76635 2.08337 8.55439 2.08337 8.33337V2.50004H7.91671Z" stroke="#FF3838" strokeWidth="0.666667" strokeLinecap="round" strokeLinejoin="round"/>
                                                <path d="M4.16663 4.58337V7.08337" stroke="#FF3838" strokeWidth="0.666667" strokeLinecap="round" strokeLinejoin="round"/>
                                                <path d="M5.83337 4.58337V7.08337" stroke="#FF3838" strokeWidth="0.666667" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                        </NavLink>    
                                </div>
                                <div className="imge">
                                    <Image className="img-fluid" src={UserImage3}/>
                                        <NavLink to="">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
                                                <path d="M1.25 2.5H2.08333H8.75" stroke="#FF3838" strokeWidth="0.666667" strokeLinecap="round" strokeLinejoin="round"/>
                                                <path d="M3.33337 2.50004V1.66671C3.33337 1.44569 3.42117 1.23373 3.57745 1.07745C3.73373 0.921171 3.94569 0.833374 4.16671 0.833374H5.83337C6.05439 0.833374 6.26635 0.921171 6.42263 1.07745C6.57891 1.23373 6.66671 1.44569 6.66671 1.66671V2.50004M7.91671 2.50004V8.33337C7.91671 8.55439 7.82891 8.76635 7.67263 8.92263C7.51635 9.07891 7.30439 9.16671 7.08337 9.16671H2.91671C2.69569 9.16671 2.48373 9.07891 2.32745 8.92263C2.17117 8.76635 2.08337 8.55439 2.08337 8.33337V2.50004H7.91671Z" stroke="#FF3838" strokeWidth="0.666667" strokeLinecap="round" strokeLinejoin="round"/>
                                                <path d="M4.16663 4.58337V7.08337" stroke="#FF3838" strokeWidth="0.666667" strokeLinecap="round" strokeLinejoin="round"/>
                                                <path d="M5.83337 4.58337V7.08337" stroke="#FF3838" strokeWidth="0.666667" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                        </NavLink>    
                                </div>        
                            </div>                              
                        </div>                        
                    </div>
                    
                    <div className="buttons blue-btn">
                        <button className="btn button">Continue</button>
                    </div>
                </div>

                {(random2 === 'Varify') && (random1 === 'Varify') && (random1 === 'Varify') && (random === 'Varify') && (personality === 'Varify') && (sideAngled === 'Varify') && (smilingFace === 'Varify') && (
                    <>
                         <Link type='submit' to={"/user/profile/upload/video"} className="ButtonSet2"> Continue </Link>
                    </>
                )} 
            </div>
        </>
    );
};

export default OwnProfile;