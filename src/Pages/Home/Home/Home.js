import React from 'react';
import AddItem from '../../AddItem/AddItem';
import Footer from '../../Shared/Footer/Footer';
import Banner from '../Banner/Banner';
import Items from '../Items/Items';
import Preorders from '../Preorders/Preorders';
import Upcoming from '../Upcoming/Upcoming';
import './Home.css';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Items></Items>
            <Upcoming></Upcoming>
            <Preorders></Preorders>
            <Footer></Footer>
        </div>
    );
};

export default Home;