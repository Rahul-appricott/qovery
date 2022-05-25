import React,{useState,useEffect} from 'react';
import {Header} from '../../Component/Header/Header';
import '../../Component/Sass/Pages/Question.scss';
import '../../Component/Sass/Pages/homepage.scss';
import {CreateImage} from '../../img/index';
import '../../Component/Sass/Style.scss';
import Image from 'react-bootstrap/Image';
import {QuestionAns1} from '../../Component/Pages/Question/Question';
import {ProgressBar,NavLink} from 'react-bootstrap';
import {applyToDate} from '../../_services'

const Question = () =>{
    const [questions,setQuestions] = useState([]);

    useEffect(() => {
        callApi()
    }, []);

    const callApi = async () => {
        let response = await applyToDate.getQuestions('indersein');
        console.log("response is here",response);
        setQuestions(response?.data)
    }

    const [showQuestion,setShowQuestion] = useState(true);
    const [progress,setProgress] = useState(10);
    const [style,setStyle] = useState("display:block");
    const [isActive,setIsActive] = useState("active");


    const datingQuestions = () => {
        console.log("i am here")
    }
    
    const getAnswer = (e) => {
       
    }
    return(
        <>
        <div className='question'>
            <Header/>
            <div className="background-shield">
                <div className="top-img">
                    <div className='MainImg'><Image src={CreateImage} /></div>
                    <div className='main-heading'>Brooklyn's Dating App 01/10</div> 
                </div>
                <div className="progressBar">
                    <ProgressBar now={progress} />
                </div>
                <div className='box3'> 
                {questions.map((value,index) => (
                    <div key={index} className={(index === 0) ? "question1 listingAppliedQuestion "+isActive : "question1 listingAppliedQuestion"}>
                    <p className='main-ques'>
                        <span className='text-primary'>Q:{index+1}</span> {value.question}
                    </p>
                    
                    <div className='box4'>
                        <span className='Option1'>{value.answers[0].a}
                        </span>
                        <input type="radio" name='question' onClick={getAnswer}  aria-label="Checkbox for following text input"></input>                            
                    </div>
                    <div className='box4'>
                        <span className='Option2'>{value.answers[1].b}</span>
                        <input type="radio" name='question'  aria-label="Checkbox for following text input"></input>
                    </div>
                    <div className='box4'>
                        <span className='Option3'>{value.answers[2].c}</span>
                        <input type="radio" name='question' aria-label="Checkbox for following text input"></input>
                    </div>
                    <div className='box4'>
                        <span className='Option4'>{value.answers[3].d}</span>
                        <input type="radio" name='question' aria-label="Checkbox for following text input"></input>
                    </div>
                    <div className="button-save">
                        <button onClick={datingQuestions} className='btn button'>Next</button>
                    </div>
                 </div>
                ))}
            </div>
            </div>
        </div>
        </>
    );
}
export default Question;
