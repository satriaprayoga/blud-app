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

const rows = [
  { id: 102010006, namaUnit: 'BLUD RSUD Cibinong', singkatan: 'BLUD RSUD CBN', lokasi: '-' }
];


const Organization = () => {
  const [age, setAge] = React.useState('');
  const [satkers, setSatkers] = React.useState([]);
  const [satker, setSatker] = React.useState("");

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

  const handleSatkerChange = (event) => {
    console.log(event.target.value)
    setSatker(event.target.value)
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
                <InputLabel id="demo-simple-select-label" >Satuan Kerja</InputLabel>
                <Select
                  labelId="demo-satker-select-label"
                  id="demo-satker-select"
                  value={satker}
                  label="Sub Unit"
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
                <InputLabel id="demo-simple-select-label" >Sub Unit</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={age}
                  label="Sub Unit"
                  onChange={handleChange}
                >
                  <MenuItem value={1}>RSUD Cibinong</MenuItem>
                  <MenuItem value={2}>RSUD Cileungsi</MenuItem>
                  <MenuItem value={3}>RSUD Ciawi</MenuItem>
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