import React, { useRef, useState, useEffect } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { LoginForm, RegisterForm } from "../Form/form";
import { Rating } from 'react-simple-star-rating'

import {
  CreateImage,
  Instagram,
  TikTok,
  Clubhouse,
  Youtube,
  Facebook,
  Omegel,
  Chat,
  Whatsapp,
  Linkedin,
  Twitter,
  SuccessImage,
  UserProfile3,
  LogoutGraphic,
  favorite1,
  favorite2,
  favorite3,
  favorite4,
  favorite5,
} from "../../img/index";
import Image from "react-bootstrap/Image";
import { NavLink, useNavigate } from "react-router-dom";
import CloseButton from "react-bootstrap/CloseButton";
import { CopyToClipboard } from "react-copy-to-clipboard";
import {
  EmailShareButton,
  FacebookShareButton,
  InstapaperShareButton,
  LinkedinShareButton,
  LivejournalShareButton,
  PinterestShareButton,
  RedditShareButton,
  TelegramShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";
import {
  EmailIcon,
  FacebookIcon,
  InstapaperIcon,
  LinkedinIcon,
  LivejournalIcon,
  PinterestIcon,
  RedditIcon,
  TelegramIcon,
  TwitterIcon,
  WhatsappIcon,
} from "react-share";

import "../Sass/Component/button.scss";
import { profileService,publicProfileService } from "../../_services";
import config from '../../config/config.json'

export const BlueButton = () => {
  return (
    <>
      <div className="blue-button">
        <NavLink to="#">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
          >
            <g opacity="0.9">
              <path
                d="M12.3336 6.83329C11.6669 6.24996 11.1669 5.91662 11.1669 5.33328V4.49994C11.1669 2.1666 9.33355 0.333252 7.0002 0.333252C4.66685 0.333252 2.83351 2.1666 2.83351 4.49994V5.33328C2.83351 5.91662 2.33351 6.24996 1.66684 6.83329C1.00017 7.33329 0.333496 7.8333 0.333496 8.66663C0.333496 11 5.41686 11.1666 7.0002 11.1666C8.58354 11.1666 13.6669 11 13.6669 8.66663C13.6669 7.8333 13.0002 7.33329 12.3336 6.83329Z"
                fill="white"
              />
              <path
                d="M9.41697 11.9166C8.50029 11.9999 7.75029 11.9999 7.00028 11.9999C6.25028 11.9999 5.50027 11.9999 4.5836 11.9166C4.91694 12.9166 5.83361 13.6666 7.00028 13.6666C8.16696 13.6666 9.08363 12.9166 9.41697 11.9166Z"
                fill="white"
              />
            </g>
          </svg>
        </NavLink>
      </div>
    </>
  );
};

export const PublicButton = () => {
  return (
    <>
      <div className="blue-button">
        <NavLink to="#">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
          >
            <path
              d="M7 0C5.075 0 3.5 1.575 3.5 3.5V6.125C3.5 8.05 5.075 9.625 7 9.625C8.925 9.625 10.5 8.05 10.5 6.125V3.5C10.5 1.575 8.925 0 7 0Z"
              fill="white"
              fillOpacity="0.9"
            />
            <path
              d="M11.55 8.6625C10.675 10.2375 8.925 11.375 7 11.375C5.075 11.375 3.32499 10.325 2.44999 8.6625C0.962489 9.625 0 11.2875 0 13.125C0 13.65 0.35 14 0.875 14H13.125C13.65 14 14 13.65 14 13.125C14 11.2875 13.0375 9.625 11.55 8.6625Z"
              fill="white"
              fillOpacity="0.9"
            />
          </svg>
        </NavLink>
      </div>
    </>
  );
};

export const SearchButton = () => {
  return (
    <>
      <div className="blue-button">
        <NavLink to="/notification">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="15"
            viewBox="0 0 14 15"
            fill="none"
          >
            <path
              d="M11.1125 10.0803C11.9 9.00982 12.3375 7.76093 12.3375 6.33364C12.3375 2.8546 9.625 0 6.2125 0C2.8 0 0 2.8546 0 6.33364C0 9.81268 2.8 12.6673 6.2125 12.6673C7.6125 12.6673 8.925 12.2212 9.8875 11.4184L12.5125 14.0946C12.6875 14.273 12.95 14.3622 13.125 14.3622C13.3 14.3622 13.5625 14.273 13.7375 14.0946C14.0875 13.7377 14.0875 13.2025 13.7375 12.8457L11.1125 10.0803ZM6.2125 10.7939C3.7625 10.7939 1.75 8.83141 1.75 6.33364C1.75 3.83586 3.7625 1.78412 6.2125 1.78412C8.6625 1.78412 10.675 3.83586 10.675 6.33364C10.675 8.83141 8.6625 10.7939 6.2125 10.7939Z"
              fill="white"
            />
          </svg>
        </NavLink>
      </div>
    </>
  );
};
export const OptionButton = () => {
  return (
    <>
      <div className="blue-button">
        <NavLink to="/notification">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="4"
            height="14"
            viewBox="0 0 4 14"
            fill="none"
          >
            <circle cx="1.52941" cy="1.52941" r="1.52941" fill="white" />
            <circle cx="1.52941" cy="6.52935" r="1.52941" fill="white" />
            <circle cx="1.52941" cy="11.5294" r="1.52941" fill="white" />
          </svg>
        </NavLink>
      </div>
    </>
  );
};

export const HeaderShare = () => {
  const [HeaderShareshow, setShow] = useState(false);
  const [copied, setCopied] = useState(false);
  const handleClose = () => setShow(false);
  const handleHeaderShare = () => setShow(true);
  let url = window.location.href;
  let  userName = url.split("/").pop()

  
  return (
    <>
      <div className="HeaderShare">
        <button className="btn btn-link" onClick={handleHeaderShare}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
          >
            <circle cx="20" cy="20" r="20" fill="#25A5FA" />
            <path
              d="M23.2143 18.5714C24.7929 18.5714 26 17.3643 26 15.7857C26 14.2071 24.7929 13 23.2143 13C21.6357 13 20.4286 14.2071 20.4286 15.7857C20.4286 15.9714 20.4286 16.1571 20.5214 16.3429L17.55 18.2C17.0857 17.8286 16.4357 17.55 15.7857 17.55C14.2071 17.55 13 18.7571 13 20.3357C13 21.9143 14.2071 23.1214 15.7857 23.1214C16.4357 23.1214 16.9929 22.8429 17.55 22.4714L20.5214 24.3286C20.5214 24.7 20.4286 24.8857 20.4286 25.0714C20.4286 26.65 21.6357 27.8571 23.2143 27.8571C24.7929 27.8571 26 26.65 26 25.0714C26 23.4929 24.7929 22.2857 23.2143 22.2857C22.5643 22.2857 22.0071 22.5643 21.45 22.9357L18.4786 21.0786C18.5714 20.8 18.5714 20.6143 18.5714 20.4286C18.5714 20.2429 18.5714 20.0571 18.5714 19.8714L21.5429 18.0143C22.0071 18.2929 22.5643 18.5714 23.2143 18.5714Z"
              fill="white"
            />
          </svg>
        </button>
      </div>
      <Modal
        show={HeaderShareshow}
        onHide={handleClose}
        className="shareprofileButton"
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <h4>Share Profile with your social Community</h4>
          <div className="social-media">
          <div className="socialIcons">
              <FacebookShareButton
                url={config.baseURL+'user/'+userName}
                quote={"Selector"}
                hashtag={"#hashtag"}
                description={"aiueo"}
                className="img-fluid"
              >
                <FacebookIcon size={40} round={false} />
              </FacebookShareButton>

              <TwitterShareButton
                title={config.baseURL+'user/'+userName}
                url={config.baseURL+'user/'+userName}
                className="img-fluid"
              >
                <TwitterIcon size={32} round={false} />
              </TwitterShareButton>

              <EmailShareButton
                title={config.baseURL+'user/'+userName}
                url={config.baseURL+'user/'+userName}
                className="img-fluid"
              >
                <EmailIcon size={32} round={false} />
              </EmailShareButton>

              <WhatsappShareButton
                title={config.baseURL+'user/'+userName}
                url={config.baseURL+'user/'+userName}
                className="img-fluid"
              >
                <WhatsappIcon size={32} round={false} />
              </WhatsappShareButton>

              <LinkedinShareButton
                title={config.baseURL+'user/'+userName}
                url={config.baseURL+'user/'+userName}
                className="img-fluid"
              >
                <LinkedinIcon size={32} round={false} />
              </LinkedinShareButton>

              <PinterestShareButton
                title={config.baseURL+'user/'+userName}
                url={config.baseURL+'user/'+userName}
                className="img-fluid"
              >
                <PinterestIcon size={32} round={false} />
              </PinterestShareButton>

              <RedditShareButton
                title={config.baseURL+'user/'+userName}
                url={config.baseURL+'user/'+userName}
                className="img-fluid"
              >
                <RedditIcon size={32} round={false} />
              </RedditShareButton>

              <TelegramShareButton
                title={config.baseURL+'user/'+userName}
                url={config.baseURL+'user/'+userName}
                className="img-fluid"
              >
                <TelegramIcon size={32} round={false} />
              </TelegramShareButton>

              <InstapaperShareButton
                title={config.baseURL+'user/'+userName}
                url={config.baseURL+'user/'+userName}
                className="img-fluid"
              >
                <InstapaperIcon size={32} round={false} />
              </InstapaperShareButton>

              <LivejournalShareButton
                title={config.baseURL+'user/'+userName}
                url={config.baseURL+'user/'+userName}
                className="img-fluid"
              >
                <LivejournalIcon size={32} round={false} />
              </LivejournalShareButton>
            </div>
          </div>
          <div className="form">
           
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control
                  type="email"
                  placeholder={config.baseURL+'user/'+userName}
                />
              </Form.Group>
              <div className="copy-button">
              <CopyToClipboard
                text={config.baseURL+'user/'+userName}
                onCopy={() => setCopied(true)}
              >
                <button>{copied ? "Copied" : "Copy"}</button>
              </CopyToClipboard>
              </div>
        
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export const LikeButton = () => {
  return (
    <>
      <div className="like-button">
        <NavLink to="/favorite" className="btn btn-link like-btn">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 14 14"
            fill="none"
          >
            <path
              d="M7.44901 1.12231C7.27448 0.9477 7.06725 0.809185 6.83917 0.71468C6.61109 0.620175 6.36663 0.571533 6.11975 0.571533C5.87286 0.571533 5.6284 0.620175 5.40032 0.71468C5.17224 0.809185 4.96502 0.9477 4.79049 1.12231L4.42827 1.48453L4.06606 1.12231C3.71351 0.769772 3.23536 0.571716 2.73679 0.571716C2.23822 0.571716 1.76007 0.769772 1.40753 1.12231C1.05499 1.47486 0.856934 1.95301 0.856934 2.45158C0.856934 2.95015 1.05499 3.42829 1.40753 3.78084L1.76975 4.14305L4.42827 6.80157L7.08679 4.14305L7.44901 3.78084C7.62362 3.60631 7.76214 3.39908 7.85664 3.171C7.95115 2.94292 7.99979 2.69846 7.99979 2.45158C7.99979 2.20469 7.95115 1.96023 7.85664 1.73215C7.76214 1.50407 7.62362 1.29685 7.44901 1.12231V1.12231Z"
              stroke="white"
              strokeWidth="1.13298"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </NavLink>
      </div>
    </>
  );
};

export const PlayButton = () => {
  return (
    <>
      <div className="play-button">
        <button className="btn btn-warning play-btn">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="11"
            height="15"
            viewBox="0 0 11 15"
            fill="none"
          >
            <path
              d="M0 1.83167C0 1.0405 0.875246 0.562658 1.54076 0.990487L10.3582 6.65882C10.9705 7.05246 10.9705 7.94754 10.3582 8.34118L1.54076 14.0095C0.875244 14.4373 0 13.9595 0 13.1683V1.83167Z"
              fill="white"
            />
          </svg>
        </button>
      </div>
    </>
  );
};

export const ApplyDate = () => {
  const [modalState, setModalState] = useState("close");

  const handleShowModalOne = () => {
    setModalState("modal-one");
  };

  const handleShowModalTwo = () => {
    setModalState("modal-two");
  };

  const handleShowModalThree = () => {
    setModalState("modal-three");
  };

  const handleShowModalFour = () => {
    setModalState("modal-four");
  };

  const handleShowModalFive = () => {
    setModalState("modal-five");
  };

  const handleClose = () => {
    setModalState("close");
  };

  // handleCloseall();

  return (
    <>
      <div className="apply-button">
        <button
          className="btn btn-warning play-btn"
          onClick={handleShowModalOne}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
          >
            <path
              d="M16.2848 0.0279011L0.37762 5.22574C-0.0716209 5.37254 -0.136587 5.9836 0.272269 6.22131L6.28375 9.71688C6.4734 9.82717 6.71043 9.81387 6.88651 9.68308L8.57637 8.42813L7.32142 10.118C7.19066 10.2941 7.17736 10.5312 7.28761 10.7208L10.7832 16.7323C11.0212 17.1415 11.6321 17.0758 11.7788 16.6269L16.9766 0.719726C17.1161 0.292598 16.7098 -0.111081 16.2848 0.0279011V0.0279011ZM11.1161 15.1225L8.41768 10.4818L11.6716 6.1003C11.8337 5.88191 11.8114 5.57772 11.619 5.3854C11.4267 5.19307 11.1225 5.17072 10.9041 5.33288L6.52263 8.58679L1.88198 5.88829L15.5981 1.40641L11.1161 15.1225ZM5.75919 12.021L2.11706 15.6631C1.90286 15.8772 1.55554 15.8773 1.34134 15.6631C1.12711 15.4489 1.12711 15.1016 1.34134 14.8874L4.98347 11.2453C5.19774 11.0311 5.54506 11.031 5.75919 11.2453C5.97342 11.4595 5.97342 11.8068 5.75919 12.021V12.021ZM0.947639 12.1588C0.733406 11.9446 0.733406 11.5973 0.947639 11.3831L2.38477 9.94592C2.59897 9.73169 2.94629 9.73169 3.16049 9.94592C3.37472 10.1602 3.37472 10.5074 3.16049 10.7216L1.72335 12.1588C1.50919 12.373 1.16184 12.373 0.947639 12.1588V12.1588ZM7.05854 13.8439C7.27277 14.0581 7.27277 14.4055 7.05854 14.6197L5.62137 16.0568C5.51427 16.1639 5.37388 16.2175 5.23353 16.2175C4.74922 16.2175 4.49916 15.6276 4.84569 15.2811L6.28286 13.8439C6.49702 13.6297 6.84434 13.6297 7.05854 13.8439V13.8439Z"
              fill="white"
            />
          </svg>
          <span className="mx-2">APPLY TO DATE</span>
        </button>
      </div>

      {/* Create Profile Modal */}
      <Modal
        show={modalState === "modal-one"}
        onHide={handleClose}
        className="create-profile"
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <div className="create-profile">
            <h4 className="mt-3">Sign up today!</h4>
            <div className="footer">
              <p>Please sign up with Upscale’d to apply to date with</p>
              <div className="img-text">
                <Image src={CreateImage} className="img-fluid" />
                <h4 className="mb-3">Brooklyn</h4>
              </div>
              <Button
                onClick={handleShowModalThree}
                className="signin"
                type="submit"
              >
                CREATE OWN PROFILE
              </Button>
              <p className="d-flex text-center">
                Already a member?
                <NavLink
                  onClick={handleShowModalTwo}
                  to="
                            "
                >
                  Sign in here
                </NavLink>
              </p>
            </div>
          </div>
        </Modal.Body>
      </Modal>

      {/* Login Modal */}
      <Modal
        show={modalState === "modal-two"}
        onHide={handleClose}
        className="login"
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Header>
          <h4>Login your Profile</h4>
        </Modal.Header>
        <Modal.Body>
          <LoginForm />
          <div className="footer">
            <p>or signup with</p>
            <div className="social-icons">
              <NavLink to="#" className="google">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M5.31891 14.5035L4.4835 17.6222L1.43011 17.6868C0.517594 15.9943 0 14.0578 0 12C0 10.0101 0.483938 8.13362 1.34175 6.48132H1.34241L4.06078 6.9797L5.25159 9.68176C5.00236 10.4084 4.86652 11.1884 4.86652 12C4.86661 12.8809 5.02617 13.7249 5.31891 14.5035Z"
                    fill="#FBBB00"
                  />
                  <path
                    d="M23.7903 9.75818C23.9282 10.4841 24 11.2338 24 11.9999C24 12.8591 23.9097 13.6971 23.7376 14.5054C23.1535 17.2562 21.6271 19.6582 19.5126 21.358L19.5119 21.3573L16.088 21.1826L15.6034 18.1575C17.0065 17.3347 18.103 16.047 18.6805 14.5054H12.2638V9.75818H18.7742H23.7903Z"
                    fill="#518EF8"
                  />
                  <path
                    d="M19.5119 21.3574L19.5125 21.358C17.4561 23.011 14.8437 24 12 24C7.43012 24 3.45694 21.4457 1.43011 17.6868L5.31891 14.5035C6.3323 17.2081 8.94132 19.1334 12 19.1334C13.3147 19.1334 14.5464 18.778 15.6033 18.1576L19.5119 21.3574Z"
                    fill="#28B446"
                  />
                  <path
                    d="M19.6595 2.76262L15.7721 5.94525C14.6782 5.26153 13.3852 4.86656 12 4.86656C8.87207 4.86656 6.21425 6.88017 5.25163 9.68175L1.34239 6.48131H1.34174C3.33889 2.63077 7.36217 0 12 0C14.9116 0 17.5813 1.03716 19.6595 2.76262Z"
                    fill="#F14336"
                  />
                </svg>
              </NavLink>
              <NavLink to="#" className="google">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M12 0C18.6277 0 24 5.373 24 12C24 18.6278 18.6277 24 12 24C5.37217 24 0 18.6277 0 12C0 5.373 5.37226 0 12 0Z"
                    fill="#3B5998"
                  />
                  <path
                    d="M13.461 8.26119H15.0075V5.97668H13.1896V5.98492C10.9868 6.06294 10.5353 7.30117 10.4955 8.60168H10.491V9.74245H8.99103V11.9797H10.491V17.9766H12.7515V11.9797H14.6033L14.961 9.74245H12.7523V9.05323C12.7523 8.61371 13.0447 8.26119 13.461 8.26119Z"
                    fill="white"
                  />
                </svg>
              </NavLink>
              <NavLink to="#" className="google">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M16.7715 9.55275C16.776 9.6585 16.779 9.76425 16.779 9.8715C16.779 13.1242 14.3025 16.8757 9.774 16.8757C8.3835 16.8757 7.08975 16.4685 6 15.7703C6.19275 15.7928 6.3885 15.804 6.58725 15.804C7.74075 15.804 8.802 15.411 9.645 14.7502C8.56725 14.7307 7.65825 14.019 7.34475 13.041C7.4955 13.0695 7.64925 13.0845 7.80825 13.0845C8.0325 13.0845 8.25 13.0545 8.457 12.9982C7.3305 12.7725 6.48225 11.7772 6.48225 10.5847V10.5533C6.81375 10.7378 7.194 10.8488 7.5975 10.8615C6.93675 10.4198 6.50175 9.666 6.50175 8.8125C6.50175 8.361 6.62325 7.938 6.8355 7.57425C8.04975 9.06375 9.864 10.044 11.91 10.1468C11.868 9.96675 11.8463 9.7785 11.8463 9.58575C11.8463 8.226 12.9487 7.1235 14.3077 7.1235C15.0165 7.1235 15.6562 7.42275 16.1047 7.90125C16.6657 7.791 17.193 7.58625 17.6685 7.30425C17.4848 7.87875 17.094 8.361 16.5862 8.66625C17.0842 8.60625 17.5583 8.47425 18 8.2785C17.67 8.772 17.2522 9.2055 16.7715 9.55275V9.55275ZM12 0C5.37225 0 0 5.37225 0 12C0 18.627 5.37225 24 12 24C18.6277 24 24 18.627 24 12C24 5.37225 18.6277 0 12 0"
                    fill="#41A1F2"
                  />
                </svg>
              </NavLink>
            </div>
            <p className="d-flex text-center">
              Not registered?
              <NavLink
                onClick={handleShowModalThree}
                to="
                        "
              >
                Create a Profile
              </NavLink>
            </p>
          </div>
        </Modal.Body>
      </Modal>

      {/* Resgistration Modal */}
      <Modal
        show={modalState === "modal-three"}
        onHide={handleClose}
        className="signup"
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <h4>Reserve your profile</h4>
          <div className="footer">
            <p>or signup with</p>
            <div className="social-icons">
              <NavLink to="#" className="google">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M5.31891 14.5035L4.4835 17.6222L1.43011 17.6868C0.517594 15.9943 0 14.0578 0 12C0 10.0101 0.483938 8.13362 1.34175 6.48132H1.34241L4.06078 6.9797L5.25159 9.68176C5.00236 10.4084 4.86652 11.1884 4.86652 12C4.86661 12.8809 5.02617 13.7249 5.31891 14.5035Z"
                    fill="#FBBB00"
                  />
                  <path
                    d="M23.7903 9.75818C23.9282 10.4841 24 11.2338 24 11.9999C24 12.8591 23.9097 13.6971 23.7376 14.5054C23.1535 17.2562 21.6271 19.6582 19.5126 21.358L19.5119 21.3573L16.088 21.1826L15.6034 18.1575C17.0065 17.3347 18.103 16.047 18.6805 14.5054H12.2638V9.75818H18.7742H23.7903Z"
                    fill="#518EF8"
                  />
                  <path
                    d="M19.5119 21.3574L19.5125 21.358C17.4561 23.011 14.8437 24 12 24C7.43012 24 3.45694 21.4457 1.43011 17.6868L5.31891 14.5035C6.3323 17.2081 8.94132 19.1334 12 19.1334C13.3147 19.1334 14.5464 18.778 15.6033 18.1576L19.5119 21.3574Z"
                    fill="#28B446"
                  />
                  <path
                    d="M19.6595 2.76262L15.7721 5.94525C14.6782 5.26153 13.3852 4.86656 12 4.86656C8.87207 4.86656 6.21425 6.88017 5.25163 9.68175L1.34239 6.48131H1.34174C3.33889 2.63077 7.36217 0 12 0C14.9116 0 17.5813 1.03716 19.6595 2.76262Z"
                    fill="#F14336"
                  />
                </svg>
              </NavLink>
              <NavLink to="#" className="google">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M12 0C18.6277 0 24 5.373 24 12C24 18.6278 18.6277 24 12 24C5.37217 24 0 18.6277 0 12C0 5.373 5.37226 0 12 0Z"
                    fill="#3B5998"
                  />
                  <path
                    d="M13.461 8.26119H15.0075V5.97668H13.1896V5.98492C10.9868 6.06294 10.5353 7.30117 10.4955 8.60168H10.491V9.74245H8.99103V11.9797H10.491V17.9766H12.7515V11.9797H14.6033L14.961 9.74245H12.7523V9.05323C12.7523 8.61371 13.0447 8.26119 13.461 8.26119Z"
                    fill="white"
                  />
                </svg>
              </NavLink>
              <NavLink to="#" className="google">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M16.7715 9.55275C16.776 9.6585 16.779 9.76425 16.779 9.8715C16.779 13.1242 14.3025 16.8757 9.774 16.8757C8.3835 16.8757 7.08975 16.4685 6 15.7703C6.19275 15.7928 6.3885 15.804 6.58725 15.804C7.74075 15.804 8.802 15.411 9.645 14.7502C8.56725 14.7307 7.65825 14.019 7.34475 13.041C7.4955 13.0695 7.64925 13.0845 7.80825 13.0845C8.0325 13.0845 8.25 13.0545 8.457 12.9982C7.3305 12.7725 6.48225 11.7772 6.48225 10.5847V10.5533C6.81375 10.7378 7.194 10.8488 7.5975 10.8615C6.93675 10.4198 6.50175 9.666 6.50175 8.8125C6.50175 8.361 6.62325 7.938 6.8355 7.57425C8.04975 9.06375 9.864 10.044 11.91 10.1468C11.868 9.96675 11.8463 9.7785 11.8463 9.58575C11.8463 8.226 12.9487 7.1235 14.3077 7.1235C15.0165 7.1235 15.6562 7.42275 16.1047 7.90125C16.6657 7.791 17.193 7.58625 17.6685 7.30425C17.4848 7.87875 17.094 8.361 16.5862 8.66625C17.0842 8.60625 17.5583 8.47425 18 8.2785C17.67 8.772 17.2522 9.2055 16.7715 9.55275V9.55275ZM12 0C5.37225 0 0 5.37225 0 12C0 18.627 5.37225 24 12 24C18.6277 24 24 18.627 24 12C24 5.37225 18.6277 0 12 0"
                    fill="#41A1F2"
                  />
                </svg>
              </NavLink>
            </div>
            <div className="seperator">
              <div className="hr">
                <span className="white">Or</span>
              </div>
            </div>
          </div>
          <RegisterForm />
          <div className="footer">
            <p className="d-flex text-center">
              Already a Member?
              <NavLink
                onClick={handleShowModalFive}
                to="
                        "
              >
                Sign in Here
              </NavLink>
            </p>
          </div>
        </Modal.Body>
      </Modal>

      {/* Verify Your Account*/}
      <Modal
        show={modalState === "modal-five"}
        onHide={handleClose}
        className="create-profile"
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <div className="create-profile">
            <h4>Verify Your Account</h4>
            <p className="text-center">
            We’ve sent a text to <b>(555) 555-5555</b> to verify your account.
            </p>
            <div className="form-input-verify">
                <Form.Control type="email" placeholder="" />
                <Form.Control type="email" placeholder="" />
                <Form.Control type="email" placeholder="" />
                <Form.Control type="email" placeholder="" />
                <Form.Control type="email" placeholder="" />
            </div>
            <div className="buttons">
              <button className="btn button verify-build">Build your Profile</button>
              <button className="btn button recieve-text">Didn’t recieve a text?</button>
            </div>
          </div>
        </Modal.Body>
      </Modal>

      {/* Success Modal */}
      <Modal
        show={modalState === "modal-four"}
        onHide={handleClose}
        className="create-profile"
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <div className="create-profile">
            <h4>Hi, Brooklyn</h4>
            <p className="text-center">
              Congratulations, your account has been successfully created. So
              now you are able to apply to date!
            </p>
            <div className="footer">
              <NavLink
                to="/apply/date"
                href="/apply/date"
                className="signin"
                type="submit"
              >
                APPLY TO DATE
              </NavLink>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export const ScanQR = () => {
  return (
    <>
      <div className="scan-button">
        <button className="btn play-btn">
          <span>SCAN QR</span>
        </button>
      </div>
    </>
  );
};

export const ShareProfile = (props) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(props.profileUrl);
  };
  return (
    <>
      <div className="button-send" onClick={handleShow}>
        <button className="btn btn-link" onClick={handleShow}>
          SHARE PROFILE
        </button>
      </div>
      <Modal show={show} onHide={handleClose} className="shareprofileButton">
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <h4>Share Profile with your social Community</h4>
          <div className="social-media">
            <NavLink to="">
              <Image className="img-fluid" src={Instagram} />
            </NavLink>
            <NavLink to="">
              <Image className="img-fluid" src={TikTok} />
            </NavLink>
            <NavLink to="">
              <Image className="img-fluid" src={Clubhouse} />
            </NavLink>
            <NavLink to="">
              <Image className="img-fluid" src={Youtube} />
            </NavLink>
            <NavLink to="">
              <Image className="img-fluid" src={Facebook} />
            </NavLink>
            <NavLink to="">
              <Image className="img-fluid" src={Omegel} />
            </NavLink>
            <NavLink to="">
              <Image className="img-fluid" src={Chat} />
            </NavLink>
            <NavLink to="">
              <Image className="img-fluid" src={Whatsapp} />
            </NavLink>
            <NavLink to="">
              <Image className="img-fluid" src={Twitter} />
            </NavLink>
            <NavLink to="">
              <Image className="img-fluid" src={Linkedin} />
            </NavLink>
          </div>
          <div className="form">
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="email" placeholder={props.profileUrl} />
              </Form.Group>
              <div className="copy-button">
                <button className="btn btn-warning">Copy</button>
              </div>
            </Form>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export const PrivatePics = () => {
  const [PrivatePicshow, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handlePicShow = () => setShow(true);
  return (
    <>
      <div className="Private-Pics">
        <button className="btn" onClick={handlePicShow}></button>
      </div>
      <Modal show={PrivatePicshow} onHide={handleClose} className="sharePics">
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <div className="inner-content">
            <h4>Private Stash</h4>
            <p>Do you want to send request for access private photos?</p>
            <div className="button-inner">
              <button className="btn yes">CANCEL</button>
              <button className="btn cancel">YES</button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export const VideoButton = (props) => {
  const [VideoButtonshow, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleVideoShow = () => setShow(true);

  const [ratingForAttraction, setRatingForAttraction] = useState(0);
  const [ratingForBackground, setRatingForBackground] = useState(0);
  const [ratingForCommunication, setRatingForCommunication] = useState(0);
  const [ratingForPersonality, setRatingForPersonality] = useState(0);
  const [ratingForXFactor, setRatingForXFactor] = useState(0);
  const [addOrRemoveClassForAttraction,setAddOrRemoveClassForAttraction] = useState("")
  const [addOrRemoveClassBackground,setAddOrRemoveClassForBackground] = useState("displayNone")
  const [addOrRemoveClassForCommunication,setAddOrRemoveClassForCommunication] = useState("displayNone")
  const [addOrRemoveClassForPersonality,setAddOrRemoveClassForPersonality] = useState("displayNone")
  const [addOrRemoveClassForXFactor,setAddOrRemoveClassForXFactor] = useState("displayNone")

  const handleRating0 = (rate: number) => {
    setRatingForAttraction(rate)
    let ratingReceiver = "";
    let ratingType = "Attraction";
    let ratingValue = _calculateRating(rate);
    let obj = {};
    obj.ratingReceiver = ratingReceiver;
    obj.ratingType = ratingType
    obj.ratingValue = ratingValue
    // publicProfileService.updateRating();
    console.log("rating1",rate);
    setTimeout(() => {
      setAddOrRemoveClassForAttraction("displayNone");
      setAddOrRemoveClassForBackground("");
      setAddOrRemoveClassForCommunication("displayNone");
      setAddOrRemoveClassForPersonality("displayNone");
      setAddOrRemoveClassForXFactor("displayNone");
    }, 1000);
  };

  const handleRating1 = (rate: number) => {
    setRatingForBackground(rate);
    console.log("rating2",rate);
    setTimeout(() => {
      setAddOrRemoveClassForAttraction("displayNone");
      setAddOrRemoveClassForBackground("displayNone");
      setAddOrRemoveClassForCommunication("");
      setAddOrRemoveClassForPersonality("displayNone");
      setAddOrRemoveClassForXFactor("displayNone");
    }, 1000);
  } 

  const handleRating2 = (rate: number) => {
    setRatingForCommunication(rate);
    console.log("rating3",rate);
    setTimeout(() => {
      setAddOrRemoveClassForAttraction("displayNone");
      setAddOrRemoveClassForBackground("displayNone");
      setAddOrRemoveClassForCommunication("displayNone");
      setAddOrRemoveClassForPersonality("");
      setAddOrRemoveClassForXFactor("displayNone");
    }, 1000);
  } 

  const handleRating3 = (rate: number) => {
    setRatingForPersonality(rate);
    console.log("rating4",rate);
    setTimeout(() => {
      setAddOrRemoveClassForAttraction("displayNone");
      setAddOrRemoveClassForBackground("displayNone");
      setAddOrRemoveClassForCommunication("displayNone");
      setAddOrRemoveClassForPersonality("displayNone");
      setAddOrRemoveClassForXFactor("");
    }, 1000);
  } 

  const handleRating4 = (rate: number) => {
    setRatingForXFactor(rate);
    console.log("rating5",rate);
    setTimeout(() => {
      setAddOrRemoveClassForAttraction("displayNone");
      setAddOrRemoveClassForBackground("displayNone");
      setAddOrRemoveClassForCommunication("displayNone");
      setAddOrRemoveClassForPersonality("displayNone");
      setAddOrRemoveClassForXFactor("");
    }, 1000);
  } 

  function _calculateRating(rating){
    if(rating === 100){
      return 5;
    }else if(rating === 80){
      return 4;
    }else if(rating === 60){
      return 3;
    }else if(rating === 40){
      return 2;
    }else{
      return 1;
    }
  }
  return (
    <>
      <div className="video">
        <NavLink to="#" onClick={handleVideoShow}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="11"
            height="15"
            viewBox="0 0 11 15"
            fill="none"
          >
            <path
              d="M0 1.83167C0 1.0405 0.875246 0.562658 1.54076 0.990487L10.3582 6.65882C10.9705 7.05246 10.9705 7.94754 10.3582 8.34118L1.54076 14.0095C0.875244 14.4373 0 13.9595 0 13.1683V1.83167Z"
              fill="#5A4870"
            />
          </svg>
        </NavLink>
      </div>
      <Modal
        show={VideoButtonshow}
        onHide={handleClose}
        className="videoButton"
      >
        <Modal.Header closeButton variant="white"></Modal.Header>
        <Modal.Body>
          <div className="inner-content">
            <div className="content-box">
              <h4>Brooklyn Intro</h4>
            </div>
            <div className={"star-rating " + addOrRemoveClassForAttraction}>
              <div className="star">
                <p>My Attraction</p>
                <Rating onClick={handleRating0} ratingValue={ratingForAttraction} />
              </div>
            </div>

            <div className={"star-rating "+ addOrRemoveClassBackground}>
              <div className="star">
                <p>Background</p>
                <Rating onClick={handleRating1} ratingValue={ratingForBackground} />
              </div>
            </div>
            <div className={"star-rating "+addOrRemoveClassForCommunication}>
              <div className="star">
                <p>Communication</p>
                <Rating onClick={handleRating2} ratingValue={ratingForCommunication} />
              </div>
            </div>
            <div className={"star-rating "+addOrRemoveClassForPersonality}>
              <div className="star">
                <p>Personality</p>
                <Rating onClick={handleRating3} ratingValue={ratingForPersonality} />
              </div>
            </div>
            <div className={"star-rating "+addOrRemoveClassForXFactor}>
              <div className="star">
                <p>X-Factor</p>
                <Rating onClick={handleRating4} ratingValue={ratingForXFactor} />
              </div>
            </div>

            <div className="video-page">
              <video controls>
                <source
                  src={config.DOCS_URL+props.video}
                  type="video/mp4"
                ></source>
                Sorry, your browser doesn't support videos.
              </video>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export const SuccessModal = () => {
  const [SuccessModalshow, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleSuccessShow = () => setShow(true);
  return (
    <>
      <div className="SuccessModal">
        <NavLink to="" onClick={handleSuccessShow}>
          CONTINUE -&gt;
        </NavLink>
      </div>
      <Modal
        show={SuccessModalshow}
        onHide={handleClose}
        className="SuccessModalD"
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <div className="inner-content">
            <div className="img-d">
              <Image src={SuccessImage} className="img-fluid" />
            </div>
            <div className="content-box">
              <h4>Success!</h4>
              <p>Your request has been send to Brooklyn</p>
              <NavLink to="/profile" className="btn button">
                Done
              </NavLink>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export const DataUser = () => {
  return (
    <>
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
            <p>29 yr</p>
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
            <p>Corporate</p>
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
            <p>Single</p>
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
            <p>None, Yet</p>
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
            <p>San Francisco</p>
            <h6>California</h6>
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
            <p>Nascar</p>
            <h6>Movies, Travel, Music</h6>
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
            <p>Female</p>
            <h6>Heterosexual</h6>
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
            <p>Marriage</p>
            <h6>Minded, Fun, Fling, LTR</h6>
          </span>
        </div>
      </div>
    </>
  );
};

export const QRScan = () => {
  const [QRModalshow, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleQRShow = () => setShow(true);
  return (
    <>
      <button className="btn btn-qr" onClick={handleQRShow}>
        QR Code
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
          >
            <path
              d="M3.17529 11.245H11.2161V3.20435H3.17529V11.245ZM4.93768 4.96674H9.45375V9.4828H4.93768V4.96674Z"
              fill="#5A4870"
            />
            <path
              d="M6.11273 6.1416H8.27864V8.30774H6.11273V6.1416Z"
              fill="#5A4870"
            />
            <path
              d="M1.79149 1.76239H5.5804V0H0.0288696V5.2977H1.79149V1.76239Z"
              fill="#5A4870"
            />
            <path
              d="M6.1416 21.7216H8.30774V23.8877H6.1416V21.7216Z"
              fill="#5A4870"
            />
            <path
              d="M1.76239 24.4199H0V29.9714H5.2977V28.2088H1.76239V24.4199Z"
              fill="#5A4870"
            />
            <path
              d="M28.2305 28.2088H24.6949V29.9714H29.9929V24.4199H28.2305V28.2088Z"
              fill="#5A4870"
            />
            <path
              d="M26.8535 3.20435H18.8129V11.245H26.8535V3.20435ZM25.0912 9.4828H20.5753V4.96674H25.0912V9.4828Z"
              fill="#5A4870"
            />
            <path
              d="M21.7502 6.1416H23.9163V8.30774H21.7502V6.1416Z"
              fill="#5A4870"
            />
            <path
              d="M24.4487 0V1.76239H28.2376V5.2977H30V0H24.4487Z"
              fill="#5A4870"
            />
            <path
              d="M13.3532 25.0626H16.4223V26.825H13.3532V25.0626Z"
              fill="#5A4870"
            />
            <path
              d="M16.4222 23.2999H23.6149V25.0623H16.4222V23.2999Z"
              fill="#5A4870"
            />
            <path
              d="M25.3056 23.2857V21.5256H27.0646V18.0867H25.3299V16.4225H23.5672V19.7905H16.4222V21.5529H23.6002V23.2857H25.3056ZM25.3022 21.5233H23.608V19.8491H25.3022V21.5233Z"
              fill="#5A4870"
            />
            <path
              d="M16.4181 21.5234H14.713V19.7905H13.0073V23.2858H16.4181V21.5234Z"
              fill="#5A4870"
            />
            <path
              d="M13.0074 19.766V18.0167H14.713V19.766H16.4182V18.0034H14.7414V16.3014H12.979V18.0034H11.1257V18.7841H3.20435V26.825H11.245V19.766H13.0074ZM9.48257 25.0626H4.96674V20.5465H9.4828V25.0626H9.48257Z"
              fill="#5A4870"
            />
            <path
              d="M7.08961 16.0661H11.3052V12.4617H9.54277V14.3037H7.07817V16.0627H5.38422V17.8253H7.08961V16.0661Z"
              fill="#5A4870"
            />
            <path
              d="M23.6149 25.0626H26.8535V26.825H23.6149V25.0626Z"
              fill="#5A4870"
            />
            <path
              d="M3.08948 12.5377H7.08163V14.3001H3.08948V12.5377Z"
              fill="#5A4870"
            />
            <path
              d="M23.2338 14.4212H21.5442V16.1838H23.2498V14.4592H26.8936V12.6965H23.2338V14.4212Z"
              fill="#5A4870"
            />
            <path
              d="M12.979 6.00977H14.7414V7.72501H12.979V6.00977Z"
              fill="#5A4870"
            />
            <path
              d="M14.7414 12.8826H18.0902V16.2083H16.4134V17.9706H18.1188V16.214H19.8391V17.9706H21.5442V16.2083H19.8528V12.8757H18.1339V5.86234H16.4182V4.09995H14.7414V2.88733H12.979V4.29449H14.713V5.86234H16.3715V11.1202H14.7414V9.44022H12.979V11.1557H14.7114V12.8709H12.979V14.5862H14.7414V12.8826Z"
              fill="#5A4870"
            />
            <circle cx="15.1072" cy="15.1072" r="5.89286" fill="white" />
            <circle cx="15.1072" cy="15.1071" r="5.25" fill="#F78000" />
            <path
              d="M13.1572 13.0714V14.82C13.1572 15.02 13.2014 15.1729 13.29 15.2786C13.3814 15.3843 13.5129 15.4372 13.6843 15.4372C13.8557 15.4372 13.9857 15.3843 14.0743 15.2786C14.1657 15.1729 14.2114 15.02 14.2114 14.82V13.0714H14.9443V14.82C14.9443 15.1057 14.8886 15.3472 14.7772 15.5443C14.6657 15.7386 14.5129 15.8857 14.3186 15.9857C14.1272 16.0829 13.91 16.1314 13.6672 16.1314C13.4243 16.1314 13.21 16.0829 13.0243 15.9857C12.8386 15.8886 12.6929 15.7414 12.5872 15.5443C12.4814 15.3472 12.4286 15.1057 12.4286 14.82V13.0714H13.1572Z"
              fill="white"
            />
            <path
              d="M16.9254 13.68C17.1226 13.68 17.2983 13.73 17.4526 13.83C17.6097 13.9272 17.7326 14.0686 17.8212 14.2543C17.9126 14.4372 17.9583 14.6543 17.9583 14.9057C17.9583 15.1543 17.9126 15.3714 17.8212 15.5572C17.7326 15.7429 17.6097 15.8857 17.4526 15.9857C17.2983 16.0829 17.1226 16.1314 16.9254 16.1314C16.7426 16.1314 16.5854 16.09 16.454 16.0072C16.3226 15.9243 16.2269 15.8114 16.1669 15.6686V17.2414H15.434V13.71H16.1669V14.1429C16.2269 14 16.3226 13.8872 16.454 13.8043C16.5854 13.7214 16.7426 13.68 16.9254 13.68ZM16.6897 14.3229C16.5354 14.3229 16.4083 14.3757 16.3083 14.4814C16.2112 14.5843 16.1626 14.7257 16.1626 14.9057C16.1626 15.0829 16.2112 15.2243 16.3083 15.33C16.4083 15.4357 16.5354 15.4886 16.6897 15.4886C16.8469 15.4886 16.9726 15.4372 17.0669 15.3343C17.164 15.2314 17.2126 15.0886 17.2126 14.9057C17.2126 14.7229 17.164 14.58 17.0669 14.4772C16.9726 14.3743 16.8469 14.3229 16.6897 14.3229Z"
              fill="white"
            />
          </svg>
        </span>
      </button>

      <Modal
        show={QRModalshow}
        onHide={handleClose}
        className="SuccessModalD qr-scan"
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <div className="inner-content">
            <div className="content-box">
              <h4>Share Profile QR</h4>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="160"
                height="160"
                viewBox="0 0 160 160"
                fill="none"
              >
                <path
                  d="M16.9348 59.9731H59.8193V17.0898H16.9348V59.9731ZM26.3342 26.4893H50.4199V50.575H26.3342V26.4893Z"
                  fill="#5A4870"
                />
                <path
                  d="M32.6016 32.755H44.1531V44.3078H32.6016V32.755Z"
                  fill="#5A4870"
                />
                <path
                  d="M9.55469 9.39941H29.7622V0H0.154053V28.2544H9.55469V9.39941Z"
                  fill="#5A4870"
                />
                <path
                  d="M32.7551 115.848H44.3079V127.401H32.7551V115.848Z"
                  fill="#5A4870"
                />
                <path
                  d="M9.39941 130.239H0V159.848H28.2544V150.447H9.39941V130.239Z"
                  fill="#5A4870"
                />
                <path
                  d="M150.563 150.447H131.707V159.848H159.962V130.239H150.563V150.447Z"
                  fill="#5A4870"
                />
                <path
                  d="M143.219 17.0898H100.336V59.9731H143.219V17.0898ZM133.82 50.575H109.735V26.4893H133.82V50.575Z"
                  fill="#5A4870"
                />
                <path
                  d="M116.001 32.755H127.554V44.3078H116.001V32.755Z"
                  fill="#5A4870"
                />
                <path
                  d="M130.393 0V9.39941H150.6V28.2544H160V0H130.393Z"
                  fill="#5A4870"
                />
                <path
                  d="M71.217 133.667H87.5855V143.066H71.217V133.667Z"
                  fill="#5A4870"
                />
                <path
                  d="M87.5854 124.266H125.946V133.666H87.5854V124.266Z"
                  fill="#5A4870"
                />
                <path
                  d="M134.963 124.191V114.803H144.344V96.4624H135.093V87.5867H125.692V105.549H87.5854V114.949H125.868V124.191H134.963ZM134.945 114.791H125.909V105.862H134.945V114.791Z"
                  fill="#5A4870"
                />
                <path
                  d="M87.5637 114.791H78.4695V105.549H69.3728V124.191H87.5637V114.791Z"
                  fill="#5A4870"
                />
                <path
                  d="M69.3726 105.419V96.0889H78.4692V105.419H87.5635V96.0181H78.6206V86.9409H69.2212V96.0181H59.3372V100.182H17.0898V143.066H59.9731V105.419H69.3726ZM50.5737 133.667H26.4893V109.581H50.575V133.667H50.5737Z"
                  fill="#5A4870"
                />
                <path
                  d="M37.8114 85.686H60.2943V66.4623H50.8949V76.2866H37.7504V85.6677H28.7159V95.0683H37.8114V85.686Z"
                  fill="#5A4870"
                />
                <path
                  d="M125.946 133.667H143.219V143.066H125.946V133.667Z"
                  fill="#5A4870"
                />
                <path
                  d="M16.4771 66.8677H37.7686V76.2671H16.4771V66.8677Z"
                  fill="#5A4870"
                />
                <path
                  d="M123.914 76.9128H114.902V86.3135H123.999V77.1155H143.433V67.7148H123.914V76.9128Z"
                  fill="#5A4870"
                />
                <path
                  d="M69.2209 32.0519H78.6204V41.1998H69.2209V32.0519Z"
                  fill="#5A4870"
                />
                <path
                  d="M78.6204 68.7074H96.4805V86.4442H87.5376V95.8436H96.6331V86.4747H105.808V95.8436H114.902V86.4442H105.881V68.6708H96.7136V31.266H87.5632V21.8666H78.6204V15.3993H69.2209V22.9042H78.469V31.266H87.3142V59.308H78.6204V50.348H69.2209V59.4972H78.4604V68.6451H69.2209V77.7931H78.6204V68.7074Z"
                  fill="#5A4870"
                />
                <circle cx="80.5714" cy="80.5714" r="31.4286" fill="white" />
                <circle cx="80.5714" cy="80.5714" r="28" fill="#F78000" />
                <path
                  d="M70.1715 69.7143V79.04C70.1715 80.1067 70.4077 80.9219 70.8801 81.4857C71.3677 82.0495 72.0686 82.3314 72.9829 82.3314C73.8972 82.3314 74.5905 82.0495 75.0629 81.4857C75.5505 80.9219 75.7943 80.1067 75.7943 79.04V69.7143H79.7029V79.04C79.7029 80.5638 79.4058 81.8514 78.8115 82.9029C78.2172 83.9391 77.402 84.7238 76.3658 85.2571C75.3448 85.7752 74.1867 86.0343 72.8915 86.0343C71.5962 86.0343 70.4534 85.7752 69.4629 85.2571C68.4724 84.7391 67.6953 83.9543 67.1315 82.9029C66.5677 81.8514 66.2858 80.5638 66.2858 79.04V69.7143H70.1715Z"
                  fill="white"
                />
                <path
                  d="M90.269 72.96C91.3204 72.96 92.2576 73.2267 93.0804 73.76C93.9185 74.2781 94.5737 75.0324 95.0461 76.0229C95.5337 76.9981 95.7775 78.1562 95.7775 79.4972C95.7775 80.8229 95.5337 81.981 95.0461 82.9714C94.5737 83.9619 93.9185 84.7238 93.0804 85.2571C92.2576 85.7752 91.3204 86.0343 90.269 86.0343C89.2937 86.0343 88.4556 85.8133 87.7547 85.3714C87.0537 84.9295 86.5433 84.3276 86.2233 83.5657V91.9543H82.3147V73.12H86.2233V75.4286C86.5433 74.6667 87.0537 74.0648 87.7547 73.6229C88.4556 73.181 89.2937 72.96 90.269 72.96ZM89.0118 76.3886C88.189 76.3886 87.5109 76.6705 86.9776 77.2343C86.4595 77.7829 86.2004 78.5372 86.2004 79.4972C86.2004 80.4419 86.4595 81.1962 86.9776 81.76C87.5109 82.3238 88.189 82.6057 89.0118 82.6057C89.8499 82.6057 90.5204 82.3314 91.0233 81.7829C91.5414 81.2343 91.8004 80.4724 91.8004 79.4972C91.8004 78.5219 91.5414 77.76 91.0233 77.2114C90.5204 76.6629 89.8499 76.3886 89.0118 76.3886Z"
                  fill="white"
                />
              </svg>
              <NavLink to="/shareQR" className="btn button">
                SHARE YOUR QR CODE
              </NavLink>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export const ShareProfileButton = () => {
  const [QRModalshow, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleQRShow = () => setShow(true);
  return (
    <>
      <button className="btn btn-share" onClick={handleQRShow}>
        SHARE PROFILE
      </button>
      <Modal
        show={QRModalshow}
        onHide={handleClose}
        className="SuccessModalD qr-scan"
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <div className="inner-content">
            <div className="content-box">
              <h4>Share Profile QR</h4>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="160"
                height="160"
                viewBox="0 0 160 160"
                fill="none"
              >
                <path
                  d="M16.9348 59.9731H59.8193V17.0898H16.9348V59.9731ZM26.3342 26.4893H50.4199V50.575H26.3342V26.4893Z"
                  fill="#5A4870"
                />
                <path
                  d="M32.6016 32.755H44.1531V44.3078H32.6016V32.755Z"
                  fill="#5A4870"
                />
                <path
                  d="M9.55469 9.39941H29.7622V0H0.154053V28.2544H9.55469V9.39941Z"
                  fill="#5A4870"
                />
                <path
                  d="M32.7551 115.848H44.3079V127.401H32.7551V115.848Z"
                  fill="#5A4870"
                />
                <path
                  d="M9.39941 130.239H0V159.848H28.2544V150.447H9.39941V130.239Z"
                  fill="#5A4870"
                />
                <path
                  d="M150.563 150.447H131.707V159.848H159.962V130.239H150.563V150.447Z"
                  fill="#5A4870"
                />
                <path
                  d="M143.219 17.0898H100.336V59.9731H143.219V17.0898ZM133.82 50.575H109.735V26.4893H133.82V50.575Z"
                  fill="#5A4870"
                />
                <path
                  d="M116.001 32.755H127.554V44.3078H116.001V32.755Z"
                  fill="#5A4870"
                />
                <path
                  d="M130.393 0V9.39941H150.6V28.2544H160V0H130.393Z"
                  fill="#5A4870"
                />
                <path
                  d="M71.217 133.667H87.5855V143.066H71.217V133.667Z"
                  fill="#5A4870"
                />
                <path
                  d="M87.5854 124.266H125.946V133.666H87.5854V124.266Z"
                  fill="#5A4870"
                />
                <path
                  d="M134.963 124.191V114.803H144.344V96.4624H135.093V87.5867H125.692V105.549H87.5854V114.949H125.868V124.191H134.963ZM134.945 114.791H125.909V105.862H134.945V114.791Z"
                  fill="#5A4870"
                />
                <path
                  d="M87.5637 114.791H78.4695V105.549H69.3728V124.191H87.5637V114.791Z"
                  fill="#5A4870"
                />
                <path
                  d="M69.3726 105.419V96.0889H78.4692V105.419H87.5635V96.0181H78.6206V86.9409H69.2212V96.0181H59.3372V100.182H17.0898V143.066H59.9731V105.419H69.3726ZM50.5737 133.667H26.4893V109.581H50.575V133.667H50.5737Z"
                  fill="#5A4870"
                />
                <path
                  d="M37.8114 85.686H60.2943V66.4623H50.8949V76.2866H37.7504V85.6677H28.7159V95.0683H37.8114V85.686Z"
                  fill="#5A4870"
                />
                <path
                  d="M125.946 133.667H143.219V143.066H125.946V133.667Z"
                  fill="#5A4870"
                />
                <path
                  d="M16.4771 66.8677H37.7686V76.2671H16.4771V66.8677Z"
                  fill="#5A4870"
                />
                <path
                  d="M123.914 76.9128H114.902V86.3135H123.999V77.1155H143.433V67.7148H123.914V76.9128Z"
                  fill="#5A4870"
                />
                <path
                  d="M69.2209 32.0519H78.6204V41.1998H69.2209V32.0519Z"
                  fill="#5A4870"
                />
                <path
                  d="M78.6204 68.7074H96.4805V86.4442H87.5376V95.8436H96.6331V86.4747H105.808V95.8436H114.902V86.4442H105.881V68.6708H96.7136V31.266H87.5632V21.8666H78.6204V15.3993H69.2209V22.9042H78.469V31.266H87.3142V59.308H78.6204V50.348H69.2209V59.4972H78.4604V68.6451H69.2209V77.7931H78.6204V68.7074Z"
                  fill="#5A4870"
                />
                <circle cx="80.5714" cy="80.5714" r="31.4286" fill="white" />
                <circle cx="80.5714" cy="80.5714" r="28" fill="#F78000" />
                <path
                  d="M70.1715 69.7143V79.04C70.1715 80.1067 70.4077 80.9219 70.8801 81.4857C71.3677 82.0495 72.0686 82.3314 72.9829 82.3314C73.8972 82.3314 74.5905 82.0495 75.0629 81.4857C75.5505 80.9219 75.7943 80.1067 75.7943 79.04V69.7143H79.7029V79.04C79.7029 80.5638 79.4058 81.8514 78.8115 82.9029C78.2172 83.9391 77.402 84.7238 76.3658 85.2571C75.3448 85.7752 74.1867 86.0343 72.8915 86.0343C71.5962 86.0343 70.4534 85.7752 69.4629 85.2571C68.4724 84.7391 67.6953 83.9543 67.1315 82.9029C66.5677 81.8514 66.2858 80.5638 66.2858 79.04V69.7143H70.1715Z"
                  fill="white"
                />
                <path
                  d="M90.269 72.96C91.3204 72.96 92.2576 73.2267 93.0804 73.76C93.9185 74.2781 94.5737 75.0324 95.0461 76.0229C95.5337 76.9981 95.7775 78.1562 95.7775 79.4972C95.7775 80.8229 95.5337 81.981 95.0461 82.9714C94.5737 83.9619 93.9185 84.7238 93.0804 85.2571C92.2576 85.7752 91.3204 86.0343 90.269 86.0343C89.2937 86.0343 88.4556 85.8133 87.7547 85.3714C87.0537 84.9295 86.5433 84.3276 86.2233 83.5657V91.9543H82.3147V73.12H86.2233V75.4286C86.5433 74.6667 87.0537 74.0648 87.7547 73.6229C88.4556 73.181 89.2937 72.96 90.269 72.96ZM89.0118 76.3886C88.189 76.3886 87.5109 76.6705 86.9776 77.2343C86.4595 77.7829 86.2004 78.5372 86.2004 79.4972C86.2004 80.4419 86.4595 81.1962 86.9776 81.76C87.5109 82.3238 88.189 82.6057 89.0118 82.6057C89.8499 82.6057 90.5204 82.3314 91.0233 81.7829C91.5414 81.2343 91.8004 80.4724 91.8004 79.4972C91.8004 78.5219 91.5414 77.76 91.0233 77.2114C90.5204 76.6629 89.8499 76.3886 89.0118 76.3886Z"
                  fill="white"
                />
              </svg>
              <NavLink to="/share-qr" className="btn button">
                SHARE YOUR QR CODE
              </NavLink>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export const QuestionShare = () => {
  const [HeaderShareshow, setShow] = useState(false);
  const [copied, setCopied] = useState(false);
  const handleClose = () => setShow(false);
  const [username,setUsername] = useState("");
  const handleHeaderShare = () => setShow(true);


  

  useEffect(() => {
    callApi()
  }, []);


  const callApi = async () => {
    let userData = await publicProfileService.getProfileData();
    console.log("i am here",userData.user.username)
    setUsername(userData.user?.username)

}


  return (
    <>
      <div className="buttons">
        <NavLink to={'/profile/'+username} className="btn profilee">PROFILE</NavLink>
        <button className="btn signin" onClick={handleHeaderShare}>
          SHARE
        </button>
      </div>

      <Modal
        show={HeaderShareshow}
        onHide={handleClose}
        className="shareprofileButton"
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <h4>Share Profile with your social Community</h4>
          <div className="social-media">
          <div className="socialIcons">
              <FacebookShareButton
                url={config.baseURL+username}
                quote={"Selector"}
                hashtag={"#hashtag"}
                description={"aiueo"}
                className="img-fluid"
              >
                <FacebookIcon size={40} round={false} />
              </FacebookShareButton>

              <TwitterShareButton
                title={config.baseURL+username}
                url={config.baseURL+username}
                className="img-fluid"
              >
                <TwitterIcon size={32} round={false} />
              </TwitterShareButton>

              <EmailShareButton
                title={config.baseURL+username}
                url={config.baseURL+username}
                className="img-fluid"
              >
                <EmailIcon size={32} round={false} />
              </EmailShareButton>

              <WhatsappShareButton
                title={config.baseURL+username}
                url={config.baseURL+username}
                className="img-fluid"
              >
                <WhatsappIcon size={32} round={false} />
              </WhatsappShareButton>

              <LinkedinShareButton
                title={config.baseURL+username}
                url={config.baseURL+username}
                className="img-fluid"
              >
                <LinkedinIcon size={32} round={false} />
              </LinkedinShareButton>

              <PinterestShareButton
                title={config.baseURL+username}
                url={config.baseURL+username}
                className="img-fluid"
              >
                <PinterestIcon size={32} round={false} />
              </PinterestShareButton>

              <RedditShareButton
                title={config.baseURL+username}
                url={config.baseURL+username}
                className="img-fluid"
              >
                <RedditIcon size={32} round={false} />
              </RedditShareButton>

              <TelegramShareButton
                title={config.baseURL+username}
                url={config.baseURL+username}
                className="img-fluid"
              >
                <TelegramIcon size={32} round={false} />
              </TelegramShareButton>

              <InstapaperShareButton
                title={config.baseURL+username}
                url={config.baseURL+username}
                className="img-fluid"
              >
                <InstapaperIcon size={32} round={false} />
              </InstapaperShareButton>

              <LivejournalShareButton
                title={config.baseURL+username}
                url={config.baseURL+username}
                className="img-fluid"
              >
                <LivejournalIcon size={32} round={false} />
              </LivejournalShareButton>
            </div>
          </div>
          <div className="form">
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control
                  type="email"
                  placeholder={config.baseURL+username}
                />
              </Form.Group>
              <div className="copy-button">
              <CopyToClipboard
                text={config.baseURL+username}
                onCopy={() => setCopied(true)}
              >
                <button>{copied ? "Copied" : "Copy"}</button>
              </CopyToClipboard>
              </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export const FavoriteModals = () => {
  const [modalState, setModalState] = useState("close");

  const handleShowModalOne = () => {
    setModalState("options");
  };

  const handleShowModalTwo = () => {
    setModalState("move-to");
  };

  const handleShowModalThree = () => {
    setModalState("delete");
  };

  const handleShowModalFour = () => {
    setModalState("block");
  };

  const handleShowModalFive = () => {
    setModalState("report");
  };

  const handleShowModalSix = () => {
    setModalState("AddFavorite");
  };

  const handleClose = () => {
    setModalState("close");
  };

  return (
    <>
      <div className="apply-button">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="4"
          height="17"
          viewBox="0 0 4 17"
          fill="none"
          onClick={handleShowModalOne}
        >
          <rect width="3.74328" height="3.74328" rx="1.87164" fill="white" />
          <rect
            y="13.1016"
            width="3.74328"
            height="3.74328"
            rx="1.87164"
            fill="white"
          />
          <rect
            x="6.10352e-05"
            y="6.55069"
            width="3.74328"
            height="3.74328"
            rx="1.87164"
            fill="white"
          />
        </svg>
      </div>

      {/* Create Profile Modal */}
      <Modal
        show={modalState === "options"}
        onHide={handleClose}
        className="create-profile"
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <div className="create-profile favorite-m">
            <NavLink to="" onClick={handleShowModalSix}>
              <span className="icon-svg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M11.5806 13.1093C11.0916 12.7681 10.569 12.4901 10.0224 12.2777C10.7495 11.6168 11.2318 10.6911 11.3157 9.65468C12.4183 8.58031 13.8636 7.99132 15.413 7.99132C16.6226 7.99132 17.7839 8.35555 18.7718 9.04448C19.1258 9.29137 19.6125 9.2047 19.8594 8.8507C20.1062 8.49684 20.0195 8.00994 19.6656 7.7632C19.1766 7.42202 18.6538 7.14415 18.1073 6.9316C18.9096 6.20238 19.414 5.1509 19.414 3.98391C19.414 1.78711 17.6269 0 15.4301 0C13.2334 0 11.4463 1.78711 11.4463 3.98391C11.4463 5.14617 11.9467 6.19384 12.7435 6.92275C12.6344 6.96471 12.5259 7.00911 12.4185 7.05642C11.9296 7.27157 11.47 7.53615 11.0426 7.84682C10.4531 6.38244 9.01805 5.34606 7.34523 5.34606C5.14857 5.34606 3.36131 7.13317 3.36131 9.32982C3.36131 10.4889 3.8589 11.5336 4.65144 12.2623C2.53245 13.0562 0.814308 14.7613 0.114845 16.936C-0.117089 17.6571 0.0057444 18.4219 0.451912 19.0342C0.898079 19.6464 1.58839 19.9975 2.34583 19.9975H9.14195C9.57332 19.9975 9.92305 19.6478 9.92305 19.2163C9.92305 18.7849 9.57332 18.4352 9.14195 18.4352H2.34583C2.0933 18.4352 1.8632 18.3181 1.71442 18.114C1.56565 17.9098 1.52476 17.6549 1.60197 17.4144C2.37406 15.0139 4.7288 13.3374 7.32814 13.3374C8.53755 13.3374 9.69905 13.7016 10.6869 14.3905C11.0408 14.6374 11.5277 14.5506 11.7746 14.1968C12.0213 13.8429 11.9346 13.356 11.5806 13.1093V13.1093ZM15.4301 1.56235C16.7654 1.56235 17.8517 2.64862 17.8517 3.98391C17.8517 5.31905 16.7654 6.40548 15.4301 6.40548C14.095 6.40548 13.0085 5.31905 13.0085 3.98391C13.0085 2.64862 14.095 1.56235 15.4301 1.56235ZM7.34523 6.90825C8.68052 6.90825 9.7668 7.99468 9.7668 9.32982C9.7668 10.6651 8.68052 11.7514 7.34523 11.7514C6.00993 11.7514 4.92366 10.6651 4.92366 9.32982C4.92366 7.99468 6.00993 6.90825 7.34523 6.90825V6.90825ZM20 16.2871C20 16.7184 19.6502 17.0682 19.2187 17.0682H17.0706V19.2163C17.0706 19.6478 16.7208 19.9975 16.2895 19.9975C15.858 19.9975 15.5082 19.6478 15.5082 19.2163V17.0682H13.3601C12.9287 17.0682 12.579 16.7184 12.579 16.2871C12.579 15.8555 12.9287 15.5058 13.3601 15.5058H15.5082V13.3577C15.5082 12.9263 15.858 12.5766 16.2895 12.5766C16.7208 12.5766 17.0706 12.9263 17.0706 13.3577V15.5058H19.2187C19.6502 15.5058 20 15.8555 20 16.2871V16.2871Z"
                    fill="#3F4156"
                  />
                </svg>
              </span>
              Add Savannah to Top 5
            </NavLink>
            <div className="line"></div>
            <NavLink to="" onClick={handleShowModalTwo}>
              <span className="icon-svg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="19"
                  viewBox="0 0 15 19"
                  fill="none"
                >
                  <path
                    d="M9.33333 1H2.66667C2.22464 1 1.80072 1.17559 1.48816 1.48816C1.17559 1.80072 1 2.22464 1 2.66667V16C1 16.9167 1.75 17.6667 2.66667 17.6667H12.6667C13.1087 17.6667 13.5326 17.4911 13.8452 17.1785C14.1577 16.866 14.3333 16.442 14.3333 16V6L9.33333 1Z"
                    stroke="#3F4156"
                    strokeWidth="1.33333"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M5.16675 11.8335H10.1667M9.33341 1.8335V6.00016H13.5001L9.33341 1.8335Z"
                    stroke="#3F4156"
                    strokeWidth="1.33333"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              Move Savannah
            </NavLink>
            <div className="line"></div>
            <NavLink to="" onClick={handleShowModalThree}>
              <span className="icon-svg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="17"
                  height="19"
                  viewBox="0 0 17 19"
                  fill="none"
                >
                  <path
                    d="M1 4.3335H2.66667H16"
                    stroke="#3F4156"
                    strokeWidth="1.33333"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M5.16675 4.33333V2.66667C5.16675 2.22464 5.34234 1.80072 5.6549 1.48816C5.96746 1.17559 6.39139 1 6.83342 1H10.1667C10.6088 1 11.0327 1.17559 11.3453 1.48816C11.6578 1.80072 11.8334 2.22464 11.8334 2.66667V4.33333M14.3334 4.33333V16C14.3334 16.442 14.1578 16.866 13.8453 17.1785C13.5327 17.4911 13.1088 17.6667 12.6667 17.6667H4.33341C3.89139 17.6667 3.46746 17.4911 3.1549 17.1785C2.84234 16.866 2.66675 16.442 2.66675 16V4.33333H14.3334Z"
                    stroke="#3F4156"
                    strokeWidth="1.33333"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M6.83325 8.5V13.5"
                    stroke="#3F4156"
                    strokeWidth="1.33333"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M10.1667 8.5V13.5"
                    stroke="#3F4156"
                    strokeWidth="1.33333"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              Remove
            </NavLink>
            <div className="line"></div>
            <NavLink to="" onClick={handleShowModalFour}>
              <span className="icon-svg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                >
                  <path
                    d="M7.66667 14.3333C11.3486 14.3333 14.3333 11.3486 14.3333 7.66667C14.3333 3.98477 11.3486 1 7.66667 1C3.98477 1 1 3.98477 1 7.66667C1 11.3486 3.98477 14.3333 7.66667 14.3333Z"
                    stroke="#3F4156"
                    strokeWidth="1.33333"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M2.95343 2.95316L12.3801 12.3798"
                    stroke="#3F4156"
                    strokeWidth="1.33333"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              Block
            </NavLink>
            <div className="line"></div>
            <NavLink to="" onClick={handleShowModalFive}>
              <span className="icon-svg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                >
                  <path
                    d="M7.66667 14.3333C11.3486 14.3333 14.3333 11.3486 14.3333 7.66667C14.3333 3.98477 11.3486 1 7.66667 1C3.98477 1 1 3.98477 1 7.66667C1 11.3486 3.98477 14.3333 7.66667 14.3333Z"
                    stroke="#3F4156"
                    strokeWidth="1.33333"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M7.66675 5V7.66667"
                    stroke="#3F4156"
                    strokeWidth="1.33333"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M7.66675 10.333H7.67341"
                    stroke="#3F4156"
                    strokeWidth="1.33333"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              Report
            </NavLink>
          </div>
        </Modal.Body>
      </Modal>

      {/* Login Modal */}
      <Modal
        show={modalState === "move-to"}
        onHide={handleClose}
        className="login"
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <div className="Move-Heading">
            <h4>Move to...</h4>
            <button className="btn btn-link">Create New List</button>
          </div>
          <div className="form">
            <Form>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Favorites List 1" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Favorites List 2" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Favorites List 3" />
              </Form.Group>

              <div className="button">
                <button className="btn btn-link cancel">CANCEL</button>
                <button className="btn btn-link save">SAVE</button>
              </div>
            </Form>
          </div>
        </Modal.Body>
      </Modal>

      {/* Resgistration Modal */}
      <Modal
        show={modalState === "delete"}
        onHide={handleClose}
        className="login"
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <div className="favorite-delete">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="70"
              height="70"
              viewBox="0 0 70 70"
              fill="none"
            >
              <circle opacity="0.1" cx="35" cy="35" r="35" fill="#E83C3C" />
              <path
                d="M26 29H28H44"
                stroke="#E83C3C"
                strokeWidth="1.33333"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M31 29V27C31 26.4696 31.2107 25.9609 31.5858 25.5858C31.9609 25.2107 32.4696 25 33 25H37C37.5304 25 38.0391 25.2107 38.4142 25.5858C38.7893 25.9609 39 26.4696 39 27V29M42 29V43C42 43.5304 41.7893 44.0391 41.4142 44.4142C41.0391 44.7893 40.5304 45 40 45H30C29.4696 45 28.9609 44.7893 28.5858 44.4142C28.2107 44.0391 28 43.5304 28 43V29H42Z"
                stroke="#E83C3C"
                strokeWidth="1.33333"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M33 34V40"
                stroke="#E83C3C"
                strokeWidth="1.33333"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M37 34V40"
                stroke="#E83C3C"
                strokeWidth="1.33333"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <div className="heading">
              <h4>Delete?</h4>
              <p>Are you sure you want to detele Savannah?</p>
            </div>
            <div className="button">
              <button className="btn btn-link cancel">NO</button>
              <button className="btn btn-link save">YES</button>
            </div>
          </div>
        </Modal.Body>
      </Modal>

      {/* Success Modal */}
      <Modal
        show={modalState === "block"}
        onHide={handleClose}
        className="create-profile"
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <div className="favorite-delete">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="70"
              height="70"
              viewBox="0 0 70 70"
              fill="none"
            >
              <circle opacity="0.1" cx="35" cy="35" r="35" fill="#E83C3C" />
              <path
                d="M35 45C40.5228 45 45 40.5228 45 35C45 29.4772 40.5228 25 35 25C29.4772 25 25 29.4772 25 35C25 40.5228 29.4772 45 35 45Z"
                stroke="#E83C3C"
                strokeWidth="1.33333"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M27.9301 27.93L42.0701 42.07"
                stroke="#E83C3C"
                strokeWidth="1.33333"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <div className="heading">
              <h4>Block!</h4>
              <p>Are you sure you want to block Savannah?</p>
            </div>
            <div className="button">
              <button className="btn btn-link cancel">NO</button>
              <button className="btn btn-link save">YES</button>
            </div>
          </div>
        </Modal.Body>
      </Modal>

      <Modal
        show={modalState === "report"}
        onHide={handleClose}
        className="create-profile"
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <div className="favorite-delete">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="70"
              height="70"
              viewBox="0 0 70 70"
              fill="none"
            >
              <circle opacity="0.1" cx="35" cy="35" r="35" fill="#E83C3C" />
              <path
                d="M35 45C40.5228 45 45 40.5228 45 35C45 29.4772 40.5228 25 35 25C29.4772 25 25 29.4772 25 35C25 40.5228 29.4772 45 35 45Z"
                stroke="#E83C3C"
                strokeWidth="1.33333"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M35 31V35"
                stroke="#E83C3C"
                strokeWidth="1.33333"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M35 39H35.01"
                stroke="#E83C3C"
                strokeWidth="1.33333"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <div className="heading">
              <h4>Why are you reporting</h4>
            </div>
            <div className="options">
              <button className="btn btn-link">Account Spam</button>
              <button className="btn btn-link">Other Person Account</button>
              <button className="btn btn-link">
                Sending Inappropriate Content
              </button>
            </div>
            <div className="button">
              <button className="btn btn-link cancel">CANCEL</button>
              <button className="btn btn-link save">REPORT</button>
            </div>
          </div>
        </Modal.Body>
      </Modal>

      {/* Add Favorite*/}

      <Modal
        show={modalState === "AddFavorite"}
        onHide={handleClose}
        className="login"
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <div className="img-favorite">
            <div className="heading">
              <h4>who to Replace in your top 5?</h4>
            </div>
            <div className="fav1">
              <div className="fav-big">
                <div className="dotts">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <circle cx="12" cy="12" r="12" fill="#25A5FA" />
                    <path
                      d="M17 9L10.125 15.875L7 12.75"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>

                <div className="text">
                  <p>Kylee</p>
                  <NavLink to="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="19"
                      height="17"
                      viewBox="0 0 19 17"
                      fill="none"
                    >
                      <path
                        d="M16.8717 2.32611C16.4514 1.90569 15.9525 1.57219 15.4034 1.34465C14.8542 1.11711 14.2656 1 13.6712 1C13.0768 1 12.4882 1.11711 11.9391 1.34465C11.3899 1.57219 10.891 1.90569 10.4708 2.32611L9.59867 3.19821L8.72657 2.32611C7.87775 1.4773 6.72652 1.00044 5.52612 1.00044C4.32572 1.00044 3.17448 1.4773 2.32567 2.32611C1.47686 3.17492 1 4.32616 1 5.52656C1 6.72696 1.47686 7.87819 2.32567 8.727L3.19777 9.5991L9.59867 16L15.9996 9.5991L16.8717 8.727C17.2921 8.30679 17.6256 7.80785 17.8531 7.25871C18.0807 6.70957 18.1978 6.12097 18.1978 5.52656C18.1978 4.93214 18.0807 4.34355 17.8531 3.7944C17.6256 3.24526 17.2921 2.74633 16.8717 2.32611V2.32611Z"
                        fill="#F78000"
                        stroke="white"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </NavLink>
                </div>
                <Image className="img-fluid" src={favorite1} />
                <div className="background-gradient"></div>
              </div>

              <div className="fav-big">
                <div className="dotts">{/* <FavoriteModals/> */}</div>

                <div className="text">
                  <p>Kylee</p>
                  <NavLink to="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="19"
                      height="17"
                      viewBox="0 0 19 17"
                      fill="none"
                    >
                      <path
                        d="M16.8717 2.32611C16.4514 1.90569 15.9525 1.57219 15.4034 1.34465C14.8542 1.11711 14.2656 1 13.6712 1C13.0768 1 12.4882 1.11711 11.9391 1.34465C11.3899 1.57219 10.891 1.90569 10.4708 2.32611L9.59867 3.19821L8.72657 2.32611C7.87775 1.4773 6.72652 1.00044 5.52612 1.00044C4.32572 1.00044 3.17448 1.4773 2.32567 2.32611C1.47686 3.17492 1 4.32616 1 5.52656C1 6.72696 1.47686 7.87819 2.32567 8.727L3.19777 9.5991L9.59867 16L15.9996 9.5991L16.8717 8.727C17.2921 8.30679 17.6256 7.80785 17.8531 7.25871C18.0807 6.70957 18.1978 6.12097 18.1978 5.52656C18.1978 4.93214 18.0807 4.34355 17.8531 3.7944C17.6256 3.24526 17.2921 2.74633 16.8717 2.32611V2.32611Z"
                        fill="#F78000"
                        stroke="white"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </NavLink>
                </div>
                <Image className="img-fluid" src={favorite4} />
                <div className="background-gradient"></div>
              </div>

              <div className="fav-big">
                <div className="dotts">{/* <FavoriteModals/> */}</div>

                <div className="text">
                  <p>Kylee</p>
                  <NavLink to="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="19"
                      height="17"
                      viewBox="0 0 19 17"
                      fill="none"
                    >
                      <path
                        d="M16.8717 2.32611C16.4514 1.90569 15.9525 1.57219 15.4034 1.34465C14.8542 1.11711 14.2656 1 13.6712 1C13.0768 1 12.4882 1.11711 11.9391 1.34465C11.3899 1.57219 10.891 1.90569 10.4708 2.32611L9.59867 3.19821L8.72657 2.32611C7.87775 1.4773 6.72652 1.00044 5.52612 1.00044C4.32572 1.00044 3.17448 1.4773 2.32567 2.32611C1.47686 3.17492 1 4.32616 1 5.52656C1 6.72696 1.47686 7.87819 2.32567 8.727L3.19777 9.5991L9.59867 16L15.9996 9.5991L16.8717 8.727C17.2921 8.30679 17.6256 7.80785 17.8531 7.25871C18.0807 6.70957 18.1978 6.12097 18.1978 5.52656C18.1978 4.93214 18.0807 4.34355 17.8531 3.7944C17.6256 3.24526 17.2921 2.74633 16.8717 2.32611V2.32611Z"
                        fill="#F78000"
                        stroke="white"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </NavLink>
                </div>
                <Image className="img-fluid" src={favorite5} />
                <div className="background-gradient"></div>
              </div>

              <div className="d-flexx">
                <div className="fav-small">
                  <div className="dotts">{/* <FavoriteModals/> */}</div>
                  <div className="text">
                    <p>Annabel</p>
                    <NavLink to="#">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="19"
                        height="17"
                        viewBox="0 0 19 17"
                        fill="none"
                      >
                        <path
                          d="M16.8717 2.32611C16.4514 1.90569 15.9525 1.57219 15.4034 1.34465C14.8542 1.11711 14.2656 1 13.6712 1C13.0768 1 12.4882 1.11711 11.9391 1.34465C11.3899 1.57219 10.891 1.90569 10.4708 2.32611L9.59867 3.19821L8.72657 2.32611C7.87775 1.4773 6.72652 1.00044 5.52612 1.00044C4.32572 1.00044 3.17448 1.4773 2.32567 2.32611C1.47686 3.17492 1 4.32616 1 5.52656C1 6.72696 1.47686 7.87819 2.32567 8.727L3.19777 9.5991L9.59867 16L15.9996 9.5991L16.8717 8.727C17.2921 8.30679 17.6256 7.80785 17.8531 7.25871C18.0807 6.70957 18.1978 6.12097 18.1978 5.52656C18.1978 4.93214 18.0807 4.34355 17.8531 3.7944C17.6256 3.24526 17.2921 2.74633 16.8717 2.32611V2.32611Z"
                          fill="#F78000"
                          stroke="white"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </NavLink>
                  </div>
                  <Image className="img-fluid" src={favorite2} />
                  <div className="background-gradient"></div>
                </div>
                <div className="fav-small">
                  <div className="dotts">{/* <FavoriteModals/> */}</div>
                  <div className="text">
                    <p>Floyd</p>
                    <NavLink to="#">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="19"
                        height="17"
                        viewBox="0 0 19 17"
                        fill="none"
                      >
                        <path
                          d="M16.8717 2.32611C16.4514 1.90569 15.9525 1.57219 15.4034 1.34465C14.8542 1.11711 14.2656 1 13.6712 1C13.0768 1 12.4882 1.11711 11.9391 1.34465C11.3899 1.57219 10.891 1.90569 10.4708 2.32611L9.59867 3.19821L8.72657 2.32611C7.87775 1.4773 6.72652 1.00044 5.52612 1.00044C4.32572 1.00044 3.17448 1.4773 2.32567 2.32611C1.47686 3.17492 1 4.32616 1 5.52656C1 6.72696 1.47686 7.87819 2.32567 8.727L3.19777 9.5991L9.59867 16L15.9996 9.5991L16.8717 8.727C17.2921 8.30679 17.6256 7.80785 17.8531 7.25871C18.0807 6.70957 18.1978 6.12097 18.1978 5.52656C18.1978 4.93214 18.0807 4.34355 17.8531 3.7944C17.6256 3.24526 17.2921 2.74633 16.8717 2.32611V2.32611Z"
                          fill="#F78000"
                          stroke="white"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </NavLink>
                  </div>
                  <Image className="img-fluid" src={favorite3} />
                  <div className="background-gradient"></div>
                </div>
              </div>
            </div>
            <div className="butto">
              <button className="btn button">Replace</button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export const ProfilePic = () => {
  return (
    <>
      <div className="pics-lock">
        <div className="lock-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="39"
            height="48"
            viewBox="0 0 39 48"
            fill="none"
          >
            <path
              d="M9.2309 10.1605C9.05658 10.3348 8.95624 10.5769 8.95624 10.8234C8.95624 11.0709 9.05658 11.3119 9.2309 11.4862C9.40521 11.6605 9.64728 11.7609 9.89374 11.7609C10.1413 11.7609 10.3823 11.6605 10.5566 11.4862C10.7309 11.3119 10.8312 11.0709 10.8312 10.8234C10.8312 10.5769 10.7309 10.3348 10.5566 10.1605C10.3823 9.98621 10.1413 9.88586 9.89374 9.88586C9.64728 9.88586 9.40521 9.98621 9.2309 10.1605Z"
              fill="white"
            />
            <path
              d="M35.3641 9.88623H13.6437C13.1259 9.88623 12.7062 10.3059 12.7062 10.8237C12.7062 11.3416 13.1259 11.7612 13.6437 11.7612H35.3641C36.1558 11.7612 36.8 12.405 36.8 13.1968V32.4375H30.5693C30.0515 32.4375 29.6318 32.8572 29.6318 33.375C29.6318 33.8928 30.0515 34.3125 30.5693 34.3125H36.8V34.7516C36.8 35.5433 36.1558 36.1875 35.3641 36.1875H7.98395C7.76312 36.1875 7.54926 36.2655 7.38007 36.408L2.67499 40.37V13.1968C2.67499 12.405 3.31915 11.7612 4.1109 11.7612H6.1441C6.66156 11.7612 7.0816 11.3416 7.0816 10.8237C7.0816 10.3059 6.66156 9.88623 6.1441 9.88623H4.1109C2.28534 9.88623 0.799988 11.3712 0.799988 13.1968V42.3853C0.799988 42.75 1.01129 43.0814 1.34198 43.2352C1.46832 43.2938 1.60309 43.3228 1.73712 43.3228C1.95428 43.3228 2.16888 43.2473 2.34137 43.1023L8.32599 38.0625H35.3641C37.1896 38.0625 38.675 36.5771 38.675 34.7516V13.1968C38.675 11.3712 37.1896 9.88623 35.3641 9.88623Z"
              fill="white"
            />
            <path
              d="M19.7375 6.55957C20.2553 6.55957 20.675 6.13989 20.675 5.62207V0.9375C20.675 0.419678 20.2553 0 19.7375 0C19.2197 0 18.8 0.419678 18.8 0.9375V5.62207C18.8 6.13989 19.2197 6.55957 19.7375 6.55957Z"
              fill="white"
            />
            <path
              d="M26.8037 6.94006C27.0439 6.94006 27.2834 6.84851 27.4665 6.66541L30.7441 3.38818C31.1103 3.02197 31.1103 2.42834 30.7441 2.06213C30.3779 1.69592 29.7842 1.69592 29.418 2.06213L26.1408 5.33936C25.7746 5.70557 25.7746 6.29919 26.1408 6.66541C26.3239 6.84851 26.5638 6.94006 26.8037 6.94006Z"
              fill="white"
            />
            <path
              d="M12.0085 6.65918C12.1916 6.84229 12.4315 6.93384 12.6713 6.93384C12.9112 6.93384 13.1511 6.84229 13.3342 6.65918C13.7004 6.29297 13.7004 5.69934 13.3342 5.33313L10.0566 2.05591C9.69073 1.6897 9.09711 1.6897 8.7309 2.05591C8.36469 2.42212 8.36469 3.01538 8.7309 3.38159L12.0085 6.65918Z"
              fill="white"
            />
            <path
              d="M19.7375 41.4404C19.2197 41.4404 18.8 41.8601 18.8 42.3779V47.0625C18.8 47.5803 19.2197 48 19.7375 48C20.2553 48 20.675 47.5803 20.675 47.0625V42.3779C20.675 41.8601 20.2553 41.4404 19.7375 41.4404Z"
              fill="white"
            />
            <path
              d="M27.4665 41.3346C27.1003 40.9684 26.507 40.9684 26.1408 41.3346C25.7746 41.7008 25.7746 42.2944 26.1408 42.6606L29.418 45.9379C29.6011 46.121 29.841 46.2125 30.0809 46.2125C30.3211 46.2125 30.561 46.121 30.7441 45.9379C31.1099 45.5717 31.1099 44.978 30.7441 44.6118L27.4665 41.3346Z"
              fill="white"
            />
            <path
              d="M12.0085 41.3408L8.7309 44.6184C8.36469 44.9846 8.36469 45.5779 8.7309 45.9441C8.914 46.1272 9.15387 46.2188 9.39374 46.2188C9.63361 46.2188 9.87347 46.1272 10.0566 45.9441L13.3342 42.6669C13.7004 42.3007 13.7004 41.707 13.3342 41.3408C12.968 40.9746 12.3747 40.9746 12.0085 41.3408Z"
              fill="white"
            />
            <path
              d="M28.3549 23.4049C28.3549 20.948 26.3565 18.9496 23.8996 18.9496H21.8657C21.3482 18.9496 20.9282 19.3693 20.9282 19.8871V28.1371C20.9282 28.6545 21.3482 29.0746 21.8657 29.0746H23.8996C26.3561 29.0746 28.3549 27.0758 28.3549 24.6189V23.4049ZM26.4799 24.6189C26.4799 26.042 25.3223 27.1996 23.8996 27.1996H22.8032V20.8246H23.8996C25.3223 20.8246 26.4799 21.9818 26.4799 23.4049V24.6189Z"
              fill="white"
            />
            <path
              d="M11.9621 25.481L11.1693 27.8379C11.0041 28.3286 11.2678 28.8603 11.7585 29.0255C12.2499 29.1907 12.7809 28.9266 12.9461 28.4359L13.5313 26.6968H16.1358L16.721 28.4359C16.8525 28.8274 17.2176 29.0746 17.6094 29.0746C17.7087 29.0746 17.8094 29.0588 17.9083 29.0255C18.399 28.8603 18.663 28.3286 18.4979 27.8379L15.722 19.5879C15.5938 19.2063 15.236 18.9496 14.8336 18.9496C14.4311 18.9496 14.0733 19.2063 13.9451 19.5879L11.9628 25.4791C11.9625 25.4799 11.9621 25.4802 11.9621 25.481ZM14.8336 22.8267L15.5048 24.8218H14.1623L14.8336 22.8267Z"
              fill="white"
            />
            <path
              d="M26.2033 32.7122C26.029 32.8865 25.9286 33.1285 25.9286 33.375C25.9286 33.6226 26.029 33.8635 26.2033 34.0378C26.378 34.2122 26.6197 34.3125 26.8661 34.3125C27.113 34.3125 27.3547 34.2122 27.529 34.0378C27.7033 33.8635 27.8036 33.6215 27.8036 33.375C27.8036 33.1285 27.7033 32.8865 27.529 32.7122C27.3547 32.5378 27.113 32.4375 26.8661 32.4375C26.6197 32.4375 26.3776 32.5378 26.2033 32.7122Z"
              fill="white"
            />
          </svg>
          <p>Sponsored By Brands AD</p>
        </div>
        <Image src={UserProfile3} className="img-fluid pics-l" />
      </div>
    </>
  );
};

export const BlockButton = () => {
  const history = useNavigate();
  const [blockedId, setBlockedId] = useState("");
  const handleSubmit = () => {
    let userData = {};
    userData.blockedId = blockedId;
    profileService.BlockUser(userData, history);
  };

  const [BlockUsershow, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleBlockShare = () => setShow(true);
  return (
    <>
      <button className="btn btn-link" onClick={handleBlockShare}>
        Unblock
      </button>

      <Modal show={BlockUsershow} onHide={handleClose} className="login">
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <div className="favorite-delete">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="70"
              height="70"
              viewBox="0 0 70 70"
              fill="none"
            >
              <circle opacity="0.1" cx="35" cy="35" r="35" fill="#25A5FA" />
              <path
                d="M42 34H28C26.8954 34 26 34.8954 26 36V43C26 44.1046 26.8954 45 28 45H42C43.1046 45 44 44.1046 44 43V36C44 34.8954 43.1046 34 42 34Z"
                stroke="#25A5FA"
                strokeWidth="1.33333"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M30 34V30C29.9988 28.76 30.4583 27.5639 31.2894 26.6437C32.1205 25.7235 33.2638 25.1449 34.4975 25.0203C35.7312 24.8957 36.9671 25.2339 37.9655 25.9693C38.9638 26.7047 39.6533 27.7848 39.9 29"
                stroke="#25A5FA"
                strokeWidth="1.33333"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <div className="heading">
              <h4>UnBlock!</h4>
              <p>
                Are you sure you want to Unblock <b>Courtney?</b>
              </p>
            </div>
            <div className="button">
              <button className="btn btn-link cancel">NO</button>
              <button onClick={handleSubmit} className="btn btn-link save">
                YES
              </button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export const SuccesfullyPopup = () => {
  const [SuccessPopupshow, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleSuccessPopupShow = () => setShow(true);
  return (
    <>
      <div className="option1" onClick={handleSuccessPopupShow}>
        <div className="account">
          <div className="account-inner">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M13 1H17C17.5304 1 18.0391 1.21071 18.4142 1.58579C18.7893 1.96086 19 2.46957 19 3V17C19 17.5304 18.7893 18.0391 18.4142 18.4142C18.0391 18.7893 17.5304 19 17 19H13M8 15L13 10L8 5M11.8 10H1"
                stroke="#3F4156"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <p>Logout</p>
          </div>
          <div className="arrow">
            <NavLink to="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="7"
                height="11"
                viewBox="0 0 7 11"
                fill="none"
              >
                <path
                  d="M1 1L5.5 5.5L1 10"
                  stroke="#3F4156"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </NavLink>
          </div>
        </div>
      </div>
      <Modal
        show={SuccessPopupshow}
        onHide={handleClose}
        className="SuccessModalD"
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <div className="inner-content">
            <div className="img-d">
              <Image src={LogoutGraphic} className="img-fluid" />
            </div>
            <div className="content-box">
              <h4>Logout!</h4>
              <p>Are you sure you want to logout?</p>
              <div className="button-s">
                <NavLink to="/profile" className="btn button grey">
                  No
                </NavLink>
                <NavLink to="/profile" className="btn button">
                  Yes
                </NavLink>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export const ViewEmail = () => {
  const [show, setShow] = useState(false);

  // handleClose();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div className="verify-address">
        <NavLink to="" onClick={handleShow}>
          <p>Verify Email Address</p>
        </NavLink>
      </div>
      <Modal show={show} onHide={handleClose} className="create-profile verify">
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <div className="create-profile">
            <h4>Verify email address</h4>
            <p className="text-center">
              We've sent an email to <b>dummy123@gmail.com</b> to verify your
              email address and verified your account.
            </p>
            <div className="footer">
              <NavLink
                to="/apply/Date"
                href="/apply/Date"
                className="signin"
                type="submit"
              >
                VERIFY YOUR EMAIL ADDRESS
              </NavLink>
              <NavLink className="skip" to="">
                SKIP FOR NOW
              </NavLink>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export const ShareProfileHomepage = (props) => {
  const [QRModalshow, setShow] = useState(false);
  const [copied, setCopied] = useState(false);
  const handleClose = () => setShow(false);
  const handleQRShow = () => setShow(true);
  return (
    <>
      <button className="btn btn-profile" onClick={handleQRShow}>
        SHARE PROFILE
      </button>

      <Modal
        show={QRModalshow}
        onHide={handleClose}
        className="shareprofileButton"
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <h4>Share Profile with your social Community</h4>
          <div className="social-media">
          <div className="socialIcons">
              <FacebookShareButton
                url={props.profileUrl}
                quote={"Selector"}
                hashtag={"#hashtag"}
                description={"aiueo"}
                className="img-fluid"
              >
                <FacebookIcon size={40} round={false} />
              </FacebookShareButton>

              <TwitterShareButton
                title={props.profileUrl}
                url={props.profileUrl}
                className="img-fluid"
              >
                <TwitterIcon size={32} round={false} />
              </TwitterShareButton>

              <EmailShareButton
                title={props.profileUrl}
                url={props.profileUrl}
                className="img-fluid"
              >
                <EmailIcon size={32} round={false} />
              </EmailShareButton>

              <WhatsappShareButton
                title={props.profileUrl}
                url={props.profileUrl}
                className="img-fluid"
              >
                <WhatsappIcon size={32} round={false} />
              </WhatsappShareButton>

              <LinkedinShareButton
                title={props.profileUrl}
                url={props.profileUrl}
                className="img-fluid"
              >
                <LinkedinIcon size={32} round={false} />
              </LinkedinShareButton>

              <PinterestShareButton
                title={props.profileUrl}
                url={props.profileUrl}
                className="img-fluid"
              >
                <PinterestIcon size={32} round={false} />
              </PinterestShareButton>

              <RedditShareButton
                title={props.profileUrl}
                url={props.profileUrl}
                className="img-fluid"
              >
                <RedditIcon size={32} round={false} />
              </RedditShareButton>

              <TelegramShareButton
                title={props.profileUrl}
                url={props.profileUrl}
                className="img-fluid"
              >
                <TelegramIcon size={32} round={false} />
              </TelegramShareButton>

              <InstapaperShareButton
                title={props.profileUrl}
                url={props.profileUrl}
                className="img-fluid"
              >
                <InstapaperIcon size={32} round={false} />
              </InstapaperShareButton>

              <LivejournalShareButton
                title={props.profileUrl}
                url={props.profileUrl}
                className="img-fluid"
              >
                <LivejournalIcon size={32} round={false} />
              </LivejournalShareButton>
            </div>
          </div>
          <div className="form">
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control
                  type="email"
                  placeholder={props.profileUrl}
                />
              </Form.Group>
              <div className="copy-button">
              <CopyToClipboard
                text={props.profileUrl}
                onCopy={() => setCopied(true)}
              >
                <button>{copied ? "Copied" : "Copy"}</button>
              </CopyToClipboard>
              </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export const ShareProfileText = (props) => {
  const [QRModalshow, setShow] = useState(false);
  const [copied, setCopied] = useState(false);
  const handleClose = () => setShow(false);
  const handleQRShow = () => setShow(true);
  return (
    <>
      <button className="btn btn-profile m-auto" onClick={handleQRShow}>
        SHARE PROFILE
      </button>
      <Modal
        show={QRModalshow}
        onHide={handleClose}
        className="shareprofileButton"
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <h4>
            Share your{" "}
            <span className="up">
              <span className="scale">Up</span>scale'd
            </span>{" "}
            Profile on any of your social Profiles
          </h4>
          <div className="social-media">
            <div className="socialIcons">
              <FacebookShareButton
                url={props.profileUrl}
                quote={"Selector"}
                hashtag={"#hashtag"}
                description={"aiueo"}
                className="img-fluid"
              >
                <FacebookIcon size={40} round={false} />
              </FacebookShareButton>

              <TwitterShareButton
                title={props.profileUrl}
                url={props.profileUrl}
                className="img-fluid"
              >
                <TwitterIcon size={32} round={false} />
              </TwitterShareButton>

              <EmailShareButton
                title={props.profileUrl}
                url={props.profileUrl}
                className="img-fluid"
              >
                <EmailIcon size={32} round={false} />
              </EmailShareButton>

              <WhatsappShareButton
                title={props.profileUrl}
                url={props.profileUrl}
                className="img-fluid"
              >
                <WhatsappIcon size={32} round={false} />
              </WhatsappShareButton>

              <LinkedinShareButton
                title={props.profileUrl}
                url={props.profileUrl}
                className="img-fluid"
              >
                <LinkedinIcon size={32} round={false} />
              </LinkedinShareButton>

              <PinterestShareButton
                title={props.profileUrl}
                url={props.profileUrl}
                className="img-fluid"
              >
                <PinterestIcon size={32} round={false} />
              </PinterestShareButton>

              <RedditShareButton
                title={props.profileUrl}
                url={props.profileUrl}
                className="img-fluid"
              >
                <RedditIcon size={32} round={false} />
              </RedditShareButton>

              <TelegramShareButton
                title={props.profileUrl}
                url={props.profileUrl}
                className="img-fluid"
              >
                <TelegramIcon size={32} round={false} />
              </TelegramShareButton>

              <InstapaperShareButton
                title={props.profileUrl}
                url={props.profileUrl}
                className="img-fluid"
              >
                <InstapaperIcon size={32} round={false} />
              </InstapaperShareButton>

              <LivejournalShareButton
                title={props.profileUrl}
                url={props.profileUrl}
                className="img-fluid"
              >
                <LivejournalIcon size={32} round={false} />
              </LivejournalShareButton>
            </div>
          </div>
          <div className="text">
            <p>
              TIP #1: Add to your profiles to keep track of prospects in one
              place.
            </p>
            <p>
              TIP #2: Redirect shots in your DM's to your upscale'd dating
              profile.
            </p>
          </div>
          <div className="form">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="text" placeholder={props.profileUrl} />
            </Form.Group>
            <div className="copy-button">
              <CopyToClipboard
                text={props.profileUrl}
                onCopy={() => setCopied(true)}
              >
                <button>{copied ? "Copied" : "Copy"}</button>
              </CopyToClipboard>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};
