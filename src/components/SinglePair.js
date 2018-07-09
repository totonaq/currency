import React from 'react';
import { getChangeClass, replaceUnderscore } from './../helpers';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

const SinglePair = ({ pair, price, change, history }) => {

    const dir = getChangeClass(change);

    return (
        <li
            className={`app-content-currency-list-item${dir}`}
            onClick={() => history.push(`/${pair}`)}
        >
            <p className={`app-content-currency-list-item__title${dir}`}>{replaceUnderscore(pair)}</p>
            <p className={`app-content-currency-list-item__value${dir}`}>
                <span>{price}</span>
            </p>
        </li>
    );
};

SinglePair.propTypes = {
    change: PropTypes.number.isRequired,
    pair: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
};

export default withRouter(SinglePair);
SinglePair.displayName = 'SinglePair';