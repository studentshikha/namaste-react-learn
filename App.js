// import React from "react";
// import ReactDOM from "react-dom"; 
 //react element is a object
const heading = React.createElement( 
 "h1", 
 { id : "heading"},
 "hello world from react"
 );
//  object


   
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);














{/* <div id="root">
    <h1 id="heading">namaste react using react </h1>
    <h2 id ="head"> react</h2>
</div> */}

// const heading2 = React.createElement("div", {id : "root"},[
//      React.createElement( "h1", {id : "heading"} , "namaste react using react" ),
//      React.createElement( "h2", {id : "head"}, "react")
// ] ) ;