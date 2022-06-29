import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { SaveOutlined, CloseOutlined } from '@mui/icons-material';
import axios from 'axios';
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import './unitForm.scss';

const UnitForm = () => {
  const {kode}=useParams();
  const [unit,setUnit]=useState({})
  const [title,setTitle]=useState('Unit Baru')

  const loadUnit = async () => {
    if(kode){
      try {
        const response = await axios.get('/api/units/' + kode);
        console.log(response.data.unit)
        setUnit(response.data.unit)
        setTitle(response.data.unit.nama)
      } catch (error) {
  
      }
    }else{
      setUnit({})
    }
  }

  useEffect(() => {
    loadUnit();
   
  }, [])

  
  return(
    <div className='new'>
        <Sidebar/>
        <div className='newContainer'>
          <Navbar/>
          <div className='top'>
            <h1>{title}</h1>
          </div>
          <div className='bottom'>
            <div className='right'>
              <form>
                <div className='formInput'>
                  <label>Nama Unit</label>
                  <input type="text" value={unit.nama}></input>
                </div>
                <div className='formInput'>
                  <label>Singkatan</label>
                  <input type="text" value={unit.singkatan}></input>
                </div>
                <div className='formInput'>
                  <label>Sumber Anggaran</label>
                  <input type="text" value={unit.sumber_anggaran}></input>
                </div>
                <div className='formInput'>
                  <label>Lokasi</label>
                  <input type="text" value={unit.lokasi}></input>
                </div>
                <button className='save'><SaveOutlined/></button>
                <button className='cancel'><CloseOutlined/></button>
              </form>
            </div>
          </div>
        </div>
    </div>
  ) 

  
}

export default UnitForm