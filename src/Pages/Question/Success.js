import React from 'react';
import {Header} from '../../Component/Header/Header';
import '../../Component/Sass/Pages/Question.scss';
import '../../Component/Sass/Pages/homepage.scss';
import '../../Component/Sass/Pages/Success.scss';
import {SuccessImage, CreateImage} from '../../img/index';
import '../../Component/Sass/Style.scss';
import Image from 'react-bootstrap/Image';
// import {TextInput} from '../../Component/Pages/Question/Question';
import { NavLink } from 'react-bootstrap';

const Success = () =>{
   
    return(
        <>
        <Header/>
        <div className='question'>
            <div className="background-shield">
                <div className="top-img">
                    <div className='MainImg'><Image src={CreateImage} /></div>
                    <div className='main-heading'>Brooklyn's Dating App 01/20</div> 
                </div>
                <div className="progress">
                    <div className="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <div className='box1'></div>
                <div className='box2'></div> 
                {/* <TextInput/> */}
                <div className='GrayShadow'></div>
                <div className='SuccessBox'>
                    <div className='TopBorder'></div>                    
                </div>
                <Image className='ImageSize' src={SuccessImage} />
                <div className='SuccessTag'>SUCCESS!</div> 
                <div className='SuccessHistory'>Your request has been send to Brooklyn</div>
                <NavLink type='submit' href='/profile' className="ButtonSet"> Done </NavLink>
                {/* <button type='submit' className='ButtonSet'> <span className='Done'>Done</span> </button> */}
            </div>
            <div className='foot'></div>
        </div>
        </>
    );
}
export default Success;