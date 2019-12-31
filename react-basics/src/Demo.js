import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './Demo.css'

const Demo = (props) => {
    return (
        <div className = "maindiv_style">
             <h1>Hello {props.name}</h1>
             <p>Let's get Started !</p>
        </div>
    )
}

export default Demo;