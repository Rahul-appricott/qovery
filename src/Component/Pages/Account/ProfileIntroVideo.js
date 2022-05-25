import React, { useEffect, useState } from 'react';
import { Tab, Tabs, Form, Image, Container, Row, Col } from 'react-bootstrap';
// import '../../../Component/Sass/Pages/Profilebasicinformation.scss';
import { PopupDelete } from '../../Form/form';
import { profileService } from '../../../_services';
import { useNavigate, NavLink, Link } from 'react-router-dom';
import '../../../Component/Sass/Pages/Profilebasicinformation.scss';

export const ProfileIntroVideo = () => {

    const [video, setVideo] = useState();
    const [file, setFile] = useState();
    const [size, setSize] = useState();
    const [smilingFace, setSmilingFace] = useState();

    useEffect(() => {
        callApi()
      }, []);

    const callApi = async ()  => {
    let videodata = await profileService.getVideo();
    setVideo(videodata.video);
    setFile(videodata.file);
    setSize(videodata.size);

    let imagedata = await profileService.getImages();
    setSmilingFace(imagedata.smilingFace);
    }
    return (
        <>
            <Row>
                <Col xs={12}>
                    <div className='Video-Sign'>
                        <video style={{ height: 335, width: '100%', borderRadius: 10, marginTop: 10 }} controls>
                            <source src={video}></source>
                            Sorry, your browser doesn't support videos.
                        </video>
                    </div>
                    <div className='Video-Display mt-3'>
                        <div className='imgas'>
                            <div className="imags">
                                <div className="upload-image">
                                    <Image src={smilingFace} className="images-1 rec" />
                                    <div class="video-card">
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="8" cy="8" r="8" fill="white" />
                                            <path d="M10.1362 7.13408C10.8029 7.51898 10.8029 8.48123 10.1362 8.86613L7.68168 10.2833C7.01502 10.6682 6.18168 10.187 6.18168 9.41724L6.18168 6.58297C6.18168 5.81317 7.01502 5.33204 7.68168 5.71694L10.1362 7.13408Z" fill="#F78000" />
                                        </svg>
                                    </div>
                                </div>
                                <div style={{ marginLeft: 10, flexDirection: 'column', display: 'grid', marginTop: 6 }}>
                                    <span style={{ fontWeight: 600, fontSize: 14 }}>
                                        File Namee : {file}
                                    </span>
                                    <span style={{ fontWeight: 500, fontSize: 14 }}>
                                        Size : {size}
                                    </span>
                                </div>
                            </div>
                            <NavLink to="" className='Add-Remove'>
                                <div className='Add-Viedo'>
                                    <input type="file" class="file" accept="video/*" />
                                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect opacity="0.1" width="30" height="30" rx="4" fill="#25A5FA" />
                                        <path d="M20.3333 16.7733V20.3333C20.3333 20.687 20.1928 21.0261 19.9428 21.2761C19.6927 21.5262 19.3536 21.6667 19 21.6667H9.66665C9.31302 21.6667 8.97389 21.5262 8.72384 21.2761C8.47379 21.0261 8.33331 20.687 8.33331 20.3333V11C8.33331 10.6464 8.47379 10.3072 8.72384 10.0572C8.97389 9.80714 9.31302 9.66666 9.66665 9.66666H13.2266" stroke="#25A5FA" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M19 8.33334L21.6666 11L15 17.6667H12.3333V15L19 8.33334Z" stroke="#25A5FA" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </div>
                                <div className='Remove-Video'>
                                    <PopupDelete />
                                
                                </div>
                            </NavLink>
                        </div>
                    </div>
                </Col>
            </Row>
        </>
    );
};
export default ProfileIntroVideo;

