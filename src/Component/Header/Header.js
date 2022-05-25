import React, {useState,useEffect} from 'react';
import { Container, Navbar, ProgressBar, Modal, Form} from "react-bootstrap";
import Image from "react-bootstrap/Image";
import { Logo, UserProfileImage, Instagram, TikTok, Clubhouse, Youtube, Facebook, Omegel, Chat, Whatsapp, Linkedin, Twitter} from '../../img/index';
import {BlueButton, HeaderShare, PublicButton, SearchButton, OptionButton} from '../utils/button';
import {NavLink} from 'react-router-dom';
import {publicProfileService} from '../../_services';
import config from '../../config/config.json'
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
import '../Sass/Layout/header.scss';

export const Header = () => {
    return (
        <>
            <Navbar className="mobile-upscald">
                <Container>
                    <Navbar.Brand href="#home"><Image src={Logo}/></Navbar.Brand>
                    <BlueButton/>
                </Container>
            </Navbar>

        </>
    );
};

export const HeaderSidebar = () => {

    const [userName,setUsername] = useState("");
    const [firstName,setFirstName] = useState("");

    const [copied, setCopied] = useState(false);
      useEffect(() => {
    callApi()
  }, []);

  const callApi = async () => {
    let userData = await publicProfileService.getProfileData();
    setUsername(userData.user?.username)
    setFirstName(userData.user?.firstName)
}

    function openNav() {
        document.getElementById("mySidenav").style.width = "100%";
      }
      
      function closeNav() {
        document.getElementById("mySidenav").style.width = "0";
      }

    const [HeaderShareshow, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleHeaderShare = () => setShow(true);
    return (
        <>
            <Navbar className="mobile-upscald">
                <Container>
                    <div className="logoSVG">
                        <span className="sidebar-icon" onClick={openNav}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                                <path d="M3.75 15H26.25" stroke="#3F4156" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M3.75 7.5H26.25" stroke="#3F4156" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M3.75 22.5H26.25" stroke="#3F4156" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </span>
                        <Navbar.Brand to="#home"><Image src={Logo}/></Navbar.Brand>
                    </div>    
                    <div className="sidebuttons">
                        <span className="header-s"><HeaderShare/></span>               
                        <BlueButton/>
                    </div>    
                </Container>
            </Navbar>

            <div id="mySidenav" className="sidenav">
                <div className="nameSVG">
                    <h4
                    >Hey, {firstName}</h4>
                    <NavLink to="#" className="closebtn cross-b" onClick={closeNav}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                                <circle cx="20" cy="20" r="19.75" fill="white" fillOpacity="0.19" stroke="#E1E1E1" strokeWidth="0.5"/>
                                <path opacity="0.7" d="M24.7782 15.2294C24.4824 14.9336 24.0046 14.9336 23.7088 15.2294L20 18.9306L16.2912 15.2218C15.9954 14.9261 15.5176 14.9261 15.2218 15.2218C14.9261 15.5176 14.9261 15.9954 15.2218 16.2912L18.9306 20L15.2218 23.7088C14.9261 24.0046 14.9261 24.4824 15.2218 24.7782C15.5176 25.0739 15.9954 25.0739 16.2912 24.7782L20 21.0694L23.7088 24.7782C24.0046 25.0739 24.4824 25.0739 24.7782 24.7782C25.0739 24.4824 25.0739 24.0046 24.7782 23.7088L21.0694 20L24.7782 16.2912C25.0664 16.003 25.0664 15.5176 24.7782 15.2294V15.2294Z" fill="black"/>
                            </svg> 
                    </NavLink>
                </div>
                <ul>
                    <li>
                        <NavLink to={"/profile/"+userName}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="20" viewBox="0 0 18 20" fill="none">
                                <path d="M17 19V17C17 15.9391 16.5786 14.9217 15.8284 14.1716C15.0783 13.4214 14.0609 13 13 13H5C3.93913 13 2.92172 13.4214 2.17157 14.1716C1.42143 14.9217 1 15.9391 1 17V19" stroke="#3F4156" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M8.99988 9C11.209 9 12.9999 7.20914 12.9999 5C12.9999 2.79086 11.209 1 8.99988 1C6.79074 1 4.99988 2.79086 4.99988 5C4.99988 7.20914 6.79074 9 8.99988 9Z" stroke="#3F4156" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            <span>My Profile</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="#">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M2.5 2.5V17.5H17.5" stroke="#3F4156" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M15.582 6.6665L11.332 10.9998L8.9987 8.74984L5.83203 11.9165" stroke="#3F4156" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            <span>Analytics</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/favorite">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="18" viewBox="0 0 20 18" fill="none">
                                <path d="M17.3671 2.84172C16.9415 2.41589 16.4361 2.0781 15.8799 1.84763C15.3237 1.61716 14.7275 1.49854 14.1254 1.49854C13.5234 1.49854 12.9272 1.61716 12.371 1.84763C11.8147 2.0781 11.3094 2.41589 10.8838 2.84172L10.0004 3.72506L9.11709 2.84172C8.25735 1.98198 7.09129 1.49898 5.87542 1.49898C4.65956 1.49898 3.4935 1.98198 2.63376 2.84172C1.77401 3.70147 1.29102 4.86753 1.29102 6.08339C1.29102 7.29925 1.77401 8.46531 2.63376 9.32506L3.51709 10.2084L10.0004 16.6917L16.4838 10.2084L17.3671 9.32506C17.7929 8.89943 18.1307 8.39407 18.3612 7.83785C18.5917 7.28164 18.7103 6.68546 18.7103 6.08339C18.7103 5.48132 18.5917 4.88514 18.3612 4.32893C18.1307 3.77271 17.7929 3.26735 17.3671 2.84172V2.84172Z" stroke="#3F4156" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            <span>My Favorite</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/question-bank">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M19.7893 4.07797L15.8832 0.171641C15.7734 0.0617188 15.6243 0 15.4689 0H6.48438C5.51512 0 4.72656 0.788555 4.72656 1.75781V9.48586C2.09352 9.77828 0.0390625 12.0168 0.0390625 14.7266C0.0390625 17.6343 2.40473 20 5.3125 20H18.2031C19.1724 20 19.9609 19.2114 19.9609 18.2422V4.4923C19.9609 4.33687 19.8992 4.18789 19.7893 4.07797V4.07797ZM16.0547 2.00051L17.3277 3.27359L17.9604 3.90625H16.0547V2.00051ZM1.21094 14.7266C1.21094 12.465 3.0509 10.625 5.3125 10.625C7.5741 10.625 9.41406 12.465 9.41406 14.7266C9.41406 16.9882 7.5741 18.8281 5.3125 18.8281C3.0509 18.8281 1.21094 16.9882 1.21094 14.7266ZM18.2031 18.8281H8.62301C9.67625 17.9764 10.396 16.7282 10.5532 15.3125H16.6406C16.9642 15.3125 17.2266 15.0502 17.2266 14.7266C17.2266 14.403 16.9642 14.1406 16.6406 14.1406H10.5532C10.4577 13.2805 10.1546 12.4821 9.69508 11.7969H16.6406C16.9642 11.7969 17.2266 11.5345 17.2266 11.2109C17.2266 10.8873 16.9642 10.625 16.6406 10.625H8.62301C7.86047 10.0084 6.92336 9.59969 5.89844 9.48586V1.75781C5.89844 1.43473 6.16129 1.17188 6.48438 1.17188H14.8828V4.49219C14.8828 4.81578 15.1452 5.07812 15.4688 5.07812H18.7891V18.2422C18.7891 18.5653 18.5262 18.8281 18.2031 18.8281V18.8281Z" fill="#3F4156"/>
                                <path d="M5.36 11.64C5.73867 11.64 6.07467 11.696 6.368 11.808C6.66133 11.92 6.89067 12.0853 7.056 12.304C7.22133 12.5173 7.304 12.7813 7.304 13.096C7.304 13.416 7.23467 13.68 7.096 13.888C6.96267 14.0907 6.78133 14.2453 6.552 14.352C6.32267 14.4533 6.06933 14.52 5.792 14.552L5.736 15.304H4.736L4.744 14.096C5.10133 14.0533 5.37867 13.9973 5.576 13.928C5.77867 13.8533 5.92 13.76 6 13.648C6.08533 13.536 6.128 13.4027 6.128 13.248C6.128 13.0987 6.096 12.9733 6.032 12.872C5.97333 12.7707 5.88267 12.6933 5.76 12.64C5.63733 12.5867 5.48 12.56 5.288 12.56C5.01067 12.56 4.78933 12.64 4.624 12.8C4.45867 12.9547 4.35733 13.176 4.32 13.464L3.28 13.064C3.344 12.7867 3.46133 12.5413 3.632 12.328C3.80267 12.1093 4.02933 11.9413 4.312 11.824C4.6 11.7013 4.94933 11.64 5.36 11.64ZM5.248 15.84C5.456 15.84 5.62133 15.896 5.744 16.008C5.86667 16.12 5.928 16.2693 5.928 16.456C5.928 16.648 5.86667 16.8 5.744 16.912C5.62133 17.0187 5.456 17.072 5.248 17.072C5.04 17.072 4.87467 17.0187 4.752 16.912C4.62933 16.8 4.568 16.648 4.568 16.456C4.568 16.2693 4.62933 16.12 4.752 16.008C4.87467 15.896 5.04 15.84 5.248 15.84Z" fill="#3F4156"/>
                                <path d="M16.6406 7.10938H8.04688C7.72328 7.10938 7.46094 7.37172 7.46094 7.69531C7.46094 8.01891 7.72328 8.28125 8.04688 8.28125H16.6406C16.9642 8.28125 17.2266 8.01891 17.2266 7.69531C17.2266 7.37172 16.9642 7.10938 16.6406 7.10938Z" fill="#3F4156"/>
                            </svg>
                            <span>My Dating Builder</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="" onClick={handleHeaderShare}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <path d="M15 6.66666C16.3807 6.66666 17.5 5.54738 17.5 4.16666C17.5 2.78595 16.3807 1.66666 15 1.66666C13.6193 1.66666 12.5 2.78595 12.5 4.16666C12.5 5.54738 13.6193 6.66666 15 6.66666Z" stroke="#3F4156" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M5 12.5C6.38071 12.5 7.5 11.3807 7.5 10C7.5 8.61929 6.38071 7.5 5 7.5C3.61929 7.5 2.5 8.61929 2.5 10C2.5 11.3807 3.61929 12.5 5 12.5Z" stroke="#3F4156" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M15 18.3333C16.3807 18.3333 17.5 17.214 17.5 15.8333C17.5 14.4526 16.3807 13.3333 15 13.3333C13.6193 13.3333 12.5 14.4526 12.5 15.8333C12.5 17.214 13.6193 18.3333 15 18.3333Z" stroke="#3F4156" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M7.15845 11.2584L12.8501 14.575" stroke="#3F4156" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M12.8418 5.42499L7.15845 8.74165" stroke="#3F4156" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                                <span>Share Profile</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/message">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M17.5 9.58333C17.5029 10.6832 17.2459 11.7682 16.75 12.75C16.162 13.9265 15.2581 14.916 14.1395 15.6077C13.021 16.2995 11.7319 16.6662 10.4167 16.6667C9.31678 16.6695 8.23176 16.4126 7.25 15.9167L2.5 17.5L4.08333 12.75C3.58744 11.7682 3.33047 10.6832 3.33333 9.58333C3.33384 8.26813 3.70051 6.97904 4.39227 5.86046C5.08402 4.74187 6.07355 3.83797 7.25 3.25C8.23176 2.75411 9.31678 2.49713 10.4167 2.5H10.8333C12.5703 2.59583 14.2109 3.32897 15.4409 4.55905C16.671 5.78913 17.4042 7.42971 17.5 9.16667V9.58333Z" stroke="#3F4156" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            <span>Messages</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/setting">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M10 12.5C11.3807 12.5 12.5 11.3807 12.5 10C12.5 8.61929 11.3807 7.5 10 7.5C8.61929 7.5 7.5 8.61929 7.5 10C7.5 11.3807 8.61929 12.5 10 12.5Z" stroke="#3F4156" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M16.1667 12.5C16.0558 12.7513 16.0227 13.0302 16.0717 13.3005C16.1207 13.5708 16.2496 13.8203 16.4417 14.0167L16.4917 14.0667C16.6467 14.2215 16.7696 14.4053 16.8535 14.6076C16.9373 14.8099 16.9805 15.0268 16.9805 15.2458C16.9805 15.4649 16.9373 15.6817 16.8535 15.8841C16.7696 16.0864 16.6467 16.2702 16.4917 16.425C16.3369 16.58 16.1531 16.7029 15.9508 16.7868C15.7484 16.8706 15.5316 16.9138 15.3125 16.9138C15.0935 16.9138 14.8766 16.8706 14.6743 16.7868C14.472 16.7029 14.2882 16.58 14.1334 16.425L14.0834 16.375C13.887 16.1829 13.6375 16.054 13.3672 16.005C13.0969 15.956 12.8181 15.9891 12.5667 16.1C12.3202 16.2056 12.11 16.381 11.962 16.6046C11.8139 16.8282 11.7344 17.0902 11.7334 17.3583V17.5C11.7334 17.942 11.5578 18.366 11.2452 18.6785C10.9327 18.9911 10.5087 19.1667 10.0667 19.1667C9.62468 19.1667 9.20076 18.9911 8.8882 18.6785C8.57564 18.366 8.40004 17.942 8.40004 17.5V17.425C8.39359 17.1492 8.30431 16.8817 8.1438 16.6573C7.98329 16.4328 7.75899 16.2619 7.50004 16.1667C7.24869 16.0557 6.96988 16.0226 6.69955 16.0717C6.42922 16.1207 6.17977 16.2496 5.98337 16.4417L5.93337 16.4917C5.77859 16.6466 5.59477 16.7696 5.39244 16.8534C5.19011 16.9373 4.97323 16.9805 4.75421 16.9805C4.53518 16.9805 4.3183 16.9373 4.11597 16.8534C3.91364 16.7696 3.72983 16.6466 3.57504 16.4917C3.42008 16.3369 3.29715 16.1531 3.21327 15.9507C3.1294 15.7484 3.08623 15.5315 3.08623 15.3125C3.08623 15.0935 3.1294 14.8766 3.21327 14.6743C3.29715 14.4719 3.42008 14.2881 3.57504 14.1333L3.62504 14.0833C3.81715 13.8869 3.94603 13.6375 3.99504 13.3672C4.04406 13.0968 4.01097 12.818 3.90004 12.5667C3.7944 12.3202 3.619 12.11 3.39543 11.9619C3.17185 11.8139 2.90986 11.7344 2.64171 11.7333H2.50004C2.05801 11.7333 1.63409 11.5577 1.32153 11.2452C1.00897 10.9326 0.833374 10.5087 0.833374 10.0667C0.833374 9.62464 1.00897 9.20072 1.32153 8.88816C1.63409 8.5756 2.05801 8.4 2.50004 8.4H2.57504C2.85087 8.39355 3.11838 8.30427 3.34279 8.14376C3.5672 7.98325 3.73814 7.75895 3.83337 7.5C3.9443 7.24865 3.97739 6.96984 3.92838 6.69951C3.87936 6.42918 3.75049 6.17973 3.55837 5.98333L3.50837 5.93333C3.35341 5.77855 3.23048 5.59473 3.14661 5.3924C3.06273 5.19007 3.01956 4.97319 3.01956 4.75417C3.01956 4.53514 3.06273 4.31826 3.14661 4.11593C3.23048 3.9136 3.35341 3.72979 3.50837 3.575C3.66316 3.42004 3.84698 3.29711 4.04931 3.21323C4.25164 3.12936 4.46852 3.08619 4.68754 3.08619C4.90657 3.08619 5.12344 3.12936 5.32577 3.21323C5.5281 3.29711 5.71192 3.42004 5.86671 3.575L5.91671 3.625C6.11311 3.81711 6.36255 3.94599 6.63288 3.995C6.90321 4.04402 7.18203 4.01093 7.43337 3.9H7.50004C7.74652 3.79436 7.95672 3.61896 8.10478 3.39539C8.25285 3.17181 8.3323 2.90982 8.33337 2.64167V2.5C8.33337 2.05797 8.50897 1.63405 8.82153 1.32149C9.13409 1.00893 9.55801 0.833333 10 0.833333C10.4421 0.833333 10.866 1.00893 11.1786 1.32149C11.4911 1.63405 11.6667 2.05797 11.6667 2.5V2.575C11.6678 2.84316 11.7472 3.10515 11.8953 3.32872C12.0434 3.5523 12.2536 3.7277 12.5 3.83333C12.7514 3.94426 13.0302 3.97735 13.3005 3.92834C13.5709 3.87932 13.8203 3.75045 14.0167 3.55833L14.0667 3.50833C14.2215 3.35337 14.4053 3.23044 14.6076 3.14657C14.81 3.06269 15.0268 3.01952 15.2459 3.01952C15.4649 3.01952 15.6818 3.06269 15.8841 3.14657C16.0864 3.23044 16.2703 3.35337 16.425 3.50833C16.58 3.66312 16.7029 3.84694 16.7868 4.04927C16.8707 4.2516 16.9139 4.46847 16.9139 4.6875C16.9139 4.90653 16.8707 5.1234 16.7868 5.32573C16.7029 5.52806 16.58 5.71188 16.425 5.86667L16.375 5.91667C16.1829 6.11307 16.0541 6.36251 16.005 6.63284C15.956 6.90317 15.9891 7.18199 16.1 7.43333V7.5C16.2057 7.74647 16.3811 7.95668 16.6047 8.10474C16.8282 8.25281 17.0902 8.33226 17.3584 8.33333H17.5C17.9421 8.33333 18.366 8.50893 18.6786 8.82149C18.9911 9.13405 19.1667 9.55797 19.1667 10C19.1667 10.442 18.9911 10.866 18.6786 11.1785C18.366 11.4911 17.9421 11.6667 17.5 11.6667H17.425C17.1569 11.6677 16.8949 11.7472 16.6713 11.8953C16.4477 12.0433 16.2723 12.2535 16.1667 12.5V12.5Z" stroke="#3F4156" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            <span>Settings</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/help-support">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M13.9062 13.2812H12.1484V12.7332C12.6254 12.4724 13.0501 12.1276 13.4026 11.7188H14.6875C15.8721 11.7188 16.8359 10.755 16.8359 9.57031V7.61719C16.8359 6.8534 16.346 6.20258 15.6641 5.96078V5.66406C15.6641 2.5409 13.1232 0 10 0C6.87684 0 4.33594 2.5409 4.33594 5.66406V5.96016C3.65395 6.20203 3.16406 6.85332 3.16406 7.61719C3.16406 8.58645 3.95262 9.375 4.92188 9.375H5.54602C5.7357 10.8248 6.61934 12.0593 7.85156 12.7332V13.2812H6.09375C3.40137 13.2812 1.21094 15.4717 1.21094 18.1641V19.4141C1.21094 19.7377 1.47328 20 1.79688 20H18.2031C18.5267 20 18.7891 19.7377 18.7891 19.4141V18.1641C18.7891 15.4717 16.5986 13.2812 13.9062 13.2812ZM15.6641 9.57031C15.6641 10.1088 15.226 10.5469 14.6875 10.5469H14.1338C14.291 10.1787 14.4003 9.78551 14.454 9.375H15.6641V9.57031ZM15.6641 7.61719V8.20312H14.4922V7.03125H15.0781C15.4012 7.03125 15.6641 7.2941 15.6641 7.61719ZM5.50781 8.20312H4.92188C4.59879 8.20312 4.33594 7.94027 4.33594 7.61719C4.33594 7.2941 4.59879 7.03125 4.92188 7.03125H5.50781V8.20312ZM5.50781 5.85938V5.66406C5.50781 3.18707 7.52301 1.17188 10 1.17188C12.477 1.17188 14.4922 3.18707 14.4922 5.66406V5.85938H14.1118L12.3191 4.42527C12.086 4.23875 11.7499 4.25738 11.5388 4.46848C10.6419 5.36539 9.44938 5.85938 8.18094 5.85938H5.50781ZM6.67969 8.78906V7.03125H8.18094C9.58539 7.03125 10.9153 6.54547 11.9786 5.65352L13.3203 6.72691V8.78906C13.3203 9.4343 13.1347 10.0367 12.8149 10.5469H10.3906C10.067 10.5469 9.80469 10.8092 9.80469 11.1328C9.80469 11.4564 10.067 11.7188 10.3906 11.7188H11.5605C11.095 11.9677 10.5638 12.1094 10 12.1094C8.16918 12.1094 6.67969 10.6199 6.67969 8.78906V8.78906ZM10.9766 13.174V13.8672C10.9766 14.4057 10.5385 14.8438 10 14.8438C9.46152 14.8438 9.02344 14.4057 9.02344 13.8672V13.174C9.33797 13.244 9.66469 13.2812 10 13.2812C10.3353 13.2812 10.662 13.244 10.9766 13.174ZM17.6172 18.8281H2.38281V18.1641C2.38281 16.1179 4.04754 14.4531 6.09375 14.4531H7.93344C8.18918 15.3538 9.01848 16.0156 10 16.0156C10.9815 16.0156 11.8108 15.3538 12.0666 14.4531H13.9062C15.9525 14.4531 17.6172 16.1179 17.6172 18.1641V18.8281Z" fill="#3F4156"/>
                            </svg>
                            <span>Support</span>
                        </NavLink>
                    </li>
                </ul> 
                <div className="user-img">
                    <Image className="img-fluid" src={UserProfileImage}/>            
                </div>   
                <div className="blue-background"></div>
            </div>
            <Modal show={HeaderShareshow} onHide={handleClose} className="shareprofileButton">
                <Modal.Body>
                    <h4>Share Profile with your social Community</h4>
                    <div className="social-media">
                    <div className="socialIcons">
              <FacebookShareButton
                url={config.baseURL+userName}
                quote={"Selector"}
                hashtag={"#hashtag"}
                description={"aiueo"}
                className="img-fluid"
              >
                <FacebookIcon size={40} round={false} />
              </FacebookShareButton>

              <TwitterShareButton
                title={config.baseURL+userName}
                url={config.baseURL+userName}
                className="img-fluid"
              >
                <TwitterIcon size={32} round={false} />
              </TwitterShareButton>

              <EmailShareButton
                title={config.baseURL+userName}
                url={config.baseURL+userName}
                className="img-fluid"
              >
                <EmailIcon size={32} round={false} />
              </EmailShareButton>

              <WhatsappShareButton
                title={config.baseURL+userName}
                url={config.baseURL+userName}
                className="img-fluid"
              >
                <WhatsappIcon size={32} round={false} />
              </WhatsappShareButton>

              <LinkedinShareButton
                title={config.baseURL+userName}
                url={config.baseURL+userName}
                className="img-fluid"
              >
                <LinkedinIcon size={32} round={false} />
              </LinkedinShareButton>

              <PinterestShareButton
                title={config.baseURL+userName}
                url={config.baseURL+userName}
                className="img-fluid"
              >
                <PinterestIcon size={32} round={false} />
              </PinterestShareButton>

              <RedditShareButton
                title={config.baseURL+userName}
                url={config.baseURL+userName}
                className="img-fluid"
              >
                <RedditIcon size={32} round={false} />
              </RedditShareButton>

              <TelegramShareButton
                title={config.baseURL+userName}
                url={config.baseURL+userName}
                className="img-fluid"
              >
                <TelegramIcon size={32} round={false} />
              </TelegramShareButton>

              <InstapaperShareButton
                title={config.baseURL+userName}
                url={config.baseURL+userName}
                className="img-fluid"
              >
                <InstapaperIcon size={32} round={false} />
              </InstapaperShareButton>

              <LivejournalShareButton
                title={config.baseURL+userName}
                url={config.baseURL+userName}
                className="img-fluid"
              >
                <LivejournalIcon size={32} round={false} />
              </LivejournalShareButton>
            </div>
                    </div>
                    <div className="form">
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Control type="email" placeholder={config.baseURL+userName} />
                            </Form.Group>
                            <div className="copy-button">
                            <CopyToClipboard
                text={config.baseURL+userName}
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

export const QuestionHeader = () => {
    const [userName,setUsername] = useState("");
    const [firstName,setFirstName] = useState("");
    const [copied, setCopied] = useState(false);
      useEffect(() => {
        callApi()
    }, []);

  const callApi = async () => {
    let userData = await publicProfileService.getProfileData();
    setUsername(userData.user?.username)
    setFirstName(userData.user?.firstName)

}

    function openNav() {
        document.getElementById("mySidenav").style.width = "100%";
      }
      
      function closeNav() {
        document.getElementById("mySidenav").style.width = "0";
      }
        const [HeaderShareshow, setShow] = useState(false);

        const handleClose = () => setShow(false);
        const handleHeaderShare = () => setShow(true);
    return (
        <>
            <Navbar className="mobile-upscald">
                <Container>
                    <div className="question-h">         
                        <div className="header">
                            <span className="sidebar-icon" onClick={openNav}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                                    <path d="M3.75 15H26.25" stroke="#3F4156" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M3.75 7.5H26.25" stroke="#3F4156" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M3.75 22.5H26.25" stroke="#3F4156" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </span>    
                            <div className="header-contet">
                                <h4>Dating App builder</h4>
                                <p>Pick Three of your Favorite Questions</p>
                            </div>
                        </div>
                        <div className="progress-h">
                            <ProgressBar now={60} />
                        </div>    
                    </div>    
                </Container>
            </Navbar>

            <div id="mySidenav" className="sidenav">
                <div className="nameSVG">
                    <h4
                    >Hey, {firstName}</h4>
                    <NavLink to="#" className="closebtn cross-b" onClick={closeNav}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                                <circle cx="20" cy="20" r="19.75" fill="white" fillOpacity="0.19" stroke="#E1E1E1" strokeWidth="0.5"/>
                                <path opacity="0.7" d="M24.7782 15.2294C24.4824 14.9336 24.0046 14.9336 23.7088 15.2294L20 18.9306L16.2912 15.2218C15.9954 14.9261 15.5176 14.9261 15.2218 15.2218C14.9261 15.5176 14.9261 15.9954 15.2218 16.2912L18.9306 20L15.2218 23.7088C14.9261 24.0046 14.9261 24.4824 15.2218 24.7782C15.5176 25.0739 15.9954 25.0739 16.2912 24.7782L20 21.0694L23.7088 24.7782C24.0046 25.0739 24.4824 25.0739 24.7782 24.7782C25.0739 24.4824 25.0739 24.0046 24.7782 23.7088L21.0694 20L24.7782 16.2912C25.0664 16.003 25.0664 15.5176 24.7782 15.2294V15.2294Z" fill="black"/>
                            </svg> 
                    </NavLink>
                </div>
                <ul>
                    <li>
                        <NavLink to={"/profile/"+userName}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="20" viewBox="0 0 18 20" fill="none">
                                <path d="M17 19V17C17 15.9391 16.5786 14.9217 15.8284 14.1716C15.0783 13.4214 14.0609 13 13 13H5C3.93913 13 2.92172 13.4214 2.17157 14.1716C1.42143 14.9217 1 15.9391 1 17V19" stroke="#3F4156" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M8.99988 9C11.209 9 12.9999 7.20914 12.9999 5C12.9999 2.79086 11.209 1 8.99988 1C6.79074 1 4.99988 2.79086 4.99988 5C4.99988 7.20914 6.79074 9 8.99988 9Z" stroke="#3F4156" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            <span>My Profile</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="#">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M2.5 2.5V17.5H17.5" stroke="#3F4156" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M15.582 6.6665L11.332 10.9998L8.9987 8.74984L5.83203 11.9165" stroke="#3F4156" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            <span>Analytics</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/favorite">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="18" viewBox="0 0 20 18" fill="none">
                                <path d="M17.3671 2.84172C16.9415 2.41589 16.4361 2.0781 15.8799 1.84763C15.3237 1.61716 14.7275 1.49854 14.1254 1.49854C13.5234 1.49854 12.9272 1.61716 12.371 1.84763C11.8147 2.0781 11.3094 2.41589 10.8838 2.84172L10.0004 3.72506L9.11709 2.84172C8.25735 1.98198 7.09129 1.49898 5.87542 1.49898C4.65956 1.49898 3.4935 1.98198 2.63376 2.84172C1.77401 3.70147 1.29102 4.86753 1.29102 6.08339C1.29102 7.29925 1.77401 8.46531 2.63376 9.32506L3.51709 10.2084L10.0004 16.6917L16.4838 10.2084L17.3671 9.32506C17.7929 8.89943 18.1307 8.39407 18.3612 7.83785C18.5917 7.28164 18.7103 6.68546 18.7103 6.08339C18.7103 5.48132 18.5917 4.88514 18.3612 4.32893C18.1307 3.77271 17.7929 3.26735 17.3671 2.84172V2.84172Z" stroke="#3F4156" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            <span>My Favorite</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/question-bank">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M19.7893 4.07797L15.8832 0.171641C15.7734 0.0617188 15.6243 0 15.4689 0H6.48438C5.51512 0 4.72656 0.788555 4.72656 1.75781V9.48586C2.09352 9.77828 0.0390625 12.0168 0.0390625 14.7266C0.0390625 17.6343 2.40473 20 5.3125 20H18.2031C19.1724 20 19.9609 19.2114 19.9609 18.2422V4.4923C19.9609 4.33687 19.8992 4.18789 19.7893 4.07797V4.07797ZM16.0547 2.00051L17.3277 3.27359L17.9604 3.90625H16.0547V2.00051ZM1.21094 14.7266C1.21094 12.465 3.0509 10.625 5.3125 10.625C7.5741 10.625 9.41406 12.465 9.41406 14.7266C9.41406 16.9882 7.5741 18.8281 5.3125 18.8281C3.0509 18.8281 1.21094 16.9882 1.21094 14.7266ZM18.2031 18.8281H8.62301C9.67625 17.9764 10.396 16.7282 10.5532 15.3125H16.6406C16.9642 15.3125 17.2266 15.0502 17.2266 14.7266C17.2266 14.403 16.9642 14.1406 16.6406 14.1406H10.5532C10.4577 13.2805 10.1546 12.4821 9.69508 11.7969H16.6406C16.9642 11.7969 17.2266 11.5345 17.2266 11.2109C17.2266 10.8873 16.9642 10.625 16.6406 10.625H8.62301C7.86047 10.0084 6.92336 9.59969 5.89844 9.48586V1.75781C5.89844 1.43473 6.16129 1.17188 6.48438 1.17188H14.8828V4.49219C14.8828 4.81578 15.1452 5.07812 15.4688 5.07812H18.7891V18.2422C18.7891 18.5653 18.5262 18.8281 18.2031 18.8281V18.8281Z" fill="#3F4156"/>
                                <path d="M5.36 11.64C5.73867 11.64 6.07467 11.696 6.368 11.808C6.66133 11.92 6.89067 12.0853 7.056 12.304C7.22133 12.5173 7.304 12.7813 7.304 13.096C7.304 13.416 7.23467 13.68 7.096 13.888C6.96267 14.0907 6.78133 14.2453 6.552 14.352C6.32267 14.4533 6.06933 14.52 5.792 14.552L5.736 15.304H4.736L4.744 14.096C5.10133 14.0533 5.37867 13.9973 5.576 13.928C5.77867 13.8533 5.92 13.76 6 13.648C6.08533 13.536 6.128 13.4027 6.128 13.248C6.128 13.0987 6.096 12.9733 6.032 12.872C5.97333 12.7707 5.88267 12.6933 5.76 12.64C5.63733 12.5867 5.48 12.56 5.288 12.56C5.01067 12.56 4.78933 12.64 4.624 12.8C4.45867 12.9547 4.35733 13.176 4.32 13.464L3.28 13.064C3.344 12.7867 3.46133 12.5413 3.632 12.328C3.80267 12.1093 4.02933 11.9413 4.312 11.824C4.6 11.7013 4.94933 11.64 5.36 11.64ZM5.248 15.84C5.456 15.84 5.62133 15.896 5.744 16.008C5.86667 16.12 5.928 16.2693 5.928 16.456C5.928 16.648 5.86667 16.8 5.744 16.912C5.62133 17.0187 5.456 17.072 5.248 17.072C5.04 17.072 4.87467 17.0187 4.752 16.912C4.62933 16.8 4.568 16.648 4.568 16.456C4.568 16.2693 4.62933 16.12 4.752 16.008C4.87467 15.896 5.04 15.84 5.248 15.84Z" fill="#3F4156"/>
                                <path d="M16.6406 7.10938H8.04688C7.72328 7.10938 7.46094 7.37172 7.46094 7.69531C7.46094 8.01891 7.72328 8.28125 8.04688 8.28125H16.6406C16.9642 8.28125 17.2266 8.01891 17.2266 7.69531C17.2266 7.37172 16.9642 7.10938 16.6406 7.10938Z" fill="#3F4156"/>
                            </svg>
                            <span>My Dating Builder</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="" onClick={handleHeaderShare}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <path d="M15 6.66666C16.3807 6.66666 17.5 5.54738 17.5 4.16666C17.5 2.78595 16.3807 1.66666 15 1.66666C13.6193 1.66666 12.5 2.78595 12.5 4.16666C12.5 5.54738 13.6193 6.66666 15 6.66666Z" stroke="#3F4156" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M5 12.5C6.38071 12.5 7.5 11.3807 7.5 10C7.5 8.61929 6.38071 7.5 5 7.5C3.61929 7.5 2.5 8.61929 2.5 10C2.5 11.3807 3.61929 12.5 5 12.5Z" stroke="#3F4156" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M15 18.3333C16.3807 18.3333 17.5 17.214 17.5 15.8333C17.5 14.4526 16.3807 13.3333 15 13.3333C13.6193 13.3333 12.5 14.4526 12.5 15.8333C12.5 17.214 13.6193 18.3333 15 18.3333Z" stroke="#3F4156" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M7.15845 11.2584L12.8501 14.575" stroke="#3F4156" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M12.8418 5.42499L7.15845 8.74165" stroke="#3F4156" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                                <span>Share Profile</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/message">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M17.5 9.58333C17.5029 10.6832 17.2459 11.7682 16.75 12.75C16.162 13.9265 15.2581 14.916 14.1395 15.6077C13.021 16.2995 11.7319 16.6662 10.4167 16.6667C9.31678 16.6695 8.23176 16.4126 7.25 15.9167L2.5 17.5L4.08333 12.75C3.58744 11.7682 3.33047 10.6832 3.33333 9.58333C3.33384 8.26813 3.70051 6.97904 4.39227 5.86046C5.08402 4.74187 6.07355 3.83797 7.25 3.25C8.23176 2.75411 9.31678 2.49713 10.4167 2.5H10.8333C12.5703 2.59583 14.2109 3.32897 15.4409 4.55905C16.671 5.78913 17.4042 7.42971 17.5 9.16667V9.58333Z" stroke="#3F4156" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            <span>Messages</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/setting">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M10 12.5C11.3807 12.5 12.5 11.3807 12.5 10C12.5 8.61929 11.3807 7.5 10 7.5C8.61929 7.5 7.5 8.61929 7.5 10C7.5 11.3807 8.61929 12.5 10 12.5Z" stroke="#3F4156" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M16.1667 12.5C16.0558 12.7513 16.0227 13.0302 16.0717 13.3005C16.1207 13.5708 16.2496 13.8203 16.4417 14.0167L16.4917 14.0667C16.6467 14.2215 16.7696 14.4053 16.8535 14.6076C16.9373 14.8099 16.9805 15.0268 16.9805 15.2458C16.9805 15.4649 16.9373 15.6817 16.8535 15.8841C16.7696 16.0864 16.6467 16.2702 16.4917 16.425C16.3369 16.58 16.1531 16.7029 15.9508 16.7868C15.7484 16.8706 15.5316 16.9138 15.3125 16.9138C15.0935 16.9138 14.8766 16.8706 14.6743 16.7868C14.472 16.7029 14.2882 16.58 14.1334 16.425L14.0834 16.375C13.887 16.1829 13.6375 16.054 13.3672 16.005C13.0969 15.956 12.8181 15.9891 12.5667 16.1C12.3202 16.2056 12.11 16.381 11.962 16.6046C11.8139 16.8282 11.7344 17.0902 11.7334 17.3583V17.5C11.7334 17.942 11.5578 18.366 11.2452 18.6785C10.9327 18.9911 10.5087 19.1667 10.0667 19.1667C9.62468 19.1667 9.20076 18.9911 8.8882 18.6785C8.57564 18.366 8.40004 17.942 8.40004 17.5V17.425C8.39359 17.1492 8.30431 16.8817 8.1438 16.6573C7.98329 16.4328 7.75899 16.2619 7.50004 16.1667C7.24869 16.0557 6.96988 16.0226 6.69955 16.0717C6.42922 16.1207 6.17977 16.2496 5.98337 16.4417L5.93337 16.4917C5.77859 16.6466 5.59477 16.7696 5.39244 16.8534C5.19011 16.9373 4.97323 16.9805 4.75421 16.9805C4.53518 16.9805 4.3183 16.9373 4.11597 16.8534C3.91364 16.7696 3.72983 16.6466 3.57504 16.4917C3.42008 16.3369 3.29715 16.1531 3.21327 15.9507C3.1294 15.7484 3.08623 15.5315 3.08623 15.3125C3.08623 15.0935 3.1294 14.8766 3.21327 14.6743C3.29715 14.4719 3.42008 14.2881 3.57504 14.1333L3.62504 14.0833C3.81715 13.8869 3.94603 13.6375 3.99504 13.3672C4.04406 13.0968 4.01097 12.818 3.90004 12.5667C3.7944 12.3202 3.619 12.11 3.39543 11.9619C3.17185 11.8139 2.90986 11.7344 2.64171 11.7333H2.50004C2.05801 11.7333 1.63409 11.5577 1.32153 11.2452C1.00897 10.9326 0.833374 10.5087 0.833374 10.0667C0.833374 9.62464 1.00897 9.20072 1.32153 8.88816C1.63409 8.5756 2.05801 8.4 2.50004 8.4H2.57504C2.85087 8.39355 3.11838 8.30427 3.34279 8.14376C3.5672 7.98325 3.73814 7.75895 3.83337 7.5C3.9443 7.24865 3.97739 6.96984 3.92838 6.69951C3.87936 6.42918 3.75049 6.17973 3.55837 5.98333L3.50837 5.93333C3.35341 5.77855 3.23048 5.59473 3.14661 5.3924C3.06273 5.19007 3.01956 4.97319 3.01956 4.75417C3.01956 4.53514 3.06273 4.31826 3.14661 4.11593C3.23048 3.9136 3.35341 3.72979 3.50837 3.575C3.66316 3.42004 3.84698 3.29711 4.04931 3.21323C4.25164 3.12936 4.46852 3.08619 4.68754 3.08619C4.90657 3.08619 5.12344 3.12936 5.32577 3.21323C5.5281 3.29711 5.71192 3.42004 5.86671 3.575L5.91671 3.625C6.11311 3.81711 6.36255 3.94599 6.63288 3.995C6.90321 4.04402 7.18203 4.01093 7.43337 3.9H7.50004C7.74652 3.79436 7.95672 3.61896 8.10478 3.39539C8.25285 3.17181 8.3323 2.90982 8.33337 2.64167V2.5C8.33337 2.05797 8.50897 1.63405 8.82153 1.32149C9.13409 1.00893 9.55801 0.833333 10 0.833333C10.4421 0.833333 10.866 1.00893 11.1786 1.32149C11.4911 1.63405 11.6667 2.05797 11.6667 2.5V2.575C11.6678 2.84316 11.7472 3.10515 11.8953 3.32872C12.0434 3.5523 12.2536 3.7277 12.5 3.83333C12.7514 3.94426 13.0302 3.97735 13.3005 3.92834C13.5709 3.87932 13.8203 3.75045 14.0167 3.55833L14.0667 3.50833C14.2215 3.35337 14.4053 3.23044 14.6076 3.14657C14.81 3.06269 15.0268 3.01952 15.2459 3.01952C15.4649 3.01952 15.6818 3.06269 15.8841 3.14657C16.0864 3.23044 16.2703 3.35337 16.425 3.50833C16.58 3.66312 16.7029 3.84694 16.7868 4.04927C16.8707 4.2516 16.9139 4.46847 16.9139 4.6875C16.9139 4.90653 16.8707 5.1234 16.7868 5.32573C16.7029 5.52806 16.58 5.71188 16.425 5.86667L16.375 5.91667C16.1829 6.11307 16.0541 6.36251 16.005 6.63284C15.956 6.90317 15.9891 7.18199 16.1 7.43333V7.5C16.2057 7.74647 16.3811 7.95668 16.6047 8.10474C16.8282 8.25281 17.0902 8.33226 17.3584 8.33333H17.5C17.9421 8.33333 18.366 8.50893 18.6786 8.82149C18.9911 9.13405 19.1667 9.55797 19.1667 10C19.1667 10.442 18.9911 10.866 18.6786 11.1785C18.366 11.4911 17.9421 11.6667 17.5 11.6667H17.425C17.1569 11.6677 16.8949 11.7472 16.6713 11.8953C16.4477 12.0433 16.2723 12.2535 16.1667 12.5V12.5Z" stroke="#3F4156" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            <span>Settings</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/help-support">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M13.9062 13.2812H12.1484V12.7332C12.6254 12.4724 13.0501 12.1276 13.4026 11.7188H14.6875C15.8721 11.7188 16.8359 10.755 16.8359 9.57031V7.61719C16.8359 6.8534 16.346 6.20258 15.6641 5.96078V5.66406C15.6641 2.5409 13.1232 0 10 0C6.87684 0 4.33594 2.5409 4.33594 5.66406V5.96016C3.65395 6.20203 3.16406 6.85332 3.16406 7.61719C3.16406 8.58645 3.95262 9.375 4.92188 9.375H5.54602C5.7357 10.8248 6.61934 12.0593 7.85156 12.7332V13.2812H6.09375C3.40137 13.2812 1.21094 15.4717 1.21094 18.1641V19.4141C1.21094 19.7377 1.47328 20 1.79688 20H18.2031C18.5267 20 18.7891 19.7377 18.7891 19.4141V18.1641C18.7891 15.4717 16.5986 13.2812 13.9062 13.2812ZM15.6641 9.57031C15.6641 10.1088 15.226 10.5469 14.6875 10.5469H14.1338C14.291 10.1787 14.4003 9.78551 14.454 9.375H15.6641V9.57031ZM15.6641 7.61719V8.20312H14.4922V7.03125H15.0781C15.4012 7.03125 15.6641 7.2941 15.6641 7.61719ZM5.50781 8.20312H4.92188C4.59879 8.20312 4.33594 7.94027 4.33594 7.61719C4.33594 7.2941 4.59879 7.03125 4.92188 7.03125H5.50781V8.20312ZM5.50781 5.85938V5.66406C5.50781 3.18707 7.52301 1.17188 10 1.17188C12.477 1.17188 14.4922 3.18707 14.4922 5.66406V5.85938H14.1118L12.3191 4.42527C12.086 4.23875 11.7499 4.25738 11.5388 4.46848C10.6419 5.36539 9.44938 5.85938 8.18094 5.85938H5.50781ZM6.67969 8.78906V7.03125H8.18094C9.58539 7.03125 10.9153 6.54547 11.9786 5.65352L13.3203 6.72691V8.78906C13.3203 9.4343 13.1347 10.0367 12.8149 10.5469H10.3906C10.067 10.5469 9.80469 10.8092 9.80469 11.1328C9.80469 11.4564 10.067 11.7188 10.3906 11.7188H11.5605C11.095 11.9677 10.5638 12.1094 10 12.1094C8.16918 12.1094 6.67969 10.6199 6.67969 8.78906V8.78906ZM10.9766 13.174V13.8672C10.9766 14.4057 10.5385 14.8438 10 14.8438C9.46152 14.8438 9.02344 14.4057 9.02344 13.8672V13.174C9.33797 13.244 9.66469 13.2812 10 13.2812C10.3353 13.2812 10.662 13.244 10.9766 13.174ZM17.6172 18.8281H2.38281V18.1641C2.38281 16.1179 4.04754 14.4531 6.09375 14.4531H7.93344C8.18918 15.3538 9.01848 16.0156 10 16.0156C10.9815 16.0156 11.8108 15.3538 12.0666 14.4531H13.9062C15.9525 14.4531 17.6172 16.1179 17.6172 18.1641V18.8281Z" fill="#3F4156"/>
                            </svg>
                            <span>Support</span>
                        </NavLink>
                    </li>
                </ul> 
                <div className="user-img">
                    <Image className="img-fluid" src={UserProfileImage}/>            
                </div>   
                <div className="blue-background"></div>
            </div>
            <Modal show={HeaderShareshow} onHide={handleClose} className="shareprofileButton">
                <Modal.Body>
                    <h4>Share Profile with your social Community</h4>
                    <div className="social-media">
                    <div className="socialIcons">
                        <FacebookShareButton
                            url={config.baseURL+userName}
                            quote={"Selector"}
                            hashtag={"#hashtag"}
                            description={"aiueo"}
                            className="img-fluid"
                        >
                            <FacebookIcon size={40} round={false} />
                        </FacebookShareButton>

                        <TwitterShareButton
                            title={config.baseURL+userName}
                            url={config.baseURL+userName}
                            className="img-fluid"
                        >
                            <TwitterIcon size={32} round={false} />
                        </TwitterShareButton>

                        <EmailShareButton
                            title={config.baseURL+userName}
                            url={config.baseURL+userName}
                            className="img-fluid"
                        >
                            <EmailIcon size={32} round={false} />
                        </EmailShareButton>

                        <WhatsappShareButton
                            title={config.baseURL+userName}
                            url={config.baseURL+userName}
                            className="img-fluid"
                        >
                            <WhatsappIcon size={32} round={false} />
                        </WhatsappShareButton>

                        <LinkedinShareButton
                            title={config.baseURL+userName}
                            url={config.baseURL+userName}
                            className="img-fluid"
                        >
                            <LinkedinIcon size={32} round={false} />
                        </LinkedinShareButton>

                        <PinterestShareButton
                            title={config.baseURL+userName}
                            url={config.baseURL+userName}
                            className="img-fluid"
                        >
                            <PinterestIcon size={32} round={false} />
                        </PinterestShareButton>

                        <RedditShareButton
                            title={config.baseURL+userName}
                            url={config.baseURL+userName}
                            className="img-fluid"
                        >
                            <RedditIcon size={32} round={false} />
                        </RedditShareButton>

                        <TelegramShareButton
                            title={config.baseURL+userName}
                            url={config.baseURL+userName}
                            className="img-fluid"
                        >
                            <TelegramIcon size={32} round={false} />
                        </TelegramShareButton>

                        <InstapaperShareButton
                            title={config.baseURL+userName}
                            url={config.baseURL+userName}
                            className="img-fluid"
                        >
                            <InstapaperIcon size={32} round={false} />
                        </InstapaperShareButton>

                        <LivejournalShareButton
                            title={config.baseURL+userName}
                            url={config.baseURL+userName}
                            className="img-fluid"
                        >
                            <LivejournalIcon size={32} round={false} />
                        </LivejournalShareButton>
            </div>
                    </div>
                    <div className="form">
                      
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Control type="email" placeholder={config.baseURL+userName} />
                            </Form.Group>
                            <div className="copy-button">
                            <CopyToClipboard
                text={config.baseURL+userName}
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

export const QuestionScreenA = () => {

    const [userName,setUsername] = useState("");
    const [firstName,setFirstName] = useState("");
    const [copied, setCopied] = useState(false);
      useEffect(() => {
    callApi()
  }, []);

  const callApi = async () => {
    let userData = await publicProfileService.getProfileData();
    setUsername(userData.user?.username)
    setFirstName(userData.user?.firstName)

}


    function openNav() {
        document.getElementById("mySidenav").style.width = "100%";
      }
      
      function closeNav() {
        document.getElementById("mySidenav").style.width = "0";
      }
        const [HeaderShareshow, setShow] = useState(false);

        const handleClose = () => setShow(false);
        const handleHeaderShare = () => setShow(true);
    return (
        <>
            <Navbar className="mobile-upscald">
                <Container>
                    <div className="question-h">         
                        <div className="header">
                            <span className="sidebar-icon" onClick={openNav}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                                    <path d="M3.75 15H26.25" stroke="#3F4156" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M3.75 7.5H26.25" stroke="#3F4156" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M3.75 22.5H26.25" stroke="#3F4156" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </span>    
                            <div className="header-contet">
                                <h4>Dating App builder</h4>
                                <p>Pick Three of your Favorite Questions</p>
                            </div>
                            <div className="notification">
                                <BlueButton/>
                            </div>
                        </div>
                            
                    </div>    
                </Container>
            </Navbar>

            <div id="mySidenav" className="sidenav">
                <div className="nameSVG">
                    <h4
                    >Hey, {firstName}</h4>
                    <NavLink to="#" className="closebtn cross-b" onClick={closeNav}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                                <circle cx="20" cy="20" r="19.75" fill="white" fillOpacity="0.19" stroke="#E1E1E1" strokeWidth="0.5"/>
                                <path opacity="0.7" d="M24.7782 15.2294C24.4824 14.9336 24.0046 14.9336 23.7088 15.2294L20 18.9306L16.2912 15.2218C15.9954 14.9261 15.5176 14.9261 15.2218 15.2218C14.9261 15.5176 14.9261 15.9954 15.2218 16.2912L18.9306 20L15.2218 23.7088C14.9261 24.0046 14.9261 24.4824 15.2218 24.7782C15.5176 25.0739 15.9954 25.0739 16.2912 24.7782L20 21.0694L23.7088 24.7782C24.0046 25.0739 24.4824 25.0739 24.7782 24.7782C25.0739 24.4824 25.0739 24.0046 24.7782 23.7088L21.0694 20L24.7782 16.2912C25.0664 16.003 25.0664 15.5176 24.7782 15.2294V15.2294Z" fill="black"/>
                            </svg> 
                    </NavLink>
                </div>
                <ul>
                    <li>
                        <NavLink to={"/profile/"+userName}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="20" viewBox="0 0 18 20" fill="none">
                                <path d="M17 19V17C17 15.9391 16.5786 14.9217 15.8284 14.1716C15.0783 13.4214 14.0609 13 13 13H5C3.93913 13 2.92172 13.4214 2.17157 14.1716C1.42143 14.9217 1 15.9391 1 17V19" stroke="#3F4156" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M8.99988 9C11.209 9 12.9999 7.20914 12.9999 5C12.9999 2.79086 11.209 1 8.99988 1C6.79074 1 4.99988 2.79086 4.99988 5C4.99988 7.20914 6.79074 9 8.99988 9Z" stroke="#3F4156" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            <span>My Profile</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="#">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M2.5 2.5V17.5H17.5" stroke="#3F4156" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M15.582 6.6665L11.332 10.9998L8.9987 8.74984L5.83203 11.9165" stroke="#3F4156" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            <span>Analytics</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/favorite">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="18" viewBox="0 0 20 18" fill="none">
                                <path d="M17.3671 2.84172C16.9415 2.41589 16.4361 2.0781 15.8799 1.84763C15.3237 1.61716 14.7275 1.49854 14.1254 1.49854C13.5234 1.49854 12.9272 1.61716 12.371 1.84763C11.8147 2.0781 11.3094 2.41589 10.8838 2.84172L10.0004 3.72506L9.11709 2.84172C8.25735 1.98198 7.09129 1.49898 5.87542 1.49898C4.65956 1.49898 3.4935 1.98198 2.63376 2.84172C1.77401 3.70147 1.29102 4.86753 1.29102 6.08339C1.29102 7.29925 1.77401 8.46531 2.63376 9.32506L3.51709 10.2084L10.0004 16.6917L16.4838 10.2084L17.3671 9.32506C17.7929 8.89943 18.1307 8.39407 18.3612 7.83785C18.5917 7.28164 18.7103 6.68546 18.7103 6.08339C18.7103 5.48132 18.5917 4.88514 18.3612 4.32893C18.1307 3.77271 17.7929 3.26735 17.3671 2.84172V2.84172Z" stroke="#3F4156" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            <span>My Favorite</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/question-bank">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M19.7893 4.07797L15.8832 0.171641C15.7734 0.0617188 15.6243 0 15.4689 0H6.48438C5.51512 0 4.72656 0.788555 4.72656 1.75781V9.48586C2.09352 9.77828 0.0390625 12.0168 0.0390625 14.7266C0.0390625 17.6343 2.40473 20 5.3125 20H18.2031C19.1724 20 19.9609 19.2114 19.9609 18.2422V4.4923C19.9609 4.33687 19.8992 4.18789 19.7893 4.07797V4.07797ZM16.0547 2.00051L17.3277 3.27359L17.9604 3.90625H16.0547V2.00051ZM1.21094 14.7266C1.21094 12.465 3.0509 10.625 5.3125 10.625C7.5741 10.625 9.41406 12.465 9.41406 14.7266C9.41406 16.9882 7.5741 18.8281 5.3125 18.8281C3.0509 18.8281 1.21094 16.9882 1.21094 14.7266ZM18.2031 18.8281H8.62301C9.67625 17.9764 10.396 16.7282 10.5532 15.3125H16.6406C16.9642 15.3125 17.2266 15.0502 17.2266 14.7266C17.2266 14.403 16.9642 14.1406 16.6406 14.1406H10.5532C10.4577 13.2805 10.1546 12.4821 9.69508 11.7969H16.6406C16.9642 11.7969 17.2266 11.5345 17.2266 11.2109C17.2266 10.8873 16.9642 10.625 16.6406 10.625H8.62301C7.86047 10.0084 6.92336 9.59969 5.89844 9.48586V1.75781C5.89844 1.43473 6.16129 1.17188 6.48438 1.17188H14.8828V4.49219C14.8828 4.81578 15.1452 5.07812 15.4688 5.07812H18.7891V18.2422C18.7891 18.5653 18.5262 18.8281 18.2031 18.8281V18.8281Z" fill="#3F4156"/>
                                <path d="M5.36 11.64C5.73867 11.64 6.07467 11.696 6.368 11.808C6.66133 11.92 6.89067 12.0853 7.056 12.304C7.22133 12.5173 7.304 12.7813 7.304 13.096C7.304 13.416 7.23467 13.68 7.096 13.888C6.96267 14.0907 6.78133 14.2453 6.552 14.352C6.32267 14.4533 6.06933 14.52 5.792 14.552L5.736 15.304H4.736L4.744 14.096C5.10133 14.0533 5.37867 13.9973 5.576 13.928C5.77867 13.8533 5.92 13.76 6 13.648C6.08533 13.536 6.128 13.4027 6.128 13.248C6.128 13.0987 6.096 12.9733 6.032 12.872C5.97333 12.7707 5.88267 12.6933 5.76 12.64C5.63733 12.5867 5.48 12.56 5.288 12.56C5.01067 12.56 4.78933 12.64 4.624 12.8C4.45867 12.9547 4.35733 13.176 4.32 13.464L3.28 13.064C3.344 12.7867 3.46133 12.5413 3.632 12.328C3.80267 12.1093 4.02933 11.9413 4.312 11.824C4.6 11.7013 4.94933 11.64 5.36 11.64ZM5.248 15.84C5.456 15.84 5.62133 15.896 5.744 16.008C5.86667 16.12 5.928 16.2693 5.928 16.456C5.928 16.648 5.86667 16.8 5.744 16.912C5.62133 17.0187 5.456 17.072 5.248 17.072C5.04 17.072 4.87467 17.0187 4.752 16.912C4.62933 16.8 4.568 16.648 4.568 16.456C4.568 16.2693 4.62933 16.12 4.752 16.008C4.87467 15.896 5.04 15.84 5.248 15.84Z" fill="#3F4156"/>
                                <path d="M16.6406 7.10938H8.04688C7.72328 7.10938 7.46094 7.37172 7.46094 7.69531C7.46094 8.01891 7.72328 8.28125 8.04688 8.28125H16.6406C16.9642 8.28125 17.2266 8.01891 17.2266 7.69531C17.2266 7.37172 16.9642 7.10938 16.6406 7.10938Z" fill="#3F4156"/>
                            </svg>
                            <span>My Dating Builder</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="" onClick={handleHeaderShare}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <path d="M15 6.66666C16.3807 6.66666 17.5 5.54738 17.5 4.16666C17.5 2.78595 16.3807 1.66666 15 1.66666C13.6193 1.66666 12.5 2.78595 12.5 4.16666C12.5 5.54738 13.6193 6.66666 15 6.66666Z" stroke="#3F4156" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M5 12.5C6.38071 12.5 7.5 11.3807 7.5 10C7.5 8.61929 6.38071 7.5 5 7.5C3.61929 7.5 2.5 8.61929 2.5 10C2.5 11.3807 3.61929 12.5 5 12.5Z" stroke="#3F4156" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M15 18.3333C16.3807 18.3333 17.5 17.214 17.5 15.8333C17.5 14.4526 16.3807 13.3333 15 13.3333C13.6193 13.3333 12.5 14.4526 12.5 15.8333C12.5 17.214 13.6193 18.3333 15 18.3333Z" stroke="#3F4156" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M7.15845 11.2584L12.8501 14.575" stroke="#3F4156" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M12.8418 5.42499L7.15845 8.74165" stroke="#3F4156" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                                <span>Share Profile</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/message">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M17.5 9.58333C17.5029 10.6832 17.2459 11.7682 16.75 12.75C16.162 13.9265 15.2581 14.916 14.1395 15.6077C13.021 16.2995 11.7319 16.6662 10.4167 16.6667C9.31678 16.6695 8.23176 16.4126 7.25 15.9167L2.5 17.5L4.08333 12.75C3.58744 11.7682 3.33047 10.6832 3.33333 9.58333C3.33384 8.26813 3.70051 6.97904 4.39227 5.86046C5.08402 4.74187 6.07355 3.83797 7.25 3.25C8.23176 2.75411 9.31678 2.49713 10.4167 2.5H10.8333C12.5703 2.59583 14.2109 3.32897 15.4409 4.55905C16.671 5.78913 17.4042 7.42971 17.5 9.16667V9.58333Z" stroke="#3F4156" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            <span>Messages</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/setting">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M10 12.5C11.3807 12.5 12.5 11.3807 12.5 10C12.5 8.61929 11.3807 7.5 10 7.5C8.61929 7.5 7.5 8.61929 7.5 10C7.5 11.3807 8.61929 12.5 10 12.5Z" stroke="#3F4156" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M16.1667 12.5C16.0558 12.7513 16.0227 13.0302 16.0717 13.3005C16.1207 13.5708 16.2496 13.8203 16.4417 14.0167L16.4917 14.0667C16.6467 14.2215 16.7696 14.4053 16.8535 14.6076C16.9373 14.8099 16.9805 15.0268 16.9805 15.2458C16.9805 15.4649 16.9373 15.6817 16.8535 15.8841C16.7696 16.0864 16.6467 16.2702 16.4917 16.425C16.3369 16.58 16.1531 16.7029 15.9508 16.7868C15.7484 16.8706 15.5316 16.9138 15.3125 16.9138C15.0935 16.9138 14.8766 16.8706 14.6743 16.7868C14.472 16.7029 14.2882 16.58 14.1334 16.425L14.0834 16.375C13.887 16.1829 13.6375 16.054 13.3672 16.005C13.0969 15.956 12.8181 15.9891 12.5667 16.1C12.3202 16.2056 12.11 16.381 11.962 16.6046C11.8139 16.8282 11.7344 17.0902 11.7334 17.3583V17.5C11.7334 17.942 11.5578 18.366 11.2452 18.6785C10.9327 18.9911 10.5087 19.1667 10.0667 19.1667C9.62468 19.1667 9.20076 18.9911 8.8882 18.6785C8.57564 18.366 8.40004 17.942 8.40004 17.5V17.425C8.39359 17.1492 8.30431 16.8817 8.1438 16.6573C7.98329 16.4328 7.75899 16.2619 7.50004 16.1667C7.24869 16.0557 6.96988 16.0226 6.69955 16.0717C6.42922 16.1207 6.17977 16.2496 5.98337 16.4417L5.93337 16.4917C5.77859 16.6466 5.59477 16.7696 5.39244 16.8534C5.19011 16.9373 4.97323 16.9805 4.75421 16.9805C4.53518 16.9805 4.3183 16.9373 4.11597 16.8534C3.91364 16.7696 3.72983 16.6466 3.57504 16.4917C3.42008 16.3369 3.29715 16.1531 3.21327 15.9507C3.1294 15.7484 3.08623 15.5315 3.08623 15.3125C3.08623 15.0935 3.1294 14.8766 3.21327 14.6743C3.29715 14.4719 3.42008 14.2881 3.57504 14.1333L3.62504 14.0833C3.81715 13.8869 3.94603 13.6375 3.99504 13.3672C4.04406 13.0968 4.01097 12.818 3.90004 12.5667C3.7944 12.3202 3.619 12.11 3.39543 11.9619C3.17185 11.8139 2.90986 11.7344 2.64171 11.7333H2.50004C2.05801 11.7333 1.63409 11.5577 1.32153 11.2452C1.00897 10.9326 0.833374 10.5087 0.833374 10.0667C0.833374 9.62464 1.00897 9.20072 1.32153 8.88816C1.63409 8.5756 2.05801 8.4 2.50004 8.4H2.57504C2.85087 8.39355 3.11838 8.30427 3.34279 8.14376C3.5672 7.98325 3.73814 7.75895 3.83337 7.5C3.9443 7.24865 3.97739 6.96984 3.92838 6.69951C3.87936 6.42918 3.75049 6.17973 3.55837 5.98333L3.50837 5.93333C3.35341 5.77855 3.23048 5.59473 3.14661 5.3924C3.06273 5.19007 3.01956 4.97319 3.01956 4.75417C3.01956 4.53514 3.06273 4.31826 3.14661 4.11593C3.23048 3.9136 3.35341 3.72979 3.50837 3.575C3.66316 3.42004 3.84698 3.29711 4.04931 3.21323C4.25164 3.12936 4.46852 3.08619 4.68754 3.08619C4.90657 3.08619 5.12344 3.12936 5.32577 3.21323C5.5281 3.29711 5.71192 3.42004 5.86671 3.575L5.91671 3.625C6.11311 3.81711 6.36255 3.94599 6.63288 3.995C6.90321 4.04402 7.18203 4.01093 7.43337 3.9H7.50004C7.74652 3.79436 7.95672 3.61896 8.10478 3.39539C8.25285 3.17181 8.3323 2.90982 8.33337 2.64167V2.5C8.33337 2.05797 8.50897 1.63405 8.82153 1.32149C9.13409 1.00893 9.55801 0.833333 10 0.833333C10.4421 0.833333 10.866 1.00893 11.1786 1.32149C11.4911 1.63405 11.6667 2.05797 11.6667 2.5V2.575C11.6678 2.84316 11.7472 3.10515 11.8953 3.32872C12.0434 3.5523 12.2536 3.7277 12.5 3.83333C12.7514 3.94426 13.0302 3.97735 13.3005 3.92834C13.5709 3.87932 13.8203 3.75045 14.0167 3.55833L14.0667 3.50833C14.2215 3.35337 14.4053 3.23044 14.6076 3.14657C14.81 3.06269 15.0268 3.01952 15.2459 3.01952C15.4649 3.01952 15.6818 3.06269 15.8841 3.14657C16.0864 3.23044 16.2703 3.35337 16.425 3.50833C16.58 3.66312 16.7029 3.84694 16.7868 4.04927C16.8707 4.2516 16.9139 4.46847 16.9139 4.6875C16.9139 4.90653 16.8707 5.1234 16.7868 5.32573C16.7029 5.52806 16.58 5.71188 16.425 5.86667L16.375 5.91667C16.1829 6.11307 16.0541 6.36251 16.005 6.63284C15.956 6.90317 15.9891 7.18199 16.1 7.43333V7.5C16.2057 7.74647 16.3811 7.95668 16.6047 8.10474C16.8282 8.25281 17.0902 8.33226 17.3584 8.33333H17.5C17.9421 8.33333 18.366 8.50893 18.6786 8.82149C18.9911 9.13405 19.1667 9.55797 19.1667 10C19.1667 10.442 18.9911 10.866 18.6786 11.1785C18.366 11.4911 17.9421 11.6667 17.5 11.6667H17.425C17.1569 11.6677 16.8949 11.7472 16.6713 11.8953C16.4477 12.0433 16.2723 12.2535 16.1667 12.5V12.5Z" stroke="#3F4156" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            <span>Settings</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/help-support">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M13.9062 13.2812H12.1484V12.7332C12.6254 12.4724 13.0501 12.1276 13.4026 11.7188H14.6875C15.8721 11.7188 16.8359 10.755 16.8359 9.57031V7.61719C16.8359 6.8534 16.346 6.20258 15.6641 5.96078V5.66406C15.6641 2.5409 13.1232 0 10 0C6.87684 0 4.33594 2.5409 4.33594 5.66406V5.96016C3.65395 6.20203 3.16406 6.85332 3.16406 7.61719C3.16406 8.58645 3.95262 9.375 4.92188 9.375H5.54602C5.7357 10.8248 6.61934 12.0593 7.85156 12.7332V13.2812H6.09375C3.40137 13.2812 1.21094 15.4717 1.21094 18.1641V19.4141C1.21094 19.7377 1.47328 20 1.79688 20H18.2031C18.5267 20 18.7891 19.7377 18.7891 19.4141V18.1641C18.7891 15.4717 16.5986 13.2812 13.9062 13.2812ZM15.6641 9.57031C15.6641 10.1088 15.226 10.5469 14.6875 10.5469H14.1338C14.291 10.1787 14.4003 9.78551 14.454 9.375H15.6641V9.57031ZM15.6641 7.61719V8.20312H14.4922V7.03125H15.0781C15.4012 7.03125 15.6641 7.2941 15.6641 7.61719ZM5.50781 8.20312H4.92188C4.59879 8.20312 4.33594 7.94027 4.33594 7.61719C4.33594 7.2941 4.59879 7.03125 4.92188 7.03125H5.50781V8.20312ZM5.50781 5.85938V5.66406C5.50781 3.18707 7.52301 1.17188 10 1.17188C12.477 1.17188 14.4922 3.18707 14.4922 5.66406V5.85938H14.1118L12.3191 4.42527C12.086 4.23875 11.7499 4.25738 11.5388 4.46848C10.6419 5.36539 9.44938 5.85938 8.18094 5.85938H5.50781ZM6.67969 8.78906V7.03125H8.18094C9.58539 7.03125 10.9153 6.54547 11.9786 5.65352L13.3203 6.72691V8.78906C13.3203 9.4343 13.1347 10.0367 12.8149 10.5469H10.3906C10.067 10.5469 9.80469 10.8092 9.80469 11.1328C9.80469 11.4564 10.067 11.7188 10.3906 11.7188H11.5605C11.095 11.9677 10.5638 12.1094 10 12.1094C8.16918 12.1094 6.67969 10.6199 6.67969 8.78906V8.78906ZM10.9766 13.174V13.8672C10.9766 14.4057 10.5385 14.8438 10 14.8438C9.46152 14.8438 9.02344 14.4057 9.02344 13.8672V13.174C9.33797 13.244 9.66469 13.2812 10 13.2812C10.3353 13.2812 10.662 13.244 10.9766 13.174ZM17.6172 18.8281H2.38281V18.1641C2.38281 16.1179 4.04754 14.4531 6.09375 14.4531H7.93344C8.18918 15.3538 9.01848 16.0156 10 16.0156C10.9815 16.0156 11.8108 15.3538 12.0666 14.4531H13.9062C15.9525 14.4531 17.6172 16.1179 17.6172 18.1641V18.8281Z" fill="#3F4156"/>
                            </svg>
                            <span>Support</span>
                        </NavLink>
                    </li>
                </ul> 
                <div className="user-img">
                    <Image className="img-fluid" src={UserProfileImage}/>            
                </div>   
                <div className="blue-background"></div>
            </div>
            <Modal show={HeaderShareshow} onHide={handleClose} className="shareprofileButton">
                <Modal.Body>
                    <h4>Share Profile with your social Community</h4>
                    <div className="social-media">
                    <div className="socialIcons">
                        <FacebookShareButton
                            url={config.baseURL+userName}
                            quote={"Selector"}
                            hashtag={"#hashtag"}
                            description={"aiueo"}
                            className="img-fluid"
                        >
                            <FacebookIcon size={40} round={false} />
                        </FacebookShareButton>

                        <TwitterShareButton
                            title={config.baseURL+userName}
                            url={config.baseURL+userName}
                            className="img-fluid"
                        >
                            <TwitterIcon size={32} round={false} />
                        </TwitterShareButton>

                        <EmailShareButton
                            title={config.baseURL+userName}
                            url={config.baseURL+userName}
                            className="img-fluid"
                        >
                            <EmailIcon size={32} round={false} />
                        </EmailShareButton>

                        <WhatsappShareButton
                            title={config.baseURL+userName}
                            url={config.baseURL+userName}
                            className="img-fluid"
                        >
                            <WhatsappIcon size={32} round={false} />
                        </WhatsappShareButton>

                        <LinkedinShareButton
                            title={config.baseURL+userName}
                            url={config.baseURL+userName}
                            className="img-fluid"
                        >
                            <LinkedinIcon size={32} round={false} />
                        </LinkedinShareButton>

                        <PinterestShareButton
                            title={config.baseURL+userName}
                            url={config.baseURL+userName}
                            className="img-fluid"
                        >
                            <PinterestIcon size={32} round={false} />
                        </PinterestShareButton>

                        <RedditShareButton
                            title={config.baseURL+userName}
                            url={config.baseURL+userName}
                            className="img-fluid"
                        >
                            <RedditIcon size={32} round={false} />
                        </RedditShareButton>

                        <TelegramShareButton
                            title={config.baseURL+userName}
                            url={config.baseURL+userName}
                            className="img-fluid"
                        >
                            <TelegramIcon size={32} round={false} />
                        </TelegramShareButton>

                        <InstapaperShareButton
                            title={config.baseURL+userName}
                            url={config.baseURL+userName}
                            className="img-fluid"
                        >
                            <InstapaperIcon size={32} round={false} />
                        </InstapaperShareButton>

                        <LivejournalShareButton
                            title={config.baseURL+userName}
                            url={config.baseURL+userName}
                            className="img-fluid"
                        >
                            <LivejournalIcon size={32} round={false} />
                        </LivejournalShareButton>
            </div>
                    </div>
                    <div className="form">
                     
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Control type="email" placeholder={config.baseURL+userName} />
                            </Form.Group>
                            <div className="copy-button">
                            <CopyToClipboard
                text={config.baseURL+userName}
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

export const NotificationHeader = () => {

    const [userName,setUsername] = useState("");
    const [firstName,setFirstName] = useState("");
    const [copied, setCopied] = useState(false);
      useEffect(() => {
    callApi()
  }, []);

  const callApi = async () => {
    let userData = await publicProfileService.getProfileData();
    console.log("i am here",userData.user.username)
    setUsername(userData.user?.username)
    setFirstName(userData.user?.firstName)

}


    function openNav() {
        document.getElementById("mySidenav").style.width = "100%";
      }
      
      function closeNav() {
        document.getElementById("mySidenav").style.width = "0";
      }
        const [HeaderShareshow, setShow] = useState(false);

        const handleClose = () => setShow(false);
        const handleHeaderShare = () => setShow(true);
    return (
        <>
            <Navbar className="mobile-upscald">
                <Container>
                    <div className="question-h notification-s">         
                        <div className="header">
                            <span className="sidebar-icon" onClick={openNav}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                                    <path d="M3.75 15H26.25" stroke="#3F4156" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M3.75 7.5H26.25" stroke="#3F4156" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M3.75 22.5H26.25" stroke="#3F4156" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </span>    
                            <div className="header-contet">
                                <h4>Notification</h4>
                            </div>
                            <div className="notification">
                                <button className="btn btn-link clear">Clear All</button>
                            </div>
                        </div>
                    </div>    
                </Container>
            </Navbar>

            <div id="mySidenav" className="sidenav">
                <div className="nameSVG">
                    <h4
                    >Hey, {firstName}</h4>
                    <NavLink to="#" className="closebtn cross-b" onClick={closeNav}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                                <circle cx="20" cy="20" r="19.75" fill="white" fillOpacity="0.19" stroke="#E1E1E1" strokeWidth="0.5"/>
                                <path opacity="0.7" d="M24.7782 15.2294C24.4824 14.9336 24.0046 14.9336 23.7088 15.2294L20 18.9306L16.2912 15.2218C15.9954 14.9261 15.5176 14.9261 15.2218 15.2218C14.9261 15.5176 14.9261 15.9954 15.2218 16.2912L18.9306 20L15.2218 23.7088C14.9261 24.0046 14.9261 24.4824 15.2218 24.7782C15.5176 25.0739 15.9954 25.0739 16.2912 24.7782L20 21.0694L23.7088 24.7782C24.0046 25.0739 24.4824 25.0739 24.7782 24.7782C25.0739 24.4824 25.0739 24.0046 24.7782 23.7088L21.0694 20L24.7782 16.2912C25.0664 16.003 25.0664 15.5176 24.7782 15.2294V15.2294Z" fill="black"/>
                            </svg> 
                    </NavLink>
                </div>
                <ul>
                    <li>
                        <NavLink to={"/profile/"+userName}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="20" viewBox="0 0 18 20" fill="none">
                                <path d="M17 19V17C17 15.9391 16.5786 14.9217 15.8284 14.1716C15.0783 13.4214 14.0609 13 13 13H5C3.93913 13 2.92172 13.4214 2.17157 14.1716C1.42143 14.9217 1 15.9391 1 17V19" stroke="#3F4156" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M8.99988 9C11.209 9 12.9999 7.20914 12.9999 5C12.9999 2.79086 11.209 1 8.99988 1C6.79074 1 4.99988 2.79086 4.99988 5C4.99988 7.20914 6.79074 9 8.99988 9Z" stroke="#3F4156" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            <span>My Profile</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="#">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M2.5 2.5V17.5H17.5" stroke="#3F4156" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M15.582 6.6665L11.332 10.9998L8.9987 8.74984L5.83203 11.9165" stroke="#3F4156" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            <span>Analytics</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/favorite">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="18" viewBox="0 0 20 18" fill="none">
                                <path d="M17.3671 2.84172C16.9415 2.41589 16.4361 2.0781 15.8799 1.84763C15.3237 1.61716 14.7275 1.49854 14.1254 1.49854C13.5234 1.49854 12.9272 1.61716 12.371 1.84763C11.8147 2.0781 11.3094 2.41589 10.8838 2.84172L10.0004 3.72506L9.11709 2.84172C8.25735 1.98198 7.09129 1.49898 5.87542 1.49898C4.65956 1.49898 3.4935 1.98198 2.63376 2.84172C1.77401 3.70147 1.29102 4.86753 1.29102 6.08339C1.29102 7.29925 1.77401 8.46531 2.63376 9.32506L3.51709 10.2084L10.0004 16.6917L16.4838 10.2084L17.3671 9.32506C17.7929 8.89943 18.1307 8.39407 18.3612 7.83785C18.5917 7.28164 18.7103 6.68546 18.7103 6.08339C18.7103 5.48132 18.5917 4.88514 18.3612 4.32893C18.1307 3.77271 17.7929 3.26735 17.3671 2.84172V2.84172Z" stroke="#3F4156" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            <span>My Favorite</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/question-bank">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M19.7893 4.07797L15.8832 0.171641C15.7734 0.0617188 15.6243 0 15.4689 0H6.48438C5.51512 0 4.72656 0.788555 4.72656 1.75781V9.48586C2.09352 9.77828 0.0390625 12.0168 0.0390625 14.7266C0.0390625 17.6343 2.40473 20 5.3125 20H18.2031C19.1724 20 19.9609 19.2114 19.9609 18.2422V4.4923C19.9609 4.33687 19.8992 4.18789 19.7893 4.07797V4.07797ZM16.0547 2.00051L17.3277 3.27359L17.9604 3.90625H16.0547V2.00051ZM1.21094 14.7266C1.21094 12.465 3.0509 10.625 5.3125 10.625C7.5741 10.625 9.41406 12.465 9.41406 14.7266C9.41406 16.9882 7.5741 18.8281 5.3125 18.8281C3.0509 18.8281 1.21094 16.9882 1.21094 14.7266ZM18.2031 18.8281H8.62301C9.67625 17.9764 10.396 16.7282 10.5532 15.3125H16.6406C16.9642 15.3125 17.2266 15.0502 17.2266 14.7266C17.2266 14.403 16.9642 14.1406 16.6406 14.1406H10.5532C10.4577 13.2805 10.1546 12.4821 9.69508 11.7969H16.6406C16.9642 11.7969 17.2266 11.5345 17.2266 11.2109C17.2266 10.8873 16.9642 10.625 16.6406 10.625H8.62301C7.86047 10.0084 6.92336 9.59969 5.89844 9.48586V1.75781C5.89844 1.43473 6.16129 1.17188 6.48438 1.17188H14.8828V4.49219C14.8828 4.81578 15.1452 5.07812 15.4688 5.07812H18.7891V18.2422C18.7891 18.5653 18.5262 18.8281 18.2031 18.8281V18.8281Z" fill="#3F4156"/>
                                <path d="M5.36 11.64C5.73867 11.64 6.07467 11.696 6.368 11.808C6.66133 11.92 6.89067 12.0853 7.056 12.304C7.22133 12.5173 7.304 12.7813 7.304 13.096C7.304 13.416 7.23467 13.68 7.096 13.888C6.96267 14.0907 6.78133 14.2453 6.552 14.352C6.32267 14.4533 6.06933 14.52 5.792 14.552L5.736 15.304H4.736L4.744 14.096C5.10133 14.0533 5.37867 13.9973 5.576 13.928C5.77867 13.8533 5.92 13.76 6 13.648C6.08533 13.536 6.128 13.4027 6.128 13.248C6.128 13.0987 6.096 12.9733 6.032 12.872C5.97333 12.7707 5.88267 12.6933 5.76 12.64C5.63733 12.5867 5.48 12.56 5.288 12.56C5.01067 12.56 4.78933 12.64 4.624 12.8C4.45867 12.9547 4.35733 13.176 4.32 13.464L3.28 13.064C3.344 12.7867 3.46133 12.5413 3.632 12.328C3.80267 12.1093 4.02933 11.9413 4.312 11.824C4.6 11.7013 4.94933 11.64 5.36 11.64ZM5.248 15.84C5.456 15.84 5.62133 15.896 5.744 16.008C5.86667 16.12 5.928 16.2693 5.928 16.456C5.928 16.648 5.86667 16.8 5.744 16.912C5.62133 17.0187 5.456 17.072 5.248 17.072C5.04 17.072 4.87467 17.0187 4.752 16.912C4.62933 16.8 4.568 16.648 4.568 16.456C4.568 16.2693 4.62933 16.12 4.752 16.008C4.87467 15.896 5.04 15.84 5.248 15.84Z" fill="#3F4156"/>
                                <path d="M16.6406 7.10938H8.04688C7.72328 7.10938 7.46094 7.37172 7.46094 7.69531C7.46094 8.01891 7.72328 8.28125 8.04688 8.28125H16.6406C16.9642 8.28125 17.2266 8.01891 17.2266 7.69531C17.2266 7.37172 16.9642 7.10938 16.6406 7.10938Z" fill="#3F4156"/>
                            </svg>
                            <span>My Dating Builder</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="" onClick={handleHeaderShare}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <path d="M15 6.66666C16.3807 6.66666 17.5 5.54738 17.5 4.16666C17.5 2.78595 16.3807 1.66666 15 1.66666C13.6193 1.66666 12.5 2.78595 12.5 4.16666C12.5 5.54738 13.6193 6.66666 15 6.66666Z" stroke="#3F4156" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M5 12.5C6.38071 12.5 7.5 11.3807 7.5 10C7.5 8.61929 6.38071 7.5 5 7.5C3.61929 7.5 2.5 8.61929 2.5 10C2.5 11.3807 3.61929 12.5 5 12.5Z" stroke="#3F4156" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M15 18.3333C16.3807 18.3333 17.5 17.214 17.5 15.8333C17.5 14.4526 16.3807 13.3333 15 13.3333C13.6193 13.3333 12.5 14.4526 12.5 15.8333C12.5 17.214 13.6193 18.3333 15 18.3333Z" stroke="#3F4156" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M7.15845 11.2584L12.8501 14.575" stroke="#3F4156" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M12.8418 5.42499L7.15845 8.74165" stroke="#3F4156" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                                <span>Share Profile</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/message">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M17.5 9.58333C17.5029 10.6832 17.2459 11.7682 16.75 12.75C16.162 13.9265 15.2581 14.916 14.1395 15.6077C13.021 16.2995 11.7319 16.6662 10.4167 16.6667C9.31678 16.6695 8.23176 16.4126 7.25 15.9167L2.5 17.5L4.08333 12.75C3.58744 11.7682 3.33047 10.6832 3.33333 9.58333C3.33384 8.26813 3.70051 6.97904 4.39227 5.86046C5.08402 4.74187 6.07355 3.83797 7.25 3.25C8.23176 2.75411 9.31678 2.49713 10.4167 2.5H10.8333C12.5703 2.59583 14.2109 3.32897 15.4409 4.55905C16.671 5.78913 17.4042 7.42971 17.5 9.16667V9.58333Z" stroke="#3F4156" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            <span>Messages</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/setting">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M10 12.5C11.3807 12.5 12.5 11.3807 12.5 10C12.5 8.61929 11.3807 7.5 10 7.5C8.61929 7.5 7.5 8.61929 7.5 10C7.5 11.3807 8.61929 12.5 10 12.5Z" stroke="#3F4156" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M16.1667 12.5C16.0558 12.7513 16.0227 13.0302 16.0717 13.3005C16.1207 13.5708 16.2496 13.8203 16.4417 14.0167L16.4917 14.0667C16.6467 14.2215 16.7696 14.4053 16.8535 14.6076C16.9373 14.8099 16.9805 15.0268 16.9805 15.2458C16.9805 15.4649 16.9373 15.6817 16.8535 15.8841C16.7696 16.0864 16.6467 16.2702 16.4917 16.425C16.3369 16.58 16.1531 16.7029 15.9508 16.7868C15.7484 16.8706 15.5316 16.9138 15.3125 16.9138C15.0935 16.9138 14.8766 16.8706 14.6743 16.7868C14.472 16.7029 14.2882 16.58 14.1334 16.425L14.0834 16.375C13.887 16.1829 13.6375 16.054 13.3672 16.005C13.0969 15.956 12.8181 15.9891 12.5667 16.1C12.3202 16.2056 12.11 16.381 11.962 16.6046C11.8139 16.8282 11.7344 17.0902 11.7334 17.3583V17.5C11.7334 17.942 11.5578 18.366 11.2452 18.6785C10.9327 18.9911 10.5087 19.1667 10.0667 19.1667C9.62468 19.1667 9.20076 18.9911 8.8882 18.6785C8.57564 18.366 8.40004 17.942 8.40004 17.5V17.425C8.39359 17.1492 8.30431 16.8817 8.1438 16.6573C7.98329 16.4328 7.75899 16.2619 7.50004 16.1667C7.24869 16.0557 6.96988 16.0226 6.69955 16.0717C6.42922 16.1207 6.17977 16.2496 5.98337 16.4417L5.93337 16.4917C5.77859 16.6466 5.59477 16.7696 5.39244 16.8534C5.19011 16.9373 4.97323 16.9805 4.75421 16.9805C4.53518 16.9805 4.3183 16.9373 4.11597 16.8534C3.91364 16.7696 3.72983 16.6466 3.57504 16.4917C3.42008 16.3369 3.29715 16.1531 3.21327 15.9507C3.1294 15.7484 3.08623 15.5315 3.08623 15.3125C3.08623 15.0935 3.1294 14.8766 3.21327 14.6743C3.29715 14.4719 3.42008 14.2881 3.57504 14.1333L3.62504 14.0833C3.81715 13.8869 3.94603 13.6375 3.99504 13.3672C4.04406 13.0968 4.01097 12.818 3.90004 12.5667C3.7944 12.3202 3.619 12.11 3.39543 11.9619C3.17185 11.8139 2.90986 11.7344 2.64171 11.7333H2.50004C2.05801 11.7333 1.63409 11.5577 1.32153 11.2452C1.00897 10.9326 0.833374 10.5087 0.833374 10.0667C0.833374 9.62464 1.00897 9.20072 1.32153 8.88816C1.63409 8.5756 2.05801 8.4 2.50004 8.4H2.57504C2.85087 8.39355 3.11838 8.30427 3.34279 8.14376C3.5672 7.98325 3.73814 7.75895 3.83337 7.5C3.9443 7.24865 3.97739 6.96984 3.92838 6.69951C3.87936 6.42918 3.75049 6.17973 3.55837 5.98333L3.50837 5.93333C3.35341 5.77855 3.23048 5.59473 3.14661 5.3924C3.06273 5.19007 3.01956 4.97319 3.01956 4.75417C3.01956 4.53514 3.06273 4.31826 3.14661 4.11593C3.23048 3.9136 3.35341 3.72979 3.50837 3.575C3.66316 3.42004 3.84698 3.29711 4.04931 3.21323C4.25164 3.12936 4.46852 3.08619 4.68754 3.08619C4.90657 3.08619 5.12344 3.12936 5.32577 3.21323C5.5281 3.29711 5.71192 3.42004 5.86671 3.575L5.91671 3.625C6.11311 3.81711 6.36255 3.94599 6.63288 3.995C6.90321 4.04402 7.18203 4.01093 7.43337 3.9H7.50004C7.74652 3.79436 7.95672 3.61896 8.10478 3.39539C8.25285 3.17181 8.3323 2.90982 8.33337 2.64167V2.5C8.33337 2.05797 8.50897 1.63405 8.82153 1.32149C9.13409 1.00893 9.55801 0.833333 10 0.833333C10.4421 0.833333 10.866 1.00893 11.1786 1.32149C11.4911 1.63405 11.6667 2.05797 11.6667 2.5V2.575C11.6678 2.84316 11.7472 3.10515 11.8953 3.32872C12.0434 3.5523 12.2536 3.7277 12.5 3.83333C12.7514 3.94426 13.0302 3.97735 13.3005 3.92834C13.5709 3.87932 13.8203 3.75045 14.0167 3.55833L14.0667 3.50833C14.2215 3.35337 14.4053 3.23044 14.6076 3.14657C14.81 3.06269 15.0268 3.01952 15.2459 3.01952C15.4649 3.01952 15.6818 3.06269 15.8841 3.14657C16.0864 3.23044 16.2703 3.35337 16.425 3.50833C16.58 3.66312 16.7029 3.84694 16.7868 4.04927C16.8707 4.2516 16.9139 4.46847 16.9139 4.6875C16.9139 4.90653 16.8707 5.1234 16.7868 5.32573C16.7029 5.52806 16.58 5.71188 16.425 5.86667L16.375 5.91667C16.1829 6.11307 16.0541 6.36251 16.005 6.63284C15.956 6.90317 15.9891 7.18199 16.1 7.43333V7.5C16.2057 7.74647 16.3811 7.95668 16.6047 8.10474C16.8282 8.25281 17.0902 8.33226 17.3584 8.33333H17.5C17.9421 8.33333 18.366 8.50893 18.6786 8.82149C18.9911 9.13405 19.1667 9.55797 19.1667 10C19.1667 10.442 18.9911 10.866 18.6786 11.1785C18.366 11.4911 17.9421 11.6667 17.5 11.6667H17.425C17.1569 11.6677 16.8949 11.7472 16.6713 11.8953C16.4477 12.0433 16.2723 12.2535 16.1667 12.5V12.5Z" stroke="#3F4156" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            <span>Settings</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/help-support">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M13.9062 13.2812H12.1484V12.7332C12.6254 12.4724 13.0501 12.1276 13.4026 11.7188H14.6875C15.8721 11.7188 16.8359 10.755 16.8359 9.57031V7.61719C16.8359 6.8534 16.346 6.20258 15.6641 5.96078V5.66406C15.6641 2.5409 13.1232 0 10 0C6.87684 0 4.33594 2.5409 4.33594 5.66406V5.96016C3.65395 6.20203 3.16406 6.85332 3.16406 7.61719C3.16406 8.58645 3.95262 9.375 4.92188 9.375H5.54602C5.7357 10.8248 6.61934 12.0593 7.85156 12.7332V13.2812H6.09375C3.40137 13.2812 1.21094 15.4717 1.21094 18.1641V19.4141C1.21094 19.7377 1.47328 20 1.79688 20H18.2031C18.5267 20 18.7891 19.7377 18.7891 19.4141V18.1641C18.7891 15.4717 16.5986 13.2812 13.9062 13.2812ZM15.6641 9.57031C15.6641 10.1088 15.226 10.5469 14.6875 10.5469H14.1338C14.291 10.1787 14.4003 9.78551 14.454 9.375H15.6641V9.57031ZM15.6641 7.61719V8.20312H14.4922V7.03125H15.0781C15.4012 7.03125 15.6641 7.2941 15.6641 7.61719ZM5.50781 8.20312H4.92188C4.59879 8.20312 4.33594 7.94027 4.33594 7.61719C4.33594 7.2941 4.59879 7.03125 4.92188 7.03125H5.50781V8.20312ZM5.50781 5.85938V5.66406C5.50781 3.18707 7.52301 1.17188 10 1.17188C12.477 1.17188 14.4922 3.18707 14.4922 5.66406V5.85938H14.1118L12.3191 4.42527C12.086 4.23875 11.7499 4.25738 11.5388 4.46848C10.6419 5.36539 9.44938 5.85938 8.18094 5.85938H5.50781ZM6.67969 8.78906V7.03125H8.18094C9.58539 7.03125 10.9153 6.54547 11.9786 5.65352L13.3203 6.72691V8.78906C13.3203 9.4343 13.1347 10.0367 12.8149 10.5469H10.3906C10.067 10.5469 9.80469 10.8092 9.80469 11.1328C9.80469 11.4564 10.067 11.7188 10.3906 11.7188H11.5605C11.095 11.9677 10.5638 12.1094 10 12.1094C8.16918 12.1094 6.67969 10.6199 6.67969 8.78906V8.78906ZM10.9766 13.174V13.8672C10.9766 14.4057 10.5385 14.8438 10 14.8438C9.46152 14.8438 9.02344 14.4057 9.02344 13.8672V13.174C9.33797 13.244 9.66469 13.2812 10 13.2812C10.3353 13.2812 10.662 13.244 10.9766 13.174ZM17.6172 18.8281H2.38281V18.1641C2.38281 16.1179 4.04754 14.4531 6.09375 14.4531H7.93344C8.18918 15.3538 9.01848 16.0156 10 16.0156C10.9815 16.0156 11.8108 15.3538 12.0666 14.4531H13.9062C15.9525 14.4531 17.6172 16.1179 17.6172 18.1641V18.8281Z" fill="#3F4156"/>
                            </svg>
                            <span>Support</span>
                        </NavLink>
                    </li>
                </ul> 
                <div className="user-img">
                    <Image className="img-fluid" src={UserProfileImage}/>            
                </div>   
                <div className="blue-background"></div>
            </div>
            <Modal show={HeaderShareshow} onHide={handleClose} className="shareprofileButton">
                <Modal.Body>
                    <h4>Share Profile with your social Community</h4>
                    <div className="social-media">
                    <div className="socialIcons">
                        <FacebookShareButton
                            url={config.baseURL+userName}
                            quote={"Selector"}
                            hashtag={"#hashtag"}
                            description={"aiueo"}
                            className="img-fluid"
                        >
                            <FacebookIcon size={40} round={false} />
                        </FacebookShareButton>

                        <TwitterShareButton
                            title={config.baseURL+userName}
                            url={config.baseURL+userName}
                            className="img-fluid"
                        >
                            <TwitterIcon size={32} round={false} />
                        </TwitterShareButton>

                        <EmailShareButton
                            title={config.baseURL+userName}
                            url={config.baseURL+userName}
                            className="img-fluid"
                        >
                            <EmailIcon size={32} round={false} />
                        </EmailShareButton>

                        <WhatsappShareButton
                            title={config.baseURL+userName}
                            url={config.baseURL+userName}
                            className="img-fluid"
                        >
                            <WhatsappIcon size={32} round={false} />
                        </WhatsappShareButton>

                        <LinkedinShareButton
                            title={config.baseURL+userName}
                            url={config.baseURL+userName}
                            className="img-fluid"
                        >
                            <LinkedinIcon size={32} round={false} />
                        </LinkedinShareButton>

                        <PinterestShareButton
                            title={config.baseURL+userName}
                            url={config.baseURL+userName}
                            className="img-fluid"
                        >
                            <PinterestIcon size={32} round={false} />
                        </PinterestShareButton>

                        <RedditShareButton
                            title={config.baseURL+userName}
                            url={config.baseURL+userName}
                            className="img-fluid"
                        >
                            <RedditIcon size={32} round={false} />
                        </RedditShareButton>

                        <TelegramShareButton
                            title={config.baseURL+userName}
                            url={config.baseURL+userName}
                            className="img-fluid"
                        >
                            <TelegramIcon size={32} round={false} />
                        </TelegramShareButton>

                        <InstapaperShareButton
                            title={config.baseURL+userName}
                            url={config.baseURL+userName}
                            className="img-fluid"
                        >
                            <InstapaperIcon size={32} round={false} />
                        </InstapaperShareButton>

                        <LivejournalShareButton
                            title={config.baseURL+userName}
                            url={config.baseURL+userName}
                            className="img-fluid"
                        >
                            <LivejournalIcon size={32} round={false} />
                        </LivejournalShareButton>
            </div>
                    </div>
                    <div className="form">
                        
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Control type="email" placeholder={config.baseURL+userName} />
                            </Form.Group>
                            <div className="copy-button">
                            <CopyToClipboard
                text={config.baseURL+userName}
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

export const QuestionBankAns = () => {

    const [userName,setUsername] = useState("");
    const [firstName,setFirstName] = useState("");
    const [copied, setCopied] = useState(false);
      useEffect(() => {
    callApi()
  }, []);

  const callApi = async () => {
    let userData = await publicProfileService.getProfileData();
    setUsername(userData.user?.username)
    setFirstName(userData.user?.firstName)
}


    function openNav() {
        document.getElementById("mySidenav").style.width = "100%";
      }
      
      function closeNav() {
        document.getElementById("mySidenav").style.width = "0";
      }
      const [HeaderShareshow, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleHeaderShare = () => setShow(true);
    return (
        <>
            <Navbar className="mobile-upscald">
                <Container>
                    <div className="question-h notification-s">         
                        <div className="header">
                            <span className="sidebar-icons" onClick={openNav}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                                    <path d="M3.75 15H26.25" stroke="#3F4156" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M3.75 7.5H26.25" stroke="#3F4156" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M3.75 22.5H26.25" stroke="#3F4156" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </span>    
                            <div className="header-contet">
                                <h4>My Dating Builder</h4>
                            </div>
                            <div className="notification">
                            </div>
                        </div>
                    </div>    
                </Container>
            </Navbar>

            <div id="mySidenav" className="sidenav">
                <div className="nameSVG">
                    <h4
                    >Hey, {firstName}</h4>
                    <NavLink to="#" className="closebtn cross-b" onClick={closeNav}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                                <circle cx="20" cy="20" r="19.75" fill="white" fillOpacity="0.19" stroke="#E1E1E1" strokeWidth="0.5"/>
                                <path opacity="0.7" d="M24.7782 15.2294C24.4824 14.9336 24.0046 14.9336 23.7088 15.2294L20 18.9306L16.2912 15.2218C15.9954 14.9261 15.5176 14.9261 15.2218 15.2218C14.9261 15.5176 14.9261 15.9954 15.2218 16.2912L18.9306 20L15.2218 23.7088C14.9261 24.0046 14.9261 24.4824 15.2218 24.7782C15.5176 25.0739 15.9954 25.0739 16.2912 24.7782L20 21.0694L23.7088 24.7782C24.0046 25.0739 24.4824 25.0739 24.7782 24.7782C25.0739 24.4824 25.0739 24.0046 24.7782 23.7088L21.0694 20L24.7782 16.2912C25.0664 16.003 25.0664 15.5176 24.7782 15.2294V15.2294Z" fill="black"/>
                            </svg> 
                    </NavLink>
                </div>
                <ul>
                    <li>
                        <NavLink to={"/profile/"+userName}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="20" viewBox="0 0 18 20" fill="none">
                                <path d="M17 19V17C17 15.9391 16.5786 14.9217 15.8284 14.1716C15.0783 13.4214 14.0609 13 13 13H5C3.93913 13 2.92172 13.4214 2.17157 14.1716C1.42143 14.9217 1 15.9391 1 17V19" stroke="#3F4156" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M8.99988 9C11.209 9 12.9999 7.20914 12.9999 5C12.9999 2.79086 11.209 1 8.99988 1C6.79074 1 4.99988 2.79086 4.99988 5C4.99988 7.20914 6.79074 9 8.99988 9Z" stroke="#3F4156" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            <span>My Profile</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="#">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M2.5 2.5V17.5H17.5" stroke="#3F4156" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M15.582 6.6665L11.332 10.9998L8.9987 8.74984L5.83203 11.9165" stroke="#3F4156" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            <span>Analytics</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/favorite">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="18" viewBox="0 0 20 18" fill="none">
                                <path d="M17.3671 2.84172C16.9415 2.41589 16.4361 2.0781 15.8799 1.84763C15.3237 1.61716 14.7275 1.49854 14.1254 1.49854C13.5234 1.49854 12.9272 1.61716 12.371 1.84763C11.8147 2.0781 11.3094 2.41589 10.8838 2.84172L10.0004 3.72506L9.11709 2.84172C8.25735 1.98198 7.09129 1.49898 5.87542 1.49898C4.65956 1.49898 3.4935 1.98198 2.63376 2.84172C1.77401 3.70147 1.29102 4.86753 1.29102 6.08339C1.29102 7.29925 1.77401 8.46531 2.63376 9.32506L3.51709 10.2084L10.0004 16.6917L16.4838 10.2084L17.3671 9.32506C17.7929 8.89943 18.1307 8.39407 18.3612 7.83785C18.5917 7.28164 18.7103 6.68546 18.7103 6.08339C18.7103 5.48132 18.5917 4.88514 18.3612 4.32893C18.1307 3.77271 17.7929 3.26735 17.3671 2.84172V2.84172Z" stroke="#3F4156" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            <span>My Favorite</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/question-bank">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M19.7893 4.07797L15.8832 0.171641C15.7734 0.0617188 15.6243 0 15.4689 0H6.48438C5.51512 0 4.72656 0.788555 4.72656 1.75781V9.48586C2.09352 9.77828 0.0390625 12.0168 0.0390625 14.7266C0.0390625 17.6343 2.40473 20 5.3125 20H18.2031C19.1724 20 19.9609 19.2114 19.9609 18.2422V4.4923C19.9609 4.33687 19.8992 4.18789 19.7893 4.07797V4.07797ZM16.0547 2.00051L17.3277 3.27359L17.9604 3.90625H16.0547V2.00051ZM1.21094 14.7266C1.21094 12.465 3.0509 10.625 5.3125 10.625C7.5741 10.625 9.41406 12.465 9.41406 14.7266C9.41406 16.9882 7.5741 18.8281 5.3125 18.8281C3.0509 18.8281 1.21094 16.9882 1.21094 14.7266ZM18.2031 18.8281H8.62301C9.67625 17.9764 10.396 16.7282 10.5532 15.3125H16.6406C16.9642 15.3125 17.2266 15.0502 17.2266 14.7266C17.2266 14.403 16.9642 14.1406 16.6406 14.1406H10.5532C10.4577 13.2805 10.1546 12.4821 9.69508 11.7969H16.6406C16.9642 11.7969 17.2266 11.5345 17.2266 11.2109C17.2266 10.8873 16.9642 10.625 16.6406 10.625H8.62301C7.86047 10.0084 6.92336 9.59969 5.89844 9.48586V1.75781C5.89844 1.43473 6.16129 1.17188 6.48438 1.17188H14.8828V4.49219C14.8828 4.81578 15.1452 5.07812 15.4688 5.07812H18.7891V18.2422C18.7891 18.5653 18.5262 18.8281 18.2031 18.8281V18.8281Z" fill="#3F4156"/>
                                <path d="M5.36 11.64C5.73867 11.64 6.07467 11.696 6.368 11.808C6.66133 11.92 6.89067 12.0853 7.056 12.304C7.22133 12.5173 7.304 12.7813 7.304 13.096C7.304 13.416 7.23467 13.68 7.096 13.888C6.96267 14.0907 6.78133 14.2453 6.552 14.352C6.32267 14.4533 6.06933 14.52 5.792 14.552L5.736 15.304H4.736L4.744 14.096C5.10133 14.0533 5.37867 13.9973 5.576 13.928C5.77867 13.8533 5.92 13.76 6 13.648C6.08533 13.536 6.128 13.4027 6.128 13.248C6.128 13.0987 6.096 12.9733 6.032 12.872C5.97333 12.7707 5.88267 12.6933 5.76 12.64C5.63733 12.5867 5.48 12.56 5.288 12.56C5.01067 12.56 4.78933 12.64 4.624 12.8C4.45867 12.9547 4.35733 13.176 4.32 13.464L3.28 13.064C3.344 12.7867 3.46133 12.5413 3.632 12.328C3.80267 12.1093 4.02933 11.9413 4.312 11.824C4.6 11.7013 4.94933 11.64 5.36 11.64ZM5.248 15.84C5.456 15.84 5.62133 15.896 5.744 16.008C5.86667 16.12 5.928 16.2693 5.928 16.456C5.928 16.648 5.86667 16.8 5.744 16.912C5.62133 17.0187 5.456 17.072 5.248 17.072C5.04 17.072 4.87467 17.0187 4.752 16.912C4.62933 16.8 4.568 16.648 4.568 16.456C4.568 16.2693 4.62933 16.12 4.752 16.008C4.87467 15.896 5.04 15.84 5.248 15.84Z" fill="#3F4156"/>
                                <path d="M16.6406 7.10938H8.04688C7.72328 7.10938 7.46094 7.37172 7.46094 7.69531C7.46094 8.01891 7.72328 8.28125 8.04688 8.28125H16.6406C16.9642 8.28125 17.2266 8.01891 17.2266 7.69531C17.2266 7.37172 16.9642 7.10938 16.6406 7.10938Z" fill="#3F4156"/>
                            </svg>
                            <span>My Dating Builder</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="" onClick={handleHeaderShare}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <path d="M15 6.66666C16.3807 6.66666 17.5 5.54738 17.5 4.16666C17.5 2.78595 16.3807 1.66666 15 1.66666C13.6193 1.66666 12.5 2.78595 12.5 4.16666C12.5 5.54738 13.6193 6.66666 15 6.66666Z" stroke="#3F4156" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M5 12.5C6.38071 12.5 7.5 11.3807 7.5 10C7.5 8.61929 6.38071 7.5 5 7.5C3.61929 7.5 2.5 8.61929 2.5 10C2.5 11.3807 3.61929 12.5 5 12.5Z" stroke="#3F4156" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M15 18.3333C16.3807 18.3333 17.5 17.214 17.5 15.8333C17.5 14.4526 16.3807 13.3333 15 13.3333C13.6193 13.3333 12.5 14.4526 12.5 15.8333C12.5 17.214 13.6193 18.3333 15 18.3333Z" stroke="#3F4156" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M7.15845 11.2584L12.8501 14.575" stroke="#3F4156" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M12.8418 5.42499L7.15845 8.74165" stroke="#3F4156" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                                <span>Share Profile</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/message">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M17.5 9.58333C17.5029 10.6832 17.2459 11.7682 16.75 12.75C16.162 13.9265 15.2581 14.916 14.1395 15.6077C13.021 16.2995 11.7319 16.6662 10.4167 16.6667C9.31678 16.6695 8.23176 16.4126 7.25 15.9167L2.5 17.5L4.08333 12.75C3.58744 11.7682 3.33047 10.6832 3.33333 9.58333C3.33384 8.26813 3.70051 6.97904 4.39227 5.86046C5.08402 4.74187 6.07355 3.83797 7.25 3.25C8.23176 2.75411 9.31678 2.49713 10.4167 2.5H10.8333C12.5703 2.59583 14.2109 3.32897 15.4409 4.55905C16.671 5.78913 17.4042 7.42971 17.5 9.16667V9.58333Z" stroke="#3F4156" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            <span>Messages</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/setting">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M10 12.5C11.3807 12.5 12.5 11.3807 12.5 10C12.5 8.61929 11.3807 7.5 10 7.5C8.61929 7.5 7.5 8.61929 7.5 10C7.5 11.3807 8.61929 12.5 10 12.5Z" stroke="#3F4156" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M16.1667 12.5C16.0558 12.7513 16.0227 13.0302 16.0717 13.3005C16.1207 13.5708 16.2496 13.8203 16.4417 14.0167L16.4917 14.0667C16.6467 14.2215 16.7696 14.4053 16.8535 14.6076C16.9373 14.8099 16.9805 15.0268 16.9805 15.2458C16.9805 15.4649 16.9373 15.6817 16.8535 15.8841C16.7696 16.0864 16.6467 16.2702 16.4917 16.425C16.3369 16.58 16.1531 16.7029 15.9508 16.7868C15.7484 16.8706 15.5316 16.9138 15.3125 16.9138C15.0935 16.9138 14.8766 16.8706 14.6743 16.7868C14.472 16.7029 14.2882 16.58 14.1334 16.425L14.0834 16.375C13.887 16.1829 13.6375 16.054 13.3672 16.005C13.0969 15.956 12.8181 15.9891 12.5667 16.1C12.3202 16.2056 12.11 16.381 11.962 16.6046C11.8139 16.8282 11.7344 17.0902 11.7334 17.3583V17.5C11.7334 17.942 11.5578 18.366 11.2452 18.6785C10.9327 18.9911 10.5087 19.1667 10.0667 19.1667C9.62468 19.1667 9.20076 18.9911 8.8882 18.6785C8.57564 18.366 8.40004 17.942 8.40004 17.5V17.425C8.39359 17.1492 8.30431 16.8817 8.1438 16.6573C7.98329 16.4328 7.75899 16.2619 7.50004 16.1667C7.24869 16.0557 6.96988 16.0226 6.69955 16.0717C6.42922 16.1207 6.17977 16.2496 5.98337 16.4417L5.93337 16.4917C5.77859 16.6466 5.59477 16.7696 5.39244 16.8534C5.19011 16.9373 4.97323 16.9805 4.75421 16.9805C4.53518 16.9805 4.3183 16.9373 4.11597 16.8534C3.91364 16.7696 3.72983 16.6466 3.57504 16.4917C3.42008 16.3369 3.29715 16.1531 3.21327 15.9507C3.1294 15.7484 3.08623 15.5315 3.08623 15.3125C3.08623 15.0935 3.1294 14.8766 3.21327 14.6743C3.29715 14.4719 3.42008 14.2881 3.57504 14.1333L3.62504 14.0833C3.81715 13.8869 3.94603 13.6375 3.99504 13.3672C4.04406 13.0968 4.01097 12.818 3.90004 12.5667C3.7944 12.3202 3.619 12.11 3.39543 11.9619C3.17185 11.8139 2.90986 11.7344 2.64171 11.7333H2.50004C2.05801 11.7333 1.63409 11.5577 1.32153 11.2452C1.00897 10.9326 0.833374 10.5087 0.833374 10.0667C0.833374 9.62464 1.00897 9.20072 1.32153 8.88816C1.63409 8.5756 2.05801 8.4 2.50004 8.4H2.57504C2.85087 8.39355 3.11838 8.30427 3.34279 8.14376C3.5672 7.98325 3.73814 7.75895 3.83337 7.5C3.9443 7.24865 3.97739 6.96984 3.92838 6.69951C3.87936 6.42918 3.75049 6.17973 3.55837 5.98333L3.50837 5.93333C3.35341 5.77855 3.23048 5.59473 3.14661 5.3924C3.06273 5.19007 3.01956 4.97319 3.01956 4.75417C3.01956 4.53514 3.06273 4.31826 3.14661 4.11593C3.23048 3.9136 3.35341 3.72979 3.50837 3.575C3.66316 3.42004 3.84698 3.29711 4.04931 3.21323C4.25164 3.12936 4.46852 3.08619 4.68754 3.08619C4.90657 3.08619 5.12344 3.12936 5.32577 3.21323C5.5281 3.29711 5.71192 3.42004 5.86671 3.575L5.91671 3.625C6.11311 3.81711 6.36255 3.94599 6.63288 3.995C6.90321 4.04402 7.18203 4.01093 7.43337 3.9H7.50004C7.74652 3.79436 7.95672 3.61896 8.10478 3.39539C8.25285 3.17181 8.3323 2.90982 8.33337 2.64167V2.5C8.33337 2.05797 8.50897 1.63405 8.82153 1.32149C9.13409 1.00893 9.55801 0.833333 10 0.833333C10.4421 0.833333 10.866 1.00893 11.1786 1.32149C11.4911 1.63405 11.6667 2.05797 11.6667 2.5V2.575C11.6678 2.84316 11.7472 3.10515 11.8953 3.32872C12.0434 3.5523 12.2536 3.7277 12.5 3.83333C12.7514 3.94426 13.0302 3.97735 13.3005 3.92834C13.5709 3.87932 13.8203 3.75045 14.0167 3.55833L14.0667 3.50833C14.2215 3.35337 14.4053 3.23044 14.6076 3.14657C14.81 3.06269 15.0268 3.01952 15.2459 3.01952C15.4649 3.01952 15.6818 3.06269 15.8841 3.14657C16.0864 3.23044 16.2703 3.35337 16.425 3.50833C16.58 3.66312 16.7029 3.84694 16.7868 4.04927C16.8707 4.2516 16.9139 4.46847 16.9139 4.6875C16.9139 4.90653 16.8707 5.1234 16.7868 5.32573C16.7029 5.52806 16.58 5.71188 16.425 5.86667L16.375 5.91667C16.1829 6.11307 16.0541 6.36251 16.005 6.63284C15.956 6.90317 15.9891 7.18199 16.1 7.43333V7.5C16.2057 7.74647 16.3811 7.95668 16.6047 8.10474C16.8282 8.25281 17.0902 8.33226 17.3584 8.33333H17.5C17.9421 8.33333 18.366 8.50893 18.6786 8.82149C18.9911 9.13405 19.1667 9.55797 19.1667 10C19.1667 10.442 18.9911 10.866 18.6786 11.1785C18.366 11.4911 17.9421 11.6667 17.5 11.6667H17.425C17.1569 11.6677 16.8949 11.7472 16.6713 11.8953C16.4477 12.0433 16.2723 12.2535 16.1667 12.5V12.5Z" stroke="#3F4156" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            <span>Settings</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/help-support">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M13.9062 13.2812H12.1484V12.7332C12.6254 12.4724 13.0501 12.1276 13.4026 11.7188H14.6875C15.8721 11.7188 16.8359 10.755 16.8359 9.57031V7.61719C16.8359 6.8534 16.346 6.20258 15.6641 5.96078V5.66406C15.6641 2.5409 13.1232 0 10 0C6.87684 0 4.33594 2.5409 4.33594 5.66406V5.96016C3.65395 6.20203 3.16406 6.85332 3.16406 7.61719C3.16406 8.58645 3.95262 9.375 4.92188 9.375H5.54602C5.7357 10.8248 6.61934 12.0593 7.85156 12.7332V13.2812H6.09375C3.40137 13.2812 1.21094 15.4717 1.21094 18.1641V19.4141C1.21094 19.7377 1.47328 20 1.79688 20H18.2031C18.5267 20 18.7891 19.7377 18.7891 19.4141V18.1641C18.7891 15.4717 16.5986 13.2812 13.9062 13.2812ZM15.6641 9.57031C15.6641 10.1088 15.226 10.5469 14.6875 10.5469H14.1338C14.291 10.1787 14.4003 9.78551 14.454 9.375H15.6641V9.57031ZM15.6641 7.61719V8.20312H14.4922V7.03125H15.0781C15.4012 7.03125 15.6641 7.2941 15.6641 7.61719ZM5.50781 8.20312H4.92188C4.59879 8.20312 4.33594 7.94027 4.33594 7.61719C4.33594 7.2941 4.59879 7.03125 4.92188 7.03125H5.50781V8.20312ZM5.50781 5.85938V5.66406C5.50781 3.18707 7.52301 1.17188 10 1.17188C12.477 1.17188 14.4922 3.18707 14.4922 5.66406V5.85938H14.1118L12.3191 4.42527C12.086 4.23875 11.7499 4.25738 11.5388 4.46848C10.6419 5.36539 9.44938 5.85938 8.18094 5.85938H5.50781ZM6.67969 8.78906V7.03125H8.18094C9.58539 7.03125 10.9153 6.54547 11.9786 5.65352L13.3203 6.72691V8.78906C13.3203 9.4343 13.1347 10.0367 12.8149 10.5469H10.3906C10.067 10.5469 9.80469 10.8092 9.80469 11.1328C9.80469 11.4564 10.067 11.7188 10.3906 11.7188H11.5605C11.095 11.9677 10.5638 12.1094 10 12.1094C8.16918 12.1094 6.67969 10.6199 6.67969 8.78906V8.78906ZM10.9766 13.174V13.8672C10.9766 14.4057 10.5385 14.8438 10 14.8438C9.46152 14.8438 9.02344 14.4057 9.02344 13.8672V13.174C9.33797 13.244 9.66469 13.2812 10 13.2812C10.3353 13.2812 10.662 13.244 10.9766 13.174ZM17.6172 18.8281H2.38281V18.1641C2.38281 16.1179 4.04754 14.4531 6.09375 14.4531H7.93344C8.18918 15.3538 9.01848 16.0156 10 16.0156C10.9815 16.0156 11.8108 15.3538 12.0666 14.4531H13.9062C15.9525 14.4531 17.6172 16.1179 17.6172 18.1641V18.8281Z" fill="#3F4156"/>
                            </svg>
                            <span>Support</span>
                        </NavLink>
                    </li>
                </ul> 
                <div className="user-img">
                    <Image className="img-fluid" src={UserProfileImage}/>            
                </div>   
                <div className="blue-background"></div>
            </div>
            <Modal show={HeaderShareshow} onHide={handleClose} className="shareprofileButton">
                <Modal.Body>
                    <h4>Share Profile with your social Community</h4>
                    <div className="social-media">
                    <div className="socialIcons">
                        <FacebookShareButton
                            url={config.baseURL+userName}
                            quote={"Selector"}
                            hashtag={"#hashtag"}
                            description={"aiueo"}
                            className="img-fluid"
                        >
                            <FacebookIcon size={40} round={false} />
                        </FacebookShareButton>

                        <TwitterShareButton
                            title={config.baseURL+userName}
                            url={config.baseURL+userName}
                            className="img-fluid"
                        >
                            <TwitterIcon size={32} round={false} />
                        </TwitterShareButton>

                        <EmailShareButton
                            title={config.baseURL+userName}
                            url={config.baseURL+userName}
                            className="img-fluid"
                        >
                            <EmailIcon size={32} round={false} />
                        </EmailShareButton>

                        <WhatsappShareButton
                            title={config.baseURL+userName}
                            url={config.baseURL+userName}
                            className="img-fluid"
                        >
                            <WhatsappIcon size={32} round={false} />
                        </WhatsappShareButton>

                        <LinkedinShareButton
                            title={config.baseURL+userName}
                            url={config.baseURL+userName}
                            className="img-fluid"
                        >
                            <LinkedinIcon size={32} round={false} />
                        </LinkedinShareButton>

                        <PinterestShareButton
                            title={config.baseURL+userName}
                            url={config.baseURL+userName}
                            className="img-fluid"
                        >
                            <PinterestIcon size={32} round={false} />
                        </PinterestShareButton>

                        <RedditShareButton
                            title={config.baseURL+userName}
                            url={config.baseURL+userName}
                            className="img-fluid"
                        >
                            <RedditIcon size={32} round={false} />
                        </RedditShareButton>

                        <TelegramShareButton
                            title={config.baseURL+userName}
                            url={config.baseURL+userName}
                            className="img-fluid"
                        >
                            <TelegramIcon size={32} round={false} />
                        </TelegramShareButton>

                        <InstapaperShareButton
                            title={config.baseURL+userName}
                            url={config.baseURL+userName}
                            className="img-fluid"
                        >
                            <InstapaperIcon size={32} round={false} />
                        </InstapaperShareButton>

                        <LivejournalShareButton
                            title={config.baseURL+userName}
                            url={config.baseURL+userName}
                            className="img-fluid"
                        >
                            <LivejournalIcon size={32} round={false} />
                        </LivejournalShareButton>
            </div>
                    </div>
                    <div className="form">
                     
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Control type="email" placeholder={config.baseURL+userName} />
                            </Form.Group>
                            <div className="copy-button">
                            <CopyToClipboard
                text={config.baseURL+userName}
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

export const FavoriteHeader = () => {


    const [userName,setUsername] = useState("");
    const [firstName,setFirstName] = useState("");
    const [copied, setCopied] = useState(false);
      useEffect(() => {
        callApi()
    }, []);

  const callApi = async () => {
    let userData = await publicProfileService.getProfileData();
    console.log("i am here",userData.user.username)
    setUsername(userData.user?.username)
    setFirstName(userData.user?.firstName)
        }


    function openNav() {
        document.getElementById("mySidenav").style.width = "100%";
      }
      
      function closeNav() {
        document.getElementById("mySidenav").style.width = "0";
      }
      const [HeaderShareshow, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleHeaderShare = () => setShow(true);
    return (
        <>
            <Navbar className="favorite-header">
                <Container>
                    <div className="logoSVG">
                        <span className="sidebar-icon" onClick={openNav}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                                <path d="M3.75 15H26.25" stroke="#3F4156" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M3.75 7.5H26.25" stroke="#3F4156" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M3.75 22.5H26.25" stroke="#3F4156" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </span>
                    </div>   
                    <div className="heading-t">
                        <h4>FAVORITES</h4>
                    </div>    
                    <div className="sidebuttons">
                        <span className="header-s">
                            <BlueButton/>
                        </span>               
                        <PublicButton/>
                    </div>    
                </Container>
            </Navbar>

            <div id="mySidenav" className="sidenav">
                <div className="nameSVG">
                    <h4
                    >Hey, {firstName}</h4>
                    <NavLink to="#" className="closebtn cross-b" onClick={closeNav}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                                <circle cx="20" cy="20" r="19.75" fill="white" fillOpacity="0.19" stroke="#E1E1E1" strokeWidth="0.5"/>
                                <path opacity="0.7" d="M24.7782 15.2294C24.4824 14.9336 24.0046 14.9336 23.7088 15.2294L20 18.9306L16.2912 15.2218C15.9954 14.9261 15.5176 14.9261 15.2218 15.2218C14.9261 15.5176 14.9261 15.9954 15.2218 16.2912L18.9306 20L15.2218 23.7088C14.9261 24.0046 14.9261 24.4824 15.2218 24.7782C15.5176 25.0739 15.9954 25.0739 16.2912 24.7782L20 21.0694L23.7088 24.7782C24.0046 25.0739 24.4824 25.0739 24.7782 24.7782C25.0739 24.4824 25.0739 24.0046 24.7782 23.7088L21.0694 20L24.7782 16.2912C25.0664 16.003 25.0664 15.5176 24.7782 15.2294V15.2294Z" fill="black"/>
                            </svg> 
                    </NavLink>
                </div>
                <ul>
                    <li>
                        <NavLink to={"/profile/"+userName}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="20" viewBox="0 0 18 20" fill="none">
                                <path d="M17 19V17C17 15.9391 16.5786 14.9217 15.8284 14.1716C15.0783 13.4214 14.0609 13 13 13H5C3.93913 13 2.92172 13.4214 2.17157 14.1716C1.42143 14.9217 1 15.9391 1 17V19" stroke="#3F4156" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M8.99988 9C11.209 9 12.9999 7.20914 12.9999 5C12.9999 2.79086 11.209 1 8.99988 1C6.79074 1 4.99988 2.79086 4.99988 5C4.99988 7.20914 6.79074 9 8.99988 9Z" stroke="#3F4156" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            <span>My Profile</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="#">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M2.5 2.5V17.5H17.5" stroke="#3F4156" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M15.582 6.6665L11.332 10.9998L8.9987 8.74984L5.83203 11.9165" stroke="#3F4156" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            <span>Analytics</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/favorite">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="18" viewBox="0 0 20 18" fill="none">
                                <path d="M17.3671 2.84172C16.9415 2.41589 16.4361 2.0781 15.8799 1.84763C15.3237 1.61716 14.7275 1.49854 14.1254 1.49854C13.5234 1.49854 12.9272 1.61716 12.371 1.84763C11.8147 2.0781 11.3094 2.41589 10.8838 2.84172L10.0004 3.72506L9.11709 2.84172C8.25735 1.98198 7.09129 1.49898 5.87542 1.49898C4.65956 1.49898 3.4935 1.98198 2.63376 2.84172C1.77401 3.70147 1.29102 4.86753 1.29102 6.08339C1.29102 7.29925 1.77401 8.46531 2.63376 9.32506L3.51709 10.2084L10.0004 16.6917L16.4838 10.2084L17.3671 9.32506C17.7929 8.89943 18.1307 8.39407 18.3612 7.83785C18.5917 7.28164 18.7103 6.68546 18.7103 6.08339C18.7103 5.48132 18.5917 4.88514 18.3612 4.32893C18.1307 3.77271 17.7929 3.26735 17.3671 2.84172V2.84172Z" stroke="#3F4156" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            <span>My Favorite</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/question-bank">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M19.7893 4.07797L15.8832 0.171641C15.7734 0.0617188 15.6243 0 15.4689 0H6.48438C5.51512 0 4.72656 0.788555 4.72656 1.75781V9.48586C2.09352 9.77828 0.0390625 12.0168 0.0390625 14.7266C0.0390625 17.6343 2.40473 20 5.3125 20H18.2031C19.1724 20 19.9609 19.2114 19.9609 18.2422V4.4923C19.9609 4.33687 19.8992 4.18789 19.7893 4.07797V4.07797ZM16.0547 2.00051L17.3277 3.27359L17.9604 3.90625H16.0547V2.00051ZM1.21094 14.7266C1.21094 12.465 3.0509 10.625 5.3125 10.625C7.5741 10.625 9.41406 12.465 9.41406 14.7266C9.41406 16.9882 7.5741 18.8281 5.3125 18.8281C3.0509 18.8281 1.21094 16.9882 1.21094 14.7266ZM18.2031 18.8281H8.62301C9.67625 17.9764 10.396 16.7282 10.5532 15.3125H16.6406C16.9642 15.3125 17.2266 15.0502 17.2266 14.7266C17.2266 14.403 16.9642 14.1406 16.6406 14.1406H10.5532C10.4577 13.2805 10.1546 12.4821 9.69508 11.7969H16.6406C16.9642 11.7969 17.2266 11.5345 17.2266 11.2109C17.2266 10.8873 16.9642 10.625 16.6406 10.625H8.62301C7.86047 10.0084 6.92336 9.59969 5.89844 9.48586V1.75781C5.89844 1.43473 6.16129 1.17188 6.48438 1.17188H14.8828V4.49219C14.8828 4.81578 15.1452 5.07812 15.4688 5.07812H18.7891V18.2422C18.7891 18.5653 18.5262 18.8281 18.2031 18.8281V18.8281Z" fill="#3F4156"/>
                                <path d="M5.36 11.64C5.73867 11.64 6.07467 11.696 6.368 11.808C6.66133 11.92 6.89067 12.0853 7.056 12.304C7.22133 12.5173 7.304 12.7813 7.304 13.096C7.304 13.416 7.23467 13.68 7.096 13.888C6.96267 14.0907 6.78133 14.2453 6.552 14.352C6.32267 14.4533 6.06933 14.52 5.792 14.552L5.736 15.304H4.736L4.744 14.096C5.10133 14.0533 5.37867 13.9973 5.576 13.928C5.77867 13.8533 5.92 13.76 6 13.648C6.08533 13.536 6.128 13.4027 6.128 13.248C6.128 13.0987 6.096 12.9733 6.032 12.872C5.97333 12.7707 5.88267 12.6933 5.76 12.64C5.63733 12.5867 5.48 12.56 5.288 12.56C5.01067 12.56 4.78933 12.64 4.624 12.8C4.45867 12.9547 4.35733 13.176 4.32 13.464L3.28 13.064C3.344 12.7867 3.46133 12.5413 3.632 12.328C3.80267 12.1093 4.02933 11.9413 4.312 11.824C4.6 11.7013 4.94933 11.64 5.36 11.64ZM5.248 15.84C5.456 15.84 5.62133 15.896 5.744 16.008C5.86667 16.12 5.928 16.2693 5.928 16.456C5.928 16.648 5.86667 16.8 5.744 16.912C5.62133 17.0187 5.456 17.072 5.248 17.072C5.04 17.072 4.87467 17.0187 4.752 16.912C4.62933 16.8 4.568 16.648 4.568 16.456C4.568 16.2693 4.62933 16.12 4.752 16.008C4.87467 15.896 5.04 15.84 5.248 15.84Z" fill="#3F4156"/>
                                <path d="M16.6406 7.10938H8.04688C7.72328 7.10938 7.46094 7.37172 7.46094 7.69531C7.46094 8.01891 7.72328 8.28125 8.04688 8.28125H16.6406C16.9642 8.28125 17.2266 8.01891 17.2266 7.69531C17.2266 7.37172 16.9642 7.10938 16.6406 7.10938Z" fill="#3F4156"/>
                            </svg>
                            <span>My Dating Builder</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="" onClick={handleHeaderShare}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <path d="M15 6.66666C16.3807 6.66666 17.5 5.54738 17.5 4.16666C17.5 2.78595 16.3807 1.66666 15 1.66666C13.6193 1.66666 12.5 2.78595 12.5 4.16666C12.5 5.54738 13.6193 6.66666 15 6.66666Z" stroke="#3F4156" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M5 12.5C6.38071 12.5 7.5 11.3807 7.5 10C7.5 8.61929 6.38071 7.5 5 7.5C3.61929 7.5 2.5 8.61929 2.5 10C2.5 11.3807 3.61929 12.5 5 12.5Z" stroke="#3F4156" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M15 18.3333C16.3807 18.3333 17.5 17.214 17.5 15.8333C17.5 14.4526 16.3807 13.3333 15 13.3333C13.6193 13.3333 12.5 14.4526 12.5 15.8333C12.5 17.214 13.6193 18.3333 15 18.3333Z" stroke="#3F4156" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M7.15845 11.2584L12.8501 14.575" stroke="#3F4156" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M12.8418 5.42499L7.15845 8.74165" stroke="#3F4156" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                                <span>Share Profile</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/message">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M17.5 9.58333C17.5029 10.6832 17.2459 11.7682 16.75 12.75C16.162 13.9265 15.2581 14.916 14.1395 15.6077C13.021 16.2995 11.7319 16.6662 10.4167 16.6667C9.31678 16.6695 8.23176 16.4126 7.25 15.9167L2.5 17.5L4.08333 12.75C3.58744 11.7682 3.33047 10.6832 3.33333 9.58333C3.33384 8.26813 3.70051 6.97904 4.39227 5.86046C5.08402 4.74187 6.07355 3.83797 7.25 3.25C8.23176 2.75411 9.31678 2.49713 10.4167 2.5H10.8333C12.5703 2.59583 14.2109 3.32897 15.4409 4.55905C16.671 5.78913 17.4042 7.42971 17.5 9.16667V9.58333Z" stroke="#3F4156" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            <span>Messages</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/setting">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M10 12.5C11.3807 12.5 12.5 11.3807 12.5 10C12.5 8.61929 11.3807 7.5 10 7.5C8.61929 7.5 7.5 8.61929 7.5 10C7.5 11.3807 8.61929 12.5 10 12.5Z" stroke="#3F4156" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M16.1667 12.5C16.0558 12.7513 16.0227 13.0302 16.0717 13.3005C16.1207 13.5708 16.2496 13.8203 16.4417 14.0167L16.4917 14.0667C16.6467 14.2215 16.7696 14.4053 16.8535 14.6076C16.9373 14.8099 16.9805 15.0268 16.9805 15.2458C16.9805 15.4649 16.9373 15.6817 16.8535 15.8841C16.7696 16.0864 16.6467 16.2702 16.4917 16.425C16.3369 16.58 16.1531 16.7029 15.9508 16.7868C15.7484 16.8706 15.5316 16.9138 15.3125 16.9138C15.0935 16.9138 14.8766 16.8706 14.6743 16.7868C14.472 16.7029 14.2882 16.58 14.1334 16.425L14.0834 16.375C13.887 16.1829 13.6375 16.054 13.3672 16.005C13.0969 15.956 12.8181 15.9891 12.5667 16.1C12.3202 16.2056 12.11 16.381 11.962 16.6046C11.8139 16.8282 11.7344 17.0902 11.7334 17.3583V17.5C11.7334 17.942 11.5578 18.366 11.2452 18.6785C10.9327 18.9911 10.5087 19.1667 10.0667 19.1667C9.62468 19.1667 9.20076 18.9911 8.8882 18.6785C8.57564 18.366 8.40004 17.942 8.40004 17.5V17.425C8.39359 17.1492 8.30431 16.8817 8.1438 16.6573C7.98329 16.4328 7.75899 16.2619 7.50004 16.1667C7.24869 16.0557 6.96988 16.0226 6.69955 16.0717C6.42922 16.1207 6.17977 16.2496 5.98337 16.4417L5.93337 16.4917C5.77859 16.6466 5.59477 16.7696 5.39244 16.8534C5.19011 16.9373 4.97323 16.9805 4.75421 16.9805C4.53518 16.9805 4.3183 16.9373 4.11597 16.8534C3.91364 16.7696 3.72983 16.6466 3.57504 16.4917C3.42008 16.3369 3.29715 16.1531 3.21327 15.9507C3.1294 15.7484 3.08623 15.5315 3.08623 15.3125C3.08623 15.0935 3.1294 14.8766 3.21327 14.6743C3.29715 14.4719 3.42008 14.2881 3.57504 14.1333L3.62504 14.0833C3.81715 13.8869 3.94603 13.6375 3.99504 13.3672C4.04406 13.0968 4.01097 12.818 3.90004 12.5667C3.7944 12.3202 3.619 12.11 3.39543 11.9619C3.17185 11.8139 2.90986 11.7344 2.64171 11.7333H2.50004C2.05801 11.7333 1.63409 11.5577 1.32153 11.2452C1.00897 10.9326 0.833374 10.5087 0.833374 10.0667C0.833374 9.62464 1.00897 9.20072 1.32153 8.88816C1.63409 8.5756 2.05801 8.4 2.50004 8.4H2.57504C2.85087 8.39355 3.11838 8.30427 3.34279 8.14376C3.5672 7.98325 3.73814 7.75895 3.83337 7.5C3.9443 7.24865 3.97739 6.96984 3.92838 6.69951C3.87936 6.42918 3.75049 6.17973 3.55837 5.98333L3.50837 5.93333C3.35341 5.77855 3.23048 5.59473 3.14661 5.3924C3.06273 5.19007 3.01956 4.97319 3.01956 4.75417C3.01956 4.53514 3.06273 4.31826 3.14661 4.11593C3.23048 3.9136 3.35341 3.72979 3.50837 3.575C3.66316 3.42004 3.84698 3.29711 4.04931 3.21323C4.25164 3.12936 4.46852 3.08619 4.68754 3.08619C4.90657 3.08619 5.12344 3.12936 5.32577 3.21323C5.5281 3.29711 5.71192 3.42004 5.86671 3.575L5.91671 3.625C6.11311 3.81711 6.36255 3.94599 6.63288 3.995C6.90321 4.04402 7.18203 4.01093 7.43337 3.9H7.50004C7.74652 3.79436 7.95672 3.61896 8.10478 3.39539C8.25285 3.17181 8.3323 2.90982 8.33337 2.64167V2.5C8.33337 2.05797 8.50897 1.63405 8.82153 1.32149C9.13409 1.00893 9.55801 0.833333 10 0.833333C10.4421 0.833333 10.866 1.00893 11.1786 1.32149C11.4911 1.63405 11.6667 2.05797 11.6667 2.5V2.575C11.6678 2.84316 11.7472 3.10515 11.8953 3.32872C12.0434 3.5523 12.2536 3.7277 12.5 3.83333C12.7514 3.94426 13.0302 3.97735 13.3005 3.92834C13.5709 3.87932 13.8203 3.75045 14.0167 3.55833L14.0667 3.50833C14.2215 3.35337 14.4053 3.23044 14.6076 3.14657C14.81 3.06269 15.0268 3.01952 15.2459 3.01952C15.4649 3.01952 15.6818 3.06269 15.8841 3.14657C16.0864 3.23044 16.2703 3.35337 16.425 3.50833C16.58 3.66312 16.7029 3.84694 16.7868 4.04927C16.8707 4.2516 16.9139 4.46847 16.9139 4.6875C16.9139 4.90653 16.8707 5.1234 16.7868 5.32573C16.7029 5.52806 16.58 5.71188 16.425 5.86667L16.375 5.91667C16.1829 6.11307 16.0541 6.36251 16.005 6.63284C15.956 6.90317 15.9891 7.18199 16.1 7.43333V7.5C16.2057 7.74647 16.3811 7.95668 16.6047 8.10474C16.8282 8.25281 17.0902 8.33226 17.3584 8.33333H17.5C17.9421 8.33333 18.366 8.50893 18.6786 8.82149C18.9911 9.13405 19.1667 9.55797 19.1667 10C19.1667 10.442 18.9911 10.866 18.6786 11.1785C18.366 11.4911 17.9421 11.6667 17.5 11.6667H17.425C17.1569 11.6677 16.8949 11.7472 16.6713 11.8953C16.4477 12.0433 16.2723 12.2535 16.1667 12.5V12.5Z" stroke="#3F4156" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            <span>Settings</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/help-support">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M13.9062 13.2812H12.1484V12.7332C12.6254 12.4724 13.0501 12.1276 13.4026 11.7188H14.6875C15.8721 11.7188 16.8359 10.755 16.8359 9.57031V7.61719C16.8359 6.8534 16.346 6.20258 15.6641 5.96078V5.66406C15.6641 2.5409 13.1232 0 10 0C6.87684 0 4.33594 2.5409 4.33594 5.66406V5.96016C3.65395 6.20203 3.16406 6.85332 3.16406 7.61719C3.16406 8.58645 3.95262 9.375 4.92188 9.375H5.54602C5.7357 10.8248 6.61934 12.0593 7.85156 12.7332V13.2812H6.09375C3.40137 13.2812 1.21094 15.4717 1.21094 18.1641V19.4141C1.21094 19.7377 1.47328 20 1.79688 20H18.2031C18.5267 20 18.7891 19.7377 18.7891 19.4141V18.1641C18.7891 15.4717 16.5986 13.2812 13.9062 13.2812ZM15.6641 9.57031C15.6641 10.1088 15.226 10.5469 14.6875 10.5469H14.1338C14.291 10.1787 14.4003 9.78551 14.454 9.375H15.6641V9.57031ZM15.6641 7.61719V8.20312H14.4922V7.03125H15.0781C15.4012 7.03125 15.6641 7.2941 15.6641 7.61719ZM5.50781 8.20312H4.92188C4.59879 8.20312 4.33594 7.94027 4.33594 7.61719C4.33594 7.2941 4.59879 7.03125 4.92188 7.03125H5.50781V8.20312ZM5.50781 5.85938V5.66406C5.50781 3.18707 7.52301 1.17188 10 1.17188C12.477 1.17188 14.4922 3.18707 14.4922 5.66406V5.85938H14.1118L12.3191 4.42527C12.086 4.23875 11.7499 4.25738 11.5388 4.46848C10.6419 5.36539 9.44938 5.85938 8.18094 5.85938H5.50781ZM6.67969 8.78906V7.03125H8.18094C9.58539 7.03125 10.9153 6.54547 11.9786 5.65352L13.3203 6.72691V8.78906C13.3203 9.4343 13.1347 10.0367 12.8149 10.5469H10.3906C10.067 10.5469 9.80469 10.8092 9.80469 11.1328C9.80469 11.4564 10.067 11.7188 10.3906 11.7188H11.5605C11.095 11.9677 10.5638 12.1094 10 12.1094C8.16918 12.1094 6.67969 10.6199 6.67969 8.78906V8.78906ZM10.9766 13.174V13.8672C10.9766 14.4057 10.5385 14.8438 10 14.8438C9.46152 14.8438 9.02344 14.4057 9.02344 13.8672V13.174C9.33797 13.244 9.66469 13.2812 10 13.2812C10.3353 13.2812 10.662 13.244 10.9766 13.174ZM17.6172 18.8281H2.38281V18.1641C2.38281 16.1179 4.04754 14.4531 6.09375 14.4531H7.93344C8.18918 15.3538 9.01848 16.0156 10 16.0156C10.9815 16.0156 11.8108 15.3538 12.0666 14.4531H13.9062C15.9525 14.4531 17.6172 16.1179 17.6172 18.1641V18.8281Z" fill="#3F4156"/>
                            </svg>
                            <span>Support</span>
                        </NavLink>
                    </li>
                </ul> 
                <div className="user-img">
                    <Image className="img-fluid" src={UserProfileImage}/>            
                </div>   
                <div className="blue-background"></div>
            </div>
            <Modal show={HeaderShareshow} onHide={handleClose} className="shareprofileButton">
                <Modal.Body>
                    <h4>Share Profile with your social Community</h4>
                    <div className="social-media">
                    <div className="socialIcons">
                        <FacebookShareButton
                            url={config.baseURL+userName}
                            quote={"Selector"}
                            hashtag={"#hashtag"}
                            description={"aiueo"}
                            className="img-fluid"
                        >
                            <FacebookIcon size={40} round={false} />
                        </FacebookShareButton>

                        <TwitterShareButton
                            title={config.baseURL+userName}
                            url={config.baseURL+userName}
                            className="img-fluid"
                        >
                            <TwitterIcon size={32} round={false} />
                        </TwitterShareButton>

                        <EmailShareButton
                            title={config.baseURL+userName}
                            url={config.baseURL+userName}
                            className="img-fluid"
                        >
                            <EmailIcon size={32} round={false} />
                        </EmailShareButton>

                        <WhatsappShareButton
                            title={config.baseURL+userName}
                            url={config.baseURL+userName}
                            className="img-fluid"
                        >
                            <WhatsappIcon size={32} round={false} />
                        </WhatsappShareButton>

                        <LinkedinShareButton
                            title={config.baseURL+userName}
                            url={config.baseURL+userName}
                            className="img-fluid"
                        >
                            <LinkedinIcon size={32} round={false} />
                        </LinkedinShareButton>

                        <PinterestShareButton
                            title={config.baseURL+userName}
                            url={config.baseURL+userName}
                            className="img-fluid"
                        >
                            <PinterestIcon size={32} round={false} />
                        </PinterestShareButton>

                        <RedditShareButton
                            title={config.baseURL+userName}
                            url={config.baseURL+userName}
                            className="img-fluid"
                        >
                            <RedditIcon size={32} round={false} />
                        </RedditShareButton>

                        <TelegramShareButton
                            title={config.baseURL+userName}
                            url={config.baseURL+userName}
                            className="img-fluid"
                        >
                            <TelegramIcon size={32} round={false} />
                        </TelegramShareButton>

                        <InstapaperShareButton
                            title={config.baseURL+userName}
                            url={config.baseURL+userName}
                            className="img-fluid"
                        >
                            <InstapaperIcon size={32} round={false} />
                        </InstapaperShareButton>

                        <LivejournalShareButton
                            title={config.baseURL+userName}
                            url={config.baseURL+userName}
                            className="img-fluid"
                        >
                            <LivejournalIcon size={32} round={false} />
                        </LivejournalShareButton>
            </div>
                    </div>
                    <div className="form">
                      
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Control type="email" placeholder={config.baseURL+userName} />
                            </Form.Group>
                            <div className="copy-button">
                            <CopyToClipboard
                text={config.baseURL+userName}
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

export const SettingHeader = () => {


    const [userName,setUsername] = useState("");
    const [firstName,setFirstName] = useState("");
    const [copied, setCopied] = useState(false);
      useEffect(() => {
        callApi()
    }, []);

  const callApi = async () => {
    let userData = await publicProfileService.getProfileData();
    console.log("i am here",userData.user.username)
    setUsername(userData.user?.username)
    setFirstName(userData.user?.firstName)
        }


    function openNav() {
        document.getElementById("mySidenav").style.width = "100%";
      }
      
      function closeNav() {
        document.getElementById("mySidenav").style.width = "0";
      }
      const [HeaderShareshow, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleHeaderShare = () => setShow(true);
    return (
        <>
            <Navbar className="favorite-header">
                <span className="sidebar-icon" onClick={openNav}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                        <path d="M3.75 15H26.25" stroke="#3F4156" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M3.75 7.5H26.25" stroke="#3F4156" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M3.75 22.5H26.25" stroke="#3F4156" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </span>
            
                <div className="heading-t">
                    <h4>Settings</h4>
                </div>    
                <div className="sidebuttons">
                    <SearchButton/>
                </div>
            </Navbar>

            <div id="mySidenav" className="sidenav">
                <div className="nameSVG">
                    <h4
                    >Hey, {firstName}</h4>
                    <NavLink to="#" className="closebtn cross-b" onClick={closeNav}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                                <circle cx="20" cy="20" r="19.75" fill="white" fillOpacity="0.19" stroke="#E1E1E1" strokeWidth="0.5"/>
                                <path opacity="0.7" d="M24.7782 15.2294C24.4824 14.9336 24.0046 14.9336 23.7088 15.2294L20 18.9306L16.2912 15.2218C15.9954 14.9261 15.5176 14.9261 15.2218 15.2218C14.9261 15.5176 14.9261 15.9954 15.2218 16.2912L18.9306 20L15.2218 23.7088C14.9261 24.0046 14.9261 24.4824 15.2218 24.7782C15.5176 25.0739 15.9954 25.0739 16.2912 24.7782L20 21.0694L23.7088 24.7782C24.0046 25.0739 24.4824 25.0739 24.7782 24.7782C25.0739 24.4824 25.0739 24.0046 24.7782 23.7088L21.0694 20L24.7782 16.2912C25.0664 16.003 25.0664 15.5176 24.7782 15.2294V15.2294Z" fill="black"/>
                            </svg> 
                    </NavLink>
                </div>
                <ul>
                    <li>
                        <NavLink to={"/profile/"+userName}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="20" viewBox="0 0 18 20" fill="none">
                                <path d="M17 19V17C17 15.9391 16.5786 14.9217 15.8284 14.1716C15.0783 13.4214 14.0609 13 13 13H5C3.93913 13 2.92172 13.4214 2.17157 14.1716C1.42143 14.9217 1 15.9391 1 17V19" stroke="#3F4156" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M8.99988 9C11.209 9 12.9999 7.20914 12.9999 5C12.9999 2.79086 11.209 1 8.99988 1C6.79074 1 4.99988 2.79086 4.99988 5C4.99988 7.20914 6.79074 9 8.99988 9Z" stroke="#3F4156" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            <span>My Profile</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="#">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M2.5 2.5V17.5H17.5" stroke="#3F4156" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M15.582 6.6665L11.332 10.9998L8.9987 8.74984L5.83203 11.9165" stroke="#3F4156" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            <span>Analytics</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/favorite">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="18" viewBox="0 0 20 18" fill="none">
                                <path d="M17.3671 2.84172C16.9415 2.41589 16.4361 2.0781 15.8799 1.84763C15.3237 1.61716 14.7275 1.49854 14.1254 1.49854C13.5234 1.49854 12.9272 1.61716 12.371 1.84763C11.8147 2.0781 11.3094 2.41589 10.8838 2.84172L10.0004 3.72506L9.11709 2.84172C8.25735 1.98198 7.09129 1.49898 5.87542 1.49898C4.65956 1.49898 3.4935 1.98198 2.63376 2.84172C1.77401 3.70147 1.29102 4.86753 1.29102 6.08339C1.29102 7.29925 1.77401 8.46531 2.63376 9.32506L3.51709 10.2084L10.0004 16.6917L16.4838 10.2084L17.3671 9.32506C17.7929 8.89943 18.1307 8.39407 18.3612 7.83785C18.5917 7.28164 18.7103 6.68546 18.7103 6.08339C18.7103 5.48132 18.5917 4.88514 18.3612 4.32893C18.1307 3.77271 17.7929 3.26735 17.3671 2.84172V2.84172Z" stroke="#3F4156" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            <span>My Favorite</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/question-bank">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M19.7893 4.07797L15.8832 0.171641C15.7734 0.0617188 15.6243 0 15.4689 0H6.48438C5.51512 0 4.72656 0.788555 4.72656 1.75781V9.48586C2.09352 9.77828 0.0390625 12.0168 0.0390625 14.7266C0.0390625 17.6343 2.40473 20 5.3125 20H18.2031C19.1724 20 19.9609 19.2114 19.9609 18.2422V4.4923C19.9609 4.33687 19.8992 4.18789 19.7893 4.07797V4.07797ZM16.0547 2.00051L17.3277 3.27359L17.9604 3.90625H16.0547V2.00051ZM1.21094 14.7266C1.21094 12.465 3.0509 10.625 5.3125 10.625C7.5741 10.625 9.41406 12.465 9.41406 14.7266C9.41406 16.9882 7.5741 18.8281 5.3125 18.8281C3.0509 18.8281 1.21094 16.9882 1.21094 14.7266ZM18.2031 18.8281H8.62301C9.67625 17.9764 10.396 16.7282 10.5532 15.3125H16.6406C16.9642 15.3125 17.2266 15.0502 17.2266 14.7266C17.2266 14.403 16.9642 14.1406 16.6406 14.1406H10.5532C10.4577 13.2805 10.1546 12.4821 9.69508 11.7969H16.6406C16.9642 11.7969 17.2266 11.5345 17.2266 11.2109C17.2266 10.8873 16.9642 10.625 16.6406 10.625H8.62301C7.86047 10.0084 6.92336 9.59969 5.89844 9.48586V1.75781C5.89844 1.43473 6.16129 1.17188 6.48438 1.17188H14.8828V4.49219C14.8828 4.81578 15.1452 5.07812 15.4688 5.07812H18.7891V18.2422C18.7891 18.5653 18.5262 18.8281 18.2031 18.8281V18.8281Z" fill="#3F4156"/>
                                <path d="M5.36 11.64C5.73867 11.64 6.07467 11.696 6.368 11.808C6.66133 11.92 6.89067 12.0853 7.056 12.304C7.22133 12.5173 7.304 12.7813 7.304 13.096C7.304 13.416 7.23467 13.68 7.096 13.888C6.96267 14.0907 6.78133 14.2453 6.552 14.352C6.32267 14.4533 6.06933 14.52 5.792 14.552L5.736 15.304H4.736L4.744 14.096C5.10133 14.0533 5.37867 13.9973 5.576 13.928C5.77867 13.8533 5.92 13.76 6 13.648C6.08533 13.536 6.128 13.4027 6.128 13.248C6.128 13.0987 6.096 12.9733 6.032 12.872C5.97333 12.7707 5.88267 12.6933 5.76 12.64C5.63733 12.5867 5.48 12.56 5.288 12.56C5.01067 12.56 4.78933 12.64 4.624 12.8C4.45867 12.9547 4.35733 13.176 4.32 13.464L3.28 13.064C3.344 12.7867 3.46133 12.5413 3.632 12.328C3.80267 12.1093 4.02933 11.9413 4.312 11.824C4.6 11.7013 4.94933 11.64 5.36 11.64ZM5.248 15.84C5.456 15.84 5.62133 15.896 5.744 16.008C5.86667 16.12 5.928 16.2693 5.928 16.456C5.928 16.648 5.86667 16.8 5.744 16.912C5.62133 17.0187 5.456 17.072 5.248 17.072C5.04 17.072 4.87467 17.0187 4.752 16.912C4.62933 16.8 4.568 16.648 4.568 16.456C4.568 16.2693 4.62933 16.12 4.752 16.008C4.87467 15.896 5.04 15.84 5.248 15.84Z" fill="#3F4156"/>
                                <path d="M16.6406 7.10938H8.04688C7.72328 7.10938 7.46094 7.37172 7.46094 7.69531C7.46094 8.01891 7.72328 8.28125 8.04688 8.28125H16.6406C16.9642 8.28125 17.2266 8.01891 17.2266 7.69531C17.2266 7.37172 16.9642 7.10938 16.6406 7.10938Z" fill="#3F4156"/>
                            </svg>
                            <span>My Dating Builder</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="" onClick={handleHeaderShare}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <path d="M15 6.66666C16.3807 6.66666 17.5 5.54738 17.5 4.16666C17.5 2.78595 16.3807 1.66666 15 1.66666C13.6193 1.66666 12.5 2.78595 12.5 4.16666C12.5 5.54738 13.6193 6.66666 15 6.66666Z" stroke="#3F4156" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M5 12.5C6.38071 12.5 7.5 11.3807 7.5 10C7.5 8.61929 6.38071 7.5 5 7.5C3.61929 7.5 2.5 8.61929 2.5 10C2.5 11.3807 3.61929 12.5 5 12.5Z" stroke="#3F4156" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M15 18.3333C16.3807 18.3333 17.5 17.214 17.5 15.8333C17.5 14.4526 16.3807 13.3333 15 13.3333C13.6193 13.3333 12.5 14.4526 12.5 15.8333C12.5 17.214 13.6193 18.3333 15 18.3333Z" stroke="#3F4156" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M7.15845 11.2584L12.8501 14.575" stroke="#3F4156" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M12.8418 5.42499L7.15845 8.74165" stroke="#3F4156" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                                <span>Share Profile</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/message">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M17.5 9.58333C17.5029 10.6832 17.2459 11.7682 16.75 12.75C16.162 13.9265 15.2581 14.916 14.1395 15.6077C13.021 16.2995 11.7319 16.6662 10.4167 16.6667C9.31678 16.6695 8.23176 16.4126 7.25 15.9167L2.5 17.5L4.08333 12.75C3.58744 11.7682 3.33047 10.6832 3.33333 9.58333C3.33384 8.26813 3.70051 6.97904 4.39227 5.86046C5.08402 4.74187 6.07355 3.83797 7.25 3.25C8.23176 2.75411 9.31678 2.49713 10.4167 2.5H10.8333C12.5703 2.59583 14.2109 3.32897 15.4409 4.55905C16.671 5.78913 17.4042 7.42971 17.5 9.16667V9.58333Z" stroke="#3F4156" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            <span>Messages</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/setting">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M10 12.5C11.3807 12.5 12.5 11.3807 12.5 10C12.5 8.61929 11.3807 7.5 10 7.5C8.61929 7.5 7.5 8.61929 7.5 10C7.5 11.3807 8.61929 12.5 10 12.5Z" stroke="#3F4156" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M16.1667 12.5C16.0558 12.7513 16.0227 13.0302 16.0717 13.3005C16.1207 13.5708 16.2496 13.8203 16.4417 14.0167L16.4917 14.0667C16.6467 14.2215 16.7696 14.4053 16.8535 14.6076C16.9373 14.8099 16.9805 15.0268 16.9805 15.2458C16.9805 15.4649 16.9373 15.6817 16.8535 15.8841C16.7696 16.0864 16.6467 16.2702 16.4917 16.425C16.3369 16.58 16.1531 16.7029 15.9508 16.7868C15.7484 16.8706 15.5316 16.9138 15.3125 16.9138C15.0935 16.9138 14.8766 16.8706 14.6743 16.7868C14.472 16.7029 14.2882 16.58 14.1334 16.425L14.0834 16.375C13.887 16.1829 13.6375 16.054 13.3672 16.005C13.0969 15.956 12.8181 15.9891 12.5667 16.1C12.3202 16.2056 12.11 16.381 11.962 16.6046C11.8139 16.8282 11.7344 17.0902 11.7334 17.3583V17.5C11.7334 17.942 11.5578 18.366 11.2452 18.6785C10.9327 18.9911 10.5087 19.1667 10.0667 19.1667C9.62468 19.1667 9.20076 18.9911 8.8882 18.6785C8.57564 18.366 8.40004 17.942 8.40004 17.5V17.425C8.39359 17.1492 8.30431 16.8817 8.1438 16.6573C7.98329 16.4328 7.75899 16.2619 7.50004 16.1667C7.24869 16.0557 6.96988 16.0226 6.69955 16.0717C6.42922 16.1207 6.17977 16.2496 5.98337 16.4417L5.93337 16.4917C5.77859 16.6466 5.59477 16.7696 5.39244 16.8534C5.19011 16.9373 4.97323 16.9805 4.75421 16.9805C4.53518 16.9805 4.3183 16.9373 4.11597 16.8534C3.91364 16.7696 3.72983 16.6466 3.57504 16.4917C3.42008 16.3369 3.29715 16.1531 3.21327 15.9507C3.1294 15.7484 3.08623 15.5315 3.08623 15.3125C3.08623 15.0935 3.1294 14.8766 3.21327 14.6743C3.29715 14.4719 3.42008 14.2881 3.57504 14.1333L3.62504 14.0833C3.81715 13.8869 3.94603 13.6375 3.99504 13.3672C4.04406 13.0968 4.01097 12.818 3.90004 12.5667C3.7944 12.3202 3.619 12.11 3.39543 11.9619C3.17185 11.8139 2.90986 11.7344 2.64171 11.7333H2.50004C2.05801 11.7333 1.63409 11.5577 1.32153 11.2452C1.00897 10.9326 0.833374 10.5087 0.833374 10.0667C0.833374 9.62464 1.00897 9.20072 1.32153 8.88816C1.63409 8.5756 2.05801 8.4 2.50004 8.4H2.57504C2.85087 8.39355 3.11838 8.30427 3.34279 8.14376C3.5672 7.98325 3.73814 7.75895 3.83337 7.5C3.9443 7.24865 3.97739 6.96984 3.92838 6.69951C3.87936 6.42918 3.75049 6.17973 3.55837 5.98333L3.50837 5.93333C3.35341 5.77855 3.23048 5.59473 3.14661 5.3924C3.06273 5.19007 3.01956 4.97319 3.01956 4.75417C3.01956 4.53514 3.06273 4.31826 3.14661 4.11593C3.23048 3.9136 3.35341 3.72979 3.50837 3.575C3.66316 3.42004 3.84698 3.29711 4.04931 3.21323C4.25164 3.12936 4.46852 3.08619 4.68754 3.08619C4.90657 3.08619 5.12344 3.12936 5.32577 3.21323C5.5281 3.29711 5.71192 3.42004 5.86671 3.575L5.91671 3.625C6.11311 3.81711 6.36255 3.94599 6.63288 3.995C6.90321 4.04402 7.18203 4.01093 7.43337 3.9H7.50004C7.74652 3.79436 7.95672 3.61896 8.10478 3.39539C8.25285 3.17181 8.3323 2.90982 8.33337 2.64167V2.5C8.33337 2.05797 8.50897 1.63405 8.82153 1.32149C9.13409 1.00893 9.55801 0.833333 10 0.833333C10.4421 0.833333 10.866 1.00893 11.1786 1.32149C11.4911 1.63405 11.6667 2.05797 11.6667 2.5V2.575C11.6678 2.84316 11.7472 3.10515 11.8953 3.32872C12.0434 3.5523 12.2536 3.7277 12.5 3.83333C12.7514 3.94426 13.0302 3.97735 13.3005 3.92834C13.5709 3.87932 13.8203 3.75045 14.0167 3.55833L14.0667 3.50833C14.2215 3.35337 14.4053 3.23044 14.6076 3.14657C14.81 3.06269 15.0268 3.01952 15.2459 3.01952C15.4649 3.01952 15.6818 3.06269 15.8841 3.14657C16.0864 3.23044 16.2703 3.35337 16.425 3.50833C16.58 3.66312 16.7029 3.84694 16.7868 4.04927C16.8707 4.2516 16.9139 4.46847 16.9139 4.6875C16.9139 4.90653 16.8707 5.1234 16.7868 5.32573C16.7029 5.52806 16.58 5.71188 16.425 5.86667L16.375 5.91667C16.1829 6.11307 16.0541 6.36251 16.005 6.63284C15.956 6.90317 15.9891 7.18199 16.1 7.43333V7.5C16.2057 7.74647 16.3811 7.95668 16.6047 8.10474C16.8282 8.25281 17.0902 8.33226 17.3584 8.33333H17.5C17.9421 8.33333 18.366 8.50893 18.6786 8.82149C18.9911 9.13405 19.1667 9.55797 19.1667 10C19.1667 10.442 18.9911 10.866 18.6786 11.1785C18.366 11.4911 17.9421 11.6667 17.5 11.6667H17.425C17.1569 11.6677 16.8949 11.7472 16.6713 11.8953C16.4477 12.0433 16.2723 12.2535 16.1667 12.5V12.5Z" stroke="#3F4156" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            <span>Settings</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/help-support">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M13.9062 13.2812H12.1484V12.7332C12.6254 12.4724 13.0501 12.1276 13.4026 11.7188H14.6875C15.8721 11.7188 16.8359 10.755 16.8359 9.57031V7.61719C16.8359 6.8534 16.346 6.20258 15.6641 5.96078V5.66406C15.6641 2.5409 13.1232 0 10 0C6.87684 0 4.33594 2.5409 4.33594 5.66406V5.96016C3.65395 6.20203 3.16406 6.85332 3.16406 7.61719C3.16406 8.58645 3.95262 9.375 4.92188 9.375H5.54602C5.7357 10.8248 6.61934 12.0593 7.85156 12.7332V13.2812H6.09375C3.40137 13.2812 1.21094 15.4717 1.21094 18.1641V19.4141C1.21094 19.7377 1.47328 20 1.79688 20H18.2031C18.5267 20 18.7891 19.7377 18.7891 19.4141V18.1641C18.7891 15.4717 16.5986 13.2812 13.9062 13.2812ZM15.6641 9.57031C15.6641 10.1088 15.226 10.5469 14.6875 10.5469H14.1338C14.291 10.1787 14.4003 9.78551 14.454 9.375H15.6641V9.57031ZM15.6641 7.61719V8.20312H14.4922V7.03125H15.0781C15.4012 7.03125 15.6641 7.2941 15.6641 7.61719ZM5.50781 8.20312H4.92188C4.59879 8.20312 4.33594 7.94027 4.33594 7.61719C4.33594 7.2941 4.59879 7.03125 4.92188 7.03125H5.50781V8.20312ZM5.50781 5.85938V5.66406C5.50781 3.18707 7.52301 1.17188 10 1.17188C12.477 1.17188 14.4922 3.18707 14.4922 5.66406V5.85938H14.1118L12.3191 4.42527C12.086 4.23875 11.7499 4.25738 11.5388 4.46848C10.6419 5.36539 9.44938 5.85938 8.18094 5.85938H5.50781ZM6.67969 8.78906V7.03125H8.18094C9.58539 7.03125 10.9153 6.54547 11.9786 5.65352L13.3203 6.72691V8.78906C13.3203 9.4343 13.1347 10.0367 12.8149 10.5469H10.3906C10.067 10.5469 9.80469 10.8092 9.80469 11.1328C9.80469 11.4564 10.067 11.7188 10.3906 11.7188H11.5605C11.095 11.9677 10.5638 12.1094 10 12.1094C8.16918 12.1094 6.67969 10.6199 6.67969 8.78906V8.78906ZM10.9766 13.174V13.8672C10.9766 14.4057 10.5385 14.8438 10 14.8438C9.46152 14.8438 9.02344 14.4057 9.02344 13.8672V13.174C9.33797 13.244 9.66469 13.2812 10 13.2812C10.3353 13.2812 10.662 13.244 10.9766 13.174ZM17.6172 18.8281H2.38281V18.1641C2.38281 16.1179 4.04754 14.4531 6.09375 14.4531H7.93344C8.18918 15.3538 9.01848 16.0156 10 16.0156C10.9815 16.0156 11.8108 15.3538 12.0666 14.4531H13.9062C15.9525 14.4531 17.6172 16.1179 17.6172 18.1641V18.8281Z" fill="#3F4156"/>
                            </svg>
                            <span>Support</span>
                        </NavLink>
                    </li>
                </ul> 
                <div className="user-img">
                    <Image className="img-fluid" src={UserProfileImage}/>            
                </div>   
                <div className="blue-background"></div>
            </div>
            <Modal show={HeaderShareshow} onHide={handleClose} className="shareprofileButton">
                <Modal.Body>
                    <h4>Share Profile with your social Community</h4>
                    <div className="social-media">
                        <div className="socialIcons">
                        <FacebookShareButton
                            url={config.baseURL+userName}
                            quote={"Selector"}
                            hashtag={"#hashtag"}
                            description={"aiueo"}
                            className="img-fluid"
                        >
                            <FacebookIcon size={40} round={false} />
                        </FacebookShareButton>

                        <TwitterShareButton
                            title={config.baseURL+userName}
                            url={config.baseURL+userName}
                            className="img-fluid"
                        >
                            <TwitterIcon size={32} round={false} />
                        </TwitterShareButton>

                        <EmailShareButton
                            title={config.baseURL+userName}
                            url={config.baseURL+userName}
                            className="img-fluid"
                        >
                            <EmailIcon size={32} round={false} />
                        </EmailShareButton>

                        <WhatsappShareButton
                            title={config.baseURL+userName}
                            url={config.baseURL+userName}
                            className="img-fluid"
                        >
                            <WhatsappIcon size={32} round={false} />
                        </WhatsappShareButton>

                        <LinkedinShareButton
                            title={config.baseURL+userName}
                            url={config.baseURL+userName}
                            className="img-fluid"
                        >
                            <LinkedinIcon size={32} round={false} />
                        </LinkedinShareButton>

                        <PinterestShareButton
                            title={config.baseURL+userName}
                            url={config.baseURL+userName}
                            className="img-fluid"
                        >
                            <PinterestIcon size={32} round={false} />
                        </PinterestShareButton>

                        <RedditShareButton
                            title={config.baseURL+userName}
                            url={config.baseURL+userName}
                            className="img-fluid"
                        >
                            <RedditIcon size={32} round={false} />
                        </RedditShareButton>

                        <TelegramShareButton
                            title={config.baseURL+userName}
                            url={config.baseURL+userName}
                            className="img-fluid"
                        >
                            <TelegramIcon size={32} round={false} />
                        </TelegramShareButton>

                        <InstapaperShareButton
                            title={config.baseURL+userName}
                            url={config.baseURL+userName}
                            className="img-fluid"
                        >
                            <InstapaperIcon size={32} round={false} />
                        </InstapaperShareButton>

                        <LivejournalShareButton
                            title={config.baseURL+userName}
                            url={config.baseURL+userName}
                            className="img-fluid"
                        >
                            <LivejournalIcon size={32} round={false} />
                        </LivejournalShareButton>
            </div>
                    </div>
                    <div className="form">
                      
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Control type="email" placeholder={config.baseURL+userName} />
                            </Form.Group>
                            <div className="copy-button">
                            <CopyToClipboard
                text={config.baseURL+userName}
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

export const PrivacyHeader = () => {
    return (
        <>
            <div className="privacy-header">
                <NavLink to="/setting">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="20" viewBox="0 0 30 20" fill="none">
                        <path opacity="0.8" d="M30 8.45025V11.267H5.71429L11.4286 16.9005L10 19.7173L0 9.85863L10 0L11.4286 2.81675L5.71429 8.45025H30Z" fill="#666666"/>
                    </svg>
                </NavLink>    
                <h4>Privacy</h4>
                <NavLink to="">Done</NavLink>
            </div>
        </>
    );
};

export const NotificationSettingHeader = () => {
    return (
        <>
            <div className="privacy-header">
                <NavLink to="/setting">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="20" viewBox="0 0 30 20" fill="none">
                        <path opacity="0.8" d="M30 8.45025V11.267H5.71429L11.4286 16.9005L10 19.7173L0 9.85863L10 0L11.4286 2.81675L5.71429 8.45025H30Z" fill="#666666"/>
                    </svg>
                </NavLink>    
                <h4>Notifications</h4>
                <NavLink to=""></NavLink>
            </div>
        </>
    );
};

export const HelpSupportHeader = () => {
    return (
        <>
            <div className="privacy-header">
                <NavLink to="/setting">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="20" viewBox="0 0 30 20" fill="none">
                        <path opacity="0.8" d="M30 8.45025V11.267H5.71429L11.4286 16.9005L10 19.7173L0 9.85863L10 0L11.4286 2.81675L5.71429 8.45025H30Z" fill="#666666"/>
                    </svg>
                </NavLink>    
                <h4>Help & Support</h4>
                <NavLink to=""></NavLink>
            </div>
        </>
    );
};

export const MessageHeader = () => {
    const [userName,setUsername] = useState("");
    const [firstName,setFirstName] = useState("");
    const [copied, setCopied] = useState(false);
      useEffect(() => {
        callApi()
    }, []);

    const callApi = async () => {
        let userData = await publicProfileService.getProfileData();
        setUsername(userData.user?.username)
        setFirstName(userData.user?.firstName)
    }


    function openNav() {
        document.getElementById("mySidenav").style.width = "100%";
      }
      
      function closeNav() {
        document.getElementById("mySidenav").style.width = "0";
      }
      const [HeaderShareshow, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleHeaderShare = () => setShow(true);
    return (
        <>
            <Navbar className="mobile-upscald">
                <Container>
                    <div className="logoSVG">
                        <span className="sidebar-icon" onClick={openNav}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                                <path d="M3.75 15H26.25" stroke="#3F4156" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M3.75 7.5H26.25" stroke="#3F4156" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M3.75 22.5H26.25" stroke="#3F4156" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </span>
                        <Navbar.Brand to="#home"><Image src={Logo}/></Navbar.Brand>
                    </div>    
                    <div className="sidebuttons">
                        <span className="header-s mx-3">
                            <BlueButton/>
                        </span>               
                        <SearchButton/>
                    </div>    
                </Container>
            </Navbar>

            <div id="mySidenav" className="sidenav">
                <div className="nameSVG">
                    <h4
                    >Hey, {firstName}</h4>
                    <NavLink to="#" className="closebtn cross-b" onClick={closeNav}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                                <circle cx="20" cy="20" r="19.75" fill="white" fillOpacity="0.19" stroke="#E1E1E1" strokeWidth="0.5"/>
                                <path opacity="0.7" d="M24.7782 15.2294C24.4824 14.9336 24.0046 14.9336 23.7088 15.2294L20 18.9306L16.2912 15.2218C15.9954 14.9261 15.5176 14.9261 15.2218 15.2218C14.9261 15.5176 14.9261 15.9954 15.2218 16.2912L18.9306 20L15.2218 23.7088C14.9261 24.0046 14.9261 24.4824 15.2218 24.7782C15.5176 25.0739 15.9954 25.0739 16.2912 24.7782L20 21.0694L23.7088 24.7782C24.0046 25.0739 24.4824 25.0739 24.7782 24.7782C25.0739 24.4824 25.0739 24.0046 24.7782 23.7088L21.0694 20L24.7782 16.2912C25.0664 16.003 25.0664 15.5176 24.7782 15.2294V15.2294Z" fill="black"/>
                            </svg> 
                    </NavLink>
                </div>
                <ul>
                    <li>
                        <NavLink to={"/profile/"+userName}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="20" viewBox="0 0 18 20" fill="none">
                                <path d="M17 19V17C17 15.9391 16.5786 14.9217 15.8284 14.1716C15.0783 13.4214 14.0609 13 13 13H5C3.93913 13 2.92172 13.4214 2.17157 14.1716C1.42143 14.9217 1 15.9391 1 17V19" stroke="#3F4156" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M8.99988 9C11.209 9 12.9999 7.20914 12.9999 5C12.9999 2.79086 11.209 1 8.99988 1C6.79074 1 4.99988 2.79086 4.99988 5C4.99988 7.20914 6.79074 9 8.99988 9Z" stroke="#3F4156" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            <span>My Profile</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="#">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M2.5 2.5V17.5H17.5" stroke="#3F4156" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M15.582 6.6665L11.332 10.9998L8.9987 8.74984L5.83203 11.9165" stroke="#3F4156" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            <span>Analytics</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/favorite">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="18" viewBox="0 0 20 18" fill="none">
                                <path d="M17.3671 2.84172C16.9415 2.41589 16.4361 2.0781 15.8799 1.84763C15.3237 1.61716 14.7275 1.49854 14.1254 1.49854C13.5234 1.49854 12.9272 1.61716 12.371 1.84763C11.8147 2.0781 11.3094 2.41589 10.8838 2.84172L10.0004 3.72506L9.11709 2.84172C8.25735 1.98198 7.09129 1.49898 5.87542 1.49898C4.65956 1.49898 3.4935 1.98198 2.63376 2.84172C1.77401 3.70147 1.29102 4.86753 1.29102 6.08339C1.29102 7.29925 1.77401 8.46531 2.63376 9.32506L3.51709 10.2084L10.0004 16.6917L16.4838 10.2084L17.3671 9.32506C17.7929 8.89943 18.1307 8.39407 18.3612 7.83785C18.5917 7.28164 18.7103 6.68546 18.7103 6.08339C18.7103 5.48132 18.5917 4.88514 18.3612 4.32893C18.1307 3.77271 17.7929 3.26735 17.3671 2.84172V2.84172Z" stroke="#3F4156" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            <span>My Favorite</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/question-bank">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M19.7893 4.07797L15.8832 0.171641C15.7734 0.0617188 15.6243 0 15.4689 0H6.48438C5.51512 0 4.72656 0.788555 4.72656 1.75781V9.48586C2.09352 9.77828 0.0390625 12.0168 0.0390625 14.7266C0.0390625 17.6343 2.40473 20 5.3125 20H18.2031C19.1724 20 19.9609 19.2114 19.9609 18.2422V4.4923C19.9609 4.33687 19.8992 4.18789 19.7893 4.07797V4.07797ZM16.0547 2.00051L17.3277 3.27359L17.9604 3.90625H16.0547V2.00051ZM1.21094 14.7266C1.21094 12.465 3.0509 10.625 5.3125 10.625C7.5741 10.625 9.41406 12.465 9.41406 14.7266C9.41406 16.9882 7.5741 18.8281 5.3125 18.8281C3.0509 18.8281 1.21094 16.9882 1.21094 14.7266ZM18.2031 18.8281H8.62301C9.67625 17.9764 10.396 16.7282 10.5532 15.3125H16.6406C16.9642 15.3125 17.2266 15.0502 17.2266 14.7266C17.2266 14.403 16.9642 14.1406 16.6406 14.1406H10.5532C10.4577 13.2805 10.1546 12.4821 9.69508 11.7969H16.6406C16.9642 11.7969 17.2266 11.5345 17.2266 11.2109C17.2266 10.8873 16.9642 10.625 16.6406 10.625H8.62301C7.86047 10.0084 6.92336 9.59969 5.89844 9.48586V1.75781C5.89844 1.43473 6.16129 1.17188 6.48438 1.17188H14.8828V4.49219C14.8828 4.81578 15.1452 5.07812 15.4688 5.07812H18.7891V18.2422C18.7891 18.5653 18.5262 18.8281 18.2031 18.8281V18.8281Z" fill="#3F4156"/>
                                <path d="M5.36 11.64C5.73867 11.64 6.07467 11.696 6.368 11.808C6.66133 11.92 6.89067 12.0853 7.056 12.304C7.22133 12.5173 7.304 12.7813 7.304 13.096C7.304 13.416 7.23467 13.68 7.096 13.888C6.96267 14.0907 6.78133 14.2453 6.552 14.352C6.32267 14.4533 6.06933 14.52 5.792 14.552L5.736 15.304H4.736L4.744 14.096C5.10133 14.0533 5.37867 13.9973 5.576 13.928C5.77867 13.8533 5.92 13.76 6 13.648C6.08533 13.536 6.128 13.4027 6.128 13.248C6.128 13.0987 6.096 12.9733 6.032 12.872C5.97333 12.7707 5.88267 12.6933 5.76 12.64C5.63733 12.5867 5.48 12.56 5.288 12.56C5.01067 12.56 4.78933 12.64 4.624 12.8C4.45867 12.9547 4.35733 13.176 4.32 13.464L3.28 13.064C3.344 12.7867 3.46133 12.5413 3.632 12.328C3.80267 12.1093 4.02933 11.9413 4.312 11.824C4.6 11.7013 4.94933 11.64 5.36 11.64ZM5.248 15.84C5.456 15.84 5.62133 15.896 5.744 16.008C5.86667 16.12 5.928 16.2693 5.928 16.456C5.928 16.648 5.86667 16.8 5.744 16.912C5.62133 17.0187 5.456 17.072 5.248 17.072C5.04 17.072 4.87467 17.0187 4.752 16.912C4.62933 16.8 4.568 16.648 4.568 16.456C4.568 16.2693 4.62933 16.12 4.752 16.008C4.87467 15.896 5.04 15.84 5.248 15.84Z" fill="#3F4156"/>
                                <path d="M16.6406 7.10938H8.04688C7.72328 7.10938 7.46094 7.37172 7.46094 7.69531C7.46094 8.01891 7.72328 8.28125 8.04688 8.28125H16.6406C16.9642 8.28125 17.2266 8.01891 17.2266 7.69531C17.2266 7.37172 16.9642 7.10938 16.6406 7.10938Z" fill="#3F4156"/>
                            </svg>
                            <span>My Dating Builder</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="" onClick={handleHeaderShare}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <path d="M15 6.66666C16.3807 6.66666 17.5 5.54738 17.5 4.16666C17.5 2.78595 16.3807 1.66666 15 1.66666C13.6193 1.66666 12.5 2.78595 12.5 4.16666C12.5 5.54738 13.6193 6.66666 15 6.66666Z" stroke="#3F4156" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M5 12.5C6.38071 12.5 7.5 11.3807 7.5 10C7.5 8.61929 6.38071 7.5 5 7.5C3.61929 7.5 2.5 8.61929 2.5 10C2.5 11.3807 3.61929 12.5 5 12.5Z" stroke="#3F4156" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M15 18.3333C16.3807 18.3333 17.5 17.214 17.5 15.8333C17.5 14.4526 16.3807 13.3333 15 13.3333C13.6193 13.3333 12.5 14.4526 12.5 15.8333C12.5 17.214 13.6193 18.3333 15 18.3333Z" stroke="#3F4156" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M7.15845 11.2584L12.8501 14.575" stroke="#3F4156" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M12.8418 5.42499L7.15845 8.74165" stroke="#3F4156" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                                <span>Share Profile</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/message">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M17.5 9.58333C17.5029 10.6832 17.2459 11.7682 16.75 12.75C16.162 13.9265 15.2581 14.916 14.1395 15.6077C13.021 16.2995 11.7319 16.6662 10.4167 16.6667C9.31678 16.6695 8.23176 16.4126 7.25 15.9167L2.5 17.5L4.08333 12.75C3.58744 11.7682 3.33047 10.6832 3.33333 9.58333C3.33384 8.26813 3.70051 6.97904 4.39227 5.86046C5.08402 4.74187 6.07355 3.83797 7.25 3.25C8.23176 2.75411 9.31678 2.49713 10.4167 2.5H10.8333C12.5703 2.59583 14.2109 3.32897 15.4409 4.55905C16.671 5.78913 17.4042 7.42971 17.5 9.16667V9.58333Z" stroke="#3F4156" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            <span>Messages</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/setting">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M10 12.5C11.3807 12.5 12.5 11.3807 12.5 10C12.5 8.61929 11.3807 7.5 10 7.5C8.61929 7.5 7.5 8.61929 7.5 10C7.5 11.3807 8.61929 12.5 10 12.5Z" stroke="#3F4156" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M16.1667 12.5C16.0558 12.7513 16.0227 13.0302 16.0717 13.3005C16.1207 13.5708 16.2496 13.8203 16.4417 14.0167L16.4917 14.0667C16.6467 14.2215 16.7696 14.4053 16.8535 14.6076C16.9373 14.8099 16.9805 15.0268 16.9805 15.2458C16.9805 15.4649 16.9373 15.6817 16.8535 15.8841C16.7696 16.0864 16.6467 16.2702 16.4917 16.425C16.3369 16.58 16.1531 16.7029 15.9508 16.7868C15.7484 16.8706 15.5316 16.9138 15.3125 16.9138C15.0935 16.9138 14.8766 16.8706 14.6743 16.7868C14.472 16.7029 14.2882 16.58 14.1334 16.425L14.0834 16.375C13.887 16.1829 13.6375 16.054 13.3672 16.005C13.0969 15.956 12.8181 15.9891 12.5667 16.1C12.3202 16.2056 12.11 16.381 11.962 16.6046C11.8139 16.8282 11.7344 17.0902 11.7334 17.3583V17.5C11.7334 17.942 11.5578 18.366 11.2452 18.6785C10.9327 18.9911 10.5087 19.1667 10.0667 19.1667C9.62468 19.1667 9.20076 18.9911 8.8882 18.6785C8.57564 18.366 8.40004 17.942 8.40004 17.5V17.425C8.39359 17.1492 8.30431 16.8817 8.1438 16.6573C7.98329 16.4328 7.75899 16.2619 7.50004 16.1667C7.24869 16.0557 6.96988 16.0226 6.69955 16.0717C6.42922 16.1207 6.17977 16.2496 5.98337 16.4417L5.93337 16.4917C5.77859 16.6466 5.59477 16.7696 5.39244 16.8534C5.19011 16.9373 4.97323 16.9805 4.75421 16.9805C4.53518 16.9805 4.3183 16.9373 4.11597 16.8534C3.91364 16.7696 3.72983 16.6466 3.57504 16.4917C3.42008 16.3369 3.29715 16.1531 3.21327 15.9507C3.1294 15.7484 3.08623 15.5315 3.08623 15.3125C3.08623 15.0935 3.1294 14.8766 3.21327 14.6743C3.29715 14.4719 3.42008 14.2881 3.57504 14.1333L3.62504 14.0833C3.81715 13.8869 3.94603 13.6375 3.99504 13.3672C4.04406 13.0968 4.01097 12.818 3.90004 12.5667C3.7944 12.3202 3.619 12.11 3.39543 11.9619C3.17185 11.8139 2.90986 11.7344 2.64171 11.7333H2.50004C2.05801 11.7333 1.63409 11.5577 1.32153 11.2452C1.00897 10.9326 0.833374 10.5087 0.833374 10.0667C0.833374 9.62464 1.00897 9.20072 1.32153 8.88816C1.63409 8.5756 2.05801 8.4 2.50004 8.4H2.57504C2.85087 8.39355 3.11838 8.30427 3.34279 8.14376C3.5672 7.98325 3.73814 7.75895 3.83337 7.5C3.9443 7.24865 3.97739 6.96984 3.92838 6.69951C3.87936 6.42918 3.75049 6.17973 3.55837 5.98333L3.50837 5.93333C3.35341 5.77855 3.23048 5.59473 3.14661 5.3924C3.06273 5.19007 3.01956 4.97319 3.01956 4.75417C3.01956 4.53514 3.06273 4.31826 3.14661 4.11593C3.23048 3.9136 3.35341 3.72979 3.50837 3.575C3.66316 3.42004 3.84698 3.29711 4.04931 3.21323C4.25164 3.12936 4.46852 3.08619 4.68754 3.08619C4.90657 3.08619 5.12344 3.12936 5.32577 3.21323C5.5281 3.29711 5.71192 3.42004 5.86671 3.575L5.91671 3.625C6.11311 3.81711 6.36255 3.94599 6.63288 3.995C6.90321 4.04402 7.18203 4.01093 7.43337 3.9H7.50004C7.74652 3.79436 7.95672 3.61896 8.10478 3.39539C8.25285 3.17181 8.3323 2.90982 8.33337 2.64167V2.5C8.33337 2.05797 8.50897 1.63405 8.82153 1.32149C9.13409 1.00893 9.55801 0.833333 10 0.833333C10.4421 0.833333 10.866 1.00893 11.1786 1.32149C11.4911 1.63405 11.6667 2.05797 11.6667 2.5V2.575C11.6678 2.84316 11.7472 3.10515 11.8953 3.32872C12.0434 3.5523 12.2536 3.7277 12.5 3.83333C12.7514 3.94426 13.0302 3.97735 13.3005 3.92834C13.5709 3.87932 13.8203 3.75045 14.0167 3.55833L14.0667 3.50833C14.2215 3.35337 14.4053 3.23044 14.6076 3.14657C14.81 3.06269 15.0268 3.01952 15.2459 3.01952C15.4649 3.01952 15.6818 3.06269 15.8841 3.14657C16.0864 3.23044 16.2703 3.35337 16.425 3.50833C16.58 3.66312 16.7029 3.84694 16.7868 4.04927C16.8707 4.2516 16.9139 4.46847 16.9139 4.6875C16.9139 4.90653 16.8707 5.1234 16.7868 5.32573C16.7029 5.52806 16.58 5.71188 16.425 5.86667L16.375 5.91667C16.1829 6.11307 16.0541 6.36251 16.005 6.63284C15.956 6.90317 15.9891 7.18199 16.1 7.43333V7.5C16.2057 7.74647 16.3811 7.95668 16.6047 8.10474C16.8282 8.25281 17.0902 8.33226 17.3584 8.33333H17.5C17.9421 8.33333 18.366 8.50893 18.6786 8.82149C18.9911 9.13405 19.1667 9.55797 19.1667 10C19.1667 10.442 18.9911 10.866 18.6786 11.1785C18.366 11.4911 17.9421 11.6667 17.5 11.6667H17.425C17.1569 11.6677 16.8949 11.7472 16.6713 11.8953C16.4477 12.0433 16.2723 12.2535 16.1667 12.5V12.5Z" stroke="#3F4156" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            <span>Settings</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/help-support">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M13.9062 13.2812H12.1484V12.7332C12.6254 12.4724 13.0501 12.1276 13.4026 11.7188H14.6875C15.8721 11.7188 16.8359 10.755 16.8359 9.57031V7.61719C16.8359 6.8534 16.346 6.20258 15.6641 5.96078V5.66406C15.6641 2.5409 13.1232 0 10 0C6.87684 0 4.33594 2.5409 4.33594 5.66406V5.96016C3.65395 6.20203 3.16406 6.85332 3.16406 7.61719C3.16406 8.58645 3.95262 9.375 4.92188 9.375H5.54602C5.7357 10.8248 6.61934 12.0593 7.85156 12.7332V13.2812H6.09375C3.40137 13.2812 1.21094 15.4717 1.21094 18.1641V19.4141C1.21094 19.7377 1.47328 20 1.79688 20H18.2031C18.5267 20 18.7891 19.7377 18.7891 19.4141V18.1641C18.7891 15.4717 16.5986 13.2812 13.9062 13.2812ZM15.6641 9.57031C15.6641 10.1088 15.226 10.5469 14.6875 10.5469H14.1338C14.291 10.1787 14.4003 9.78551 14.454 9.375H15.6641V9.57031ZM15.6641 7.61719V8.20312H14.4922V7.03125H15.0781C15.4012 7.03125 15.6641 7.2941 15.6641 7.61719ZM5.50781 8.20312H4.92188C4.59879 8.20312 4.33594 7.94027 4.33594 7.61719C4.33594 7.2941 4.59879 7.03125 4.92188 7.03125H5.50781V8.20312ZM5.50781 5.85938V5.66406C5.50781 3.18707 7.52301 1.17188 10 1.17188C12.477 1.17188 14.4922 3.18707 14.4922 5.66406V5.85938H14.1118L12.3191 4.42527C12.086 4.23875 11.7499 4.25738 11.5388 4.46848C10.6419 5.36539 9.44938 5.85938 8.18094 5.85938H5.50781ZM6.67969 8.78906V7.03125H8.18094C9.58539 7.03125 10.9153 6.54547 11.9786 5.65352L13.3203 6.72691V8.78906C13.3203 9.4343 13.1347 10.0367 12.8149 10.5469H10.3906C10.067 10.5469 9.80469 10.8092 9.80469 11.1328C9.80469 11.4564 10.067 11.7188 10.3906 11.7188H11.5605C11.095 11.9677 10.5638 12.1094 10 12.1094C8.16918 12.1094 6.67969 10.6199 6.67969 8.78906V8.78906ZM10.9766 13.174V13.8672C10.9766 14.4057 10.5385 14.8438 10 14.8438C9.46152 14.8438 9.02344 14.4057 9.02344 13.8672V13.174C9.33797 13.244 9.66469 13.2812 10 13.2812C10.3353 13.2812 10.662 13.244 10.9766 13.174ZM17.6172 18.8281H2.38281V18.1641C2.38281 16.1179 4.04754 14.4531 6.09375 14.4531H7.93344C8.18918 15.3538 9.01848 16.0156 10 16.0156C10.9815 16.0156 11.8108 15.3538 12.0666 14.4531H13.9062C15.9525 14.4531 17.6172 16.1179 17.6172 18.1641V18.8281Z" fill="#3F4156"/>
                            </svg>
                            <span>Support</span>
                        </NavLink>
                    </li>
                </ul> 
                <div className="user-img">
                    <Image className="img-fluid" src={UserProfileImage}/>            
                </div>   
                <div className="blue-background"></div>
            </div>
            <Modal show={HeaderShareshow} onHide={handleClose} className="shareprofileButton">
                <Modal.Body>
                    <h4>Share Profile with your social Community</h4>
                    <div className="social-media">
                      <div className="socialIcons">
                        <FacebookShareButton
                            url={config.baseURL+userName}
                            quote={"Selector"}
                            hashtag={"#hashtag"}
                            description={"aiueo"}
                            className="img-fluid"
                        >
                            <FacebookIcon size={40} round={false} />
                        </FacebookShareButton>

                        <TwitterShareButton
                            title={config.baseURL+userName}
                            url={config.baseURL+userName}
                            className="img-fluid"
                        >
                            <TwitterIcon size={32} round={false} />
                        </TwitterShareButton>

                        <EmailShareButton
                            title={config.baseURL+userName}
                            url={config.baseURL+userName}
                            className="img-fluid"
                        >
                            <EmailIcon size={32} round={false} />
                        </EmailShareButton>

                        <WhatsappShareButton
                            title={config.baseURL+userName}
                            url={config.baseURL+userName}
                            className="img-fluid"
                        >
                            <WhatsappIcon size={32} round={false} />
                        </WhatsappShareButton>

                        <LinkedinShareButton
                            title={config.baseURL+userName}
                            url={config.baseURL+userName}
                            className="img-fluid"
                        >
                            <LinkedinIcon size={32} round={false} />
                        </LinkedinShareButton>

                        <PinterestShareButton
                            title={config.baseURL+userName}
                            url={config.baseURL+userName}
                            className="img-fluid"
                        >
                            <PinterestIcon size={32} round={false} />
                        </PinterestShareButton>

                        <RedditShareButton
                            title={config.baseURL+userName}
                            url={config.baseURL+userName}
                            className="img-fluid"
                        >
                            <RedditIcon size={32} round={false} />
                        </RedditShareButton>

                        <TelegramShareButton
                            title={config.baseURL+userName}
                            url={config.baseURL+userName}
                            className="img-fluid"
                        >
                            <TelegramIcon size={32} round={false} />
                        </TelegramShareButton>

                        <InstapaperShareButton
                            title={config.baseURL+userName}
                            url={config.baseURL+userName}
                            className="img-fluid"
                        >
                            <InstapaperIcon size={32} round={false} />
                        </InstapaperShareButton>

                        <LivejournalShareButton
                            title={config.baseURL+userName}
                            url={config.baseURL+userName}
                            className="img-fluid"
                        >
                            <LivejournalIcon size={32} round={false} />
                        </LivejournalShareButton>
            </div>
                    </div>
                    <div className="form">
                     
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Control type="email" placeholder={config.baseURL+userName} />
                            </Form.Group>
                            <div className="copy-button">
                            <CopyToClipboard
                text={config.baseURL+userName}
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

export const MessageDetailHeader = () => {
    return (
        <>
            <div className="privacy-header">
                <NavLink to="/setting">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="20" viewBox="0 0 30 20" fill="none">
                        <path opacity="0.8" d="M30 8.45025V11.267H5.71429L11.4286 16.9005L10 19.7173L0 9.85863L10 0L11.4286 2.81675L5.71429 8.45025H30Z" fill="#666666"/>
                    </svg>
                </NavLink>    
                <h4>Jenny</h4>
                <NavLink to="">
                    <OptionButton/>
                </NavLink>
            </div>
        </>
    );
};
