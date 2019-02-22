import React from 'react';
import './TodoElement.css';

const todoElement = (props) => (
        <li value={props.key} key={props.key} className={(props.completed ? "CheckedElement" : "Element")} Name="todoelement">
            <input type="checkbox" checked={props.completed} onChange={props.checkBoxChanged}/>
            {props.title}
            {props.completed ? <button onClick={props.deleteButtonClicked}>delete</button> : null}
        </li>
);
export default todoElement;