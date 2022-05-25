import React,{useState,useEffect} from 'react';
import {QuestionHeader} from '../../Component/Header/Header';
// import {Tabs, Tab,Button} from 'react-bootstrap';
import { Tabs, Tab, TabPanel, TabList } from 'react-web-tabs';

import {BasicQuestion, PersonalityQuestion, HistoryQuestion, ExpectationQuestion} from '../../Component/Pages/Question-Bank/QuestionBankComponent';
import '../../Component/Sass/Pages/questionBank.scss';

import {applyToDate} from "../../_services";
import { createStore } from 'redux'


const QuestionBank = () => {
    const [basicQuestionType,setBasicQuestionType] = useState("");
    const [personalityQuestionType,setPersonalityQuestionType] = useState("");
    const [historyQuestionType,setHistoryQuestionType] = useState("");
    const [expectationQuestionType,setExpectationQuestionType] = useState("");

    const [basicQuestions,setBasicQuestions] = useState([]);
    const [personalityQuestions,setPersonalityQuestions] = useState([]);
    const [historyQuestions,setHistoryQuestions] = useState([]);
    const [expectationQuestions,setExpectationQuestions] = useState([]);
    const [isActive,setIsActive] = useState("active");
    const [isActive1,setIsActive1] = useState("");
    const [isActive2,setIsActive2] = useState("");
    const [isActive3,setIsActive3] = useState("");

    const [selectedTab, setSelectedTab] = useState(0);
    const tabCount = 4;
    useEffect(() => {
        callApi()
      }, []);
    const callApi = async () => {
       let response =  await applyToDate.getAllQuestions();
       console.log("Response is here",response.data);
       let basicQuestions = [];
       let personalityQuestions = [];
       let historyQuestions = [];
       let expectationQuestions = [];

       response.data.forEach(element => {
           if(element.question_type === 'Basic'){
               basicQuestions.push(element)
           }
       });
       response.data.forEach(element => {
        if(element.question_type === 'Personality'){
            personalityQuestions.push(element)
        }
    });
    response.data.forEach(element => {
        if(element.question_type === 'History'){
            historyQuestions.push(element)
        }
    });
    response.data.forEach(element => {
        if(element.question_type === 'Expectation'){
            expectationQuestions.push(element)
        }
    });
       setBasicQuestions(basicQuestions);
       setPersonalityQuestions(personalityQuestions)
       setHistoryQuestions(historyQuestions)
       setExpectationQuestions(expectationQuestions)

       setBasicQuestionType(response.questionType.BASIC)
       setPersonalityQuestionType(response.questionType.PERSONALITY)
       setHistoryQuestionType(response.questionType.HISTORY)
       setExpectationQuestionType(response.questionType.EXPECTATAION)
    }

    const setActiveClass = (e) => {
        setSelectedTab((selectedTab + 1) % tabCount)
        let checkFirstCondition = (selectedTab + 1) % tabCount === 0;
        let checkSecondCondition = (selectedTab + 1) % tabCount === 1;
        let checkThirdCondition = (selectedTab + 1) % tabCount === 2;
        let checkFourthCondition = (selectedTab + 1) % tabCount === 3;
        if(checkFirstCondition){
            updateStates(0)
        }
        if(checkSecondCondition){
            updateStates(1)
        }
        if(checkThirdCondition){
            updateStates(2)
        }
        if(checkFourthCondition){
            updateStates(3)
            const store = createStore('ADD_TODO', 'Use Redux')
            console.log("My Store",store.getState())
        }
    }
    const setActiveClass2 = (e) => {
        let getId = parseInt(e.target.getAttribute("data-id"));
        setSelectedTab(getId)
        let checkFirstCondition = getId === 0;
        let checkSecondCondition = getId === 1;
        let checkThirdCondition = getId === 2;
        let checkFourthCondition = getId === 3;
        if(checkFirstCondition){
            updateStates(0)
        }
        if(checkSecondCondition){
            updateStates(1)
        }
        if(checkThirdCondition){
            updateStates(2)
        }
        if(checkFourthCondition){
            updateStates(3)
        }
    }

    function updateStates(number){
        if(number === 0){
            setIsActive('active');
            setIsActive1('');
            setIsActive2('');
            setIsActive3('');
        }else if(number === 1){
            setIsActive('');
            setIsActive1('active');
            setIsActive2('');
            setIsActive3('');
        }
        else if(number === 2){
            setIsActive('');
            setIsActive1('');
            setIsActive2('active');
            setIsActive3('');
        }else{
            setIsActive('');
            setIsActive1('');
            setIsActive2('');
            setIsActive3('active');
        }
    }
    return(
        <>
            <div className="question-bank">
                <QuestionHeader/>
                <div className="inner-section">        
                    <div className="tabbing">
                        <Tabs
                            className="mb-3"
                            defaultTab={selectedTab.toString()}
                            onChange={(tabId) => { console.log(tabId) }}
                        >
                        <TabList className="mb-3">
                        <Tab className={"btn " + isActive} onClick={(e) => setActiveClass2(e)} data-id={0} tabFor="0">{basicQuestionType}</Tab>
                        <Tab className={"btn " + isActive1} onClick={(e) => setActiveClass2(e)} data-id={1} tabFor="1">{personalityQuestionType}</Tab>
                        <Tab className={"btn " + isActive2} onClick={(e) => setActiveClass2(e)} data-id={2} tabFor="2">{historyQuestionType}</Tab>
                        <Tab className={"btn " + isActive3} onClick={(e) => setActiveClass2(e)} data-id={3} tabFor="3">{expectationQuestionType}</Tab>
                        </TabList>
                        <TabPanel tabId="0">
                        <BasicQuestion questions={basicQuestions}/>
                        </TabPanel>
                        <TabPanel tabId="1">
                        <PersonalityQuestion questions={personalityQuestions}/>
                        </TabPanel>
                        <TabPanel tabId="2">
                        <HistoryQuestion questions={historyQuestions}/>
                        </TabPanel>
                        <TabPanel tabId="3">
                        <ExpectationQuestion questions={expectationQuestions}/>
                        </TabPanel>
              </Tabs>

                        {/* <button className='btn signin' onClick={() => setSelectedTab((selectedTab + tabCount - 1) % tabCount )}>Back</button> */}
      <button className='btn signin' onClick={(e) => setActiveClass(e)}>CONTINUE</button>
                    </div>   
                </div>    
                <div className="blue-background"></div>
            </div>            
        </>
    );
}

export default QuestionBank;