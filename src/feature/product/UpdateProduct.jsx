import React from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import {selectAllProducts} from "./ProductSlice";
import { useState } from 'react';
import { editProduct } from "./ProductSlice";
import { useDispatch } from 'react-redux';


const UpdateProduct = () => {

    const {id} = useParams();
    const products = useSelector(selectAllProducts);
    const productId = products.filter(e => e.id == id);
    const {name,description,canExpire,expiryDate,category,price,isOnSpecial} = productId[0];

    const [nameT, setName ] = useState(name);
    const [ descriptionT, setDescription] = useState(description);
    const [ canExpireT, setCanExpire] = useState(canExpire);
    const [ expiryDateT, setExpiryDate] = useState(expiryDate);
    const [ categoryT, setCategory] = useState(category);
    const [ priceT, setPrice] = useState(price);
    const [ isOnSpecialT, setIsOnSpecial] = useState(isOnSpecial);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleUpdate = (e) => {
      e.preventDefault();
      dispatch(editProduct({
          id: id,
          name: nameT,
          description: descriptionT,
          canExpire: canExpireT,
          expiryDate: expiryDateT,
          category: categoryT,
          price: priceT,
          isOnSpecial: isOnSpecialT,
      }))

        navigate("/")
    }

    return (
        <div className='container'>
            <h3>Update Product</h3>
            <form onSubmit={handleUpdate}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                           value={nameT}
                           onChange={e => setName(e.target.value)}
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Description</label>
                    <input type="text" className="form-control" id="exampleInputPassword1"
                           value={descriptionT}
                           onChange={e => setDescription(e.target.value)}
                    />
                </div>

                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" value={canExpireT}
                           onChange={e => setCanExpire(e.target.value)}
                    />
                    <label className="form-check-label" htmlFor="exampleCheck1">Can Expire?</label>
                </div>

                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">ExpiryDate</label>
                    <input type="date" className="form-control" id="exampleInputPassword1"
                           value={expiryDateT}
                           onChange={e => setExpiryDate(e.target.value)}
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Category</label>
                    <input type="text" className="form-control" id="exampleInputPassword1"
                           value={categoryT}
                           onChange={e => setCategory(e.target.value)}
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Price</label>
                    <input type="text" className="form-control" id="exampleInputPassword1"
                           value={priceT}
                           onChange={e => setPrice(e.target.value)}
                    />
                </div>

                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" value={isOnSpecialT}
                           onChange={e => setIsOnSpecial(e.target.value)}
                    />
                    <label className="form-check-label" htmlFor="exampleCheck1">Is On Special?</label>
                </div>

                <button type="submit" className="btn btn-primary">Update</button>
            </form>
        </div>
    );
};

export default UpdateProduct;
