import React from 'react';

const Preorder = ({ item }) => {
    const { _id, name, price, description, img, quantity, supplier, language, author, age, binding } = item;
    return (
        <div className='col-sm-12 col-md-6 col-lg-4 item'>
            <div className="shadow-lg p-3 mb-5 bg-body rounded-3" >
                <img width="300" height="300" src={img} className="card-img-top course-image" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text"><small>{description}</small></p>
                    <h5>Author: {author}</h5>
                    <h5>Price: ${price}</h5>
                    <h5>Supplier: {supplier}</h5>
                </div>
            </div>
        </div>
    );
};

export default Preorder;