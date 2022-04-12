import React from 'react';

const Footer = () => {
    const date = new Date()
    return (
        <div className='bg-blue-900 py-11 text-center text-white'>
            <p className='text-lg font-semibold'>Copyright &copy; { date.getFullYear() }. Made by Riyad Hossain </p>
        </div>
    );
};

export default Footer;