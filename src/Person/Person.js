import React from 'react';
const person = (props) => {
    var date = new Date();
    console.log(date);
    return (<div><p> I'm a person and i am {Math.floor(Math.random() * 30)} years old</p>
        <p> I'm a person {props.title} and i am {date.toDateString()} years old</p>
        <p>{props.children}</p>
        <p>hey i am {props.name} & i am {props.age}</p>
    </div>
    );
};

export default person;