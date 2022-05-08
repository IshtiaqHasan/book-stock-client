import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import AddItem from '../AddItem/AddItem';

const Inventory = () => {
    const { item_Id } = useParams();
    const [item, setItem] = useState({});
    const [reload, setReload] = useState({});

    useEffect(() => {
        const url = `https://limitless-castle-30383.herokuapp.com/item/${item_Id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setItem(data))
    }, []);

    const handleReduce = event => {
        event.preventDefault();
        let newQuantity = parseInt(--item.quantity);
        const updateQuantity = { quantity: newQuantity };

        setItem(updateQuantity)

        const url = `https://limitless-castle-30383.herokuapp.com/item/${item_Id}`
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateQuantity)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
    }

    const addQuantity = event => {
        event.preventDefault();
        let newQuantity = parseInt(++item.quantity);
        let updateQuantity = { quantity: newQuantity };
        setItem(updateQuantity);
        const url = `https://limitless-castle-30383.herokuapp.com/item/${item_Id}`
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateQuantity)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })

    }


    return (
        <div className='container mt-2'>
            <h1 className='text-center text-primary mb-3'>Manage Inventory</h1>
            <div className='d-flex'>
                <img src={item.img} width="300" height="200" alt="" />
                <div className="shadow-lg p-3 mb-5 bg-body rounded-3" >
                    <div className="card-body">
                        <form >
                            Name:<input className='ms-2 border-0' id='' type="text" value={item.name} name='itemName' />
                            <br />
                            Price: $<input className='ms-2 border-0' id='' value={item.price} name='itemDescription' />
                            <br />
                            Publisher:<input className='ms-2 border-0' id='' type="text" value={item.supplier} name='itemSupplier' />
                            <h5>Quantity:</h5>

                            <div className='d-flex'>
                                <input className='ms-2 ' id='qty' type="text" value={item.quantity} name='itemQuantity' /> <button className='ms-2' onClick={handleReduce}>Delivered</button>
                                <button className='ms-2' onClick={addQuantity} >Add Quantity</button>
                            </div>


                        </form>



                    </div>

                </div>
            </div>

            <div>
                <AddItem></AddItem>
            </div>
        </div>
    );
};

export default Inventory;