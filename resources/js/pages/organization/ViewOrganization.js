import React from 'react'
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';

import './organization.scss';

const ViewOrganization = () => {
  const[unit,setUnit]=useState({});
  let {kode}=useParams();




  return (
    <div className="organization">
        <Sidebar />
        <div className="organizationContainer">
            <Navbar />
            <div className="listTitle">{kode}</div>
        </div>
    </div>
  )
}

export default ViewOrganization