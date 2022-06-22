import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';

import './organization.scss';

const ViewOrganization = () => {
  const[unit,setUnit]=useState({});
  let {kode}=useParams();

  const loadUnit= async () =>{
    try {
      const response=await axios.get('/api/units/'+kode);
      console.log(response.data.unit)
      setUnit(response.data.unit)
    } catch (error) {
      
    }
  }

  useEffect(()=>{
    loadUnit();
  },[])


  return (
    <div className="organization">
        <Sidebar />
        <div className="organizationContainer">
            <Navbar />
            <div className="listTitle">{unit.nama}</div>
        </div>
    </div>
  )
}

export default ViewOrganization