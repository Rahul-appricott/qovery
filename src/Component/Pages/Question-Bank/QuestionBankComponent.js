import React,{useState} from 'react';
import { Form, Row, Button, Col } from 'react-bootstrap';
import {NavLink} from 'react-router-dom';
import {setStore,getStore} from '../../../utils/UniversalFunction.js'
import '../../Sass/Pages/questionBank.scss';

export const BasicQuestion = (props) => {
    const [array,setArray] = useState([]);
    const handleChange = (e) => {
        let getId = e.target.getAttribute("data-id");
        let isChecked = e.target;
        let newArray;
        if(isChecked.checked === false){
            newArray = array.filter(function(value, index, arr){ 
                return value !== getId;
            });
        }else{
            newArray = [ ...array, getId ]; 
        }
        setArray(newArray);
        setStore('setupQuestions',newArray)
    }
    return (
        <>
            <div className="form-component">
                <Form>
                {props.questions.map((data,index) => (
                    <Form.Group key={index} className="mb-3 checkout" controlId="formBasicCheckbox">
                        <Form.Label>{data.question}</Form.Label>
                        <Form.Check data-id={data._id} type="checkbox" onClick={handleChange}/>
                    </Form.Group>
                    ))}
                </Form>    
            </div>
        </>
    );
}

export const PersonalityQuestion = (props) => {
    return (
        <>
            <div className="form-component">
                <Form>
                {props.questions.map((data,index) => (
                    <Form.Group key={index} className="mb-3 checkout" controlId="formBasicCheckbox">
                        <Form.Label>{data.question}</Form.Label>
                        <Form.Check type="checkbox" />
                    </Form.Group>
                    ))}
                </Form>    
            </div>
        </>
    );
}

export const HistoryQuestion = (props) => {
    return (
        <>
            <div className="form-component">
                <Form>
                {props.questions.map((data,index) => (
                    <Form.Group key={index} className="mb-3 checkout" controlId="formBasicCheckbox">
                        <Form.Label>{data.question}</Form.Label>
                        <Form.Check type="checkbox" />
                    </Form.Group>
                    ))}
                </Form>    
            </div>
        </>
    );
}

export const ExpectationQuestion = (props) => {
    return (
        <>
            <div className="form-component">
                <Form>
                {props.questions.map((data,index) => (
                    <Form.Group key={index} className="mb-3 checkout" controlId="formBasicCheckbox">
                        <Form.Label>{data.question}</Form.Label>
                        <Form.Check type="checkbox" />
                    </Form.Group>
                    ))}
                </Form>    
            </div>
        </>
    );
}

