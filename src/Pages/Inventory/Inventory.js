import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import AddItem from '../AddItem/AddItem';

const Inventory = () => {
    const { item_Id } = useParams();
    const [item, setItem] = useState({});
    const [quantity, setQuantity] = useState({})
    let i = item.quantity;
    function handleReduce() {
        document.getElementById('qty').value = --i;

    }
    useEffect(() => {
        const url = `http://localhost:5000/item/${item_Id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setItem(data))
    }, [])

    return (
        <div className='container mt-5'>
            <div className='d-flex'>
                <div><img width="300" height="250" src={item.img} className="card-img-top course-image" alt="..." /></div>
                <div className="shadow-lg p-3 mb-5 bg-body rounded-3" >
                    <div className="card-body">
                        <h5 className="card-title">{item.name}</h5>
                        <p className="card-text"><small>{item.description}</small></p>
                        <h5>Price: ${item.price}</h5>
                        <div className='d-flex'>
                            <h5>Quantity:</h5>
                            <input className='ms-2' id='qty' type="text" value={item.quantity} name='Quantity' /></div>

                        <h5>Supplier: {item.supplier}</h5>

                    </div>
                    <button className='btn btn-primary' onClick={handleReduce}>Delivered</button>
                </div>
            </div>

            <div>
                <AddItem></AddItem>
            </div>
        </div>
    );
};

export default Inventory;