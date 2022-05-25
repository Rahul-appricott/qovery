import React, { useState } from 'react';
import { Container, Row, Image, Col, ProgressBar, Form } from 'react-bootstrap';
import { useNavigate,Link, NavLink } from 'react-router-dom';
import { VideoImage, VideoDelete } from '../../../img/index';
import VideoThumbnail from 'react-video-thumbnail'; // use npm published version

import '../../../Component/Sass/Pages/Profile.scss';
import '../../../Component/Sass/Pages/OwnProfile.scss';
import '../../../Component/Sass/Pages/IntroVideo.scss';
import { userService } from "../../../_services";

const UploadIntroVideo = () => {
    const history = useNavigate();

    const [error, setError] = useState("");
    const [videoUrl,setVideoUrl] = useState("https://v.ftcdn.net/04/98/21/74/700_F_498217484_1L49sm4yEgyWKJj9a4YCTipvBemobXiW_ST.mp4")
    const [isUpload,setIsUpload] = useState(false);
    const [videoId,setVideoId] = useState("");
    const [videoSize,setVideoSize] = useState("");
    const onFileChange = (event) => {
      let input = event.target;
      setVideoSize(formatBytes(event.target.files[0].size,2))
      let reader = new FileReader();
      const formData = new FormData();
      if (event.target.files[0] !== undefined) {
        let checkType = event.target.files[0].type.split("/");
        let checkTypeCondition =
          checkType[1] === "mp4"   ||
          checkType[1] === "mov"   ||
          checkType[1] === "wmv"   ||
          checkType[1] === "avi"   || 
          checkType[1] === "avchd" ||
          checkType[1] === "mkv"   ||
          checkType[1] === "webm"  ||
          checkType[1] === "mpeg-2";
        if (checkTypeCondition) {
                reader.onload = function () {
                  var dataURL = reader.result;
                  var output = document.getElementById("output");
                  output.src = dataURL;
                };
                reader.readAsDataURL(input.files[0]);
                formData.append("video", event.target.files[0]);
                userService.uploadVideo(formData, history);
                setIsUpload(true);
        } else {
          setError("Upload Only MP4/MKV/MOV/WMV/AVI/AVCHD/WEBM/MPEG-2 File..");
        }
      }
    };

    function formatBytes(bytes, decimals = 2) {
        if (bytes === 0) return '0 Bytes';
        const k = 1024;
        const dm = decimals < 0 ? 0 : decimals;
        const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
    }

    const deleteVideo = (e) => {
        alert("Video Deleted");
    }

    return (
        <>
            <Container>
                <Row>
                    <Col>
                        <div className='Info-User upload-v'>
                            <div className='progress-bb'>
                                <ProgressBar now={60} />
                            </div>
                            <div className='basicInfo'>
                                <div className='svg-i'>
                                    <NavLink to="/user/profile/images/upload">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="20" viewBox="0 0 30 20" fill="none">
                                            <path opacity="0.8" d="M30 8.45025V11.267H5.71429L11.4286 16.9005L10 19.7173L0 9.85863L10 0L11.4286 2.81675L5.71429 8.45025H30Z" fill="#666666" />
                                        </svg>
                                    </NavLink>    
                                </div>
                            </div>
                            <div className='basic-content'>
                                <h4>Upload intro Video</h4>
                                <p1>A intro will quickly give your audience an understanding of what they can expect from you</p1>
                            </div>
                            <span className='badge badge-danger error-badge' style={{color:"red"}}>{error}</span>
                            <div className='video-upload'>
                                <p>Upload your Video</p>
                                <div className='upload-video'>
                                    <input type="file" onChange={onFileChange} name="video" required className="file-upload file-video"/> 
                                    <div className='boxes'>
                                        <span className='upload1'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cloud-upload" viewBox="0 0 16 16">
                                                <path fillRule="evenodd" d="M4.406 1.342A5.53 5.53 0 0 1 8 0c2.69 0 4.923 2 5.166 4.579C14.758 4.804 16 6.137 16 7.773 16 9.569 14.502 11 12.687 11H10a.5.5 0 0 1 0-1h2.688C13.979 10 15 8.988 15 7.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 2.825 10.328 1 8 1a4.53 4.53 0 0 0-2.941 1.1c-.757.652-1.153 1.438-1.153 2.055v.448l-.445.049C2.064 4.805 1 5.952 1 7.318 1 8.785 2.23 10 3.781 10H6a.5.5 0 0 1 0 1H3.781C1.708 11 0 9.366 0 7.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383z" />
                                                <path fillRule="evenodd" d="M7.646 4.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V14.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3z" />
                                            </svg>
                                        </span>
                                        <span className='UploadTitle'>Upload your video from gallery</span>
                                        <Link type='submit' to='/#' > Browse Video </Link>
                                    </div>                               
                                </div>
                            </div>
                            <div className='boxes1'>
                                <div className="description">
                                {/* <video className='img-fluid video-user' poster={VideoImage} id="output" controls /> */}
                                <VideoThumbnail
                                        videoUrl={videoUrl}
                                        id="output"
                                        thumbnailHandler={(thumbnail) => console.log('video')}
                                        />
                                    <div className="details">
                                        <p>Boxes1</p>
                                        <span>{videoSize}</span>
                                    </div>    
                                </div>
                                <NavLink to="">
                                    <Image className="img-fluid video-delete" onClick={deleteVideo} data-id={videoId} src={VideoDelete}/>
                                </NavLink>    
                            </div>
                            <Form.Group className="w-100">
                                <Col sm={12}>
                                {(isUpload === true) && (
                                    <Link type='submit' to={'/user/profile/basic-information'} className="ButtonSet2 button btn"> Continue </Link>
                                )}
                                </Col>
                            </Form.Group>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    );
};
export default UploadIntroVideo;