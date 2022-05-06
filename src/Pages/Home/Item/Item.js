import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Items.css'


const Item = ({ item }) => {
    const { _id, name, price, description, img, quantity, supplier, language, author, age, binding } = item;
    const navigate = useNavigate();
    const navigateToInventory = _id => {
        navigate(`/item/${_id}`);
    }
    return (
        <div className='col-sm-12 col-md-6 col-lg-4 item'>
            <div className="shadow-lg p-3 mb-5 bg-body rounded-3 position-relative " >
                <img width="300" height="300" src={img} className="card-img-top course-image" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text"><small>{description}</small></p>
                    <h5>Price: ${price}</h5>
                    <h5>Available Quantity: {quantity}</h5>
                    <h5>Supplier: {supplier}</h5>
                    {<button onClick={() => navigateToInventory(_id)} className="btn btn-primary update-bttn">Stock Update</button>}
                </div>
            </div>
        </div>
    );
};

export default Item;