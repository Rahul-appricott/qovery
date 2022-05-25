import React, { useEffect, useState } from 'react';
import Slider from "react-slick";
import { Image } from 'react-bootstrap';
import {useNavigate, NavLink} from 'react-router-dom';
import {Blockuser, BlockBackground} from '../../../img/index';
import {BlockButton} from '../../../Component/utils/button';
import "../../../../node_modules/slick-carousel/slick/slick.css";
import "../../../../node_modules/slick-carousel/slick/slick-theme.css";
import {profileService} from '../../../_services';

const MultipleItems = () =>  {
	const settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 2,
		slidesToScroll: 1
	  };

	  const [firstName,setFirstName] = useState("");
	  const [lastName,setLastName] = useState("");
	  useEffect(() => {
		  callApi()
		}, []);
  
		const callApi = async ()  => {
		  let data = await profileService.getBlockedUsers();
		  setFirstName(data.firstName);
		  setLastName(data.lastName);
		}

	const [user,setUser] = useState([{
		fisrtName: "",
	}]);

	return (
		<div>
			<Slider {...settings}>
				{user.map((type) => (
					<div key={`inline-${type}`}>
						<div className="block-div">
							<div className="text">
								<p>{firstName} <span>Off market</span></p>
								<BlockButton/>
							</div>
							<div className="blocked-user">
								<Image className="img-fluid" src={Blockuser}/>
							</div>
							<Image className="img-fluid" src={BlockBackground}/>
						</div>
					</div>
				))}
				{/* <div>
					<div className="block-div">
						<div className="text">
							<p>Courtney <span>Off market</span></p>
							<BlockButton/>
						</div>
						<div className="blocked-user">
							<Image className="img-fluid" src={Blockuser}/>
						</div>
						<Image className="img-fluid" src={BlockBackground}/>
					</div>
				</div>
				<div>
					<div className="block-div">
						<div className="text">
							<p>Courtney <span>Off market</span></p>
							<button className="btn btn-link">Unblock</button>
						</div>
						<div className="blocked-user">
							<Image className="img-fluid" src={Blockuser}/>
						</div>
						<Image className="img-fluid" src={BlockBackground}/>
					</div>
				</div>
				<div>
					<div className="block-div">
						<div className="text">
							<p>Courtney <span>Off market</span></p>
							<button className="btn btn-link">Unblock</button>
						</div>
						<div className="blocked-user">
							<Image className="img-fluid" src={Blockuser}/>
						</div>
						<Image className="img-fluid" src={BlockBackground}/>
					</div>
				</div>
				<div>
					<div className="block-div">
						<div className="text">
							<p>Courtney <span>Off market</span></p>
							<button className="btn btn-link">Unblock</button>
						</div>
						<div className="blocked-user">
							<Image className="img-fluid" src={Blockuser}/>
						</div>
						<Image className="img-fluid" src={BlockBackground}/>
					</div>
				</div>
				<div>
					<div className="block-div">
						<div className="text">
							<p>Courtney <span>Off market</span></p>
							<button className="btn btn-link">Unblock</button>
						</div>
						<div className="blocked-user">
							<Image className="img-fluid" src={Blockuser}/>
						</div>
						<Image className="img-fluid" src={BlockBackground}/>
					</div>
				</div> */}
			</Slider>	
		</div>
	);
};

export default MultipleItems;