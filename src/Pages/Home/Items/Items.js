import React, { useEffect, useState } from 'react';
import useItems from '../../Hook/useItems';
import Item from '../Item/Item';
import './Items.css'

const Items = () => {
    const [Items, setItems] = useItems([]);
    return (
        <div id='items' className='container'>
            <h1 className='text-primary text-center mt-5 mb-3'>Books In Stock</h1>
            <div className='row'>
                {
                    Items.slice(0, 6).map(item => <Item
                        key={item._id}
                        item={item}
                    ></Item>)
                }
            </div>

        </div>
    );
};

export default Items;