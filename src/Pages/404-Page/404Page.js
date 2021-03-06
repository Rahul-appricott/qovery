import React, {useState,useEffect} from 'react';
import {HeaderSidebar} from '../../Component/Header/Header';
import {Container, Row, Col, Modal, ProgressBar} from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import {NavLink} from 'react-router-dom';
import {UserProfile, UserProfile1,UserProfile2,CreateImage} from '../../img/index';
import '../../Component/Sass/Pages/ErrorPage.scss';


const ErrorPage = () =>{
    return(
        <>
             <section className="Error">
                <Container>
                    <Row>
                        <Col xs={12}>
                            <div className="Error_image text-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="326" height="333" viewBox="0 0 326 333" fill="none">
                                <g clip-path="url(#clip0_2476_6332)">
                                <path opacity="0.1" d="M165.672 254.614C221.317 254.614 266.427 209.504 266.427 153.859C266.427 98.2137 221.317 53.1042 165.672 53.1042C110.027 53.1042 64.9172 98.2137 64.9172 153.859C64.9172 209.504 110.027 254.614 165.672 254.614Z" fill="#25A5FA"/>
                                <path d="M63.9208 203.682V179.528H16.5865V160.238L70.8912 90.5334H85.6426V160.076H99.9077V179.528H85.6426V203.682H63.9208ZM38.3084 160.076H66.3523V123.44L38.3084 160.076Z" fill="#3F4156"/>
                                <path d="M259.796 203.682V179.528H212.462V160.238L266.766 90.5334H281.518V160.076H295.783V179.528H281.518V203.682H259.796ZM234.184 160.076H262.227V123.44L234.184 160.076Z" fill="#3F4156"/>
                                <path d="M154.454 268.691L153.398 268.3C153.507 268.021 163.777 239.975 154.946 208.962C145.999 177.546 158.228 152.335 158.349 152.083L159.357 152.584C159.237 152.836 147.203 177.673 156.022 208.649C164.974 240.026 154.562 268.403 154.454 268.691Z" fill="white"/>
                                <path d="M212.997 95.9537C219.351 63.1506 203.486 43.6613 180.132 39.1321C156.778 34.6029 134.777 46.7616 128.414 79.5656C122.228 111.497 135.12 141.004 157.347 146.735C155.02 148.473 150.196 152.386 149.356 155.628C148.987 157.538 156.94 158.791 156.94 158.791C156.94 158.791 164.79 160.593 165.159 158.683C165.587 155.355 162.578 149.927 161.068 147.454C183.826 150.443 206.812 127.885 212.997 95.9537Z" fill="url(#paint0_linear_2476_6332)"/>
                                <path opacity="0.5" d="M203.067 63.7844C201.194 59.9126 197.39 57.3852 192.979 58.9431C189.257 60.2538 186.253 65.131 188.138 69.0305C190.801 74.5588 191.136 79.7765 189.242 85.6169C187.907 89.7224 191.667 94.1382 195.505 94.8837C200.127 95.7768 203.436 92.7264 204.772 88.6208C207.399 80.5486 206.755 71.4276 203.067 63.7844Z" fill="white"/>
                                <path opacity="0.5" d="M192.656 101.41C185.45 100.019 183.286 111.182 190.493 112.582C197.69 113.974 199.853 102.802 192.656 101.41Z" fill="white"/>
                                <path d="M155.854 146.362L155.669 147.476L163.279 148.741L163.464 147.627L155.854 146.362Z" fill="white"/>
                                <path opacity="0.5" d="M78.2414 69.2424C78.2414 72.7649 75.389 75.6173 71.8665 75.6173C68.344 75.6173 65.4915 72.7649 65.4915 69.2424C65.4915 65.7199 68.344 62.8674 71.8665 62.8674C75.3794 62.8674 78.2414 65.7199 78.2414 69.2424Z" fill="#25A5FA"/>
                                <path opacity="0.5" d="M213.321 246.736C213.321 250.258 210.469 253.111 206.946 253.111C203.424 253.111 200.571 250.258 200.571 246.736C200.571 243.213 203.424 240.361 206.946 240.361C210.469 240.351 213.321 243.204 213.321 246.736Z" fill="#25A5FA"/>
                                <path opacity="0.5" d="M318.766 154.041C321.045 154.041 322.892 152.194 322.892 149.915C322.892 147.637 321.045 145.79 318.766 145.79C316.488 145.79 314.641 147.637 314.641 149.915C314.641 152.194 316.488 154.041 318.766 154.041Z" fill="#25A5FA"/>
                                <path opacity="0.5" d="M239.587 89.5062C241.865 89.5062 243.712 87.6591 243.712 85.3807C243.712 83.1022 241.865 81.2551 239.587 81.2551C237.308 81.2551 235.461 83.1022 235.461 85.3807C235.461 87.6591 237.308 89.5062 239.587 89.5062Z" fill="#25A5FA"/>
                                <path opacity="0.5" d="M231.948 45.9825C231.948 47.9734 230.331 49.5911 228.34 49.5911C226.349 49.5911 224.731 47.9734 224.731 45.9825C224.731 43.9915 226.349 42.3738 228.34 42.3738C230.331 42.3642 231.948 43.9819 231.948 45.9825Z" fill="#25A5FA"/>
                                <path opacity="0.5" d="M49.3436 101.404C50.3216 101.404 51.1144 100.611 51.1144 99.6334C51.1144 98.6554 50.3216 97.8625 49.3436 97.8625C48.3656 97.8625 47.5728 98.6554 47.5728 99.6334C47.5728 100.611 48.3656 101.404 49.3436 101.404Z" fill="#25A5FA"/>
                                <path opacity="0.5" d="M84.4249 228.444C84.4249 229.793 83.3337 230.885 81.9841 230.885C80.6344 230.885 79.5432 229.793 79.5432 228.444C79.5432 227.094 80.6344 226.003 81.9841 226.003C83.3337 226.013 84.4249 227.104 84.4249 228.444Z" fill="#25A5FA"/>
                                <path opacity="0.5" d="M275.051 84.4428C275.051 85.7925 273.96 86.8837 272.61 86.8837C271.26 86.8837 270.169 85.7925 270.169 84.4428C270.169 83.0932 271.26 82.002 272.61 82.002C273.96 82.002 275.051 83.0932 275.051 84.4428Z" fill="#25A5FA"/>
                                <path opacity="0.5" d="M24.0161 128.531C24.0161 129.881 22.9249 130.972 21.5753 130.972C20.2256 130.972 19.1344 129.881 19.1344 128.531C19.1344 127.182 20.2256 126.091 21.5753 126.091C22.9249 126.091 24.0161 127.182 24.0161 128.531Z" fill="#25A5FA"/>
                                <path opacity="0.5" d="M118.013 49.352C118.013 50.7016 116.922 51.7928 115.572 51.7928C114.223 51.7928 113.131 50.7016 113.131 49.352C113.131 48.0023 114.223 46.9111 115.572 46.9111C116.922 46.9207 118.013 48.0119 118.013 49.352Z" fill="#25A5FA"/>
                                <path opacity="0.5" d="M2.44089 189.888C3.78893 189.888 4.88174 188.795 4.88174 187.447C4.88174 186.099 3.78893 185.006 2.44089 185.006C1.09284 185.006 3.05176e-05 186.099 3.05176e-05 187.447C3.05176e-05 188.795 1.09284 189.888 2.44089 189.888Z" fill="#25A5FA"/>
                                <path opacity="0.5" d="M326.079 188.94C326.079 190.29 324.988 191.381 323.638 191.381C322.289 191.381 321.198 190.29 321.198 188.94C321.198 187.59 322.289 186.499 323.638 186.499C324.988 186.499 326.079 187.6 326.079 188.94Z" fill="#25A5FA"/>
                                <path opacity="0.5" d="M95.4998 254.231C97.5192 254.231 99.1563 252.594 99.1563 250.574C99.1563 248.555 97.5192 246.918 95.4998 246.918C93.4803 246.918 91.8433 248.555 91.8433 250.574C91.8433 252.594 93.4803 254.231 95.4998 254.231Z" fill="#25A5FA"/>
                                <path opacity="0.5" d="M33.9614 217.082C36.2399 217.082 38.087 215.235 38.087 212.956C38.087 210.678 36.2399 208.831 33.9614 208.831C31.683 208.831 29.8359 210.678 29.8359 212.956C29.8359 215.235 31.683 217.082 33.9614 217.082Z" fill="#25A5FA"/>
                                <path opacity="0.5" d="M251.6 255.36C253.878 255.36 255.725 253.513 255.725 251.235C255.725 248.956 253.878 247.109 251.6 247.109C249.321 247.109 247.474 248.956 247.474 251.235C247.474 253.513 249.321 255.36 251.6 255.36Z" fill="#25A5FA"/>
                                <g opacity="0.1" filter="url(#filter0_f_2476_6332)">
                                <path d="M166.792 290.633C239.534 290.633 298.502 286.6 298.502 281.625C298.502 276.651 239.534 272.618 166.792 272.618C94.0502 272.618 35.0814 276.651 35.0814 281.625C35.0814 286.6 94.0502 290.633 166.792 290.633Z" fill="#5A4870"/>
                                </g>
                                </g>
                                <defs>
                                <filter id="filter0_f_2476_6332" x="19.7282" y="257.265" width="294.127" height="48.7207" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                                <feGaussianBlur stdDeviation="7.67658" result="effect1_foregroundBlur_2476_6332"/>
                                </filter>
                                <linearGradient id="paint0_linear_2476_6332" x1="165.877" y1="38.4955" x2="177.112" y2="158.252" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#FFA23E"/>
                                <stop offset="1" stop-color="#F78000"/>
                                </linearGradient>
                                <clipPath id="clip0_2476_6332">
                                <rect width="326" height="333" fill="white"/>
                                </clipPath>
                                </defs>
                                </svg>
                            </div>
                            <div className="Error_text text-center">
                                <h2>Opps! Page Not Found</h2>
                                <p>Seems that the page you are looking for  is not exist</p>
                            </div>
                            <div className="back_btn">
                                <button className="btn button">BACK TO HOME</button>
                            </div>
                        </Col>
                    </Row>
                </Container>
             </section>
        </>
    );
}

export default ErrorPage;