import React from 'react'
import { useState } from 'react';

import './organization.scss';

const ViewOrganization = () => {
  const[unit,setUnit]=useState({});




  return (
    <div className="organization">
        <Sidebar />
        <div className="organizationContainer">
            <Navbar />
        </div>
    </div>
  )
}

export default ViewOrganization