import React from 'react';
import Header from '../../Component/Header/Header';
import '../../Component/Sass/Pages/Question.scss';
import '../../Component/Sass/Pages/homepage.scss';
import {CreateImage} from '../../img/index';
import '../../Component/Sass/Style.scss';
import Image from 'react-bootstrap/Image';
// import QuestionChoose from '../Question/QuestionChoose';
import {QuestionAns1} from '../../Component/Pages/Question/Question';
import {ProgressBar} from 'react-bootstrap';

export const Question1 = () =>{
   
    return(
        <>
        <Header/>
        <div className='question'>
            <div className="background-shield">
                <div className="top-img">
                    <div className='MainImg'><Image src={CreateImage} /></div>
                    <div className='main-heading'>Brooklyn's Dating App 01/20</div> 
                </div>
                <div className="progressBar">
                    <ProgressBar now={60} />
                </div>
                <div className='box1'></div>
                <div className='box2'></div> 
                <QuestionAns1/>
            </div>
            <div className='foot'></div>
        </div>
        </>
    );
}

