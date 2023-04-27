import React from 'react'
import { useNavigate } from 'react-router-dom'
const Headers = () => {
  const navigate = useNavigate();
  return (
    <div>
      <br />
      <button className='button is-primary' onClick={() => navigate('/add')}>AddProduct</button>
    </div>
  )
}

export default Headers