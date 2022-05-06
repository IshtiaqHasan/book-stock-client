import React from 'react';
import { useParams } from 'react-router-dom';

const Inventory = () => {
    const { item_Id } = useParams();
    return (
        <div>
            <h2>Detail Info: {item_Id}</h2>
        </div>
    );
};

export default Inventory;