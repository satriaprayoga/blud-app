import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './unitForm.scss';

const UnitForm = () => {
  const {kode}=useParams();
  const [unit,setUnit]=useState({})

  if(kode){
    return(
        <div>{kode}</div>
    )
   
  }
  return <div>No Kode</div>

  
}

export default UnitForm