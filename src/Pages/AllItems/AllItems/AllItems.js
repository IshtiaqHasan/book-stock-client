import React from 'react';
import useItems from '../../Hook/useItems';
import AllItem from '../AllItem/AllItem';

const AllItems = () => {
    const [items, setitems] = useItems([]);
    return (

        <div id='items' className='container'>
            <h1 className='text-primary text-center mt-5 mb-3'>Islamic Books In Stock</h1>
            <div className='row'>
                {
                    items.map(item => <AllItem
                        key={item._id}
                        item={item}
                    ></AllItem>)
                }
            </div>

        </div>
    );
};

export default AllItems;