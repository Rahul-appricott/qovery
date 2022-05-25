import React, { useEffect, useState } from "react";
import { HeaderSidebar } from "../../Component/Header/Header";
import config from "../../config/config.json";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Image from "react-bootstrap/Image";
// import {NavLink} from 'react-router-dom';
import { UserProfile } from "../../img/index";
import { ShareProfileText } from "../../Component/utils/button";
import "../../Component/Sass/Pages/Profile.scss";
import { QRCodeCanvas } from "qrcode.react";
import { userService } from "../../_services";

const ShareQR = () => {
  const [username, setUsername] = useState("");
  useEffect(() => {
    callApi();
    // eslint-disable-next-line no-use-before-define
  }, []);

  const callApi = async () => {
    let data = await userService.getProfileData();
    setUsername(data.user.username);
  };

  return (
    <>
      <HeaderSidebar />
      <div className="QRprofile">
        <Container>
          <Row>
            <Col xs={12}>
              <div className="inner-profile">
                <div className="profile-Img">
                  <Image src={UserProfile} className="img-fluid" />
                </div>

                <div className="text">
                  <div className="inner-text">
                    <QRCodeCanvas value={config.baseURL + "/" + username} />

                    <label>Your UpScal'd profile is ready to share</label>
                    <h4>You are all set to date!</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod.
                    </p>
                    <div className="btn-share">
                      {/* <ShareProfile/> */}
                      <ShareProfileText
                        profileUrl={config.baseURL + "/" + username}
                      />
                    </div>
                    <Link to={"/profile/" + username} className="btn btn-grey">
                      GO BACK TO PROFILE{" "}
                    </Link>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default ShareQR;
