import React from 'react'
import { useAuth } from '../../context/authContext';
import { createTracking } from '../../firebase/firestore'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function FrutasVerduras() {
  const { user } = useAuth();

  const [selectedNumber, setSelectedNumber] = useState(0);

  const selectNumber = numberSelected => {
    setSelectedNumber(numberSelected)
}

  const saveValue = (value) => {
    console.log('click');
    selectNumber(value)
    createTracking(user.uid, 2, 'Frutas Y Verduras')
  }

  const navigate = useNavigate();

   // función cambio de ruta a board
  const handleChangeBoard = () => {
    return navigate('/board', { replace: true });
  };

  return (
    <div>
      <button onClick={saveValue} value='1'>1</button>
      <button onClick={saveValue} value='2'>2</button>
      <button onClick={saveValue} value='3'>3</button>
      <button onClick={saveValue} value='4'>4</button>
      <div>
      <button onClick={handleChangeBoard}>REGRESA</button>
      </div>
      
    </div>
  )
}
