import React from 'react'
import { Link } from 'react-router-dom';
const Headers = () => {

  return (
    <div>
      <br />
      <Link to={'/add'} className='button is-primary'>AddProduct</Link>
    </div>
  )
}

export default Headers