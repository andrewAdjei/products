import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProduct } from './ProductSlice';
import { nanoid } from "@reduxjs/toolkit";
import { useNavigate } from 'react-router-dom';

const AddProduct = () => {

    const navigate = useNavigate();

    const [name, setName ] = useState('');
    const [ description, setDescription] = useState('');
    const [ canExpire, setCanExpire] = useState(false);
    const [ expiryDate, setExpiryDate] = useState('');
    const [ category, setCategory] = useState('');
    const [ price, setPrice] = useState('');
    const [ isOnSpecial, setIsOnSpecial] = useState(false);

    const onNameChange = e => setName(e.target.value)
    const onDescriptionChange = e => setDescription(e.target.value)
    const onCanExpire = e => setCanExpire(e.target.value)
    const onExpiryDateChange = e => setExpiryDate(e.target.value)
    const onCategoryChange = e => setCategory(e.target.value)
    const onPriceChange = e => setPrice(e.target.value)
    const isOnSpecialChange = e => setIsOnSpecial(e.target.value)

    const dispatch = useDispatch();

    const handleSubmit = (event) => {
       event.preventDefault();
       dispatch(addProduct({id: nanoid(), name,description, canExpire,expiryDate,category,price,isOnSpecial}));
        navigate('/');
    }

    const categoryOptions = ['Vegetables', 'Meat', 'Furniture', 'Electronics', 'Clothing'];

    return (
        <div className='container'>
            <h3>Add New Product</h3>
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                onChange={onNameChange}
                />
            </div>

            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Description</label>
                <input type="text" className="form-control" id="exampleInputPassword1"
                onChange={onDescriptionChange}
                />
            </div>

            <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1" onChange={onCanExpire }
                checked={canExpire}
                />
                    <label className="form-check-label" htmlFor="exampleCheck1">Can Expire?</label>
            </div>

            {canExpire && (
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">ExpiryDate</label>
                    <input type="date" className="form-control" id="exampleInputPassword1"
                           onChange={onExpiryDateChange }
                    />
                </div>
                )
            }

            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Category</label>
                <select className="form-select" aria-label="Default select example"
                onChange={onCategoryChange}
                        value={category}
                >
                    <option value="" disabled>Select category</option>
                    {categoryOptions.map((option) => (
                        <option key={option} value={option}>{option}</option>
                    ))}
                </select>
            </div>

            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Price</label>
                <input type="text" className="form-control" id="exampleInputPassword1"
                onChange={onPriceChange}
                />
            </div>

            <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1" onChange={isOnSpecialChange}
                       checked={isOnSpecial}
                />
                <label className="form-check-label" htmlFor="exampleCheck1">Is On Special?</label>
            </div>

            <button type="submit" className="btn btn-primary">Save Product</button>
        </form>
        </div>
    );
};

export default AddProduct;


