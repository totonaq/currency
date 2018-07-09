import React from 'react';
import bitcoin from './../icons/bitcoin.svg';
import { Link } from 'react-router-dom';

const NotFound = props => {
    return (
        <div className='not-found'>
            <div className='not-found__404'>4
				<img src={bitcoin} alt='0' />
                4</div>
            <div className='not-found-body'>
                <p className='not-found-body__header'>Oops! Page not found</p>
                <p className='not-found-body__descr'>Sorry, but the page you are looking for is not found.
				Please make sure you have typed the current URL.</p>
            </div>
            <Link to='/' className='not-found__back'>Back home</Link>
        </div>
    );
};

export default NotFound;
NotFound.displayName = 'NotFound';