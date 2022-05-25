import React from 'react';
import {QuestionScreenA} from '../../Component/Header/Header';
import {Container, Row, Col} from 'react-bootstrap';
import {QuestionShare} from '../../Component/utils/button';
import '../../Component/Sass/Pages/questionBank.scss';

const QuestionScreen = () =>{
    return(
        <>
            <div className="question-bank">
                <QuestionScreenA/>
                <div className="inner-section">        
                    <Container>
                        <Row>
                            <Col xs={12}>
                                <div className="question22">
                                    <div className="q1">
                                        <span>Q:1</span>
                                        <p>Lorem Ipsum has been standard dummy text ever unknown?</p>
                                    </div>
                                    <div className="q1">
                                        <span>Q:2</span>
                                        <p>Lorem Ipsum has been standard dummy text ever unknown?</p>
                                    </div>
                                    <div className="q1">
                                        <span>Q:3</span>
                                        <p>Lorem Ipsum has been standard dummy text ever unknown?</p>
                                    </div>
                                    <div className="q1">
                                        <span>Q:4</span>
                                        <p>Lorem Ipsum has been standard dummy text ever unknown?</p>
                                    </div>
                                    <div className="q1">
                                        <span>Q:5</span>
                                        <p>Lorem Ipsum has been standard dummy text ever unknown?</p>
                                    </div>
                                    <div className="q1">
                                        <span>Q:6</span>
                                        <p>Lorem Ipsum has been standard dummy text ever unknown?</p>
                                    </div>
                                    <div className="q1">
                                        <span>Q:7</span>
                                        <p>Lorem Ipsum has been standard dummy text ever unknown?</p>
                                    </div>
                                    <div className="q1">
                                        <span>Q:8</span>
                                        <p>Lorem Ipsum has been standard dummy text ever unknown?</p>
                                    </div>
                                    <div className="q1">
                                        <span>Q:9</span>
                                        <p>Lorem Ipsum has been standard dummy text ever unknown?</p>
                                    </div>
                                    <div className="q1">
                                        <span>Q:10</span>
                                        <p>Lorem Ipsum has been standard dummy text ever unknown?</p>
                                    </div>
                                </div>
                                <QuestionShare/>
                            </Col>
                        </Row>
                    </Container>
                </div>    
                <div className="blue-background"></div>
            </div>            
        </>
    );
}

export default QuestionScreen;