// var React =require('react');
import React from 'react';
// var ReactDom =require('react-dom');
import ReactDOM from 'react-dom';

// ReactDOM.render(<h1>Hello World</h1>,
// document.getElementById('root')   );


// ** using multiple rendermethod using one element+
// ReactDOM.render(
// // <div> 
// [
// <h1>My Name is Sunit Seth</h1>,
// <p> Plz like and Subscribe</p>,
// ],
// // </div>,
// document.getElementById('root')   );


// **extra div not creating in node  1>less memory 2>faster
ReactDOM.render(
    <React.Fragment>
        <h1>hi my name sunit</h1>
        <p>am i audible ? </p>
        <h2>this is my number </h2>
    </React.Fragment>,
    document.getElementById("root")
);


