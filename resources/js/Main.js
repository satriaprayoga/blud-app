import React from "react";
import ReactDOM from "react-dom";
import Home from "./pages/home/Home";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Organization from "./pages/organization/Organization";
import routes from './config/routes';
import ViewOrganization from "./pages/organization/ViewOrganization";
import UnitForm from "./pages/organization/UnitForm";
import Units from "./pages/organization/Units";

function Main(){
    return(
        <Router>
           <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="satker" element={<Units/>}/>
                <Route path="unit">
                    <Route path=":kode" element={<ViewOrganization/>}/>
                    <Route path="form">
                        <Route index element={<UnitForm/>}/>
                        <Route path=":kode" element={<UnitForm/>}/>
                    </Route>
                </Route>
           </Routes>
        </Router>
    )
}

export default Main;

if(document.getElementById('root')){
    ReactDOM.render(<Main />,document.getElementById('root'))
}