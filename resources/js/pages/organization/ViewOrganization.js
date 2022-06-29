import { ClearOutlined, EditOutlined } from '@mui/icons-material';
import { Button, ButtonGroup, Grid } from '@mui/material';
import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';

import './viewOrganization.scss';

const ViewOrganization = () => {
  const [unit, setUnit] = useState({});
  let { kode } = useParams();
  let navigate=useNavigate();

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
                <Button component={Link} to={`/unit/form/${unit.kode}`}><EditOutlined /></Button>
                <Button><ClearOutlined /></Button>
              </ButtonGroup>
            </div>
            <h1 className="title">{unit.nama}</h1>
            <div className='item'>
              <div className="details">
                <div className="detailItem">
                  <span className="itemKey">Kode:</span>
                  <span className="itemValue">{unit.kode}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Singkatan:</span>
                  <span className="itemValue">{unit.singkatan}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Sumber Anggaran:</span>
                  <span className="itemValue">{unit.sumber_anggaran}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Lokasi:</span>
                  <span className="itemValue">{unit.lokasi}</span>
                </div>
              </div>
            </div>


          </div>

        </div>
        <div className="top">
          <div className='left'>
            <h2 className="title">Bendahara Non RKUD</h2>
            <div className='item'>
              <div className="details">
                <div className="detailItem">
                  <span className="itemKey">Nama:</span>
                  <span className="itemValue">{unit.bend_nama}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Jabatan:</span>
                  <span className="itemValue">{unit.bend_jabatan}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">NIP:</span>
                  <span className="itemValue">{unit.bend_nip}</span>
                </div>
              </div>
            </div>


          </div>

        </div>
        <div className="top">
          <div className='left'>
            <h2 className="title">Penandatangan SP3B</h2>
            <div className='item'>
              <div className="details">
                <div className="detailItem">
                  <span className="itemKey">Nama:</span>
                  <span className="itemValue">{unit.sp3b_nama}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Jabatan:</span>
                  <span className="itemValue">{unit.sp3b_jabatan}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">NIP:</span>
                  <span className="itemValue">{unit.sp3b_nip}</span>
                </div>
              </div>
            </div>


          </div>

        </div>
        <div className="top">
          <div className='left'>
            <h2 className="title">Penandatangan SPTJM</h2>
            <div className='item'>
              <div className="details">
                <div className="detailItem">
                  <span className="itemKey">Nama:</span>
                  <span className="itemValue">{unit.sptjm_nama}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Jabatan:</span>
                  <span className="itemValue">{unit.sptjm_jabatan}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">NIP:</span>
                  <span className="itemValue">{unit.sptjm_nip}</span>
                </div>
              </div>
            </div>


          </div>

        </div>
      </div>
    </div>
  )
}

export default ViewOrganization