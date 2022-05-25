import React from "react";
import { Header } from "../../Component/Header/Header";
import { NavLink } from "react-router-dom";
import {Container, Row, Col, Button} from 'react-bootstrap';
import Image from "react-bootstrap/Image";
import {Slide, SlideImage1, SlideImage2} from '../../img/index';
import {ShareProfileHomepage, DataUser} from '../../Component/utils/button';
import { Chart } from "react-google-charts";
import {ProfilePic} from '../../Component/utils/button';
import '../../Component/Sass/Pages/Analytics.scss';
import '../../Component/Sass/Style.scss';


export const data = [
    ["Year", "Sales", "Expenses"],
    ["Sun", 1000, 400],
    ["Mon", 1170, 460],
    ["Tue", 660, 1120],
    ["Wed", 1030, 540],
    ["Thu", 1170, 460],
    ["Fri", 660, 1120],
    ["Sat", 1030, 540],
  ];

export const Bardata = [
    ["Element", "Density", { role: "style" }],
    ["People Intract with your profile", 21.45, "linear-gradient(180.18deg, #25A5FA 0.16%, rgba(255, 255, 255, 0) 146.54%)"], // CSS-style declaration
    ["Accepted Request", 10.49, "linear-gradient(180.18deg, #25A5FA 0.16%, rgba(255, 255, 255, 0) 146.54%)"], // English color name
    ["People you Rejected", 8.94, "linear-gradient(180.18deg, #25A5FA 0.16%, rgba(255, 255, 255, 0) 146.54%)"], // RGB value  
  ];
  
  export const baroptions = {
    title: "Popularity",
    curveType: "function",
    width:" 100%",
    legend: { position: "none" },
  };
  export const options = {
    title: "Popularity",
    curveType: "function",
    width:" 100%",
    is3D:"boolean",
    legend: { position: "none" },    
  };
  
  

const Analytics = () => {   

  return (
    <>
      <section className="analytics">
        <Container>
            <Row>
                <Col xs={12}>
                    <div className="heading">
                        <Header/>
                    </div>                    
                </Col>
                <Col xs={6}>
                    <div className="gradient_one">
                        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="32" viewBox="0 0 36 32" fill="none">
                            <path d="M33.2241 2.77984C32.3444 1.89855 31.3 1.19945 30.1505 0.722474C29.001 0.2455 27.7689 0 26.5246 0C25.2803 0 24.0482 0.2455 22.8987 0.722474C21.7492 1.19945 20.7047 1.89855 19.8251 2.77984L17.9995 4.60797L16.174 2.77984C14.3972 1.00053 11.9873 0.000922279 9.47449 0.000922298C6.9617 0.000922317 4.55183 1.00053 2.77502 2.77984C0.998203 4.55915 1.87218e-08 6.97242 0 9.48874C-1.87218e-08 12.0051 0.998203 14.4183 2.77502 16.1976L4.60058 18.0258L17.9995 31.4436L31.3985 18.0258L33.2241 16.1976C34.1041 15.3168 34.8022 14.2709 35.2785 13.1198C35.7548 11.9686 36 10.7348 36 9.48874C36 8.2427 35.7548 7.00887 35.2785 5.85774C34.8022 4.7066 34.1041 3.66072 33.2241 2.77984Z" fill="white"/>
                        </svg>
                        <p>People added you in favourate</p>
                        <h4>40</h4>
                    </div>
                </Col>
                <Col xs={6}>
                <div className="gradient_two">
                    <svg xmlns="http://www.w3.org/2000/svg" width="44" height="28" viewBox="0 0 44 28" fill="none">
                        <path d="M36.4041 23.6462H6.92295L3.8565 10.5326C1.71594 10.4467 0 8.67613 0 6.51521C0 4.29651 1.80336 2.49475 4.02197 2.49475C6.24057 2.49475 8.04393 4.29651 8.04393 6.51521C8.04393 7.5816 7.61143 8.59331 6.87136 9.33656C11.7599 14.6201 15.7882 14.2111 19.5275 7.92668C18.5642 7.17564 17.9786 6.01245 17.9786 4.76025C17.9786 2.54315 19.782 0.738281 22.0006 0.738281C24.2192 0.738281 26.0226 2.54164 26.0226 4.76025C26.0226 6.09518 25.3465 7.32863 24.2723 8.0656C27.4871 14.2407 31.6028 14.556 36.9769 9.34435C36.3258 8.61676 35.9573 7.67371 35.9573 6.67289C35.9573 4.45578 37.7606 2.65401 39.9777 2.65401C42.1948 2.65401 43.9997 4.45578 43.9997 6.67289C43.9997 8.8822 42.2104 10.6793 40.0058 10.6949L36.4041 23.6462Z" fill="white"/>
                        <path d="M35.3669 27.263H7.96083C7.46117 27.263 7.05371 26.8554 7.05371 26.3558C7.05371 25.8562 7.46126 25.4487 7.96083 25.4487H35.3669C35.8666 25.4487 36.2741 25.8563 36.2741 26.3558C36.2741 26.8539 35.8666 27.263 35.3669 27.263Z" fill="white"/>
                    </svg>
                    <p>Savannah are <br></br> level 3</p>
                    <h4>3</h4>
                </div>
                </Col>
                <Col xs={12}>
                    <div className="line_chart">
                        <Chart
                        width="100%"
                        height="288px"
                        chartType="LineChart"
                        data={data}
                        options={options}
                        />
                    </div>
    
                </Col>
                <Col xs={12}>
                    <div className="column_chart">
                        <Chart 
                        chartType="ColumnChart" 
                        width="100%" 
                        height="288px"
                        options={baroptions} 
                        data={Bardata} />
                    </div>
                </Col>
                <Col xs={12}>
                    <div className="premium_section">
                        <div className="star-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="42" height="36" viewBox="0 0 42 36" fill="none">
                            <path d="M29.5418 11.1211L21 35.7418L42 11.1211H29.5418Z" fill="#FFE182"/>
                            <path d="M8.68965 0.258789L0 11.1209H12.4582L8.68965 0.258789Z" fill="#FFCD73"/>
                            <path d="M29.5417 11.1209H41.9999L33.3103 0.258789L29.5417 11.1209Z" fill="#FFCD73"/>
                            <path d="M29.5419 11.1209L21.0001 0.258789L12.4583 11.1209H29.5419Z" fill="#FFCD73"/>
                            <path d="M21 0.258789H8.6897L12.4582 11.1209L21 0.258789Z" fill="#FFAA64"/>
                            <path d="M33.3103 0.258789H21L29.5418 11.1209L33.3103 0.258789Z" fill="#FFE182"/>
                            <path d="M12.4583 11.1211L21.0001 35.7418L29.5419 11.1211H12.4583Z" fill="#FFAA64"/>
                            <path d="M0 11.1211L21 35.7418L12.4582 11.1211H0Z" fill="#FF8C5A"/>
                            </svg>
                        </div>
                        <div className="fav_right text-white">
                            <h2>40</h2>
                            <p>People Added You In Favourite</p>
                        </div>
                    </div>
                    <div className="premium_btn text-center">
                        <button className="btn button">Get Premium</button>
                    </div>
                </Col>
                
                <Col xs={12}>
                <div classname="lock">
                    <ProfilePic/>
                </div>
                </Col>
                
            </Row>
        </Container>
      </section>
    </>
  );
};

export default Analytics;
