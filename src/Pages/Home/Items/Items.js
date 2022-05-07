import React, { useEffect, useState } from 'react';
import auth from '../../../firebase.init';
import useItems from '../../Hook/useItems';
import { useAuthState } from 'react-firebase-hooks/auth';
import Item from '../Item/Item';
import './Items.css'
import Loading from '../../Shared/Loading/Loading';

const Items = () => {
    const [Items, setItems] = useItems([]);
    const [user, loading] = useAuthState(auth);

    if (loading) {
        return <Loading></Loading>
    }
    return (
        <div id='items' className='container'>
            <h1 className='text-primary text-center mt-5 mb-3'>Islamic Books In Stock</h1>
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