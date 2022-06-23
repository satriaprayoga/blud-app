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
    <div className="organization">
      <Sidebar />
      <div className="organizationContainer">
        <Navbar />
        
        <div className="listContainer">
          <Grid container spacing={2}>
            <Grid item xs={4} md={8}>
              <div className="listTitle">
                {unit.nama}
              </div>
              <p>{unit.singkatan} - {unit.kode}</p>
            </Grid>
            <Grid item xs={8} md={4}>
              <div className='buttonGroup'>
                <ButtonGroup variant='outlined'>
                  <Button><EditOutlined /></Button>
                  <Button><ClearOutlined /></Button>
                </ButtonGroup>
              </div>
            </Grid>
          </Grid>
        </div>
        <div className="listContainer">
          
        </div>
      </div>
    </div>
  )
}

export default ViewOrganization