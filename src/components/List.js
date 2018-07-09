import React from 'react';
import SinglePair from './SinglePair';
import { toFiveDecimals, getPriceChange } from './../helpers';
import PropTypes from 'prop-types';

const List = ({ ticker }) => {

    const list = ticker.map((pair, idx) => {

        const a = pair.current_price || 0;
        const b = pair.saved_price || a;

        const change = getPriceChange(a, b) || 0;
        const price = toFiveDecimals(a) || 0;
        
        return (
            <SinglePair
                pair={pair.title}
                price={price}
                change={change}
                key={idx}
            />
        );
    });

    return (
        <div className="app-content-currency">
            <ul className="app-content-currency-list">
                {
                    list
                }
            </ul>
        </div>
    );
};

List.propTypes = {
    ticker: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string.isRequired,
        current_price: PropTypes.string,
        saved_price: PropTypes.string
    }))
    
};

export default List;
List.displayName = 'List';