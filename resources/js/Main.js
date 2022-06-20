import React from "react";
import ReactDOM from "react-dom";
import Home from "./pages/home/Home";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Organization from "./pages/organization/Organization";
import routes from './config/routes';
import ViewOrganization from "./pages/organization/ViewOrganization";

function Main(){
    return(
        <Router>
           <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="satker" element={<Organization/>}/>
                <Route path="unit/:kode" element={<ViewOrganization/>}/>
                

           </Routes>
        </Router>
    )
}

export default Main;

if(document.getElementById('root')){
    ReactDOM.render(<Main />,document.getElementById('root'))
}