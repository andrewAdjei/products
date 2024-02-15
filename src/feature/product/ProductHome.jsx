import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {deleteProduct, selectAllProducts} from "./ProductSlice";
import { Link } from "react-router-dom";
import { Button, Table } from 'react-bootstrap';


function ProductHome() {

    const products = useSelector(selectAllProducts);
    const dispatch = useDispatch();

    const [selectedCategory, setSelectedCategory] = useState('All');

    const filteredProducts = selectedCategory === 'All'
        ? products
        : products.filter(product => product.category === selectedCategory);


    const handleDelete = (id) => {
        dispatch(deleteProduct({id}))
    }

    return (
        <div className='container'>
            <h2> Products App</h2>
            <Link to="/create" className='btn btn-success my-3'> Create Product</Link>

            <div className="mb-3">
                <label className="mr-2">Filter by Category:</label>
                <select
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    value={selectedCategory}
                >
                    <option value="All">All</option>
                    <option value="Vegetables">Vegetables</option>
                    <option value="Meat">Meat</option>
                    <option value="Furniture">Furniture</option>
                    <option value="Electronics">Furniture</option>
                    <option value="Clothing">Furniture</option>
                </select>
            </div>

            <Table striped bordered hover>
                <thead>
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Description</th>
                    <th scope="col">CanExpire</th>
                    <th scope="col">ExpiryDate</th>
                    <th scope="col">Category</th>
                    <th scope="col">Price</th>
                    <th scope="col">On Special</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {filteredProducts.map((product, index) => (
                    <tr key={index}>
                        <td>{product.name}</td>
                        <td>{product.description}</td>
                        <td>{product.canExpire}</td>
                        <td>{product.expiryDate}</td>
                        <td>{product.category}</td>
                        <td>{product.price}</td>
                        <td>{product.isOnSpecial ? 'Yes' : 'No'}</td>
                        <td>
                            <Link to={`/update/${product.id}`} className='btn btn-sm btn-primary'>Update</Link>
                            <button onClick={() => handleDelete(product.id)} className='btn btn-sm btn-danger ms-2'>Delete</button>
                        </td>

                    </tr>
                ))}
                </tbody>
            </Table>
        </div>
    )
}

export default ProductHome
