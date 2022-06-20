import React from "react";
import ReactDOM from "react-dom";
import Home from "./pages/home/Home";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Organization from "./pages/organization/Organization";
import routes from './config/routes';

function Main(){
    return(
        <Router>
           <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/satker" element={<Organization/>}/>
           </Routes>
        </Router>
    )
}

export default Main;

if(document.getElementById('root')){
    ReactDOM.render(<Main />,document.getElementById('root'))
}