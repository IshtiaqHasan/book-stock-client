import React from 'react';
import useItems from '../../Hook/useItems';
import Preorder from '../Preorder/Preorder';

const Preorders = () => {
    const [Items, setItems] = useItems([]);
    return (
        <div id='preorders' className='container'>
            <h1 className='text-primary text-center mt-3 mb-3'>Pre-Order</h1>
            <div className='row'>
                {
                    Items.slice(9, 12).map(item => <Preorder
                        key={item._id}
                        item={item}
                    ></Preorder>)
                }
            </div>

        </div>
    );
};

export default Preorders;