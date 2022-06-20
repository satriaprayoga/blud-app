import React from "react";
import ReactDOM from "react-dom";
import Home from "./pages/home/Home";
import { BrowserRouter as Router } from "react-router-dom";
import Organization from "./pages/organization/Organization";

function Main(){
    return(
        <Home/>
    )
}

export default Main;

if(document.getElementById('root')){
    ReactDOM.render(<Main />,document.getElementById('root'))
}