import React from 'react';
import { getChangeClass, replaceUnderscore } from './../helpers';
import PropTypes from 'prop-types';

const PairInfoHeader = ({ selectedPair, price, change }) => {

    const dir = getChangeClass(change);

    return (
        <div className="app-content-details-info-header">
            <p className="app-content-details-info-header__title">
                {replaceUnderscore(selectedPair)}
            </p>
            <p className={`app-content-details-info-header__value${dir}`}>{price}</p>
        </div>
    );
};

PairInfoHeader.propTypes = {
    change: PropTypes.number.isRequired,
    price: PropTypes.string.isRequired,
    selectedPair: PropTypes.string.isRequired
};

export default PairInfoHeader;
PairInfoHeader.displayName = 'PairInfoHeader';