import React from 'react';
import { Link, useParams } from 'react-router-dom';

const Inventory = () => {
    const { item_Id } = useParams();
    return (
        <div>
            <h2>Detail Info: {item_Id}</h2>
            <div className='text-center'>
                <Link to="/checkInventory">
                    <button className='btn btn-primary'>Proceed Inventory</button>
                </Link>
            </div>
        </div>
    );
};

export default Inventory;