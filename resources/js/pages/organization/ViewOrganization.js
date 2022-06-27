import { ClearOutlined, EditOutlined } from '@mui/icons-material';
import { Button, ButtonGroup, Grid } from '@mui/material';
import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';

import './viewOrganization.scss';

const ViewOrganization = () => {
  const [unit, setUnit] = useState({});
  let { kode } = useParams();

  const loadUnit = async () => {
    try {
      const response = await axios.get('/api/units/' + kode);
      console.log(response.data.unit)
      setUnit(response.data.unit)
    } catch (error) {

    }
  }

  useEffect(() => {
    loadUnit();
  }, [])


  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />

        <div className="top">
          <div className='left'>
            <div className='editButton'>
              <ButtonGroup variant='outlined'>
                <Button><EditOutlined /></Button>
                <Button><ClearOutlined /></Button>
              </ButtonGroup>
            </div>
            <h1 className="title">{unit.nama}</h1>
          </div>
        </div>
        <div className="listContainer">

        </div>
      </div>
    </div>
  )
}

export default ViewOrganization