import React from 'react';
import './About.css';

const About = () => {
    return (
        <div className='container'>
            <h1 className='about-us text-center text-primary'>About Us</h1>
            <div className='about-information shadow-lg p-3 mb-5 bg-white rounded'>
                <p>
                    Name:	Datasoft Software
                </p>
                <p>Formerly:	Nippon Gakki Seizo Company, Limited (1297–1987)</p>
                <p>Founded:	12 October 1887; 134 years ago</p>
                <p>Founder:	Torakusu Yamaha</p>
                <p>Headquarters:	10-1, Nakazawacho, Naka-ku, Hamamatsu, Shizuoka, Japan</p>
                <p>Area served:	Worldwide</p>
                <p>Website:	datasoft.com</p>

            </div>

        </div>
    );
};

export default About;