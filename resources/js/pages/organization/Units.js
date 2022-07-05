import './units.scss'
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import Widget from '../../components/widget/widget';
import Feature from '../../components/feature/Feature';

import { useEffect, useState } from 'react'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Box, Container, TextField } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const columns = [
    { field: 'id', headerName: 'Kode Unit' },
    { field: 'namaUnit', headerName: 'Unit Organisasi', minWidth: 200 },
    { field: 'singkatan', headerName: 'Singkatan' },
    { field: 'lokasi', headerName: 'Lokasi' }
  ];

  
import React from 'react'

const Units = () => {

    const [satkers,setSatkers]=useState([]);
    const [satker,setSatker]=useState('');
    const [subunits,setSubunits]=useState([]);
    const [subunit,setSubunit]=useState('');
    const [units,setUnits]=useState([]);
    const [unit,setUnit]=useState('');

    let navigate=useNavigate();

    const loadSatkers=async()=>{
        try {
            const response = await axios.get('/api/satker');
            console.log(response.data.satkers);
            setSatkers(response.data.satkers);
          } catch (error) {
      
          }
    }


    const handleSatkerChange=async(event)=>{
        setSatker(event.target.value);
        try{
            const response=await axios.get('/api/satker/'+event.target.value);
            setUnits(response.data.units);
        }catch(error){

        }
    }

    const handleUnitChange=async(event)=>{
        setUnit(event.target.value);
        try {
            const response=await axios.get('/api/unit/'+event.target.value);
            console.log(response.data.subunits);
            setSubunits(response.data.subunits);
        } catch (error) {
            
        }
    } 

    useEffect(()=>{
        loadSatkers();
    },[]);


    return (
        <div className="unit">
          <Sidebar />
          <div className="unitContainer">
            <Navbar />
            <div className="listContainer">
              <Container>
                <div className="listTitle">Unit Organisasi</div>
                <Box sx={{ minWidth: 120 }}>
                  <FormControl sx={{ minWidth: 200 }} size="small">
                    <InputLabel id="demo-satker-select-label" >Satuan Kerja</InputLabel>
                    <Select
                      labelId="demo-satker-select-label"
                      id="demo-satker-select"
                      value={satker}
                      label="OPD"
                      onChange={handleSatkerChange}
                    >
                      {
                        satkers.map((s, index) =>
                          <MenuItem value={s.id} key={index}>{s.nama}</MenuItem>
                        )
                      }
                    </Select>
                  </FormControl>
                </Box>
              </Container>
              <Container>
                <Box sx={{ minWidth: 120 }}>
                  <FormControl sx={{ minWidth: 200 }} size="small">
                    <InputLabel id="demo-subunit-select-label" >Unit</InputLabel>
                    <Select
                      labelId="demo-subunit-select-label"
                      id="demo-subunit-select"
                      value={unit}
                      label="Unit"
                      onChange={handleUnitChange}
                    >
                      {
                        units.map((s, index) =>
                          <MenuItem value={s.id} key={index}>{s.nama}</MenuItem>
                        )
                      }
                    </Select>
                  </FormControl>
                </Box>
              </Container>
    
            </div>
            {/* <div className="listContainer">
              <div style={{ height: 400, width: '100%' }}>
                <div style={{ display: 'flex', height: '100%' }}>
                  <DataGrid
                    onRowDoubleClick={(params,event)=>{
                      event.preventDefault();
                      console.log(params.row);
                      navigate(`/unit/${params.row.id}`)
    
                    }}
                    rows={rows}
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                    checkboxSelection
                  />
                </div>
    
              </div>
            </div> */}
    
          </div>
        </div>
      )
}

export default Units