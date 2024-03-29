import React from 'react';

const Category = ({category}) => {
    const {id, logo, category_name, availability} = category;
    return (
        <div className='mx-12 flex flex-col justify-center items-center space-y-3 bg-violet-50 p-6'>
            {/* <h2> {id} </h2> */}
            <img className='w-16' src={logo} alt="" />
            <p className='font-bold'> {category_name} </p>
            <p> {availability} </p>
        </div>
    );
};

export default Category;