import React, { useState, useEffect } from "react";
import { Header } from "../../Component/Header/Header";
import { NavLink } from "react-router-dom";
import Image from "react-bootstrap/Image";
import {Slide, SlideImage1, SlideImage2} from '../../img/index';
import {ShareProfileHomepage, DataUser} from '../../Component/utils/button';
import '../../Component/Sass/Style.scss';
import config from "../../config/config.json";

import {
  CreateImage,
} from "../../img/index";
import {
  LikeButton,
  ApplyDate,
  VideoButton,
} from "../../Component/utils/button";

import {

  FacebookShareButton,
  LinkedinShareButton,
  PinterestShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";
import {
  FacebookIcon,
  LinkedinIcon,
  PinterestIcon,
  TwitterIcon,
  WhatsappIcon,
} from "react-share";

import { _publicProfileService } from "../../_services";
// import { SlideUp } from "../../Component/Pages/Homepage/SlideUp";
import { CarouselDivTheme2 } from "../../Component/Pages/Homepage/Carousel";
import "../../Component/Sass/Pages/homepage.scss";
import "../../Component/Sass/Style.scss";
import {Container, Row, Col} from 'react-bootstrap';
import {PrivatePics} from '../../Component/utils/button';
import $ from 'jquery';

const Homepage = () => {
  const [name, setName] = useState("");
  const [username,setUsername] = useState("");
  const [profileStatus, setProfileStatus] = useState("");
  const [bio, setBio] = useState("");
  const [age, setAge] = useState("");
  const [career, setCareer] = useState("");
  const [status, setStatus] = useState("");
  const [city, setCity] = useState("");
  const [kids,setKids] = useState(false);
  const [statee, setStatee] = useState("");
  const [hobbiesFirst, setHobbiesFirst] = useState("");
  const [hobbiesSecond,setHobbiesSecond] = useState("");
  const [gender, setGender] = useState("");
  const [open, setOpenTo] = useState("");
  const [preference, setPreference] = useState("");
  const [video,setVideo] = useState("");
  useEffect(() => {
    callApi();
  }, []);

  const callApi = async () => {
    let url = window.location.href
    let data = await _publicProfileService.getProfileData(url.split('/').pop());
    console.log("i am here", data);
    setUsername(data[0]?.username);
    setVideo(data[0]?.video);
    setName(data[0]?.firstName + " " + data[0]?.lastName);
    setProfileStatus(data[0]?.profileStatus.status);
    setBio(data[0]?.bio ?? "");
    setAge(_calculateAge(data[0]?.dob));
    setCareer(data[0]?.career);
    setStatus(data[0]?.status);
    setCity("San Francisco");
    setStatee("California");
    setKids((data[0]?.kids === true) ? "Yes" : "None, Yet")
    setHobbiesFirst(data[0]?.hobbies.shift())
    setHobbiesSecond(data[0]?.hobbies.toString())
    const str2 = data[0]?.gender.charAt(0).toUpperCase() + data[0]?.gender.slice(1);
    setGender(str2);
    setOpenTo(data[0]?.openToDating);
    setPreference(data[0]?.preference)
  };

  function _calculateAge(date) {
    let dob = new Date(date);
    //calculate month difference from current date in time
    let month_diff = Date.now() - dob.getTime();
    //convert the calculated difference in date format
    let age_dt = new Date(month_diff);
    //extract year from date
    let year = age_dt.getUTCFullYear();
    //now calculate the age of the user
    return Math.abs(year - 1970);
  }
  

  $( document ).ready(function() {
    $('.arrow').on("click", function(e) {
    e.stopImmediatePropagation();
    e.preventDefault();
    if($('.slidee').hasClass('open')){
        $('.slidee').removeClass('open');
        $('.slidee').addClass('close');
    }else{
        $('.slidee').addClass('open');
        $('.slidee').removeClass('close');
    }
    });
});

  return (
    <>
      <Header />
      <section className="home">
        <div className="background-shield">
          <div className="text">
            <h4>{name}</h4>
            <h6>{profileStatus}</h6>
            <p>“{bio}”</p>
            <div className="social-media">
              <div className="socialIcons">
                <FacebookShareButton
                  url={"indersein"}
                  quote={"Selector"}
                  hashtag={"#hashtag"}
                  description={"aiueo"}
                  className="img-fluid"
                >
                  <FacebookIcon size={40} round={false} />
                </FacebookShareButton>
                <TwitterShareButton
                  title={"Indersein"}
                  url={"Indersein"}
                  className="img-fluid"
                >
                  <TwitterIcon size={32} round={false} />
                </TwitterShareButton>

                <WhatsappShareButton
                  title={"Indersein"}
                  url={"Indersein"}
                  className="img-fluid"
                >
                  <WhatsappIcon size={32} round={false} />
                </WhatsappShareButton>

                <LinkedinShareButton
                  title={"Indersein"}
                  url={"Indersein"}
                  className="img-fluid"
                >
                  <LinkedinIcon size={32} round={false} />
                </LinkedinShareButton>

                <PinterestShareButton
                  title={"Indersein"}
                  url={"Indersein"}
                  className="img-fluid"
                >
                  <PinterestIcon size={32} round={false} />
                </PinterestShareButton>
              </div>
            </div>
          </div>

          <div className="text-head">
            <div className="like-status">
              <div className="image">
                <NavLink to="/status">
                  <Image className="img-fluid" src={CreateImage} />
                </NavLink>
              </div>
              <div className="button-like">
                <LikeButton />
              </div>
            </div>
            <div className="carousell">
              <VideoButton video={video}/>
              <CarouselDivTheme2 />
              <ApplyDate />
            </div>
          </div>

          <div className="white-background"></div>
        </div>
      </section>
      <div className="slidee close" style={{ backgroundImage: `url(${Slide})` }}>
            <Container>
                <Row>   
                <div className="arrow">
                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="11" viewBox="0 0 10 11" fill="none">
                        <path d="M8.5 6.25L4.75 10L1 6.25M8.5 1L4.75 4.75L1 1" stroke="#3F4156" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
                <div className="dataUser">
        <div className="detail">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M17.2299 4.78608H12.4438V1.91443C12.4438 0.861494 11.5823 0 10.5294 0H8.61495C7.56201 0 6.70051 0.861494 6.70051 1.91443V4.78608H1.91443C0.861494 4.78608 0 5.64758 0 6.70051V17.2299C0 18.2828 0.861494 19.1443 1.91443 19.1443H17.2299C18.2828 19.1443 19.1443 18.2828 19.1443 17.2299V6.70051C19.1443 5.64758 18.2828 4.78608 17.2299 4.78608ZM6.70051 9.57216C7.495 9.57216 8.13634 10.2135 8.13634 11.008C8.13634 11.8025 7.495 12.4438 6.70051 12.4438C5.90602 12.4438 5.26469 11.8025 5.26469 11.008C5.26469 10.2135 5.90602 9.57216 6.70051 9.57216ZM9.57216 15.3155H3.82886V14.9039C3.82886 14.3295 4.17346 13.8031 4.7095 13.5733C5.32212 13.3053 5.99217 13.1617 6.70051 13.1617C7.40885 13.1617 8.0789 13.3053 8.69152 13.5733C9.21799 13.8031 9.57216 14.32 9.57216 14.9039V15.3155ZM10.5294 6.70051H8.61495V1.91443H10.5294V6.70051ZM14.5975 13.8796H12.2045C11.812 13.8796 11.4866 13.5542 11.4866 13.1617C11.4866 12.7693 11.812 12.4438 12.2045 12.4438H14.5975C14.99 12.4438 15.3155 12.7693 15.3155 13.1617C15.3155 13.5542 14.99 13.8796 14.5975 13.8796ZM14.5975 11.008H12.2045C11.812 11.008 11.4866 10.6825 11.4866 10.2901C11.4866 9.89761 11.812 9.57216 12.2045 9.57216H14.5975C14.99 9.57216 15.3155 9.89761 15.3155 10.2901C15.3155 10.6825 14.99 11.008 14.5975 11.008Z"
              fill="#3F4156"
            />
          </svg>
          <span>
            <h4>Age</h4>
            <p>{age} yr</p>
          </span>
        </div>

        <div className="detail-reverse">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="20"
            viewBox="0 0 21 20"
            fill="none"
          >
            <path
              d="M20.0239 10.2469C20.0239 8.10172 18.2362 6.19487 15.6143 5.12226C14.5417 2.50033 12.6348 0.712646 10.4896 0.712646C8.3444 0.712646 6.43754 2.50033 5.36493 5.12226C2.743 6.19487 0.955322 8.10172 0.955322 10.2469C0.955322 12.3922 2.743 14.299 5.36493 15.3716C6.43754 17.9936 8.3444 19.7812 10.4896 19.7812C12.6348 19.7812 14.5417 17.9936 15.6143 15.3716C18.2362 14.299 20.0239 12.3922 20.0239 10.2469ZM10.4896 3.09622C11.2047 3.09622 11.9198 3.57294 12.5157 4.40719C11.2047 4.28801 9.77454 4.28801 8.46358 4.40719C9.05947 3.57294 9.77454 3.09622 10.4896 3.09622ZM13.7074 13.4648C11.6814 13.9415 9.41701 13.9415 7.39097 13.4648C6.79508 11.4387 6.79508 9.05515 7.27179 7.02912C9.29783 6.5524 11.6814 6.5524 13.7074 7.02912C14.1842 9.05515 14.1842 11.4387 13.7074 13.4648ZM3.3389 10.2469C3.3389 9.53187 3.81561 8.8168 4.64986 8.2209C4.53068 9.53187 4.53068 10.962 4.64986 12.273C3.81561 11.6771 3.3389 10.962 3.3389 10.2469ZM10.4896 17.3977C9.77454 17.3977 9.05947 16.9209 8.46358 16.0867C9.77454 16.2059 11.0855 16.2059 12.3965 16.0867C11.9198 16.9209 11.2047 17.3977 10.4896 17.3977ZM16.3294 12.273C16.4486 10.962 16.4486 9.65105 16.3294 8.34008C17.1636 8.8168 17.6403 9.53187 17.6403 10.2469C17.6403 10.962 17.1636 11.6771 16.3294 12.273Z"
              fill="#3F4156"
            />
            <path
              d="M10.4896 11.4387C11.1478 11.4387 11.6814 10.9052 11.6814 10.247C11.6814 9.58876 11.1478 9.05518 10.4896 9.05518C9.83143 9.05518 9.29785 9.58876 9.29785 10.247C9.29785 10.9052 9.83143 11.4387 10.4896 11.4387Z"
              fill="#3F4156"
            />
          </svg>
          <span>
            <h4>Career</h4>
            <p>{career}</p>
          </span>
        </div>

        <div className="detail">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M9.57216 9.57216C12.2165 9.57216 14.3582 7.43039 14.3582 4.78608C14.3582 2.14177 12.2165 0 9.57216 0C6.92785 0 4.78608 2.14177 4.78608 4.78608C4.78608 7.43039 6.92785 9.57216 9.57216 9.57216ZM9.57216 11.9652C6.37745 11.9652 0 13.5685 0 16.7513V17.9478C0 18.6059 0.538434 19.1443 1.19652 19.1443H17.9478C18.6059 19.1443 19.1443 18.6059 19.1443 17.9478V16.7513C19.1443 13.5685 12.7669 11.9652 9.57216 11.9652Z"
              fill="#3F4156"
            />
          </svg>
          <span>
            <h4>Status</h4>
            <p>{status}</p>
            <h6>Polyamourous</h6>
          </span>
        </div>

        <div className="detail-reverse">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="20"
            viewBox="0 0 21 20"
            fill="none"
          >
            <path
              d="M17.6398 5.74922H10.4891V0.452393H5.72198C3.08813 0.452393 0.954834 2.34866 0.954834 4.68986V11.0461C0.954834 12.2114 2.02744 13.1648 3.33841 13.1648H5.72198V16.2687C4.99499 15.8979 4.33951 15.4424 3.75553 14.9233L2.0632 16.4276C4.22033 18.3345 7.1998 19.521 10.4891 19.521C13.7785 19.521 16.7579 18.3345 18.9151 16.417L17.2227 14.9127C16.6387 15.4318 15.9713 15.8874 15.2563 16.2581V13.1648H17.6398C18.9508 13.1648 20.0234 12.2114 20.0234 11.0461V7.86795C20.0234 6.70265 18.9508 5.74922 17.6398 5.74922ZM12.8727 17.1374C12.11 17.3069 11.3115 17.4022 10.4891 17.4022C9.66679 17.4022 8.8683 17.3069 8.10555 17.1374V13.1648H12.8727V17.1374ZM17.6398 11.0461H3.33841V4.68986C3.33841 3.52455 4.41102 2.57112 5.72198 2.57112H8.10555V7.86795H17.6398V11.0461Z"
              fill="#3F4156"
            />
          </svg>
          <span>
            <h4>Kids</h4>
            <p>{kids}</p>
          </span>
        </div>

        <div className="detail">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M17.2299 4.78608H12.4438V1.91443C12.4438 0.861494 11.5823 0 10.5294 0H8.61495C7.56201 0 6.70051 0.861494 6.70051 1.91443V4.78608H1.91443C0.861494 4.78608 0 5.64758 0 6.70051V17.2299C0 18.2828 0.861494 19.1443 1.91443 19.1443H17.2299C18.2828 19.1443 19.1443 18.2828 19.1443 17.2299V6.70051C19.1443 5.64758 18.2828 4.78608 17.2299 4.78608ZM6.70051 9.57216C7.495 9.57216 8.13634 10.2135 8.13634 11.008C8.13634 11.8025 7.495 12.4438 6.70051 12.4438C5.90602 12.4438 5.26469 11.8025 5.26469 11.008C5.26469 10.2135 5.90602 9.57216 6.70051 9.57216ZM9.57216 15.3155H3.82886V14.9039C3.82886 14.3295 4.17346 13.8031 4.7095 13.5733C5.32212 13.3053 5.99217 13.1617 6.70051 13.1617C7.40885 13.1617 8.0789 13.3053 8.69152 13.5733C9.21799 13.8031 9.57216 14.32 9.57216 14.9039V15.3155ZM10.5294 6.70051H8.61495V1.91443H10.5294V6.70051ZM14.5975 13.8796H12.2045C11.812 13.8796 11.4866 13.5542 11.4866 13.1617C11.4866 12.7693 11.812 12.4438 12.2045 12.4438H14.5975C14.99 12.4438 15.3155 12.7693 15.3155 13.1617C15.3155 13.5542 14.99 13.8796 14.5975 13.8796ZM14.5975 11.008H12.2045C11.812 11.008 11.4866 10.6825 11.4866 10.2901C11.4866 9.89761 11.812 9.57216 12.2045 9.57216H14.5975C14.99 9.57216 15.3155 9.89761 15.3155 10.2901C15.3155 10.6825 14.99 11.008 14.5975 11.008Z"
              fill="#3F4156"
            />
          </svg>
          <span>
            <h4>City</h4>
            <p>{city}</p>
            <h6>{statee}</h6>
          </span>
        </div>

        <div className="detail-reverse">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="20"
            viewBox="0 0 21 20"
            fill="none"
          >
            <path
              d="M19.0552 1.35652C18.4902 0.792126 16.8861 0.378906 14.8583 0.378906C11.751 0.378906 7.64484 1.34645 4.78973 4.19867C0.0581188 8.93558 0.502023 17.0387 1.92453 18.4699C2.4895 19.0343 4.09361 19.4475 6.12144 19.4475C9.22877 19.4475 13.3349 18.48 16.19 15.6277C20.9216 10.8908 20.4777 2.78768 19.0552 1.35652ZM6.21224 5.6399C8.87567 2.97917 12.6186 2.4954 14.3135 2.42485C12.2453 3.37223 9.81392 4.89409 7.64484 7.07105C5.46568 9.24802 3.94228 11.687 2.99394 13.7531C3.08474 11.2536 3.87166 7.96804 6.21224 5.6399ZM14.7675 14.1865C12.1041 16.8472 8.36114 17.331 6.66623 17.4016C8.73442 16.4542 11.1658 14.9323 13.3349 12.7553C15.514 10.5784 17.0374 8.13938 17.9959 6.07328C17.895 8.57276 17.1081 11.8584 14.7675 14.1865Z"
              fill="#3F4156"
            />
          </svg>
          <span>
            <h4>Hobbies</h4>
            <p>{hobbiesFirst}</p>
            <h6>{hobbiesSecond}</h6>
          </span>
        </div>

        <div className="detail">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M18.3848 0.311279L13.5987 0.311279C12.9406 0.311279 12.4022 0.849713 12.4022 1.5078C12.4022 2.16589 12.9406 2.70432 13.5987 2.70432H15.4892L10.739 7.45451C9.68611 6.72463 8.40584 6.29388 7.01787 6.29388C3.38045 6.29388 0.437012 9.23732 0.437012 12.8747C0.437012 16.5122 3.38045 19.4556 7.01787 19.4556C10.6553 19.4556 13.5987 16.5122 13.5987 12.8747C13.5987 11.4868 13.168 10.2065 12.4381 9.1416L17.1883 4.40338V6.29388C17.1883 6.95197 17.7267 7.4904 18.3848 7.4904C19.0429 7.4904 19.5813 6.95197 19.5813 6.29388V1.5078C19.5813 0.849713 19.0429 0.311279 18.3848 0.311279ZM7.01787 17.0626C4.70859 17.0626 2.83005 15.184 2.83005 12.8747C2.83005 10.5655 4.70859 8.68692 7.01787 8.68692C9.32716 8.68692 11.2057 10.5655 11.2057 12.8747C11.2057 15.184 9.32716 17.0626 7.01787 17.0626Z"
              fill="#3F4156"
            />
          </svg>
          <span>
            <h4>Sex</h4>
            <p>{gender}</p>
            <h6>{preference}</h6>
          </span>
        </div>

        <div className="detail-reverse">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="20"
            viewBox="0 0 21 20"
            fill="none"
          >
            <path
              d="M20.0239 10.2469C20.0239 8.10172 18.2362 6.19487 15.6143 5.12226C14.5417 2.50033 12.6348 0.712646 10.4896 0.712646C8.3444 0.712646 6.43754 2.50033 5.36493 5.12226C2.743 6.19487 0.955322 8.10172 0.955322 10.2469C0.955322 12.3922 2.743 14.299 5.36493 15.3716C6.43754 17.9936 8.3444 19.7812 10.4896 19.7812C12.6348 19.7812 14.5417 17.9936 15.6143 15.3716C18.2362 14.299 20.0239 12.3922 20.0239 10.2469ZM10.4896 3.09622C11.2047 3.09622 11.9198 3.57294 12.5157 4.40719C11.2047 4.28801 9.77454 4.28801 8.46358 4.40719C9.05947 3.57294 9.77454 3.09622 10.4896 3.09622ZM13.7074 13.4648C11.6814 13.9415 9.41701 13.9415 7.39097 13.4648C6.79508 11.4387 6.79508 9.05515 7.27179 7.02912C9.29783 6.5524 11.6814 6.5524 13.7074 7.02912C14.1842 9.05515 14.1842 11.4387 13.7074 13.4648ZM3.3389 10.2469C3.3389 9.53187 3.81561 8.8168 4.64986 8.2209C4.53068 9.53187 4.53068 10.962 4.64986 12.273C3.81561 11.6771 3.3389 10.962 3.3389 10.2469ZM10.4896 17.3977C9.77454 17.3977 9.05947 16.9209 8.46358 16.0867C9.77454 16.2059 11.0855 16.2059 12.3965 16.0867C11.9198 16.9209 11.2047 17.3977 10.4896 17.3977ZM16.3294 12.273C16.4486 10.962 16.4486 9.65105 16.3294 8.34008C17.1636 8.8168 17.6403 9.53187 17.6403 10.2469C17.6403 10.962 17.1636 11.6771 16.3294 12.273Z"
              fill="#3F4156"
            />
            <path
              d="M10.4896 11.4387C11.1478 11.4387 11.6814 10.9052 11.6814 10.247C11.6814 9.58876 11.1478 9.05518 10.4896 9.05518C9.83143 9.05518 9.29785 9.58876 9.29785 10.247C9.29785 10.9052 9.83143 11.4387 10.4896 11.4387Z"
              fill="#3F4156"
            />
          </svg>
          <span>
            <h4>Open</h4>
            <p>{open}</p>
            <h6>Minded, Fun, Fling, LTR</h6>
          </span>
        </div>
      </div>
                    <Col xs={6}>
                <div className="image-text-small">
                    <Image src={SlideImage1} className="img-fluid" />
                </div>
            </Col>

            <Col xs={6}>
                <div className="image-text-small">
                    <PrivatePics />
                    <div className="filterImage"></div>
                    <div className="text">
                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
                            <path d="M38 22H10C7.79086 22 6 23.7909 6 26V40C6 42.2091 7.79086 44 10 44H38C40.2091 44 42 42.2091 42 40V26C42 23.7909 40.2091 22 38 22Z" stroke="white" strokeWidth="1.67572" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M14 22V14C14 11.3478 15.0536 8.8043 16.9289 6.92893C18.8043 5.05357 21.3478 4 24 4C26.6522 4 29.1957 5.05357 31.0711 6.92893C32.9464 8.8043 34 11.3478 34 14V22" stroke="white" strokeWidth="1.67572" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <h4>Private</h4>
                    </div>
                    <div className="slideImage">
                        <Image src={SlideImage1} className="img-fluid" />
                    </div>
                </div>
            </Col>

            <Col xs={6}>
                <div className="image-text-small">
                    <PrivatePics />
                    <div className="filterImage"></div>
                    <div className="text">
                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
                            <path d="M38 22H10C7.79086 22 6 23.7909 6 26V40C6 42.2091 7.79086 44 10 44H38C40.2091 44 42 42.2091 42 40V26C42 23.7909 40.2091 22 38 22Z" stroke="white" strokeWidth="1.67572" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M14 22V14C14 11.3478 15.0536 8.8043 16.9289 6.92893C18.8043 5.05357 21.3478 4 24 4C26.6522 4 29.1957 5.05357 31.0711 6.92893C32.9464 8.8043 34 11.3478 34 14V22" stroke="white" strokeWidth="1.67572" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <h4>Private</h4>
                    </div>
                    <div className="slideImage">
                        <Image src={SlideImage1} className="img-fluid" />
                    </div>
                </div>
            </Col>

            <Col xs={6}>
                <div className="image-text-small">
                    <PrivatePics />
                    <div className="filterImage"></div>
                    <div className="text">
                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
                            <path d="M38 22H10C7.79086 22 6 23.7909 6 26V40C6 42.2091 7.79086 44 10 44H38C40.2091 44 42 42.2091 42 40V26C42 23.7909 40.2091 22 38 22Z" stroke="white" strokeWidth="1.67572" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M14 22V14C14 11.3478 15.0536 8.8043 16.9289 6.92893C18.8043 5.05357 21.3478 4 24 4C26.6522 4 29.1957 5.05357 31.0711 6.92893C32.9464 8.8043 34 11.3478 34 14V22" stroke="white" strokeWidth="1.67572" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <h4>Private</h4>
                    </div>
                    <div className="slideImage">
                        <Image src={SlideImage1} className="img-fluid" />
                    </div>
                </div>
            </Col>
                    <Col xs={12}>
                        <div className="share-button">
                            <ShareProfileHomepage profileUrl={config.baseURL + "/" + username}/>
                        </div>    
                    </Col>

                    <Col lg={12}>
                        <div className="image-text">
                            <div className="text">
                                <svg xmlns="http://www.w3.org/2000/svg" width="38" height="48" viewBox="0 0 38 48" fill="none">
                                    <path d="M8.43091 10.1605C8.25659 10.3348 8.15625 10.5769 8.15625 10.8234C8.15625 11.0709 8.25659 11.3119 8.43091 11.4862C8.60522 11.6605 8.84729 11.7609 9.09375 11.7609C9.34131 11.7609 9.58228 11.6605 9.75659 11.4862C9.93091 11.3119 10.0312 11.0709 10.0312 10.8234C10.0312 10.5769 9.93091 10.3348 9.75659 10.1605C9.58228 9.98621 9.34131 9.88586 9.09375 9.88586C8.84729 9.88586 8.60522 9.98621 8.43091 10.1605Z" fill="white"/>
                                    <path d="M34.5641 9.88623H12.8438C12.3259 9.88623 11.9063 10.3059 11.9063 10.8237C11.9063 11.3416 12.3259 11.7612 12.8438 11.7612H34.5641C35.3558 11.7612 36 12.405 36 13.1968V32.4375H29.7693C29.2515 32.4375 28.8318 32.8572 28.8318 33.375C28.8318 33.8928 29.2515 34.3125 29.7693 34.3125H36V34.7516C36 35.5433 35.3558 36.1875 34.5641 36.1875H7.18396C6.96314 36.1875 6.74927 36.2655 6.58008 36.408L1.875 40.37V13.1968C1.875 12.405 2.51917 11.7612 3.31091 11.7612H5.34412C5.86157 11.7612 6.28162 11.3416 6.28162 10.8237C6.28162 10.3059 5.86157 9.88623 5.34412 9.88623H3.31091C1.48535 9.88623 0 11.3712 0 13.1968V42.3853C0 42.75 0.211304 43.0814 0.541992 43.2352C0.668335 43.2938 0.803101 43.3228 0.937134 43.3228C1.1543 43.3228 1.3689 43.2473 1.54138 43.1023L7.526 38.0625H34.5641C36.3897 38.0625 37.875 36.5771 37.875 34.7516V13.1968C37.875 11.3712 36.3897 9.88623 34.5641 9.88623V9.88623Z" fill="white"/>
                                    <path d="M18.9375 6.55957C19.4553 6.55957 19.875 6.13989 19.875 5.62207V0.9375C19.875 0.419678 19.4553 0 18.9375 0C18.4197 0 18 0.419678 18 0.9375V5.62207C18 6.13989 18.4197 6.55957 18.9375 6.55957Z" fill="white"/>
                                    <path d="M26.0034 6.94006C26.2437 6.94006 26.4832 6.84851 26.6663 6.66541L29.9438 3.38818C30.3101 3.02197 30.3101 2.42834 29.9438 2.06213C29.5776 1.69592 28.984 1.69592 28.6178 2.06213L25.3406 5.33936C24.9744 5.70557 24.9744 6.29919 25.3406 6.66541C25.5237 6.84851 25.7636 6.94006 26.0034 6.94006Z" fill="white"/>
                                    <path d="M11.2085 6.65918C11.3916 6.84229 11.6315 6.93384 11.8713 6.93384C12.1112 6.93384 12.3511 6.84229 12.5342 6.65918C12.9004 6.29297 12.9004 5.69934 12.5342 5.33313L9.25659 2.05591C8.89075 1.6897 8.29712 1.6897 7.93091 2.05591C7.5647 2.42212 7.5647 3.01538 7.93091 3.38159L11.2085 6.65918Z" fill="white"/>
                                    <path d="M18.9375 41.4404C18.4197 41.4404 18 41.8601 18 42.3779V47.0625C18 47.5803 18.4197 48 18.9375 48C19.4553 48 19.875 47.5803 19.875 47.0625V42.3779C19.875 41.8601 19.4553 41.4404 18.9375 41.4404Z" fill="white"/>
                                    <path d="M26.6663 41.3346C26.3 40.9684 25.7068 40.9684 25.3406 41.3346C24.9744 41.7008 24.9744 42.2944 25.3406 42.6606L28.6178 45.9379C28.8009 46.121 29.0408 46.2125 29.2806 46.2125C29.5209 46.2125 29.7607 46.121 29.9438 45.9379C30.3097 45.5717 30.3097 44.978 29.9438 44.6118L26.6663 41.3346Z" fill="white"/>
                                    <path d="M11.2085 41.3408L7.93091 44.6184C7.5647 44.9846 7.5647 45.5779 7.93091 45.9441C8.11401 46.1272 8.35388 46.2188 8.59375 46.2188C8.83362 46.2188 9.07349 46.1272 9.25659 45.9441L12.5342 42.6669C12.9004 42.3007 12.9004 41.707 12.5342 41.3408C12.168 40.9746 11.5747 40.9746 11.2085 41.3408Z" fill="white"/>
                                    <path d="M27.5547 23.4049C27.5547 20.948 25.5563 18.9496 23.0994 18.9496H21.0654C20.548 18.9496 20.1279 19.3693 20.1279 19.8871V28.1371C20.1279 28.6545 20.548 29.0746 21.0654 29.0746H23.0994C25.5559 29.0746 27.5547 27.0758 27.5547 24.6189V23.4049ZM25.6797 24.6189C25.6797 26.042 24.5221 27.1996 23.0994 27.1996H22.0029V20.8246H23.0994C24.5221 20.8246 25.6797 21.9818 25.6797 23.4049V24.6189Z" fill="white"/>
                                    <path d="M11.1622 25.481L10.3693 27.8379C10.2042 28.3286 10.4678 28.8603 10.9586 29.0255C11.45 29.1907 11.981 28.9266 12.1462 28.4359L12.7314 26.6968H15.3359L15.9211 28.4359C16.0525 28.8274 16.4177 29.0746 16.8095 29.0746C16.9087 29.0746 17.0095 29.0588 17.1083 29.0255C17.5991 28.8603 17.8631 28.3286 17.6979 27.8379L14.9221 19.5879C14.7939 19.2063 14.4361 18.9496 14.0336 18.9496C13.6312 18.9496 13.2734 19.2063 13.1452 19.5879L11.1629 25.4791C11.1625 25.4799 11.1622 25.4802 11.1622 25.481V25.481ZM14.0336 22.8267L14.7049 24.8218H13.3624L14.0336 22.8267Z" fill="white"/>
                                    <path d="M25.4033 32.7122C25.229 32.8865 25.1287 33.1285 25.1287 33.375C25.1287 33.6226 25.229 33.8635 25.4033 34.0378C25.578 34.2122 25.8197 34.3125 26.0662 34.3125C26.313 34.3125 26.5547 34.2122 26.729 34.0378C26.9033 33.8635 27.0037 33.6215 27.0037 33.375C27.0037 33.1285 26.9033 32.8865 26.729 32.7122C26.5547 32.5378 26.313 32.4375 26.0662 32.4375C25.8197 32.4375 25.5776 32.5378 25.4033 32.7122Z" fill="white"/>
                                </svg>
                                <h4 className="mt-3">Sponsored By Brands AD</h4>
                            </div>
                            <div className="slideImage">
                                <Image src={SlideImage2} className="img-fluid"/>
                            </div>
                        </div>    
                    </Col>
                </Row>
            </Container>
      </div>
    </>
  );
};

export default Homepage;
