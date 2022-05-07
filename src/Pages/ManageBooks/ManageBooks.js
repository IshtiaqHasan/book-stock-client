import React from 'react';
import useItems from '../Hook/useItems';

const ManageBooks = () => {
    const [items, setItems] = useItems();
    const handleDelete = id => {
        const proceed = window.confirm('Are you sure?');
        if (proceed) {
            const url = `http://localhost:5000/item/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remaining = items.filter(item => item._id != id);
                    setItems(remaining);
                })
        }
    }
    return (
        <div className='w-50 mx-auto'>
            <h2>Manage Books</h2>
            {
                items.map(item => <div key={item._id}>
                    <h5>{item.name} <button onClick={() => handleDelete(item._id)}>X</button></h5>

                </div>)
            }

        </div>
    );
};

export default ManageBooks;