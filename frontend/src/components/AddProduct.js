import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios  from 'axios';

const AddProduct = () => {
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const navigate = useNavigate();

    const saveProduct = async (e) => {
        e.preventDefault();
        const postData = {
            title,
            price,
        };
        axios.post('http://localhost:8080/products',
        postData,
        )
        .then((response) => {
            navigate('/');
        })

    }
  return (
    <div>
        <form onSubmit={ saveProduct }>
            <div className='field'>
                <label className='label'>Title</label>
                <input type='text' className='input'
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder='Title' required/>
                </div>
            <div className='field'>
                <label className='label'>Price</label>
                <input type='text' className='input'
                   value={price}
                   onChange={(e) => setPrice(e.target.value)}
                placeholder='Price' required/>
                </div>
            <div className='field'>
            <Link to={'/'} className='button is-danger'>Back</Link>
                <button className='button is-primary' style={{marginLeft: "20px"}}>Save </button>
                </div>
        </form>
    </div>
  )
}

export default AddProduct