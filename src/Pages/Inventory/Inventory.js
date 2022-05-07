import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const Inventory = () => {
    const { item_Id } = useParams();
    const [item, setItem] = useState({});
    useEffect(() => {
        const url = `http://localhost:5000/item/${item_Id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setItem(data))
    }, [])
    return (
        <div>
            <h2>Detail Info: {item.name}</h2>
            <div className='text-center'>
                <Link to="/checkInventory">
                    <button className='btn btn-primary'>Proceed Inventory</button>
                </Link>
            </div>
        </div>
    );
};

export default Inventory;