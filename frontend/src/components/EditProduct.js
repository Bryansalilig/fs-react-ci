/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect} from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
const EditProduct = () => {
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const navigate = useNavigate();
    const { id } = useParams();

    const saveProduct = async (e) => {
        e.preventDefault();
        await axios.post('http"//localhost/products',{
        title: title,
        price: price
        });
        navigate('/');
    }

    useEffect(() => {
        getProductById();
    },[]);

    const getProductById = async () => {
        const response = await axios.get(`http://localhost:8080/products/${id}`);
        setTitle(response.data.title);
        setPrice(response.data.price);
    }

  return (
    <div>
      <form onSubmit={ saveProduct }>
        <div className="field">
          <label className="label">Title</label>
          <input
            type="text"
            className="input"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title"
            required
          />
        </div>
        <div className="field">
          <label className="label">Price</label>
          <input
            type="text"
            className="input"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder="Price"
            required
          />
        </div>
        <div className="field">
          <button
            type="button"
            className="button is-danger"
            onClick={() => navigate("/")}
          >
            Back{" "}
          </button>
          <button className="button is-primary" style={{ marginLeft: "20px" }}>
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditProduct;
