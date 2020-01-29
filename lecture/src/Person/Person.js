import React from 'react';
import './Person.css';

const person = ( props ) => {
    return (
        <div className={'Person'}>
            <p onClick={props.click}>I'm {props.name} and I'm {props.age} years all!</p>
            <p>{props.children}</p>
            <input type="text" value={props.name} onChange={props.changed} />
        </div>
    )
};

export default person;