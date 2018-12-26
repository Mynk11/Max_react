import React from 'react';
import './Person.css';
const person = (props) => {
    var date = new Date();
    //console.log(date);
    return (<div className="Person">
        <p> I'm a person and i am {Math.floor(Math.random() * 30)} years old</p>
        <p> I'm a person {props.title} and i am {date.toDateString()} years old</p>
        <p onClick={props.click}>{props.children}</p>
        <p>hey i am {props.name} & i am {props.age}</p>
        <input type="text" onChange={props.change} value={props.name} />
    </div>
    );
};

export default person;
