import React from 'react';
import useItems from '../../Hook/useItems';
import Upcomings from '../Upcomings/Upcomings';
import './Upcoming.css';


const Upcoming = () => {
    const [Items, setItems] = useItems([]);
    return (
        <div id='upcoming' className='container'>
            <h1 className='text-primary text-center mt-3 mb-3'>Upcoming Books</h1>
            <div className='row'>
                {
                    Items.slice(6, 9).map(item => <Upcomings
                        key={item._id}
                        item={item}
                    ></Upcomings>)
                }
            </div>

        </div>
    );
};

export default Upcoming;