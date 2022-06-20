import './organization.scss'
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import Widget from '../../components/widget/widget';
import Feature from '../../components/feature/Feature';

import React from 'react'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Box, Container, TextField } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';

const columns = [
  { field: 'id', headerName: 'Kode Unit' },
  { field: 'namaUnit', headerName: 'Unit Organisasi' },
  { field: 'singkatan', headerName: 'Singkatan' },
  { field: 'lokasi', headerName: 'Lokasi' }
];

/* const rows = [
  { id: 102010006, namaUnit: 'BLUD RSUD Cibinong', singkatan: 'BLUD RSUD CBN', lokasi: '-' }
]; */


const Organization = () => {
  const [age, setAge] = React.useState('');
  const [satkers, setSatkers] = React.useState([]);
  const [satker, setSatker] = React.useState("");
  const [subunits, setSubunits] = React.useState([]);
  const [subunit, setSubunit] = React.useState("");
  const [units,setUnits]=React.useState([]);
  const [rows,setRows]=React.useState([]);
  const [unit,setUnit]=React.useState("");

  React.useEffect(() => {

    loadSatkers()
  }, [])

  const loadSatkers = async () => {

    try {
      const response = await axios.get('/api/satker');
      setSatkers(response.data.satkers)
    } catch (error) {

    }

  }



  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const handleSatkerChange = async (event) => {
    console.log(event.target.value)
    setSatker(event.target.value)
    loadSubunit(event)
  }

  const handleSubunitChange = async (event)=>{
    console.log(event.target.value)
    setSubunit(event.target.value)
    loadUnits(event)
  }

  const loadSubunit = async (event) => {
    try {
      const response = await axios.get('/api/subunits/satker/' + event.target.value);
      console.log(response.data.subunits);
      setSubunits(response.data.subunits);
    } catch (error) {

    }
  }

  const loadUnits = async (event)=> {
    try {
      const response=await axios.get('/api/units/subunit/'+event.target.value);
     // setUnits(response.data.units);
      setRows(response.data.units.map(e=>{
        return{
          id: e.kode, namaUnit: e.nama, singkatan: e.singkatan, lokasi: e.lokasi
        }
      }))
    } catch (error) {
      
    }
  }

  return (
    <div className="organization">
      <Sidebar />
      <div className="organizationContainer">
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
                      <MenuItem value={s.kode} key={index}>{s.nama}</MenuItem>
                    )
                  }
                </Select>
              </FormControl>
            </Box>
          </Container>
          <Container>
            <Box sx={{ minWidth: 120 }}>
              <FormControl sx={{ minWidth: 200 }} size="small">
                <InputLabel id="demo-subunit-select-label" >Sub Unit</InputLabel>
                <Select
                  labelId="demo-subunit-select-label"
                  id="demo-subunit-select"
                  value={subunit}
                  label="Sub Unit"
                  onChange={handleSubunitChange}
                >
                  {
                    subunits.map((s, index) =>
                      <MenuItem value={s.kode} key={index}>{s.nama}</MenuItem>
                    )
                  }
                </Select>
              </FormControl>
            </Box>
          </Container>

        </div>
        <div className="listContainer">
          <div style={{ height: 400, width: '100%' }}>
            <DataGrid
              rows={rows}
              columns={columns}
              pageSize={5}
              rowsPerPageOptions={[5]}
              checkboxSelection
            />
          </div>
        </div>

      </div>
    </div>
  )

}
export default Organization